import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

const root = document.getElementById('root')

// The production build ships prerendered HTML (see scripts/prerender.mjs), so
// hydrate it; in dev the root is empty and we render from scratch.
if (root.hasChildNodes()) {
    hydrateRoot(root, app)
} else {
    createRoot(root).render(app)
}
