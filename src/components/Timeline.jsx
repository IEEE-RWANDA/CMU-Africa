import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { Icons } from './Icons';
import { TIMELINE_EVENTS, TIMELINE_FILTERS, TIMELINE_CATEGORIES } from '../data';

const parse = (iso) => new Date(`${iso}T00:00:00`);

const shortDate = (iso) => parse(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const groupByMonth = (events) => {
    const groups = [];
    events.forEach((event) => {
        const label = parse(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const last = groups[groups.length - 1];
        if (last && last.label === label) last.events.push(event);
        else groups.push({ label, events: [event] });
    });
    return groups;
};

const Timeline = ({ theme }) => {
    const [filter, setFilter] = useState('all');

    const categoryStyles = {
        technical: `bg-brand/10 ${theme.accent}`,
        nontechnical: `bg-brand/10 ${theme.accent}`,
        professional: `bg-gold/15 ${theme.goldText}`,
    };

    const events = TIMELINE_EVENTS.filter((event) => filter === 'all' || event.term === filter);
    const groups = groupByMonth(events);

    return (
        <section id="timeline" className="py-24 px-4 md:px-8 lg:px-12 transition-colors duration-500">
            <div className="w-full max-w-4xl mx-auto">
                <SectionHeading title="Timeline" subtitle="Stay in the loop of all SB activity" />

                <div className="flex flex-nowrap justify-center gap-4 md:gap-8 mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Filter activities by term">
                    {TIMELINE_FILTERS.map((item) => (
                        <button
                            key={item.key}
                            role="tab"
                            aria-selected={filter === item.key}
                            onClick={() => setFilter(item.key)}
                            className={`text-sm uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 border whitespace-nowrap ${filter === item.key ? theme.tabActive : theme.tabIdle}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div key={filter}>
                    {groups.map((group) => (
                        <div key={group.label}>
                            {/* month label sits on the same rail as the events */}
                            <div className="flex gap-4 md:gap-8">
                                <div className="w-14 md:w-24 shrink-0" />
                                <div className={`border-l-2 ${theme.rail} pl-6 md:pl-10 pb-6`}>
                                    <span className={`text-xs font-bold uppercase tracking-[0.35em] ${theme.accent}`}>{group.label}</span>
                                </div>
                            </div>

                            <ul>
                                {group.events.map((event, idx) => {
                                    const date = parse(event.date);
                                    return (
                                        <li key={event.id} className="flex gap-4 md:gap-8">
                                            <div className="w-14 md:w-24 shrink-0 pt-4 text-right">
                                                <div className={`font-display text-4xl md:text-5xl leading-none ${theme.accent}`}>{date.getDate()}</div>
                                                <div className={`mt-1 text-xs uppercase tracking-widest ${theme.textMuted}`}>
                                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                </div>
                                                {event.endDate && (
                                                    <div className={`mt-1 text-[10px] uppercase tracking-wider leading-tight ${theme.textMuted}`}>
                                                        to {shortDate(event.endDate)}
                                                    </div>
                                                )}
                                            </div>

                                            <div className={`relative flex-1 min-w-0 border-l-2 ${theme.rail} pl-6 md:pl-10 pb-8`}>
                                                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-gold ring-4 ring-gold/25" />
                                                <FadeIn delay={idx * 80}>
                                                    <div className={`rounded-2xl border ${theme.border} ${theme.cardBg} p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_rgba(0,40,85,0.10)]`}>
                                                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${categoryStyles[event.category]}`}>{TIMELINE_CATEGORIES[event.category]}</span>
                                                        <h3 className={`mt-3 text-lg md:text-xl font-bold leading-snug ${theme.text}`}>{event.title}</h3>
                                                        {event.cosponsor && <p className={`mt-1 text-sm ${theme.textMuted}`}>With {event.cosponsor}</p>}
                                                        <div className={`mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm ${theme.textMuted}`}>
                                                            <span className="inline-flex items-center gap-2"><Icons.MapPin size={15} />{event.venue}</span>
                                                        </div>
                                                    </div>
                                                </FadeIn>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
