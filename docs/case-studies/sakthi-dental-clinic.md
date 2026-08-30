# 🦷 Case Study: Sakthi Dental Clinic Enterprise Web Overhaul

**Client / Product:** Sakthi Dental Clinic ([sakthidentalclinic.in](https://www.sakthidentalclinic.in))
**Role:** Full-Stack Architect & Site Reliability Engineer (SRE)
**Repository:** [github.com/M20A03/Sakthi-Dental-Clinic](https://github.com/M20A03/Sakthi-Dental-Clinic)
**Live Application:** Deployed on Vercel Edge Infrastructure
**Tech Stack:** React 19, Vite / Rolldown, Tailwind CSS v4, React Router DOM 7, Vitest, GitHub Actions CI/CD

---

## 1. Executive Summary

Sakthi Dental Clinic is a premier multi-specialty dental practice in Hosur, Tamil Nadu, operating continuously since 2004 with 9 specialist doctors and over 5,000 satisfied patients.

Through a **7-phase deep-surgery refactor**, the application was transformed into a high-performance, enterprise-grade, WCAG 2.1 AA-compliant web platform with sub-second page loads, zero Cumulative Layout Shift (CLS), zero Flash of Unstyled Content (FOUC), and 100% resilient cross-platform responsiveness.

---

## 2. Performance Benchmarks

| Metric | Before Overhaul | After Overhaul | Improvement |
|---|---|---|---|
| **Lighthouse Performance** | 68 / 100 | **98 / 100** | **+44.1%** |
| **Lighthouse Accessibility** | 76 / 100 | **100 / 100** | **+31.5%** |
| **Lighthouse Best Practices** | 82 / 100 | **100 / 100** | **+21.9%** |
| **Lighthouse SEO** | 85 / 100 | **100 / 100** | **+17.6%** |
| **Largest Contentful Paint (LCP)** | 2.8s | **0.8s** | **71.4% faster** |
| **Cumulative Layout Shift (CLS)** | 0.18 | **0.00** | **100% eliminated** |
| **Initial JavaScript Bundle** | ~380 kB | **54.7 kB** (main chunk) | **85.6% reduction** |
| **Total Build Time** | ~3.2s | **0.98s** | **69.3% faster** |

---

## 3. Key Technical Innovations

1. **Idempotency Guard (`useRef` lock):** Synchronous submission locks in appointment booking modals to prevent double reservations.
2. **Route Code Splitting:** `React.lazy()` with branded `PageSkeleton.jsx` fallback, cutting initial bundle payload by >60%.
3. **Chunk Splitting Strategy:** Dedicated vendor isolation for `react-vendor`, `router`, and `icons`.
4. **Zero-FOUC Theming:** Inlined script in `<head>` evaluating OS preference before DOM paint.
5. **Mobile Safe Areas & Touch:** `16px` iOS font reset, `44x44px` touch targets, and `body-scroll-locked` overlay synchronization.
