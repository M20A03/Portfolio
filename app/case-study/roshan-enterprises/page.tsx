"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, CheckCircle2, ExternalLink, Github, LayoutGrid, Layers3, ShieldCheck, Sparkles, Store, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const highlights = [
  "Retail + wholesale buying journeys in one interface",
  "Firebase authentication, protected checkout, and order history",
  "Premium dark-mode UI with glassmorphism and clear product hierarchy",
  "Built for a semester final project with a live demo"
];

const featureCards = [
  {
    icon: Store,
    title: "Product discovery",
    text: "Designed browsing paths that let first-time visitors quickly understand the catalog, pricing, and shopping flow.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and checkout",
    text: "Added secure sign-in, cart, protected checkout, and order history to keep the flow familiar and reliable.",
  },
  {
    icon: LayoutGrid,
    title: "Responsive product UI",
    text: "Used card layouts, spacing, and hierarchy that hold up across desktop, tablet, and phone screens.",
  },
  {
    icon: Layers3,
    title: "Visual system",
    text: "Applied dark glassmorphism styling with a premium finish to make the store feel modern and memorable.",
  },
];

const process = [
  {
    title: "Problem",
    text: "Create a single storefront that serves both retail customers and wholesale buyers without making either path feel complicated.",
  },
  {
    title: "Design",
    text: "Prioritized clear category browsing, product cards, and visible trust signals so users can shop with confidence.",
  },
  {
    title: "Build",
    text: "Implemented the experience with React, Vite, Firebase auth, cart logic, and responsive styling.",
  },
  {
    title: "Outcome",
    text: "Delivered a complete checkout journey with a polished interface and a live demo that is easy to present in interviews.",
  },
];

export default function RoshanEnterprisesCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full px-3 py-1">Case Study</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1">Live Demo</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">Semester Final Project</Badge>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-medium">Roshan Enterprises</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance">
                  Wholesale & Retail E-Commerce Website
                </h1>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                  A recruiter-friendly case study showing how I designed a polished shopping experience that serves two buyer types at once: everyday retail customers and wholesale purchasers.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full px-6">
                  <a href="https://e-commerce-roshan-enterprises-dhn.web.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6 bg-transparent">
                  <a href="https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>

            <Card className="relative overflow-hidden border-border/70 bg-background/80 shadow-2xl shadow-primary/10">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">What stands out</p>
                    <p className="text-sm text-muted-foreground">Clear value, trust, and conversion flow</p>
                  </div>
                </div>
                <Separator />
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border/70 bg-card/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Why this project works for recruiters</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This project is strong portfolio material because it combines product thinking, responsive UI, and a clear business use case. It demonstrates that I can ship a real storefront with browsing, authentication, checkout, and a finished visual design instead of just isolated components.
              </p>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground">
                The case study shows how I think about user flow, trust signals, and visual hierarchy, which are the same details product teams care about when reviewing front-end candidates.
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Process</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">0{index + 1}</span>
                      {step.title}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="mb-6 flex items-center gap-3">
          <Truck className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Implementation highlights</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-primary">Retail + wholesale flow</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The same storefront supports different buying behaviors, so the UI had to make product discovery and checkout obvious for both casual buyers and bulk customers.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-primary">Trust-building UI</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Secure authentication, cart behavior, and order history create confidence and make the site feel like a real product instead of a mockup.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-primary">Responsive layout</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Spacing, cards, and hierarchy were tuned so the experience stays readable and conversion-focused on phone, tablet, and desktop.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-primary">Visual polish</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dark glassmorphism effects and consistent product styling help the project stand out in a recruiter review.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <Card className="overflow-hidden border-border/70 bg-primary/5">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Result</p>
              <h2 className="text-2xl sm:text-3xl font-bold">A polished ecommerce case study with real business intent</h2>
              <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                This project is useful in interviews because it gives me a real story to tell: a business problem, a user flow, and a finished live product. It shows design judgment, product thinking, and execution quality in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2 rounded-full px-6">
                <a href="https://e-commerce-roshan-enterprises-dhn.web.app" target="_blank" rel="noopener noreferrer">
                  Open Live Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full px-6 bg-transparent">
                <Link href="/">
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
