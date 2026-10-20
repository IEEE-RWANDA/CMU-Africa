import React from 'react';
import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { useTheme } from '../hooks/useTheme';
import { FOCUS_AREAS } from '../data';

const iconProps = { className: 'w-8 h-8', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' };

const ICONS = {
    entrepreneurship: (
        <svg {...iconProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
    ),
    outreach: (
        <svg {...iconProps}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
    ),
    leadership: (
        <svg {...iconProps}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
    ),
    innovation: (
        <svg {...iconProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
    technical: (
        <svg {...iconProps}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
    ),
    community: (
        <svg {...iconProps}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    ),
};

const Collections = ({ isDark }) => {
    const { theme } = useTheme();

    return (
        <section id="topics" className={`py-24 px-4 md:px-6 ${isDark ? 'bg-[#02142f]' : 'bg-[#e6eef8]'}`}>
            <div className="w-full max-w-6xl mx-auto">
                <div className="mb-8">
                    <SectionHeading title="Our Pillars" subtitle="A launchpad for Africa's Future Leaders" />
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {FOCUS_AREAS.map((t, idx) => (
                        <FadeIn key={t.id} delay={idx * 80}>
                            <div className={`topic-card h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 ${isDark ? 'bg-[#06285a]/60 border border-white/10' : 'bg-white/70 border border-gray-200'}`}>
                                <div className={`topic-icon mb-4 ${isDark ? 'text-gold' : 'text-brand'}`}>{ICONS[t.icon]}</div>
                                <div className={`font-semibold text-lg mb-2 ${theme.text}`}>{t.title}</div>
                                <p className={`${theme.textMuted} text-sm leading-6`}>{t.text}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
