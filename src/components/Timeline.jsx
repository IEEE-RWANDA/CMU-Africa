import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { Icons } from './Icons';
import { TIMELINE_EVENTS, TIMELINE_FILTERS } from '../data';

const TYPE_STYLES = {
    ieee: { label: 'IEEE Club', className: 'bg-brand/10 text-brand' },
    collab: { label: 'Collab', className: 'bg-gold/15 text-[#9a7410]' },
};

const parse = (iso) => new Date(`${iso}T00:00:00`);

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

    const events = TIMELINE_EVENTS
        .filter((event) => filter === 'all' || event.type === filter)
        .sort((a, b) => a.date.localeCompare(b.date));
    const groups = groupByMonth(events);

    return (
        <section id="timeline" className="py-24 px-4 md:px-8 lg:px-12 transition-colors duration-500">
            <div className="w-full max-w-4xl mx-auto">
                <SectionHeading title="Timeline" subtitle="Upcoming SB Activities" />

                <div className="flex flex-nowrap justify-center gap-4 md:gap-8 mb-12 overflow-x-auto" role="tablist" aria-label="Filter activities">
                    {TIMELINE_FILTERS.map((item) => (
                        <button
                            key={item.key}
                            role="tab"
                            aria-selected={filter === item.key}
                            onClick={() => setFilter(item.key)}
                            className={`text-sm uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 border whitespace-nowrap ${filter === item.key ? 'border-brand bg-brand/10 text-brand' : `border-transparent ${theme.textMuted} hover:border-brand hover:text-brand`}`}
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
                                <div className="border-l-2 border-brand/25 pl-6 md:pl-10 pb-6">
                                    <span className={`text-xs font-bold uppercase tracking-[0.35em] ${theme.accent}`}>{group.label}</span>
                                </div>
                            </div>

                            <ul>
                                {group.events.map((event, idx) => {
                                    const date = parse(event.date);
                                    const type = TYPE_STYLES[event.type];
                                    return (
                                        <li key={event.id} className="flex gap-4 md:gap-8">
                                            <div className="w-14 md:w-24 shrink-0 pt-4 text-right">
                                                <div className="font-display text-4xl md:text-5xl leading-none text-brand">{date.getDate()}</div>
                                                <div className={`mt-1 text-xs uppercase tracking-widest ${theme.textMuted}`}>
                                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                </div>
                                            </div>

                                            <div className="relative flex-1 min-w-0 border-l-2 border-brand/25 pl-6 md:pl-10 pb-8">
                                                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-brand ring-4 ring-brand/20" />
                                                <FadeIn delay={idx * 80}>
                                                    <div className={`rounded-2xl border ${theme.border} ${theme.cardBg} p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_rgba(140,13,35,0.10)]`}>
                                                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${type.className}`}>{type.label}</span>
                                                        <h3 className={`mt-3 text-lg md:text-xl font-bold leading-snug ${theme.text}`}>{event.title}</h3>
                                                        {event.subtitle && <p className={`mt-1 text-sm ${theme.textMuted}`}>{event.subtitle}</p>}
                                                        <div className={`mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm ${theme.textMuted}`}>
                                                            <span className="inline-flex items-center gap-2"><Icons.Clock size={15} />{event.time}</span>
                                                            <span className="inline-flex items-center gap-2"><Icons.MapPin size={15} />{event.location}</span>
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
