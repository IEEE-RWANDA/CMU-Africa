import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { NAV_LINKS } from '../data';
import { selectActivityTab } from '../activityTabs';
import sbLogo from '../assets/logo/sb-logo.png';

const Navbar = ({ isDark, isMenuOpen, setIsMenuOpen, theme }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    // Handle Scroll Progress and Active Section
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? `${totalScroll / windowHeight}` : 0;
            setScrollProgress(Number(scroll));

            // Scroll Spy: the last section whose top has passed the navbar is the current one
            let current = null;
            document.querySelectorAll('main section[id]').forEach((section) => {
                if (section.getBoundingClientRect().top <= 100) current = section;
            });
            let id = current ? current.id : 'home';
            // The Events and Spotlight links share one section: tell them apart by its open tab
            if (id === 'events' && current.dataset.tab === 'spotlights') id = 'spotlight';
            // Sections without a nav link (About, What We Cover, Partners, Moments) highlight nothing
            setActiveSection(NAV_LINKS.some((link) => link.id === id) ? id : '');
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('sb-tab-change', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('sb-tab-change', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollProgress > 0.05 && !isMenuOpen ? `${theme.navBg} backdrop-blur-md border-b ${theme.border}` : 'bg-transparent'} py-4`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo: drop the final logo at src/assets/logo/sb-logo.png */}
                <a href="#home" className="flex items-center gap-2 group cursor-pointer">
                    <img
                        src={sbLogo}
                        alt="IEEE CMU-Africa Student Branch"
                        className={`h-9 md:h-11 w-auto max-w-[62vw] object-contain ${isDark || isMenuOpen ? 'brightness-0 invert' : ''}`}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-sm tracking-widest uppercase">
                    {NAV_LINKS.map((item) => {
                        const isActive = activeSection === item.id;
                        const target = item.target ?? item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${target}`}
                                onClick={() => item.tab && selectActivityTab(item.tab)}
                                className={`relative overflow-hidden group ${theme.accentHover} transition-colors duration-300 ${isActive ? theme.accent : ''}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand transform transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 relative text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} className={isDark ? 'text-white' : 'text-black'} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
