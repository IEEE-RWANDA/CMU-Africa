import React, { useState, useEffect, useCallback } from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { Icons } from './Icons';
import { GALLERY_IMAGES } from '../data';

const Gallery = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const isOpen = openIndex !== null;
    const total = GALLERY_IMAGES.length;

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
            <SectionHeading title="Moments" subtitle="Previous activities" />

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
                {GALLERY_IMAGES.map((image, idx) => (
                    <div key={image.src} className="mb-4 md:mb-6 break-inside-avoid">
                        <FadeIn delay={(idx % 3) * 100}>
                            <button
                                type="button"
                                onClick={() => setOpenIndex(idx)}
                                aria-label={`Open photo: ${image.alt}`}
                                className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.w}
                                    height={image.h}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="rounded-full bg-white/90 p-2 text-brand-dark"><Icons.Maximize2 size={16} /></span>
                                </span>
                            </button>
                        </FadeIn>
                    </div>
                ))}
            </div>

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
