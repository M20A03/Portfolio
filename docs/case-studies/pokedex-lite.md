# ⚡ Case Study: Pokédex Lite — Enterprise Architecture & SRE Overhaul

- **Product:** Pokédex Lite
- **Live Production URL:** [pokedex-deepsolv.web.app](https://pokedex-deepsolv.web.app)
- **Source Repository:** [github.com/M20A03/Pokedex-Lite](https://github.com/M20A03/Pokedex-Lite)
- **Role:** Full-Stack Architect & Site Reliability Engineer (SRE)
- **Tech Stack:** React 18, Vite 5, Firebase Auth & Hosting, Vanilla CSS Custom Properties, PokéAPI

---

## 1. Executive Summary

**Pokédex Lite** began as a single-page interactive Pokémon explorer. Through a **7-Phase Deep-Surgery Architecture Overhaul**, the platform was re-engineered into an SRE-hardened, zero-FOUC, cross-platform enterprise application delivering a **0.00 Cumulative Layout Shift (CLS)** and fluid performance across viewports from **320px ultra-compact phones to 3840px 4K workstation monitors**.

```
OVERHAUL ARCHITECTURE
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                              Zero-FOUC Head Controller                               │
│        • Inlined Theme Script    • Preconnected CDNs    • Viewport-Fit: Cover        │
└──────────────────────────────────────────┬───────────────────────────────────────────┘
                                           │
┌──────────────────────────────────────────▼───────────────────────────────────────────┐
│                        Stateful URL Synchronizer & Router                            │
│  ?page=2 & ?search=char & ?type=fire & ?modal=6 (Parallel Route) & ?tab=favs         │
└──────────────────────────────────────────┬───────────────────────────────────────────┘
                                           │
┌──────────────────────────────────────────▼───────────────────────────────────────────┐
│                       Adaptive Cross-Platform Layout Engine                          │
│     • 1 Col (<380px)  • 2 Col (Mobile)  • 3 Col (1366px Laptop)  • 4/5 Col (4K)      │
│     • 44x44px Touch Targets             • 16px Font-Reset (Anti-Zoom)                │
└──────────────────────────────────────────┬───────────────────────────────────────────┘
                                           │
┌──────────────────────────────────────────▼───────────────────────────────────────────┐
│                         Resilient SRE Fetcher & Event Bus                            │
│       • Exponential Backoff Retries   • Timeout Aborts   • SWR Offline Cache         │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Quantitative & Qualitative Results

| Metric / Criterion | Initial Prototype | Enterprise Post-SRE |
|---|---|---|
| **Production Build Duration** | ~1.8s (No chunks) | **757ms (Split chunks)** |
| **Cumulative Layout Shift (CLS)** | 0.32 (High shift) | **0.00 (Zero shift)** |
| **iOS Safari Input Auto-Zoom** | Broken (Zooms in) | **Fixed (16px reset)** |
| **Shareable Deep Links (`?modal=id`)** | Unsupported | **100% Synced to URL** |
| **Touch Target Compliance (Apple HIG)** | < 30px (Failed) | **$\ge$ 44x44px (100% AA)** |
| **1366x768 & 4K Workstation Layout** | Stretched/Broken | **1–5 Dynamic Columns** |
| **Offline / Flaky Network Recovery** | White screen crash | **SWR Offline Fallback** |
| **ESLint & TypeScript Strictness** | Warnings present | **0 errors, 0 warnings** |
