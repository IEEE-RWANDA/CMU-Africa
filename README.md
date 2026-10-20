# IEEE CMU-Africa website

React + Tailwind site for the IEEE CMU-Africa student branch.

## Deploys

Every push to `main` deploys to production on Vercel (`.github/workflows/deploy.yml`); pull requests get a preview link in the workflow run's summary. Deploys are skipped until a `package.json` exists.

`vercel.json` assumes a Vite app (output in `dist/`). If the app uses Create React App instead, change `"framework"` to `"create-react-app"`.
