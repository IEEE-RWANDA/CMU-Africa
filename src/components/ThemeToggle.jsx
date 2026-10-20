import React from 'react';
import { Icons } from './Icons';

const ThemeToggle = ({ isDark, setIsDark, theme }) => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 pl-4">
            <div className={`py-3 px-1 rounded-full border ${theme.border} backdrop-blur-md flex flex-col gap-4 items-center transition-all duration-300`}>
                <button
                    onClick={() => setIsDark(false)}
                    className={`p-2 rounded-full transition-all ${!isDark ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                >
                    <Icons.Sun size={18} />
                </button>
                <div className="w-px h-8 bg-gray-700"></div>
                <button
                    onClick={() => setIsDark(true)}
                    className={`p-2 rounded-full transition-all ${isDark ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-black'}`}
                >
                    <Icons.Moon size={18} />
                </button>
            </div>
            <div className="vertical-text text-xs tracking-widest uppercase text-gray-500 font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
            </div>
        </div>
    );
};

export default ThemeToggle;
