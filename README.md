# IEEE CMU-Africa website

React + Vite + Tailwind site for the IEEE CMU-Africa student branch.

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
```

Site content (leadership, activities, timeline, gallery) lives in `src/data.js`.
The navbar logo is `src/assets/logo/sb-logo.png`.

## Deploys

Every push to `main` deploys to production on Vercel (`.github/workflows/deploy.yml`); pull requests get a preview link in the workflow run's summary.

`vercel.json` sets the framework to Vite (output in `dist/`), so Vercel serves the build correctly.
