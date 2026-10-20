import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Layout from './components/Layout';
import Home from './pages/Home';
import './index.css';

// Single-page site: sections are reached through #anchors.
function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Home />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
