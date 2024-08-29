# ADP landing page

This is the landing page for Antenna Insect Data Platform. The app was setup using [Next.js](https://nextjs.org/) and [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We output as a static site using [Next Static Exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

## System requirements

- Node
- NPM

The `.nvmrc` file in project root describes the recommended Node version for this project.

## Getting started

```bash
# Install dependencies
npm install

# Run app in development mode
npm run dev
```

The app will now be available in a browser on [http://localhost:3000](http://localhost:3000). Hot reload will be enabled by default.

## Deployment

With a static export, the app can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets. When running the build command, Next.js generates the static export into the `out` folder.

```bash
# Install dependencies
npm install

# Generate static export
npm run build

# [Only for testing] Serve prod app on localhost
npx serve@latest out
```
