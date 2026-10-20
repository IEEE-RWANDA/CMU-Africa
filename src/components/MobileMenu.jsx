import React from 'react';
import { Icons } from './Icons';
import { NAV_LINKS, SOCIAL_LINKS } from '../data';
import { selectActivityTab } from '../activityTabs';

const socialIcons = {
    instagram: Icons.Instagram,
    facebook: Icons.Facebook,
    linkedin: Icons.Linkedin,
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, isDark, setIsDark }) => {
    return (
        <div className={`fixed inset-0 md:hidden bg-[#0a0a0a] z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {NAV_LINKS.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.target ?? item.id}`}
                    onClick={() => {
                        if (item.tab) selectActivityTab(item.tab);
                        setIsMenuOpen(false);
                    }}
                    className="text-4xl font-display uppercase tracking-wider text-white hover:text-brand-light transition-colors"
                >
                    {item.label}
                </a>
            ))}

            {/* Theme Toggle */}
            <div className="flex items-center gap-6 p-4 border border-white/20 rounded-full">
                <button
                    onClick={() => setIsDark(false)}
                    aria-label="Light mode"
                    className={`p-2 rounded-full transition-all ${!isDark ? 'bg-white text-black' : 'text-gray-400'}`}
                >
                    <Icons.Sun size={24} />
                </button>
                <div className="w-px h-6 bg-white/20"></div>
                <button
                    onClick={() => setIsDark(true)}
                    aria-label="Dark mode"
                    className={`p-2 rounded-full transition-all ${isDark ? 'bg-white text-black' : 'text-gray-400'}`}
                >
                    <Icons.Moon size={24} />
                </button>
            </div>

            <div className="flex gap-8 mt-4 text-white">
                {SOCIAL_LINKS.map(({ key, label, href }) => {
                    const Icon = socialIcons[key];
                    return (
                        <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand-light transition-colors">
                            <Icon size={24} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileMenu;
