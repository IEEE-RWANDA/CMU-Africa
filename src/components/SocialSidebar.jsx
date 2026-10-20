import React from 'react';
import { Icons } from './Icons';
import { SOCIAL_LINKS } from '../data';

const socialIcons = {
    instagram: Icons.Instagram,
    facebook: Icons.Facebook,
    linkedin: Icons.Linkedin,
};

const SocialSidebar = () => {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 text-gray-500">
            {SOCIAL_LINKS.map(({ key, label, href }) => {
                const Icon = socialIcons[key];
                return (
                    <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={label} className="hover:text-brand transition-colors">
                        <Icon size={20} />
                    </a>
                );
            })}
            <div className="h-20 w-px bg-gray-700 mx-auto"></div>
            <span className="vertical-text text-xs tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Follow Us</span>
        </div>
    );
};

export default SocialSidebar;
