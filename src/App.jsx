import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Layout from './components/Layout';
import Home from './pages/Home';
import JournalPost from './pages/JournalPost';
import './index.css';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/journal/:id" element={<JournalPost />} />
                        {/* Fallback for anything else */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
