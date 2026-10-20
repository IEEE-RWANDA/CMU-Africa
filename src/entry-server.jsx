import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used at build time by scripts/prerender.mjs to put the page's HTML into dist/index.html.
export function render() {
    return renderToString(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
