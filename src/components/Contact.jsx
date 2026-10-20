import React from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { Icons } from './Icons';
import { SOCIAL_LINKS } from '../data';

const socialIcons = {
    instagram: Icons.Instagram,
    facebook: Icons.Facebook,
    linkedin: Icons.Linkedin,
};

const VOLUNTEER_AREAS = ['Events & Logistics', 'STEM Outreach', 'Technical Workshops', 'Media & Design', 'Partnerships', 'Not sure yet'];

const Contact = ({ theme }) => {
    const fieldClass = `w-full bg-transparent border-b ${theme.border} py-3 focus:outline-none focus:border-brand transition-colors ${theme.text}`;

    return (
        <section id="engage" className="py-24 px-6 md:px-12 container mx-auto">
            <FadeIn>
                <div className={`max-w-5xl mx-auto rounded-[40px] border ${theme.border} ${theme.cardBg} p-8 md:p-12 shadow-[0_40px_80px_rgba(0,40,85,0.12)]`}>
                    <SectionHeading title="Engage" subtitle="Join the movement" />

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                            <p className={`text-lg leading-relaxed ${theme.text}`}>
                                Follow our channels for event updates, and raise your hand to help. Our volunteers lead outreach, run events and grow into the leaders Africa needs.
                            </p>

                            <div className="space-y-3">
                                {SOCIAL_LINKS.map(({ key, label, handle, href }) => {
                                    const Icon = socialIcons[key];
                                    return (
                                        <a
                                            key={key}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`group flex items-center gap-4 rounded-2xl border ${theme.border} p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50`}
                                        >
                                            <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 ${theme.accent} transition-colors group-hover:bg-brand group-hover:text-white`}>
                                                <Icon size={20} />
                                            </span>
                                            <span className="flex-1">
                                                <span className={`block text-sm font-semibold ${theme.text}`}>{label}</span>
                                                <span className={`block text-sm ${theme.textMuted}`}>{handle}</span>
                                            </span>
                                            <Icons.ArrowRight size={18} className={theme.textMuted} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <h3 className={`text-xl font-semibold ${theme.text}`}>Open call for volunteers</h3>
                                <p className={`mt-2 text-sm ${theme.textMuted}`}>Tell us where you&rsquo;d like to help and we&rsquo;ll be in touch.</p>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="vol-name" className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>Name</label>
                                <input id="vol-name" type="text" className={fieldClass} placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="vol-email" className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>Email</label>
                                <input id="vol-email" type="email" className={fieldClass} placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="vol-area" className={`text-xs font-bold uppercase tracking-widest ${theme.textMuted}`}>I&rsquo;d like to help with</label>
                                <select id="vol-area" defaultValue={VOLUNTEER_AREAS[0]} className={`${fieldClass} [&>option]:text-black`}>
                                    {VOLUNTEER_AREAS.map((area) => <option key={area}>{area}</option>)}
                                </select>
                            </div>

                            <button className="w-full py-4 bg-gold text-[#0a1f3d] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3">
                                Volunteer with us <Icons.Send size={16} />
                            </button>

                            <p className={`text-sm ${theme.textMuted}`}>
                                We respect your privacy. We&rsquo;ll only use your details to coordinate volunteering and event updates.
                            </p>
                        </form>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default Contact;
