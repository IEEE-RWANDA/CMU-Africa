# IEEE CMU-Africa website

React + Tailwind site for the IEEE CMU-Africa student branch.

## Deploys

Every push to `main` deploys to production on Vercel (`.github/workflows/deploy.yml`); pull requests get a preview link in the workflow run's summary. Deploys are skipped until a `package.json` exists.

`vercel.json` sets the framework to Create React App (output in `build/`), so Vercel serves the build correctly.
