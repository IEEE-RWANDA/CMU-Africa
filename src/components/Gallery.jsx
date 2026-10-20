import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { Icons } from './Icons';
import { GALLERY_IMAGES } from '../data';

// A fixed-height mosaic. Every tile is a slideshow that cross-fades through photos of
// the same orientation (portrait tiles show portrait photos, landscape tiles landscape
// photos), so all the photos appear without making the page long.
//
// Mobile / tablet: 2 columns x 6 rows. Desktop (lg): 4 columns x 3 rows.
const SLOTS = [
    { orientation: 'portrait', interval: 5600, place: 'col-start-1 row-start-1 row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2' },
    { orientation: 'landscape', interval: 6400, place: 'col-start-1 col-span-2 row-start-3 row-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2' },
    { orientation: 'portrait', interval: 7000, place: 'col-start-1 row-start-5 row-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2' },
    { orientation: 'landscape', interval: 5200, place: 'col-start-2 row-start-1 lg:col-start-1 lg:row-start-3' },
    { orientation: 'landscape', interval: 6000, place: 'col-start-2 row-start-2 lg:col-start-2 lg:row-start-3' },
    { orientation: 'landscape', interval: 7400, place: 'col-start-2 row-start-5 lg:col-start-3 lg:row-start-3' },
    { orientation: 'landscape', interval: 6800, place: 'col-start-2 row-start-6 lg:col-start-4 lg:row-start-3' },
];

// Deal the photos out to the slots of the matching orientation, round-robin.
const buildPools = () => {
    const pools = SLOTS.map(() => []);
    const counters = { portrait: 0, landscape: 0 };

    GALLERY_IMAGES.forEach((image, index) => {
        const orientation = image.h > image.w ? 'portrait' : 'landscape';
        const slotIndexes = SLOTS.map((slot, i) => (slot.orientation === orientation ? i : -1)).filter((i) => i >= 0);
        const target = slotIndexes[counters[orientation] % slotIndexes.length];
        counters[orientation] += 1;
        pools[target].push({ ...image, index });
    });

    return pools;
};

const SlideTile = ({ photos, interval, place, paused, onOpen }) => {
    const [state, setState] = useState({ current: 0, previous: null });
    const [hovered, setHovered] = useState(false);
    const count = photos.length;
    const stopped = paused || hovered;

    // Advance the slideshow; different intervals per tile keep the tiles from changing in sync
    useEffect(() => {
        if (count < 2 || stopped) return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const timer = setInterval(() => {
            if (document.hidden) return;
            setState((s) => ({ current: (s.current + 1) % count, previous: s.current }));
        }, interval);
        return () => clearInterval(timer);
    }, [count, interval, stopped]);

    // Warm the cache with the next photo so the fade never starts on a blank frame
    useEffect(() => {
        if (count < 2) return;
        const next = new Image();
        next.src = photos[(state.current + 1) % count].src;
    }, [state.current, count, photos]);

    const current = photos[state.current];
    const previous = state.previous !== null ? photos[state.previous] : null;

    return (
        <div
            className={`relative overflow-hidden rounded-2xl ${place}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <button
                type="button"
                onClick={() => onOpen(current.index)}
                aria-label={`Open photo: ${current.alt}`}
                className="group absolute inset-0 block h-full w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
            >
                {/* previous photo stays underneath while the new one fades in */}
                {previous && (
                    <img
                        key={previous.index}
                        src={previous.src}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )}
                <img
                    key={current.index}
                    src={current.src}
                    alt={current.alt}
                    decoding="async"
                    loading={previous ? undefined : 'lazy'}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${previous ? 'slide-fade' : ''}`}
                />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 p-2 text-brand-dark"><Icons.Maximize2 size={16} /></span>
                </span>
            </button>
        </div>
    );
};

const Gallery = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const isOpen = openIndex !== null;
    const total = GALLERY_IMAGES.length;
    const pools = useMemo(buildPools, []);

    const close = useCallback(() => setOpenIndex(null), []);
    const step = useCallback((dir) => setOpenIndex((i) => (i === null ? i : (i + dir + total) % total)), [total]);

    // Keyboard controls + lock page scroll while the lightbox is open
    useEffect(() => {
        if (!isOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, close, step]);

    const current = isOpen ? GALLERY_IMAGES[openIndex] : null;

    return (
        <section id="gallery" className="py-24 px-6 md:px-12 container mx-auto">
            <SectionHeading title="Gallery" subtitle="Previous activities" />

            <FadeIn>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[110px] md:auto-rows-[130px] lg:auto-rows-[190px]">
                    {SLOTS.map((slot, i) => (
                        <SlideTile
                            key={i}
                            photos={pools[i]}
                            interval={slot.interval}
                            place={slot.place}
                            paused={isOpen}
                            onOpen={setOpenIndex}
                        />
                    ))}
                </div>
            </FadeIn>

            {current && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo viewer"
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-10"
                    onClick={close}
                >
                    <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-brand md:right-8 md:top-8">
                        <Icons.X size={22} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(-1); }}
                        aria-label="Previous photo"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brand md:left-8"
                    >
                        <Icons.ChevronLeft size={24} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(1); }}
                        aria-label="Next photo"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brand md:right-8"
                    >
                        <Icons.ChevronRight size={24} />
                    </button>

                    <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img src={current.src} alt={current.alt} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
                        <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
                            {current.alt}
                            <span className="ml-3 text-white/50">{openIndex + 1} / {total}</span>
                        </figcaption>
                    </figure>
                </div>
            )}
        </section>
    );
};

export default Gallery;
