# ⚡ Case Study: FLUX — Cyberpunk Tech Fest Platform & Event Engine

- **Product:** FLUX 2026 (`flux-frontend` + `flux-backend`)
- **Host Organization:** SAMAGRA — Dept. of Computer Science, CHRIST (Deemed to be University)
- **Role:** Lead Full-Stack Architect
- **Frontend Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Canvas CyberRain
- **Backend Stack:** Python, Django 5, Django REST Framework (DRF), SQLite/PostgreSQL, Cloudflare R2 / S3 Storage
- **Repositories:** [github.com/M20A03/Flux-main](https://github.com/M20A03/Flux-main) & [github.com/M20A03/Flux-Backend-main](https://github.com/M20A03/Flux-Backend-main)

---

## 1. Executive Summary

**FLUX** is the official digital headquarters and registration engine for SAMAGRA's annual flagship technical and cultural fest at CHRIST (Deemed to be University). Combining high-performance web engineering with an immersive **Cyberpunk & Netrunner visual theme**, FLUX replaces manual desk sign-ups and disjointed spreadsheets with a single, gamified portal for event discovery, team registrations, schedule tracking, payment verification, and automated query resolution.

```mermaid
graph TD
    Client[Next.js 16 Client / React 19]
    subgraph Frontend Architecture
        AppRouter[Next.js App Router]
        UIComp[Cyberpunk UI & 3D Components]
        Chatbot[Interactive FAQ Chatbot Engine]
        ToastSys[Tech Facts Toast & Matrix Rain]
        FormEngine[Gamified Registration Modal]
    end
    subgraph State & Styling
        Tailwind[Tailwind CSS v4 & Custom Tokens]
        CSSVars[CSS Custom Variables & Keyframe FX]
        Lucide[Lucide React Icons]
    end
    subgraph Backend Services
        API[Django REST Framework API Engine]
        Storage[Cloudflare R2 / S3 Payment Receipts]
        EmailService[Transactional Email Dispatcher]
    end

    Client --> AppRouter
    AppRouter --> UIComp
    UIComp --> FormEngine
    UIComp --> Chatbot
    UIComp --> ToastSys
    UIComp --> Tailwind
    Tailwind --> CSSVars
    FormEngine -->|Axios Multipart Form Data| API
    API --> Storage
    API --> EmailService
```

---

## 2. Key Capabilities & Innovations

1. **Gamified Dynamic Registration:** Adaptive team forms dynamically adjusting member inputs based on event constraints with payment proof receipt upload.
2. **Terminal Chatbot Assistant:** Real-time client-side keyword FAQ answering queries regarding venue, schedule, rules, and entry fees.
3. **Cyberpunk Visual System:** Canvas-based matrix rain (`CyberRain.tsx`), 3D card tilt physics, glitch typography shaders, and dual neon themes.
4. **Automated Transactional Dispatch:** Django backend validating submissions, generating registration IDs, and dispatching confirmation emails.
