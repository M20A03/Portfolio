# 🛰️ Case Study: Space Explorer — Algorithmic Simulation Platform (Linear & Binary Search)

- **Live Deployment:** [linear-and-binary-search.web.app](https://linear-and-binary-search.web.app)
- **Source Code:** [github.com/M20A03/Linear-and-Bineary-Search-Simulation](https://github.com/M20A03/Linear-and-Bineary-Search-Simulation)
- **Role:** Full-Stack Architect & SRE
- **Tech Stack:** React 19, Vite 7, Firebase Auth & RTDB, HTML5 WebAudio API, FastAPI / Python 3.11

---

## 1. Executive Summary

**Space Explorer** is an interactive, gamified Data Structures and Algorithms (DSA) educational platform engineered to transform abstract computer science concepts into intuitive, visual experiences. The application demonstrates the core mechanics, edge cases, and algorithmic complexity trade-offs between **Linear Search ($\mathcal{O}(n)$)** and **Binary Search ($\mathcal{O}(\log n)$)** across both sci-fi radar scenarios and real-world everyday analogies.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                  CLIENT FRONTEND LAYER                                 │
│  ┌─────────────────────────┐  ┌───────────────────────────┐  ┌───────────────────────┐ │
│  │     React 19 + Vite 7   │  │   Adaptive Theme Engine   │  │  WebAudio Synthesizer │ │
│  │   • SPA State Router    │  │ • Zero-FOUC Inlined Head  │  │  • Custom Oscillator  │ │
│  │   • Reactive Breakpoints│  │ • WCAG 2.1 AA Compliant   │  │  • Zero-asset SFX     │ │
│  └────────────┬────────────┘  └─────────────┬─────────────┘  └───────────┬───────────┘ │
└───────────────┼─────────────────────────────┼────────────────────────────┼─────────────┘
                │                             │                            │
                ▼                             ▼                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                             CORE ENGINE & RESILIENCE LAYER                             │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │ State Machine & Algorithm Engine (`Visualizer.jsx`)                              │  │
│  │ • Step-by-Step Traversal • Pointer Animation • Bound Tracking [Left, Mid, Right] │  │
│  └──────────────────────────────────────────┬───────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────▼───────────────────────────────────────┐  │
│  │ Resilient Transport & Error Interceptors (`fetcher.js` + `ErrorBoundary.jsx`)    │  │
│  │ • Exponential Backoff Jitter • Idempotency Keys • 401/403/500 Interception       │  │
│  └──────────────────────────────────────────┬───────────────────────────────────────┘  │
└─────────────────────────────────────────────┼──────────────────────────────────────────┘
                                              │
                                              ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                BACKEND & CLOUD SERVICES                                │
│  ┌──────────────────────────────────────┐   ┌──────────────────────────────────────┐   │
│  │    Firebase Platform (Auth & RTDB)   │   │   FastAPI / Python Algorithm Backend │   │
│  │ • User Authentication & Session Sync │   │ • Telemetry Persistence & Analysis   │   │
│  │ • Cloud Chat Log Streaming           │   │ • SQLite Local Storage               │   │
│  └──────────────────────────────────────┘   └──────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Performance & Quality Metrics

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           LIGHTHOUSE PERFORMANCE AUDIT                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ ⚡ Performance: 98 / 100                                                            │
│ ♿ Accessibility (A11y): 100 / 100 (WCAG 2.1 AA Compliant)                           │
│ 🛡️ Best Practices: 100 / 100                                                         │
│ 🔍 SEO: 100 / 100                                                                   │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

- **First Contentful Paint (FCP):** $0.6\text{s}$
- **Largest Contentful Paint (LCP):** $1.1\text{s}$
- **Cumulative Layout Shift (CLS):** $0.000$ (Zero layout shifts)
- **Bundle Footprint (Gzipped):** $< 165\text{ KB}$
