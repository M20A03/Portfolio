# 💳 Case Study: Credex AI Spend Intelligence

**Engineering an Enterprise-Grade AI SaaS Spend Intelligence & Optimization Platform**

- **Live Application:** [credex-sand.vercel.app](https://credex-sand.vercel.app/)
- **Source Code:** [github.com/M20A03/Credex](https://github.com/M20A03/Credex)
- **Role:** Lead Full-Stack Architect & SRE
- **Timeline:** 2026
- **Target Audience:** Engineering Leaders, CTOs, Tech Founders, and Finance Teams

---

## 1. Project Metadata & Technical Stack

| Dimension | Specification |
|---|---|
| **Framework & Engine** | Next.js 16.2.6 (App Router, Turbopack, Standalone Output) |
| **UI Library & Language** | React 19.2.4, TypeScript 5.8 (Strict Mode Enabled) |
| **Styling & Design Tokens** | Vanilla CSS Custom Properties, Tailwind CSS v4, Glassmorphism, 8px/4px Grid |
| **State Management** | Zustand 5.0 (Client-side persist middleware) |
| **Visualization & Animation** | Recharts 3.8, Framer Motion 12.38, Canvas Confetti |
| **AI & LLM Integration** | Anthropic Claude 3.7 Sonnet / Claude 3.5 Sonnet, OpenAI GPT-4o, Gemini 2.0 Flash |
| **Edge Infrastructure** | Vercel Edge Middleware (Geo-location, Security Headers, A/B testing) |
| **CI/CD & Verification** | Multi-Stage GitHub Actions Workflow, Pre-commit Husky hooks, Lint-Staged |
| **Accessibility & Standards** | WCAG 2.1 AA Compliant, Zero-FOUC (Flash of Unstyled Content) |

---

## 2. Executive Summary & Market Context

Between 2024 and 2026, generative AI tools transitioned from experimental toys into essential developer infrastructure. Engineering organizations rapidly adopted AI coding editors (Cursor, Windsurf), autocompletion extensions (GitHub Copilot), foundational reasoning models (Claude, ChatGPT, Gemini), and design tools (v0, Midjourney, Perplexity).

### The "Subscription Bloat Crisis"
While developer productivity soared, corporate spend spiraled out of control:
1. **The Over-Provisioning Trap:** Startups with 5–10 developers routinely purchased high-tier "Business" or "Enterprise" plans (e.g., Cursor Business at ₹3,400/seat or Copilot Enterprise at ₹3,315/seat) when Individual/Pro tiers covered 100% of their actual daily needs.
2. **Hidden USD Currency Volatility:** In emerging tech hubs like India, AI subscriptions bill in foreign USD currency ($20–$80/seat), making annual budgeting unpredictable and opaque.
3. **Redundant Stacks:** Organizations frequently paid for overlapping capabilities (e.g., paying for Cursor Pro alongside GitHub Copilot and ChatGPT Plus simultaneously for the same developer).

**Credex** was conceived and built to eliminate this waste: an instant, zero-friction spend optimization platform that audits an engineering team's active tools, identifies over-provisioned seats and tier downgrades, and delivers concrete annual savings in both ₹ INR and $ USD in under 5 seconds.

---

## 3. Product Features & User Experience

```
USER JOURNEY
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  1-Click Tools   │ ──► │ Real-Time Spend  │ ──► │  Instant Savings │
│  Selection Grid  │     │ & Team Profile   │     │ Dynamic Dashboard│
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
[Solo, 5-Dev, Agency]     [₹ INR / $ USD Mode]     [Recharts, PDF, Memo]
```

### A. 1-Click Interactive Tool Grid & Quick Starter Stacks
Users select their active tools with a single click. For zero-friction testing, Credex provides 4 instant preset personas:
- ⚡ **Solo Builder:** 1 seat Cursor Pro + 1 seat Claude Pro
- 🚀 **5-Dev Startup:** 5 seats Cursor Business + 5 seats Copilot Business + 3 seats ChatGPT Team
- 🏢 **15-Seat Agency:** 12 seats Cursor Business + 15 seats Claude Team + 8 seats Perplexity Enterprise
- 👑 **50+ Enterprise:** 40 seats Cursor Enterprise + 50 seats Copilot Enterprise + 35 seats Claude Team

### B. Dual-Currency Engine (₹ INR & $ USD)
An edge-aware currency toggle recalculates the entire application in real time, supporting both standard Indian Lakh/Crore notation (₹1.5L, ₹2.8Cr) and international USD formatting ($1.7K, $1.2M).

### C. Visual Financial Dashboard & Recharts Analytics
- **Hero Annual Savings Counter:** Displays annual and monthly capital recovery with celebratory spring-physics confetti.
- **Spend Allocation Donut Chart:** Breaks down where software budget is concentrated across tools.
- **Before vs. After Bar Chart:** Visual comparison between current spend and post-optimization spend.
- **Severity-Filtered Recommendations:** Granular breakdowns categorized by *Over-Provisioned*, *Tier Downgrade*, or *Optimal*.

### D. Saver AI Chatbot with Dynamic Model Switching
An embedded floating orb assistant that answers questions on tool comparisons, contract renegotiation, and pricing benchmarks with support for flagship models:
- Claude 3.7 Sonnet (Anthropic)
- GPT-4o (OpenAI)
- Gemini 2.0 Flash (Google)
- DeepSeek R1 (Open-weights reasoning)

### E. 1-Click Executive PDF & Shareable URLs
State is synchronized with URL query parameters (`?step=results`), allowing engineering leads to share results with CFOs, complete with a clean, print-formatted PDF memo (`window.print()`).

---

## 4. Technical Architecture & Implementation Deep-Dive

```
SYSTEM ARCHITECTURE
[ Client Browser ]
      │
      │ (Edge Request)
      ▼
[ Vercel Edge Middleware ]
      ├─ Injects x-geo-country & x-currency-preference
      ├─ Tags Search Engine Bots (x-is-bot)
      ├─ Assigns A/B Testing Cookies (credex_ab_variant)
      └─ Enforces SRE Security Headers (X-Frame-Options, CSP, HSTS)
      │
      ▼
[ Next.js 16 App Router Engine ]
      ├─ src/app/layout.tsx (Inlined Zero-FOUC Script)
      ├─ src/app/page.tsx (Suspense Boundary + Query Sync)
      ├─ src/store/auditStore.ts (Zustand State Engine)
      │
      ├──► [ POST /api/audit ] ─────────────┐
      │     ├─ x-idempotency-key Validation │
      │     ├─ Deterministic Rule Engine    │
      │     └─ Claude 3.7 Sonnet Enrichment │ (10s Circuit Breaker)
      │                                     │
      └──► [ POST /api/chat ] ─────────────┘
            ├─ Model Router
            └─ Local Fallback FAQ Matrix
```

### Core Engineering Innovations

#### 1. The "Hybrid Deterministic Math + LLM Narrative" Pattern
- **Challenge:** Large Language Models (LLMs) frequently hallucinate arithmetic calculations, seat multiplications, and currency conversions.
- **Solution:** All pricing logic, seat over-provisioning checks, and alternative tool calculations execute inside a pure, deterministic TypeScript engine (`audit-engine.ts`) with sub-millisecond execution. The output JSON is passed to Claude 3.7 Sonnet solely for contextual narrative enrichment, wrapped in an `AbortSignal.timeout(10000)` circuit breaker that degrades gracefully to localized template summaries during network timeouts.

#### 2. React 19 State Compliance & Zero-FOUC Theming
- **Inlined Head Script:** Evaluates `localStorage` and system `prefers-color-scheme` before the DOM renders.
- **`useSyncExternalStore` Architecture:** Subscribes directly to browser media queries and window resize events without triggering extra render cycles or cascading `setState` warnings in React 19.

#### 3. Edge-Level Geolocation & Currency Ingestion
Vercel Edge Middleware inspects client headers at the CDN edge before rendering, attaching geo-context and security headers without triggering client-side layout shifts.

#### 4. Enterprise SRE Resilience & Idempotency Layer
- `x-idempotency-key` generated from a hash of selected tools, seats, and currency; cached with a 5-minute TTL.
- Exponential backoff with randomized jitter, automatic retries on status codes 429, 502, 503, and 504.

---

## 5. Measurable Impact & Benchmarks

| Benchmark Metric | Measurement | Industry Standard |
|---|---|---|
| **Production Build Time** | 3.5 seconds (Turbopack) | 45–90 seconds |
| **Audit Calculation Latency** | < 100ms | 2–5 seconds |
| **TypeScript Strict Errors** | 0 Errors (`strict: true`) | N/A |
| **ESLint Warnings** | 0 Warnings | N/A |
| **Average Identified Team Savings** | ₹1,47,900/year (49% budget reduction) | N/A |
| **First Contentful Paint (FCP)** | 0.4s | < 1.8s |
| **Cumulative Layout Shift (CLS)** | 0.000 | < 0.1 |

---

## 6. Summary for Portfolios & Resumes

> **Credex — Lead Full-Stack Architect & SRE**  
> *Next.js 16, React 19, TypeScript, Zustand, Recharts, Claude 3.7 Sonnet, Vercel Edge*  
> • Built an enterprise AI SaaS spend audit platform analyzing engineering tool budgets across Cursor, Copilot, Claude, and Windsurf.  
> • Engineered a deterministic calculation engine with sub-100ms response times, dual-currency support (₹/$), and Claude 3.7 Sonnet narrative enrichment.  
> • Implemented edge middleware for geo-currency routing, API idempotency, and automated CI/CD deployment pipelines.  
> • Live: [https://credex-sand.vercel.app](https://credex-sand.vercel.app/) | Code: [https://github.com/M20A03/Credex](https://github.com/M20A03/Credex)
