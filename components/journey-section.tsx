"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, Code, Database, Sparkles, TrendingUp, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
    {
        date: "2025 — 2029",
        title: "Academic Excellence & Science Pivot",
        location: "Christ (Deemed to be University), Bangalore",
        description: "BCA Scholar making a bold pivot from a Commerce foundation to Computer Science (cleared entrance on first attempt). Maintained 3.33/4.0 CGPA while mastering Data Structures & Algorithms, Systems Architecture, and Database Systems.",
        icon: GraduationCap,
        badge: "Education",
    },
    {
        date: "2026 — Present",
        title: "AI & Computer Vision Research Lead (Stipendiary)",
        location: "Christ University Research Grant",
        description: "Leading confidential stipend-funded research engineering an automated 4-stage computer vision & Vis-NIR spectral curation pipeline standardizing 11,500 multimodal dataset artifacts across 2,300 physical specimens using U2-Net and Lanczos-3.",
        icon: Cpu,
        badge: "Stipend Research",
    },
    {
        date: "2026",
        title: "Praxirence: Ambient Clinical Intelligence",
        location: "Healthcare AI Ecosystem",
        description: "Architected a zero-trust ambient healthcare platform featuring 2 native Android mobile apps (Doctor & Patient), FastAPI backend, fine-tuned Whisper & Mistral-7B clinical SOAP synthesis, and zero audio retention AES-256 vault.",
        icon: Sparkles,
        badge: "Flagship AI",
    },
    {
        date: "May 2026",
        title: "Web Development Intern",
        location: "ShadowFox (Remote)",
        description: "Completed intensive frontend development internship building modular, accessible UI components adhering to WCAG 2.1 AA standards, earning a verified Certificate of Completion (SF05VIP397).",
        icon: Briefcase,
        badge: "Internship",
    },
    {
        date: "Dec 2025",
        title: "Wholesale & Retail E-Commerce Marketplace",
        location: "Roshan Enterprises Production",
        description: "Engineered a production B2B/B2C marketplace on React, Vite, and Firebase supporting dual wholesale and retail checkout flows with react-window list virtualization for 60fps scrolling across 50+ items.",
        icon: TrendingUp,
        badge: "Full-Stack",
    },
    {
        date: "Feb 2026",
        title: "Hackathon Breakthroughs & Competitive Wins",
        location: "PromptWars, InHack '26, CODEX '26",
        description: "Participated and excelled in high-intensity sprints including PromptWars (Google Devs x Christ Univ), InHack '26, HackNova, CODEX '26 (Don Bosco), and earned SPARK Research Program certification.",
        icon: Zap,
        badge: "Hackathons",
    },
    {
        date: "2026",
        title: "Credex AI Financial Spend Engine",
        location: "Fintech & Claude SDK Architecture",
        description: "Built an AI-powered financial auditing platform for Indian startups in INR (₹) utilizing Anthropic's Claude SDK, Supabase PostgreSQL, and spring-physics visualization tickers.",
        icon: TrendingUp,
        badge: "Fintech & AI",
    },
    {
        date: "2026 — Present",
        title: "Nexus Scholar: AI Research Graph Engine",
        location: "Academic Intelligence System",
        description: "Architected Nexus Scholar, combining Neo4j graph topologies with pgvector 768d semantic embeddings, LangGraph multi-agent orchestration, and Next.js 15 for autonomous research discovery.",
        icon: Database,
        badge: "Knowledge Graphs",
    },
    {
        date: "2025 — Present",
        title: "Campus Leadership & Samagra Department Portal",
        location: "Computer Science Association (CSA)",
        description: "Single-handedly designed and maintain Samagra, the official departmental portal for Christ University's CSA. Active mentor helping peers in Java, Python, and web development.",
        icon: Code,
        badge: "Leadership",
    },
];

export function JourneySection() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile, { passive: true });
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const initialCount = isMobile ? 2 : 3;
    const visibleMilestones = showAll ? milestones : milestones.slice(0, initialCount);

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
                <div className="w-full">
                    {/* Timeline List with Confined Central Line */}
                    <div className="relative">
                        {/* Central Line: Stops cleanly at the last milestone */}
                        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border/80 -translate-x-1/2 pointer-events-none" />

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
                    </div>

                    {/* Expand/Collapse Button (Separated from timeline line) */}
                    {milestones.length > initialCount && (
                        <div className="mt-10 flex justify-center print:hidden relative z-10">
                            <button
                                type="button"
                                onClick={() => setShowAll((prev) => !prev)}
                                className="px-6 py-2.5 rounded-full border border-border bg-card hover:bg-muted/80 text-sm font-semibold text-primary hover:text-primary/90 transition-all cursor-pointer shadow-md hover:shadow-lg"
                                aria-expanded={showAll}
                                aria-controls="journey"
                            >
                                {showAll ? "See less journey" : `See full timeline (${milestones.length - initialCount} more milestones)`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
