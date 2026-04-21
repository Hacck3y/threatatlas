# ThreatAtlas

**Real-time global intelligence dashboard** — Open-source news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

[![GitHub stars](https://img.shields.io/github/stars/hacck3y/threatatlas?style=social)](https://github.com/hacck3y/threatatlas/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/hacck3y/threatatlas?style=social)](https://github.com/hacck3y/threatatlas/network/members)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/hacck3y/threatatlas)](https://github.com/hacck3y/threatatlas/commits/main)
[![Latest release](https://img.shields.io/github/v/release/hacck3y/threatatlas?style=flat)](https://github.com/hacck3y/threatatlas/releases/latest)

<p align="center">
  <a href="https://threatatlas.app"><img src="https://img.shields.io/badge/Web_App-threatatlas.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web App"></a>&nbsp;
  <a href="https://tech.threatatlas.app"><img src="https://img.shields.io/badge/Tech_Variant-tech.threatatlas.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tech Variant"></a>&nbsp;
  <a href="https://finance.threatatlas.app"><img src="https://img.shields.io/badge/Finance_Variant-finance.threatatlas.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Finance Variant"></a>&nbsp;
  <a href="https://commodity.threatatlas.app"><img src="https://img.shields.io/badge/Commodity_Variant-commodity.threatatlas.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Commodity Variant"></a>&nbsp;
  <a href="https://happy.threatatlas.app"><img src="https://img.shields.io/badge/Happy_Variant-happy.threatatlas.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Happy Variant"></a>
</p>

<p align="center">
  <a href="https://threatatlas.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows"></a>&nbsp;
  <a href="https://threatatlas.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS ARM"></a>&nbsp;
  <a href="https://threatatlas.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS Intel"></a>&nbsp;
  <a href="https://threatatlas.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux"></a>
</p>

<p align="center">
  <a href="https://www.threatatlas.app/docs/documentation"><strong>Documentation</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/hacck3y/threatatlas/releases/latest"><strong>Releases</strong></a> &nbsp;·&nbsp;
  <a href="https://www.threatatlas.app/docs/contributing"><strong>Contributing</strong></a>
</p>

![ThreatAtlas Dashboard](docs/images/threatatlas-dashboard.jpg)

---

## What It Does

- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 45 data layers
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Intelligence Index** — composite risk scoring across 12 signal categories
- **Finance radar** — 92 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **5 site variants** from a single codebase (world, tech, finance, commodity, happy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **21 languages** with native-language feeds and RTL support

For the full feature list, architecture, data sources, and algorithms, see the **[documentation](https://www.threatatlas.app/docs/documentation)**.

---

## College Project Notes

This fork has been cleaned and rebranded as **ThreatAtlas** for an educational project submission.

- Removed paid-tier, checkout, upgrade, ad, and sign-in surfaces from the visible product.
- Removed internal planning artifacts such as todos, plans, brainstorm notes, and review folders.
- Updated public branding to ThreatAtlas across app metadata, docs, blog content, and desktop packaging.
- Kept the core dashboard architecture intact so the project still demonstrates real-world frontend, API, data, and desktop-app patterns.

Suggested demo flow: start the app with `npm run dev`, open the dashboard, switch between panel groups, show the map layers, and briefly explain how the API/data-loader/panel architecture connects the data to the UI.

---

## Quick Start

```bash
git clone https://github.com/hacck3y/threatatlas.git
cd threatatlas
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173). No environment variables required for basic operation.

For variant-specific development:

```bash
npm run dev:tech       # tech.threatatlas.app
npm run dev:finance    # finance.threatatlas.app
npm run dev:commodity  # commodity.threatatlas.app
npm run dev:happy      # happy.threatatlas.app
```

See the **[self-hosting guide](https://www.threatatlas.app/docs/getting-started)** for deployment options (Vercel, Docker, static).

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) with Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **API Contracts** | Protocol Buffers (92 protos, 22 services), sebuf HTTP annotations |
| **Deployment** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Caching** | Redis (Upstash), 3-tier cache, CDN, service worker |

Full stack details in the **[architecture docs](https://www.threatatlas.app/docs/architecture)**.

---

## Flight Data

Flight data provided gracefully by [Wingbits](https://wingbits.com?utm_source=threatatlas&utm_medium=referral&utm_campaign=threatatlas), the most advanced ADS-B flight data solution.

---

## Data Sources

ThreatAtlas aggregates 65+ external data sources across geopolitics, finance, energy, climate, aviation, cyber, military, infrastructure, and news intelligence. See the full [data sources catalog](https://www.threatatlas.app/docs/data-sources) for providers, feed tiers, and collection methods.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## License

This project is distributed under **AGPL-3.0**. You can study, modify, and self-host it, including for educational use, as long as you follow the license terms and share source for network-accessible modified versions.

See [LICENSE](LICENSE) for the full license text.

---

## Author

Original upstream project by **Elie Habib**. This repository is adapted as **ThreatAtlas** for a college project.

## Contributors

<a href="https://github.com/hacck3y/threatatlas/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hacck3y/threatatlas" />
</a>

## Security Acknowledgments

We thank the following researchers for responsibly disclosing security issues:

- **Cody Richard** — Disclosed three security findings covering IPC command exposure, renderer-to-sidecar trust boundary analysis, and fetch patch credential injection architecture (2026)

See our [Security Policy](./SECURITY.md) for responsible disclosure guidelines.

---

<p align="center">
  <a href="https://threatatlas.app">threatatlas.app</a> &nbsp;·&nbsp;
  <a href="https://www.threatatlas.app/docs/documentation">docs.threatatlas.app</a> &nbsp;·&nbsp;
  <a href="https://finance.threatatlas.app">finance.threatatlas.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.threatatlas.app">commodity.threatatlas.app</a>
</p>

## Star History

<a href="https://api.star-history.com/svg?repos=hacck3y/threatatlas&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=hacck3y/threatatlas&type=Date&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=hacck3y/threatatlas&type=Date&type=Date" />
 </picture>
</a>
