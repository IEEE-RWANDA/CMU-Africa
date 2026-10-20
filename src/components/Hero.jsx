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
                        <span className={`block font-mono text-sm md:text-base tracking-[0.2em] mb-4 ${theme.heroGold} font-semibold`}>
                            IEEE CMU-Africa Student Branch
                        </span>
                        <span className={`block text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight bg-gradient-to-r ${isDark ? 'from-brand-light to-[#2E9BD6]' : 'from-brand-dark to-brand'} bg-clip-text text-transparent`}>
                            Grooming the Future <br /> Leaders of Africa.
                        </span>
                    </h1>
                    <p className={`max-w-3xl mx-auto text-lg md:text-xl ${theme.textMuted} mb-3`}>
                        Lead. Build. Innovate.
                    </p>
                    <p className={`max-w-2xl mx-auto text-base ${theme.textMuted} mb-10`}>
                        A student-led IEEE community at <strong className="font-bold">Carnegie Mellon University Africa</strong> in Kigali, Rwanda.
                    </p>
                    <div className="flex justify-center">
                        <a href="#about" className={`px-10 py-4 border font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${isDark ? 'border-brand-light text-brand-light hover:bg-brand-light hover:text-[#0a1f3d]' : 'border-brand text-brand hover:bg-brand hover:text-white'}`}>
                            Learn More
                        </a>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className={`transform rotate-90 ${theme.heroGold}`}>
                    <Icons.ArrowRight size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
