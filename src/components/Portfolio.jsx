import React, { useState, useEffect, useRef } from 'react';
import { ACTIVITY_TABS, ACTIVITY_ITEMS, ACTIVITY_CATEGORIES } from '../data';
import { onActivityTabSelect } from '../activityTabs';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';

const Portfolio = ({ theme }) => {
    const [activeTab, setActiveTab] = useState('events');
    const sectionRef = useRef(null);

    const items = ACTIVITY_ITEMS.filter((item) => item.tab === activeTab);

    // Open a tab when asked by the navbar (Events / Spotlight links)
    useEffect(() => onActivityTabSelect(setActiveTab), []);

    // Let the navbar scroll-spy know which tab is open
    useEffect(() => {
        if (sectionRef.current) sectionRef.current.dataset.tab = activeTab;
        window.dispatchEvent(new Event('sb-tab-change'));
    }, [activeTab]);

    return (
        <section id="events" ref={sectionRef} className="py-24 px-6 md:px-12 container mx-auto">
            <FadeIn>
                <SectionHeading title="SB Overview" subtitle="Technical · Social · STEM" />

                <div role="tablist" aria-label="Activity categories" className="flex flex-nowrap justify-center gap-4 md:gap-8 mb-12 overflow-x-auto">
                    {ACTIVITY_TABS.map((tab) => (
                        <button
                            key={tab.key}
                            role="tab"
                            aria-selected={activeTab === tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`text-sm uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 border whitespace-nowrap ${activeTab === tab.key ? `border-brand bg-brand/10 ${theme.accent}` : `border-transparent ${theme.textMuted} hover:border-brand ${theme.accentHover}`}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div key={activeTab} className="flex flex-wrap justify-center gap-8">
                    {items.map((item, idx) => (
                        <div key={item.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] flex">
                            <FadeIn delay={idx * 100} className="h-full w-full">
                                <div className="group h-full rounded-[32px] overflow-hidden border border-white/10 bg-[#140d0e] shadow-[0_30px_60px_rgba(140,13,35,0.10)] transition-transform duration-500 hover:-translate-y-1">
                                    <div className="overflow-hidden h-72">
                                        <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="p-8">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/15 text-brand-light text-xs uppercase tracking-[0.35em] font-semibold">{ACTIVITY_CATEGORIES[item.category]}</span>
                                        <h3 className="mt-6 text-2xl font-display font-black text-white">{item.title}</h3>
                                        <p className="mt-4 text-sm leading-7 text-[#a8a2a3]">{item.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    ))}
                </div>

                {activeTab === 'upcoming' && (
                    <p className="mt-12 text-center">
                        <a href="#timeline" className={`text-sm uppercase tracking-[0.25em] ${theme.accent} hover:underline`}>See dates on the timeline &rarr;</a>
                    </p>
                )}
            </FadeIn>
        </section>
    );
};

export default Portfolio;
