"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, LayoutGrid, Zap, Brain, Code2, Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const highlights = [
  "5 interactive algorithm visualizations with step-by-step execution",
  "AI chatbot (Star-Command AI) guides students through concepts in real-time",
  "2 real-life problem simulations grounded in practical scenarios",
  "Built to make DSA intuitive and engaging for learners"
];

const featureCards = [
  {
    icon: Zap,
    title: "Interactive visualizations",
    text: "Watch algorithms execute step-by-step with color-coded array states, pointer movements, and comparison counts.",
  },
  {
    icon: Brain,
    title: "AI-powered guidance",
    text: "Star-Command AI explains concepts naturally, answers questions, and helps students debug their understanding.",
  },
  {
    icon: Code2,
    title: "Real-world problems",
    text: "Learn how linear and binary search solve practical scenarios — from finding usernames to locating resources.",
  },
  {
    icon: MessageCircle,
    title: "Conversational learning",
    text: "Chat interface makes learning social and interactive, not like reading docs.",
  },
];

const process = [
  {
    title: "Problem",
    text: "Students struggle to understand search algorithms visually. Reading theory is boring; they need to see algorithms 'work'.",
  },
  {
    title: "Design",
    text: "Created 5 distinct visualizations for linear/binary search + real-life scenarios. Added an AI chatbot to explain concepts naturally.",
  },
  {
    title: "Build",
    text: "Implemented step-by-step animation engine in vanilla JS, integrated chatbot API, and styled for clarity.",
  },
  {
    title: "Outcome",
    text: "Students can learn algorithms at their own pace with both visuals and conversational guidance — a memorable project for interviews.",
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

export default function SearchAlgorithmSimulatorCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_28%)]" />
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
                <Badge variant="secondary" className="rounded-full px-3 py-1">Interactive Learning</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">AI Chatbot</Badge>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-medium">Educational Tool</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance">
                  Search Algorithm Simulator
                </h1>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                  A recruiter-friendly project showing how I use visualization and AI to make Data Structures and Algorithms both intuitive and engaging. Students learn faster, and you see a developer who understands both theory and UX.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full px-6">
                  <a href="https://linear-and-binary-search.web.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Try It Out
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6 bg-transparent">
                  <a href="https://github.com/M20A03/Linear-and-Bineary-Search-Simulation" target="_blank" rel="noopener noreferrer">
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
                    <Zap className="h-5 w-5 text-primary" />
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
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">What Makes It Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interactive Learning Features
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
              Problem to Outcome
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
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Result</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A project that teaches, impresses, and stays memorable
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This project shows you go beyond "just code" — you understand how to communicate complex concepts through interactive UI. Recruiters see your ability to combine DSA knowledge with thoughtful UX.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2 rounded-full px-8">
                <a href="https://linear-and-binary-search.web.app" target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4" />
                  Explore the Tool
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
