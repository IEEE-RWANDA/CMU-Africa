// Production build: client bundle + prerendered HTML.
//
// Search engines and link-preview bots read dist/index.html, so the page's real
// content must be in it, not only in JavaScript. After the normal Vite build we
// build the server entry, render the app to a string, and inject it into
// <div id="root">. The browser then hydrates it (see src/main.jsx).
//
// If prerendering fails for any reason the build still succeeds and the site
// falls back to a regular client-rendered page.
import { build } from 'vite';
import { pathToFileURL } from 'node:url';
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distIndex = path.join(root, 'dist', 'index.html');
const serverDir = path.join(root, 'dist-server');
const PLACEHOLDER = '<div id="root"></div>';

await build();

try {
    await build({
        logLevel: 'warn',
        build: { ssr: 'src/entry-server.jsx', outDir: 'dist-server', emptyOutDir: true },
    });

    const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);
    const template = await readFile(distIndex, 'utf-8');
    if (!template.includes(PLACEHOLDER)) throw new Error('root placeholder not found in dist/index.html');

    await writeFile(distIndex, template.replace(PLACEHOLDER, `<div id="root">${render()}</div>`));
    console.log('Prerendered the home page into dist/index.html');
} catch (error) {
    console.warn(`Prerender skipped, shipping the client-rendered page instead: ${error.message}`);
} finally {
    await rm(serverDir, { recursive: true, force: true });
}
