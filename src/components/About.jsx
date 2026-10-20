import React from 'react';
import FadeIn from './FadeIn';
import { TEAM_MEMBERS } from '../data';

const About = ({ theme }) => {
    return (
        <section id="leadership" className={`py-24 ${theme.bg}`}>
            <div className="container mx-auto px-6 md:px-24">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.35em] text-gold mb-3">Meet the leadership</p>
                    <h2 className={`text-4xl md:text-5xl font-display font-black ${theme.text}`}>Student Branch Leadership</h2>
                    <p className={`mt-4 max-w-2xl mx-auto ${theme.textMuted}`}>
                        Students leading students: the team that organizes our events and grows the next generation of Africa&rsquo;s tech leaders.
                    </p>
                </div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <FadeIn key={member.id} delay={idx * 100}>
                            <div className={`rounded-[32px] overflow-hidden border ${theme.border} ${theme.cardBg} shadow-[0_30px_60px_rgba(140,13,35,0.08)]`}>
                                <div className="relative overflow-hidden">
                                    <img src={member.image} alt={member.name} loading="lazy" className="w-full aspect-[4/5] object-cover grayscale transition duration-500 hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#14090b]/90 via-transparent to-transparent" />
                                </div>
                                <div className="p-8">
                                    <h3 className={`text-2xl font-display font-black ${theme.text}`}>{member.name}</h3>
                                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gold">{member.role}</p>
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm ${theme.accent} transition hover:bg-brand/10`}>
                                            LinkedIn
                                        </a>
                                        <a href={`mailto:${member.email}`} className={`inline-flex items-center gap-2 rounded-full border ${theme.border} px-4 py-2 text-sm ${theme.text} transition hover:bg-brand/10`}>
                                            Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
