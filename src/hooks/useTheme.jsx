import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const theme = {
        bg: isDark ? 'bg-[#0c0a0b]' : 'bg-[#faf8f8]',
        text: isDark ? 'text-[#f8fafc]' : 'text-[#14090b]',
        textMuted: isDark ? 'text-[#a8a2a3]' : 'text-[#6b6566]',
        navBg: isDark ? 'bg-[#0c0a0b]/90' : 'bg-white/90',
        // accent for small text/links; lighter red on dark for contrast
        accent: isDark ? 'text-brand-light' : 'text-brand',
        accentHover: isDark ? 'hover:text-brand-light' : 'hover:text-brand',
        border: isDark ? 'border-white/10' : 'border-gray-200',
        cardBg: isDark ? 'bg-[#151011]' : 'bg-white',
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
