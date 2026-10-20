import React from 'react';
import { useTheme } from '../hooks/useTheme';
import FadeIn from './FadeIn';
import aboutImage from '../assets/gallery/02-cmu-seal-group.jpg';

const MILESTONES = [
    'Region 8 Computer Society Chapter of the Month',
    'Hosting TechX Rwanda',
    'IMAS pre-workshop',
    '10+ Student Research Publications',
    'Hosted IEEE Region 8 Chair & MTT-S Presidents',
];

const Overview = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className={`py-24 md:px-12 md:mx-12 ${theme.bg}`}>
            <div className="container mx-auto px-6 md:px-0">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    <FadeIn>
                        <div className="space-y-8">
                            <div className={`text-sm uppercase tracking-[0.35em] ${theme.eyebrow}`}>About the Student Branch</div>
                            <h2 className={`text-4xl md:text-5xl font-display font-black ${theme.text}`}>Growing Africa&rsquo;s Tech Leaders, From Kigali</h2>
                            <p className={`max-w-3xl text-lg leading-8 ${theme.textMuted}`}>
                                Carnegie Mellon University Africa (CMU-Africa), a college of Carnegie Mellon University based in Kigali, Rwanda, brings together students and faculty from over 22 nationalities across Africa. It delivers a world-class education tailored to African priorities, with an emphasis on applied research, industry collaboration, and entrepreneurship to develop technology leaders and scalable solutions for the continent.
                            </p>
                            <p className={`max-w-3xl text-lg leading-8 ${theme.textMuted}`}>
                                IEEE CMU-Africa is committed to fostering a vibrant community of innovation, collaboration, and technological excellence in Rwanda and across Africa. Our goal is to equip students and young professionals with cutting-edge skills in computing, cybersecurity, data science, and leadership, empowering them to solve real problems in their communities. Our chapter is rapidly growing and has become a hub for IEEE engagement, learning, and impact at CMU-Africa and beyond.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <div className={`overflow-hidden rounded-[32px] border ${theme.border} ${theme.cardBg} shadow-[0_40px_80px_rgba(0,0,0,0.18)]`}>
                            <img
                                src={aboutImage}
                                alt="IEEE student branch members and guests in front of the Carnegie Mellon University seal"
                                loading="lazy"
                                className="h-56 w-full object-cover"
                            />
                            <div className="p-8">
                                <h3 className={`text-3xl font-display font-black ${theme.text}`}>Key Milestones</h3>
                                <ul className={`mt-6 space-y-3 text-base ${theme.text}`}>
                                    {MILESTONES.map((item) => (
                                        <li key={item} className="flex gap-3"><span className={theme.accent}>&#10003;</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Overview;
