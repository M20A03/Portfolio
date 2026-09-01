"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, Code, Database, Sparkles, TrendingUp, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
    {
        date: "2025 — Present",
        title: "Academic Excellence & Science Pivot",
        location: "Christ (Deemed to be University), Bangalore",
        description: "BCA Scholar bridging the gap from Commerce to Computer Science. Maintained 3.33 CGPA while mastering Data Structures, Algorithms, Discrete Mathematics, and Systems Architecture.",
        icon: GraduationCap,
        badge: "Education",
    },
    {
        date: "Sep 2025",
        title: "First Collaborative Architecture",
        location: "Christ University Venture",
        description: "Delivered a full-stack platform tackling real-time data flow. Architected the backend using JavaScript, PHP, and relational SQL persistence.",
        icon: Briefcase,
        badge: "Team Project",
    },
    {
        date: "Nov 2025",
        title: "Meeting & Telemetry Prototype",
        location: "Solo Initiative",
        description: "Engineered a Python and MySQL-based prototype. A pivotal solo breakthrough mastering asynchronous data synchronization, socket handling, and schema design.",
        icon: Code,
        badge: "Backend",
    },
    {
        date: "Feb 2026",
        title: "Hackathon Breakthroughs & React Modernization",
        location: "Major Hackathons & GameJams",
        description: "Pivoted fully into the modern React/Next.js and TypeScript ecosystem. Built rapid prototypes in high-pressure 48-hour sprints, mastering state machines and performance tuning.",
        icon: Zap,
        badge: "Hackathons",
    },
    {
        date: "Feb 2026",
        title: "Credex AI Financial Spend Engine",
        location: "Fintech & Claude SDK Architecture",
        description: "Engineered Credex, an AI-powered financial auditing platform for Indian startups in INR (₹) utilizing Anthropic's Claude SDK, Supabase, and GSAP micro-interactions.",
        icon: TrendingUp,
        badge: "Fintech & AI",
    },
    {
        date: "Feb 2026",
        title: "MRG Marketplace & Enterprise B2B2C",
        location: "Production Platform",
        description: "Architected a scalable multi-vendor marketplace featuring clean design-to-code transitions, sub-50ms API endpoints, and Stripe/Razorpay payment flows.",
        icon: Briefcase,
        badge: "Full-Stack",
    },
    {
        date: "March 2026",
        title: "Akion Fintech Algo-Trading Platform",
        location: "High-Frequency Analytics",
        description: "Built an institutional algorithmic trading terminal featuring real-time WebSocket order books, risk simulation engines, and sub-millisecond execution telemetry.",
        icon: TrendingUp,
        badge: "Quantitative",
    },
    {
        date: "2026 — Present",
        title: "Freelance Software Engineer",
        location: "Singularium Technologies",
        description: "Delivering high-performance client web platforms, custom full-stack applications, and API integrations tailored for scaling enterprise businesses.",
        icon: Briefcase,
        badge: "Industry",
    },
    {
        date: "2026 — Present",
        title: "Computer Vision & YOLOv11 Deep Learning",
        location: "Christ University Research",
        description: "Trained and deployed custom YOLOv11 object detection models reaching 94.6% mAP@0.5, integrated with the Thermino thermal analytics platform.",
        icon: Cpu,
        badge: "Deep Learning",
    },
    {
        date: "2026 — Present",
        title: "Nexus Scholar: AI Knowledge Graph Engine",
        location: "Academic Intelligence System",
        description: "Architected Nexus Scholar, combining Neo4j graph topologies with pgvector 768d semantic embeddings, LangGraph multi-agent orchestration, and Next.js 15 for autonomous research discovery.",
        icon: Database,
        badge: "Knowledge Graphs",
    },
    {
        date: "2026 — Present",
        title: "AntiGravity Agentic Engineering & LLM Automation",
        location: "Advanced AI Systems",
        description: "Pioneering agentic coding workflows, MCP server tools, and LLM-grounded autonomous architectures across full-stack TypeScript and Python environments.",
        icon: Sparkles,
        badge: "GenAI & Agents",
    },
    {
        date: "May 2026 — Present",
        title: "Software Engineering Internship",
        location: "shadowfox.org.in",
        description: "Professional full-stack software development experience, collaborating on production codebases, automated CI/CD pipelines, and industry best practices.",
        icon: Briefcase,
        badge: "Internship",
    },
];

export function JourneySection() {
    const [showAll, setShowAll] = useState(false);

    const visibleMilestones = showAll ? milestones : milestones.slice(0, 4);

    return (
        <section id="journey" className="scroll-mt-24 py-10 md:py-16 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 md:mb-14 text-center">
                    <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2 sm:mb-3">
                        The Timeline & Milestones
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        From foundational Commerce to Computer Science Scholar, AI Systems Architect, and Full-Stack Engineer at Christ University, Bangalore.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                    <ol className="space-y-6 md:space-y-8" aria-label="Journey timeline milestones">
                        {visibleMilestones.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Dot / Icon */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full border-3 border-background bg-card flex items-center justify-center z-10 shadow-lg group hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"} pl-10 w-full`}>
                                        <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card/70 backdrop-blur-sm">
                                            <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col gap-2.5">
                                                <div className={`flex items-center gap-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                                    <Badge variant="outline" className="w-fit text-primary border-primary/20 text-[11px] font-bold uppercase tracking-wider">
                                                        {item.date}
                                                    </Badge>
                                                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted">
                                                        {item.badge}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className={`text-xs sm:text-sm font-medium text-muted-foreground flex items-center gap-1.5 ${
                                                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                                }`}>
                                                    <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span>{item.location}</span>
                                                </p>
                                                <p className="text-xs sm:text-sm md:text-sm text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ol>

                    {/* Expand/Collapse Button */}
                    {milestones.length > 4 && (
                        <div className="mt-8 flex justify-center print:hidden">
                            <button
                                type="button"
                                onClick={() => setShowAll((prev) => !prev)}
                                className="px-5 py-2 rounded-full border border-border bg-muted/40 hover:bg-muted/80 text-sm font-semibold text-primary hover:text-primary/90 transition-all cursor-pointer shadow-2xs"
                                aria-expanded={showAll}
                                aria-controls="journey"
                            >
                                {showAll ? "See less journey" : `See full timeline (${milestones.length - 4} more milestones)`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
