import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import SocialSidebar from './SocialSidebar';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

const Layout = ({ children }) => {
    const { isDark, setIsDark, theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Custom scrollbar; injected as raw CSS so quotes/symbols survive server rendering
    const scrollbarCss = `
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${isDark ? '#0c0a0b' : '#faf8f8'}; }
        ::-webkit-scrollbar-thumb { background: #C8102E; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #8C0D23; }
    `;

    return (
        <div className={`min-h-screen transition-colors duration-500 font-sans ${theme.bg} ${theme.text} selection:bg-brand selection:text-white`}>
            <style dangerouslySetInnerHTML={{ __html: scrollbarCss }} />

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} theme={theme} />
            <SocialSidebar />
            <Navbar isDark={isDark} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} />
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDark={isDark} setIsDark={setIsDark} />

            <main>
                {children}
            </main>

            <Footer theme={theme} />
        </div>
    );
};

export default Layout;
