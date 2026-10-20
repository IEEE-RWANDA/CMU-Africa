import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Collections from '../components/Collections';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';
import Collaborators from '../components/Collaborators';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
    const { isDark, theme } = useTheme();

    return (
        <div id="home-page">
            <Hero isDark={isDark} theme={theme} />
            <Overview />
            <Collections isDark={isDark} />
            <About isDark={isDark} theme={theme} />
            <Portfolio theme={theme} />
            <Timeline theme={theme} />
            <Collaborators />
            <Gallery />
            <Contact theme={theme} />
        </div>
    );
};

export default Home;
