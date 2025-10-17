# Antenna landing page

This is the landing page for Antenna Insect Data Platform. The app was setup using [Next.js](https://nextjs.org/) and [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We output as a static site using [Next Static Exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

## System requirements

- Node
- NPM

The `.nvmrc` file in project root describes the recommended Node version for this project.

## Run the app locally

```bash
# Install dependencies
npm install

# Run app in development mode
npm run dev
```

The app will now be available in a browser on [http://localhost:3000](http://localhost:3000). Hot reload will be enabled by default.

## Deploy the app

With a static export, the app can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets. When running the build command, Next.js generates the static export into the `out` folder.

```bash
# Install dependencies
npm install

# Generate static export
npm run build

# [Only for testing] Serve prod app on localhost
npx serve@latest out
```

## Edit content

All text content is specified in [content.json](https://github.com/RolnickLab/antenna-landing-page/blob/e5aa108cd8e2511389b2ac24f828895ea94dc36b/lib/content.json). To edit any content, simply update this file.

## Update stats

To update stats (station map and counts), simply run this script. This will fetch data from the API and save it to `stats.json`. This makes it possible for the web app to access stats without loading times.

```bash
npm run update-stats
```
