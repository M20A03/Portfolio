"use client";

import { BadgeCheck, Clock3, MessageSquareQuote, Rocket, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const proofStats = [
  {
    icon: Rocket,
    label: "Production Projects",
    value: "7+",
    note: "Deployed across Firebase and Vercel",
  },
  {
    icon: BadgeCheck,
    label: "Accessibility Focus",
    value: "WCAG 2.1",
    note: "Semantic structure and contrast checks",
  },
  {
    icon: Clock3,
    label: "Typical Response",
    value: "< 24h",
    note: "For freelance and internship communication",
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const visibleProofStats = isDesktop ? proofStats : proofStats.slice(0, 2);
  return (
    <section id="proof" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Proof of Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Results, Signals,
            <span className="text-primary"> and Momentum</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            A portfolio should show outcomes, not just screens. This section captures execution quality,
            collaboration feedback, and what I am building next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {visibleProofStats.map(({ icon: Icon, label, value, note }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">{label}</p>
                  <p className="text-2xl font-bold text-foreground mb-2">{value}</p>
                  <p className="text-sm text-muted-foreground">{note}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          {(isDesktop || showAllMobile) && testimonials.map((item, index) => (
            <motion.div
              key={`${item.author}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full border-border/80">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MessageSquareQuote className="w-4 h-4 text-primary" />
                    Collaboration Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.quote}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="h-full border-border/80 bg-gradient-to-b from-card to-primary/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Now Building
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                  Active in 2026
                </Badge>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {nowItems.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Mobile see-more for proof: reveals Testimonials + Now Building as two items */}
        {!isDesktop && (
          <div className="mt-6 flex justify-center print:hidden md:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile((p) => !p)}
              className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              aria-expanded={showAllMobile}
              aria-controls="proof"
            >
              {showAllMobile ? "See less proof" : `See more proof (2)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
