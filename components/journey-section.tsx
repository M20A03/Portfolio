"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestones = [
    {
        date: "2025 — Present",
        title: "Academic Excellence",
        location: "Christ University, Bangalore",
        description: "BCA Scholar bridging the gap from Commerce to Science. Maintaining a 3.2+/4.0 CGPA while mastering Software Engineering and Web Architecture.",
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        date: "Sep 2025",
        title: "First Team Venture",
        location: "Collaborative Project",
        description: "Conquered the 'End-Sem' challenge by delivering a functional web platform. Architected the backend using JavaScript and PHP.",
        icon: Briefcase,
        color: "bg-indigo-500",
    },
    {
        date: "Oct 2025",
        title: "AI-Powered Evolution",
        location: "Skills Modernization",
        description: "Leveraged AI as a powerful mentor to strengthen technical foundations. Started building complex projects to accelerate learning.",
        icon: Zap,
        color: "bg-yellow-500",
    },
    {
        date: "Nov 2025 — Mar 2026",
        title: "2nd Semester Excellence",
        location: "Christ University, Bangalore",
        description: "Achieved 3.33 CGPA in the 2nd semester while balancing rigorous coursework with hands-on project development and competitive programming.",
        icon: GraduationCap,
        color: "bg-emerald-500",
    },
    {
        date: "Nov 2025",
        title: "Online Meeting Prototype",
        location: "Solo Initiative",
        description: "Engineered a Python and MySQL-based prototype. A pivotal solo project that deepened my understanding of data persistence and logic.",
        icon: Code,
        color: "bg-violet-500",
    },
    {
        date: "Feb 2026",
        title: "The Turning Point",
        location: "Hackathons & GameJams",
        description: "Pivoted to React and Angular. Participated in major hackathons and GameJams, marking the shift towards professional-grade development.",
        icon: Zap,
        color: "bg-indigo-500",
    },
    {
        date: "Feb 2026",
        title: "MRG App Architecture",
        location: "B2B2C Marketplace",
        description: "Architected a complex marketplace platform with a deep focus on UI/UX aesthetics and premium design-to-code transitions.",
        icon: Briefcase,
        color: "bg-emerald-500",
    },
    {
        date: "March 2026",
        title: "Portfolio & Simulations",
        location: "Current Evolution",
        description: "Developing this premium portfolio while building complex Linear and Binary search visualizers to master algorithmic UI/UX.",
        icon: Code,
        color: "bg-amber-500",
    },
    {
        date: "May 2026 — Present",
        title: "Web Development Internship",
        location: "shadowfox.org.in",
        description: "Focused professional experience in modern web development. Working on real-world projects to strengthen full-stack capabilities and industry practices.",
        icon: Briefcase,
        color: "bg-cyan-500",
    },
];

export function JourneySection() {
    const [showAllMobile, setShowAllMobile] = useState(false);
    const visibleMilestones = showAllMobile ? milestones : milestones.slice(0, 3);

    return (
        <section id="journey" className="scroll-mt-24 py-12 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">
                        The Timeline
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A visual overview of my education, key projects, and professional milestones.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                    <ol className="space-y-12 md:space-y-24" aria-label="Journey timeline milestones">
                        {visibleMilestones.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Dot / Icon */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-background bg-card flex items-center justify-center z-10 shadow-xl group hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"} pl-12 w-full`}>
                                    <Card className="group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                                        <CardContent className="p-6 md:p-8 flex flex-col gap-3">
                                            <Badge variant="outline" className="w-fit text-primary border-primary/20 text-xs font-black uppercase tracking-widest">
                                                {item.date}
                                            </Badge>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-semibold text-muted-foreground italic flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-primary shrink-0" />
                                                {item.location}
                                            </p>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.li>
                        ))}
                    </ol>

                    {/* Mobile See More */}
                    {milestones.length > 3 && (
                        <div className="mt-6 md:hidden flex justify-center">
                            <button
                                type="button"
                                onClick={() => setShowAllMobile((prev) => !prev)}
                                className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                                aria-expanded={showAllMobile}
                                aria-controls="journey"
                            >
                                {showAllMobile ? "See less journey" : `See more journey (${milestones.length - 3})`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
