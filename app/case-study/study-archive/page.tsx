"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, LayoutGrid, Database, Users, Shield, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const highlights = [
  "Centralized repository for campus study materials, notes, and resources",
  "Real-time sync powered by Firebase — updates reflect instantly for all students",
  "Simple, intuitive interface designed for quick access during study sessions",
  "Built as a genuine campus utility that continues to serve students"
];

const featureCards = [
  {
    icon: BookOpen,
    title: "Organized library",
    text: "Browse courses, semesters, and subjects in a logical hierarchy that mirrors how students think about their study materials.",
  },
  {
    icon: Database,
    title: "Cloud-backed storage",
    text: "Firebase Firestore powers instant sync. Add a note from your phone, and it appears on your laptop in real-time.",
  },
  {
    icon: Users,
    title: "Shared access",
    text: "Built for a community of students to contribute and access shared resources — collaborative learning at the database level.",
  },
  {
    icon: Zap,
    title: "Fast, reliable updates",
    text: "No page reloads needed. Firebase subscriptions mean your data is always current without user friction.",
  },
];

const process = [
  {
    title: "Problem",
    text: "Students scatter study materials across Google Drive, email, Telegram groups, and random folders. Finding what you need is a hunt.",
  },
  {
    title: "Design",
    text: "Created a single, searchable hub organized by course and semester. Made it web-first so it works on any device, anywhere on campus.",
  },
  {
    title: "Build",
    text: "Used Firebase Firestore for real-time sync and scalability. Kept the UI minimal so loading speed never annoys users.",
  },
  {
    title: "Outcome",
    text: "A genuine campus utility that reduces friction and shows you understand both user pain points and backend scalability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featureCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const processStepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function StudyArchiveCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full px-3 py-1">Case Study</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1">Campus Utility</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">Real Users</Badge>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-medium">Collaborative Platform</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance">
                  Study Archive
                </h1>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                  A recruiter-friendly project that shows you can solve real student problems with thoughtful data architecture and live backend integration. This tool continues to help your classmates study better.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full px-6">
                  <a href="https://straw-hats-7795d.web.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Live
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6 bg-transparent">
                  <a href="https://github.com/M20A03/StudyArchive" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Architecture & Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Community
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={featureCardVariants}
                  whileHover="hover"
                >
                  <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border/60 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Problem to Impact
            </h2>
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={step.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={processStepVariants}
                className="flex gap-6 md:gap-8 group"
              >
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center font-bold text-primary group-hover:bg-primary/20 transition-colors"
                  >
                    0{idx + 1}
                  </motion.div>
                  {idx < process.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/10" />
                  )}
                </div>
                <div className="pt-2 pb-6 md:pb-8">
                  <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Impact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A project that solves real problems for real users
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Recruiters see developers who notice problems and build solutions. Study Archive shows you can design for scale (Firebase Firestore), understand user needs (student community), and ship something people actually use.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2 rounded-full px-8">
                <a href="https://straw-hats-7795d.web.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Explore the Platform
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-8 bg-transparent">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
