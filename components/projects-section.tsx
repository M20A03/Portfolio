"use client";

import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Wholesale & Retail E-Commerce Website",
    description:
      "A full-stack e-commerce platform for Roshan Enterprises, enabling both retail and wholesale purchasing. Features guest browsing, Firebase authentication, interactive cart, protected checkout, order history, and a premium dark-mode UI with glassmorphism effects.",
    tech: ["React", "Vite", "Firebase", "Vanilla CSS", "Lucide React"],
    github: "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
    live: "https://e-commerce-roshan-enterprises-dhn.web.app",
    date: "Jan 2026",
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "🛒",
    image: "/images/srs-ecommerce.png",
    isPrivate: false,
    stats: "JS 68.6% · CSS 31.1% · Semester Final Project",
    category: "Full-Stack",
  },
  {
    title: "Future Working App",
    description:
      "A next-generation B2B2C marketplace connecting wholesalers, retailers, and customers — competing with apps like Zepto, Blinkit & Instamart. Currently in active development with modern architecture.",
    tech: ["React", "TypeScript", "Node.js", "Firebase"],
    github: null,
    live: null,
    date: "2026",
    color: "from-violet-500/20 to-purple-500/20",
    emoji: "🚀",
    image: "/images/mrg-app-preview.png",
    isPrivate: true,
    stats: "Private · In Active Development",
    category: "Full-Stack",
  },
  {
    title: "Online Meeting App",
    description:
      "A prototype meeting platform with user registration, login via Firebase authentication, and meeting creation/management. Users can create and view their scheduled meetings — designed as a foundation for a full WebRTC video conferencing solution.",
    tech: ["HTML", "CSS", "Python", "JavaScript", "Firebase"],
    github: "https://github.com/M20A03/OnlineMeetingApp",
    live: null,
    date: "Nov 2025",
    color: "from-green-500/20 to-teal-500/20",
    emoji: "🎥",
    image: "/images/project-meeting.png",
    isPrivate: false,
    stats: "HTML 40.9% · Python 40.8% · Prototype",
    category: "Full-Stack",
  },
  {
    title: "Amazon Clone",
    description:
      "A pixel-perfect front-end recreation of the Amazon India homepage. Built with pure HTML and CSS to practice responsive layout design, replicating the navigation bar, hero banner, product grid, and footer with real product images.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/M20A03/Amazon-Clone-",
    live: null,
    date: "Sep 2025",
    color: "from-orange-500/20 to-amber-500/20",
    emoji: "📦",
    image: "/images/project-amazon-clone.png",
    isPrivate: false,
    stats: "HTML · CSS · Front-End Practice",
    category: "Frontend",
  },
  {
    title: "Study Archive",
    description:
      "A campus resource platform built to help students manage and access study materials, notes, and resources. Powered by Firebase for real-time sync, it serves as a central digital library for college coursework.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/M20A03/StudyArchive",
    live: "https://straw-hats-7795d.web.app",
    date: "Feb 2026",
    color: "from-purple-500/20 to-pink-500/20",
    emoji: "📚",
    image: "/images/project-study-archive.png",
    isPrivate: false,
    stats: "4 Commits · Firebase Hosted",
    category: "Full-Stack",
  },
  {
    title: "Search Algorithm Simulator",
    description:
      "An interactive web app with 5 visual simulations of Linear and Binary search algorithms, plus 2 real-life problem simulations. Features an integrated AI chatbot (Star-Command AI) to explain concepts and guide students through the search processes step-by-step.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/M20A03/Linear-and-Bineary-Search-Simulation",
    live: "https://linear-and-binary-search.web.app",
    date: "Feb 2026",
    color: "from-cyan-500/20 to-blue-500/20",
    emoji: "🔍",
    image: "/images/project-search-sim.png",
    isPrivate: false,
    stats: "AI Chatbot · 5 Simulations · DSA Simulation",
    category: "Tools",
  },
  {
    title: "Angular Bakery App",
    description:
      "A full-featured bakery e-commerce and management application built with Angular. Includes product listings, order management, and a Firebase backend — deployed live on Firebase Hosting.",
    tech: ["Angular", "TypeScript", "SCSS", "Firebase", "Firestore"],
    github: "https://github.com/M20A03/Angappbackery",
    live: "https://angappbackery-216fe.web.app",
    date: "Feb 2026",
    color: "from-rose-500/20 to-red-500/20",
    emoji: "🧁",
    image: "/images/project-bakery.png",
    isPrivate: false,
    stats: "TypeScript 45.3% · SCSS 32.7% · Firebase Deployed",
    category: "Full-Stack",
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Tools"] as const;

function ProjectImage({ image, title, color, emoji }: { image: string | null; title: string; color: string; emoji: string }) {
  const [imgError, setImgError] = useState(false);

  if (!image || imgError) {
    return (
      <div className={`relative h-40 bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
        />
        <span className="text-6xl select-none drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
          {emoji}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden">
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Featured
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty mb-8">
            A selection of projects that showcase my skills in web development,
            from interactive tools to full-stack applications.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-transparent border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              layout
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="group relative border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden flex flex-col h-full py-0 gap-0">
                {/* Private badge */}
                {project.isPrivate && (
                  <Badge variant="secondary" className="absolute top-3 left-3 z-10 gap-1.5 rounded-full bg-background/80 backdrop-blur-sm border-border text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    Private
                  </Badge>
                )}

                {/* Image / Fallback */}
                <ProjectImage image={project.image} title={project.title} color={project.color} emoji={project.emoji} />

                {/* Date badge */}
                <Badge variant="outline" className="absolute top-3 right-3 rounded-full bg-background/70 backdrop-blur-sm text-foreground border-border">
                  {project.date}
                </Badge>

                {/* Content */}
                <CardContent className="p-6 flex flex-col flex-1">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.slice(3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Stats line */}
                  <Separator className="mb-3" />
                  <p className="text-xs text-primary/70 font-medium mb-4">
                    {project.stats}
                  </p>
                </CardContent>

                {/* Links */}
                <CardFooter className="px-6 pb-6 pt-0 flex items-center gap-3">
                  {project.github ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent text-xs"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View source on GitHub</TooltipContent>
                    </Tooltip>
                  ) : project.isPrivate ? (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="gap-2 border-border bg-transparent text-xs opacity-60 cursor-not-allowed"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Private Repo
                    </Button>
                  ) : null}
                  {project.live && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          size="sm"
                          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-xs"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Open live demo</TooltipContent>
                    </Tooltip>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 px-8 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
          >
            <a href="https://github.com/M20A03" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
