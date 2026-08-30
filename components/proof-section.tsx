"use client";

import { BadgeCheck, Clock3, MessageSquareQuote, Rocket, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const proofStats = [
  {
    icon: Rocket,
    label: "Production Projects",
    value: "17+",
    note: "Full-stack apps deployed across Firebase & Vercel",
  },
  {
    icon: BadgeCheck,
    label: "Accessibility Focus",
    value: "WCAG 2.1 AA",
    note: "Semantic landmark hierarchy & contrast checks",
  },
  {
    icon: Clock3,
    label: "Typical Response",
    value: "< 24h",
    note: "For full-stack engineering & freelance inquiries",
  },
];

const testimonials = [
  {
    quote:
      "Mayank quickly turned rough requirements into a clean and responsive product page. Communication was clear, and delivery was on time.",
    author: "Project Collaborator",
    role: "Client-side Feedback",
  },
  {
    quote:
      "Strong growth mindset. He asks the right questions, learns fast, and consistently improves both UI quality and code structure.",
    author: "Peer Developer",
    role: "Team Collaboration",
  },
];

const nowItems = [
  "Building deeper full-stack case studies with measurable outcomes",
  "Improving backend architecture and API design patterns",
  "Contributing to open-source and documenting lessons learned",
];

export function ProofSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="proof" aria-label="Proof of Work and Track Record" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Proof of Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 text-balance">
            Results, Signals, <span className="text-primary">and Momentum</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            A portfolio should show outcomes, not just screens. This section captures execution quality,
            collaboration feedback, and what I am building next.
          </p>
        </motion.div>

        {/* 6 Proof Cards: Laptop shows all 6; Mobile defaults to 2 with "See more proof (4)" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Production Projects */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6">
                <Rocket className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-medium text-muted-foreground mb-1">{proofStats[0].label}</p>
                <p className="text-3xl font-extrabold text-foreground mb-2">{proofStats[0].value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{proofStats[0].note}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Accessibility Focus */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6">
                <BadgeCheck className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-medium text-muted-foreground mb-1">{proofStats[1].label}</p>
                <p className="text-3xl font-extrabold text-foreground mb-2">{proofStats[1].value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{proofStats[1].note}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Typical Response (Visible on laptop, toggled on mobile) */}
          <div className={showAllMobile ? "block" : "hidden md:block"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="h-full"
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <Clock3 className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm font-medium text-muted-foreground mb-1">{proofStats[2].label}</p>
                  <p className="text-3xl font-extrabold text-foreground mb-2">{proofStats[2].value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proofStats[2].note}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Card 4: Collaboration Feedback 1 */}
          <div className={showAllMobile ? "block" : "hidden md:block"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-full"
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2 font-bold">
                    <MessageSquareQuote className="w-5 h-5 text-primary" />
                    Collaboration Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonials[0].quote}"</p>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground">{testimonials[0].author}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[0].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Card 5: Collaboration Feedback 2 */}
          <div className={showAllMobile ? "block" : "hidden md:block"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="h-full"
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2 font-bold">
                    <MessageSquareQuote className="w-5 h-5 text-primary" />
                    Team Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonials[1].quote}"</p>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm font-semibold text-foreground">{testimonials[1].author}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[1].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Card 6: Now Building */}
          <div className={showAllMobile ? "block" : "hidden md:block"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="h-full"
            >
              <Card className="h-full border-border bg-gradient-to-b from-card to-primary/5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center justify-between font-bold">
                    <span className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Now Building
                    </span>
                    <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs">
                      Active in 2026
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {nowItems.map((item) => (
                      <li key={item} className="leading-relaxed flex items-start gap-1.5">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Mobile-Only Toggle Button: Hidden on Laptop/Desktop */}
        <div className="mt-8 flex justify-center md:hidden print:hidden">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="rounded-full px-6 py-3 font-semibold border-border hover:border-primary bg-background shadow-sm gap-2 text-xs cursor-pointer"
            aria-expanded={showAllMobile}
            aria-controls="proof"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            {showAllMobile ? "Show less proof" : "See more proof (4)"}
          </Button>
        </div>
      </div>
    </section>
  );
}
