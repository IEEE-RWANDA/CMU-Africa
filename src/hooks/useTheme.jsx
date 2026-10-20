import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const theme = {
        bg: isDark ? 'bg-[#031a40]' : 'bg-[#f4f8fc]',
        text: isDark ? 'text-[#f8fafc]' : 'text-[#0a1f3d]',
        textMuted: isDark ? 'text-[#a9bdd6]' : 'text-[#56677f]',
        navBg: isDark ? 'bg-[#04275A]/95' : 'bg-white/90',
        // accent for small text/links; lighter blue on dark for contrast
        accent: isDark ? 'text-brand-light' : 'text-brand',
        accentHover: isDark ? 'hover:text-brand-light' : 'hover:text-brand',
        accentBorder: isDark ? 'border-brand-light/60' : 'border-brand',
        // navigation: yellow highlight on navy, like the other IEEE Rwanda sites
        navActive: isDark ? 'text-gold' : 'text-brand',
        navHover: isDark ? 'hover:text-gold' : 'hover:text-brand',
        navBar: isDark ? 'bg-gold' : 'bg-brand',
        // pill tabs / filters
        tabActive: isDark ? 'border-brand-light bg-brand-light/10 text-brand-light' : 'border-brand bg-brand/10 text-brand',
        tabIdle: isDark ? 'border-transparent text-[#a9bdd6] hover:border-brand-light hover:text-brand-light' : 'border-transparent text-[#56677f] hover:border-brand hover:text-brand',
        // timeline rail and small gold label
        rail: isDark ? 'border-white/15' : 'border-brand/25',
        eyebrow: isDark ? 'text-gold' : 'text-brand',
        goldText: isDark ? 'text-gold' : 'text-[#8a6500]',
        border: isDark ? 'border-white/10' : 'border-gray-200',
        cardBg: isDark ? 'bg-[#06285a]' : 'bg-white',
    };

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
