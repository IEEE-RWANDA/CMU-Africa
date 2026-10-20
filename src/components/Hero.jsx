import React from 'react';
import { Icons } from './Icons';
import FadeIn from './FadeIn';

import AnimatedBackground from './AnimatedBackground';
import TechBackground from './TechBackground';

const Hero = ({ isDark, theme }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <AnimatedBackground isDark={isDark} />
            <TechBackground isDark={isDark} />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    <h1 className="mb-6">
                        <span className="block font-mono text-sm md:text-base tracking-[0.2em] mb-4 text-gold font-semibold">
                            IEEE CMU-Africa Student Branch
                        </span>
                        <span className={`block text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight bg-gradient-to-r ${isDark ? 'from-brand to-brand-light' : 'from-brand-dark to-brand'} bg-clip-text text-transparent`}>
                            Grooming the Future <br /> Leaders of Africa.
                        </span>
                    </h1>
                    <p className={`max-w-3xl mx-auto text-lg md:text-xl ${theme.textMuted} mb-3`}>
                        Learn. Lead. Innovate.
                    </p>
                    <p className={`max-w-2xl mx-auto text-base ${theme.textMuted} mb-10`}>
                        A student-led IEEE community at Carnegie Mellon University Africa in Kigali, Rwanda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#about" className="px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest hover:bg-brand-dark transition-all duration-300 rounded-full">
                            SB Overview
                        </a>
                        <a href="#engage" className="px-8 py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-[#14090b] transition-all duration-300 rounded-full">
                            Volunteer With Us
                        </a>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="transform rotate-90 text-gold">
                    <Icons.ArrowRight size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
