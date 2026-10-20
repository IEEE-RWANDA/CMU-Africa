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

    return (
        <div className={`min-h-screen transition-colors duration-500 font-sans ${theme.bg} ${theme.text} selection:bg-brand selection:text-white`}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600&display=swap');
                .font-display { font-family: 'Anton', sans-serif; letter-spacing: 0.05em; }
                .font-body { font-family: 'Inter', sans-serif; }
                
                /* Custom Scrollbar */
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: ${isDark ? '#0c0a0b' : '#faf8f8'}; }
                ::-webkit-scrollbar-thumb { background: #C41230; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #8C0D23; }
            `}</style>

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
