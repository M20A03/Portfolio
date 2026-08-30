# 🏬 Case Study: GMT MART E-Commerce Platform

- **Project:** GMT Mart Grocery & Retail Platform
- **Live Demo:** [gmt-mart-black.vercel.app](https://gmt-mart-black.vercel.app)
- **Source Code:** [github.com/M20A03/Gmt-mart](https://github.com/M20A03/Gmt-mart)
- **Role:** Full-Stack Architect & SRE
- **Tech Stack:** Next.js 16 (App Router, React 19), Tailwind CSS v4, Framer Motion, Zustand, Supabase (PostgreSQL), Firebase Auth & Functions

---

## 1. Executive Summary

**GMT MART** is a high-performance e-commerce platform built to blend futuristic, "Antigravity" neon aesthetics with enterprise-grade speed and reliability. Backed by **Firebase Cloud Functions** and **Supabase (PostgreSQL)**, GMT MART provides an immersive shopping journey featuring real-time state management, product comparisons, interactive drawers, instant live chat support, and an administrative control center.

```
┌────────────────────────────────┐
│       CLIENT STOREFRONT        │
│  • Next.js 16 (App Router)     │
│  • Tailwind CSS v4 & Motion    │
│  • Zustand State / LocalStore  │
└───────────────┬────────────────┘
                │
  ┌─────────────┴─────────────┐
  │                           │
  ▼                           ▼
┌───────────────────────────┐ ┌───────────────────────────┐
│     FIREBASE BACKEND      │ │    SUPABASE POSTGRESQL    │
│  • Cloud Functions (Node) │ │  • Products & Categories  │
│  • Firebase Authentication│ │  • Orders & JSONB Cart    │
│  • Hosting & Edge Delivery│ │  • Relational Integrity   │
└───────────────────────────┘ └───────────────────────────┘
```

---

## 2. Key Capabilities & Database Model

- **Dynamic Catalog & Filtering:** Search by query, filter by category, sort by price/rating.
- **Product QuickView & Size Guide:** Modal previews allowing instant variant inspection without page reloads.
- **Compare Matrix & Wishlist:** Side-by-side comparison matrix with persistent Zustand client store.
- **Role-Protected Admin Control Center:** Live revenue metrics, order state workflows, and product catalog management.
