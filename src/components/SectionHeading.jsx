import React from 'react';
import { useTheme } from '../hooks/useTheme';

const SectionHeading = ({ title, subtitle, titleClassName = '' }) => {
    const { theme } = useTheme();

    return (
        <div className="mb-12 md:mb-20 text-center">
            <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 font-display ${theme.text} ${titleClassName}`}>{title}</h2>
            {subtitle && <div className="h-1 w-20 bg-gold mx-auto mt-4" />}
            {subtitle && <p className={`mt-4 text-sm uppercase tracking-[0.35em] ${theme.textMuted}`}>{subtitle}</p>}
        </div>
    );
};

export default SectionHeading;
