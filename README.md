# ThreatAtlas

ThreatAtlas is a real-time intelligence dashboard built with TypeScript, Vite, and Tauri. It combines news aggregation, map-based monitoring, data panels, and edge/API services in a single project that is useful for studying modern full-stack application design.

This version is organized for classroom presentation and technical review. The focus is the architecture, UI, data flow, and deployment model rather than product marketing.

## Overview

The application brings together multiple categories of live or cached information into one interface:

- news and event aggregation
- geopolitical and infrastructure monitoring
- financial and market panels
- map-based visualization in both 2D and 3D
- edge/API endpoints for structured data access
- desktop packaging through Tauri

It is a good example of a project that mixes frontend rendering, backend APIs, caching, background processing, and multi-platform delivery.

## Key Features

- Single-page application built with TypeScript and Vite
- Dual map experience using `deck.gl` and `globe.gl`
- Large panel-based dashboard architecture
- Edge/API layer for data-serving endpoints
- Redis-backed caching and refresh pipelines
- Progressive Web App output
- Desktop app packaging with Tauri
- Multiple build variants from one codebase
- Internationalization support

## Tech Stack

| Area | Main Technologies |
| --- | --- |
| Frontend | TypeScript, Vite, Preact |
| Visualization | deck.gl, MapLibre GL, globe.gl, Three.js, D3 |
| API Layer | Vercel-style edge functions, TypeScript server helpers |
| Caching | Upstash Redis |
| Desktop | Tauri 2, Rust, Node sidecar |
| Testing | Vitest, Playwright |
| Content | Astro blog subproject |

## Project Structure

```text
threatatlas/
├── api/                  # Edge/API endpoints
├── server/               # Shared server logic and domain handlers
├── src/                  # Frontend application code
├── src-tauri/            # Desktop app configuration and Rust entrypoint
├── tests/                # Automated tests
├── blog-site/            # Astro-based blog
├── public/               # Static assets
├── docs/                 # Documentation content
├── ARCHITECTURE.md       # System architecture notes
└── package.json          # Scripts and dependencies
```

## Getting Started

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run the Web App

```bash
npm run dev
```

Then open `http://localhost:5173`.

### Variant-Specific Development

```bash
npm run dev:tech
npm run dev:finance
npm run dev:commodity
npm run dev:happy
```

## Common Scripts

```bash
npm run dev              # Start local development server
npm run build            # Build blog + app
npm run typecheck        # Run TypeScript checks
npm run test:data        # Run data/unit tests
npm run test:e2e         # Run Playwright end-to-end tests
npm run build:desktop    # Build desktop-targeted app bundle
```

## How the App Is Organized

At a high level, the project works like this:

1. The frontend loads the dashboard shell and map layout.
2. Panels request data from API routes or bootstrap caches.
3. Server helpers normalize, cache, and return structured responses.
4. Redis is used to reduce repeated upstream fetches.
5. Optional desktop packaging wraps the same app in a Tauri runtime.

For a deeper technical breakdown, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Notes for Presentation or Demo

If you are presenting the project in class, a simple flow is:

1. Start the app with `npm run dev`.
2. Show the main dashboard layout and panel system.
3. Switch between map modes or variants.
4. Explain that `src/` handles the UI, `api/` and `server/` handle the data/API layer, and `src-tauri/` handles the desktop build.
5. Mention that the project demonstrates frontend, backend, caching, and deployment concepts in one repository.

## Build and Deployment

The repository supports web and desktop delivery:

- web build with Vite
- edge/API deployment with the `api/` directory
- desktop packaging through Tauri
- static/blog build through the `blog-site/` subproject

Project configuration files such as [vercel.json](./vercel.json), [vite.config.ts](./vite.config.ts), and [src-tauri/tauri.conf.json](./src-tauri/tauri.conf.json) show how those targets are wired together.

## License

This project is licensed under `AGPL-3.0-only`.

See [LICENSE](./LICENSE) for the full text.
