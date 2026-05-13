"use client";

import { ExternalLink, Github, Lock, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ProjectCategory = "Full-Stack" | "Frontend" | "Tools";

type Project = {
  title: string;
  description: string;
  outcome?: string;
  tech: string[];
  github: string | null;
  live: string | null;
  date: string;
  color: string;
  emoji: string;
  image: string | null;
  isPrivate: boolean;
  stats: string;
  category: ProjectCategory;
};

type GithubRepo = {
  name: string;
  description: string | null;
  private: boolean;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
};

const GITHUB_USERNAME = "M20A03";

const fallbackProjects: Project[] = [
  {
    title: "Wholesale & Retail E-Commerce Website",
    description:
      "A full-stack e-commerce platform for Roshan Enterprises, enabling both retail and wholesale purchasing. Features guest browsing, Firebase authentication, interactive cart, protected checkout, order history, and a premium dark-mode UI with glassmorphism effects.",
    outcome: "Delivered a complete checkout flow and role-based buying journey for both retail and wholesale customers.",
    tech: ["React", "Vite", "Firebase", "Vanilla CSS", "Lucide React"],
    github: "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
    live: "https://e-commerce-roshan-enterprises-dhn.web.app",
    date: "Jan 2026",
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "🛒",
    image: "/images/srs-ecommerce.png",
    isPrivate: false,
    stats: "JS 68.6% · CSS 31.1% · Semester Final Project",
    category: "Full-Stack" as const,
  },
  {
    title: "Future Working App",
    description:
      "A next-generation B2B2C marketplace connecting wholesalers, retailers, and customers — competing with apps like Zepto, Blinkit & Instamart. Currently in active development with modern architecture.",
    outcome: "Defined core architecture and feature roadmap for a scalable multi-actor commerce platform.",
    tech: ["React", "TypeScript", "Node.js", "Firebase"],
    github: null,
    live: null,
    date: "2026",
    color: "from-violet-500/20 to-purple-500/20",
    emoji: "🚀",
    image: "/images/mrg-app-preview.png",
    isPrivate: true,
    stats: "Private · In Active Development",
    category: "Full-Stack" as const,
  },
  {
    title: "Online Meeting App",
    description:
      "A prototype meeting platform with user registration, login via Firebase authentication, and meeting creation/management. Users can create and view their scheduled meetings — designed as a foundation for a full WebRTC video conferencing solution.",
    outcome: "Validated the authentication and meeting workflow before moving to real-time video architecture.",
    tech: ["HTML", "CSS", "Python", "JavaScript", "Firebase"],
    github: "https://github.com/M20A03/OnlineMeetingApp",
    live: null,
    date: "Nov 2025",
    color: "from-green-500/20 to-teal-500/20",
    emoji: "🎥",
    image: "/images/project-meeting.png",
    isPrivate: false,
    stats: "HTML 40.9% · Python 40.8% · Prototype",
    category: "Full-Stack" as const,
  },
    {
    title: "Lumi Glow",
    description:
      "A modern makeup products website designed to showcase beauty collections with elegant product presentation, responsive shopping-style sections, and a polished user experience across devices.",
    outcome: "Shipped a polished responsive storefront with strong visual hierarchy and brand-focused UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/M20A03/Lumi-Glow",
    live: "https://lumi-glow-sigma.vercel.app",
    date: "Mar 2026",
    color: "from-pink-500/20 to-rose-500/20",
    emoji: "✨",
    image: "/images/lumi-glow.png",
    isPrivate: false,
    stats: "JavaScript · Vercel Deployed",
    category: "Frontend" as const,
  },
  {
    title: "Study Archive",
    description:
      "A campus resource platform built to help students manage and access study materials, notes, and resources. Powered by Firebase for real-time sync, it serves as a central digital library for college coursework.",
    outcome: "Created a single access point for study resources with cloud-backed updates.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/M20A03/StudyArchive",
    live: "https://straw-hats-7795d.web.app",
    date: "Feb 2026",
    color: "from-purple-500/20 to-pink-500/20",
    emoji: "📚",
    image: "/images/project-study-archive.png",
    isPrivate: false,
    stats: "4 Commits · Firebase Hosted",
    category: "Full-Stack" as const,
  },
  {
    title: "Amazon Clone",
    description:
      "A pixel-perfect front-end recreation of the Amazon India homepage. Built with pure HTML and CSS to practice responsive layout design, replicating the navigation bar, hero banner, product grid, and footer with real product images.",
    outcome: "Improved layout precision and responsive CSS implementation through real-world UI reproduction.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/M20A03/Amazon-Clone-",
    live: null,
    date: "Sep 2025",
    color: "from-orange-500/20 to-amber-500/20",
    emoji: "📦",
    image: "/images/project-amazon-clone.png",
    isPrivate: false,
    stats: "HTML · CSS · Front-End Practice",
    category: "Frontend" as const,
  },
  {
    title: "Search Algorithm Simulator",
    description:
      "An interactive web app with 5 visual simulations of Linear and Binary search algorithms, plus 2 real-life problem simulations. Features an integrated AI chatbot (Star-Command AI) to explain concepts and guide students through the search processes step-by-step.",
    outcome: "Made DSA concepts easier to understand with interactive visuals and guided explanations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/M20A03/Linear-and-Bineary-Search-Simulation",
    live: "https://linear-and-binary-search.web.app",
    date: "Feb 2026",
    color: "from-cyan-500/20 to-blue-500/20",
    emoji: "🔍",
    image: "/images/project-search-sim.png",
    isPrivate: false,
    stats: "AI Chatbot · 5 Simulations · DSA Simulation",
    category: "Tools" as const,
  },
  {
    title: "Angular Bakery App",
    description:
      "A full-featured bakery e-commerce and management application built with Angular. Includes product listings, order management, and a Firebase backend — deployed live on Firebase Hosting.",
    outcome: "Delivered an end-to-end Angular commerce workflow with live deployment and backend integration.",
    tech: ["Angular", "TypeScript", "SCSS", "Firebase", "Firestore"],
    github: "https://github.com/M20A03/Angappbackery",
    live: "https://angappbackery-216fe.web.app",
    date: "Feb 2026",
    color: "from-rose-500/20 to-red-500/20",
    emoji: "🧁",
    image: "/images/project-bakery.png",
    isPrivate: false,
    stats: "TypeScript 45.3% · SCSS 32.7% · Firebase Deployed",
    category: "Full-Stack" as const,
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Tools"] as const;

const gradientPalette = [
  "from-blue-500/20 to-indigo-500/20",
  "from-violet-500/20 to-fuchsia-500/20",
  "from-green-500/20 to-teal-500/20",
  "from-orange-500/20 to-amber-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-rose-500/20 to-red-500/20",
  "from-emerald-500/20 to-lime-500/20",
  "from-sky-500/20 to-cyan-500/20",
] as const;

const formatMonthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function toTitle(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function detectCategory(repo: GithubRepo): ProjectCategory {
  const language = repo.language?.toLowerCase() ?? "";
  const topicText = (repo.topics ?? []).join(" ").toLowerCase();

  if (/(tool|cli|utility|script|algorithm|simulation|visualizer)/.test(topicText)) {
    return "Tools";
  }

  if (language === "html" || language === "css" || /(ui|frontend|landing-page)/.test(topicText)) {
    return "Frontend";
  }

  return "Full-Stack";
}

function getTech(repo: GithubRepo) {
  const tech = new Set<string>();
  if (repo.language) {
    tech.add(repo.language);
  }

  (repo.topics ?? []).forEach((topic) => {
    const normalized = topic
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    tech.add(normalized);
  });

  return Array.from(tech).slice(0, 5);
}

function mapGithubRepoToProject(repo: GithubRepo, index: number): Project {
  const category = detectCategory(repo);
  const emoji = category === "Frontend" ? "🎨" : category === "Tools" ? "🛠️" : "🚀";
  const tech = getTech(repo);

  return {
    title: toTitle(repo.name),
    description: repo.description ?? "Project details available in the GitHub repository.",
    outcome: undefined,
    tech: tech.length > 0 ? tech : ["Web"],
    github: repo.html_url,
    live: repo.homepage && repo.homepage.trim() ? repo.homepage : null,
    date: formatMonthYear.format(new Date(repo.pushed_at)),
    color: gradientPalette[index % gradientPalette.length],
    emoji,
    image: null,
    isPrivate: repo.private,
    stats: `${repo.stargazers_count} ★ · ${repo.forks_count} forks · Updated ${formatMonthYear.format(new Date(repo.pushed_at))}`,
    category,
  };
}

function normalizeRepoPath(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.pathname.replace(/\.git$/i, "").replace(/^\/+/, "").toLowerCase();
  } catch {
    return "";
  }
}

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
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [githubLoadError, setGithubLoadError] = useState<string | null>(null);

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const visibleProjects = showAllMobile ? filteredProjects : filteredProjects.slice(0, 3);

  useEffect(() => {
    let isMounted = true;

    async function loadGithubProjects() {
      setIsLoadingProjects(true);
      setGithubLoadError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed (${response.status})`);
        }

        const repos = (await response.json()) as GithubRepo[];
        const publicRepos = repos.filter((repo) => !repo.fork && !repo.archived);
        const repoByPath = new Map(publicRepos.map((repo) => [`${GITHUB_USERNAME.toLowerCase()}/${repo.name.toLowerCase()}`, repo]));

        // Keep only curated projects and enrich their GitHub-backed metadata.
        const transformed = fallbackProjects.map((project, index) => {
          if (!project.github) {
            return project;
          }

          const repoPath = normalizeRepoPath(project.github);
          const matchedRepo = repoByPath.get(repoPath);

          if (!matchedRepo) {
            return project;
          }

          const githubProject = mapGithubRepoToProject(matchedRepo, index);
          return {
            ...project,
            github: githubProject.github,
            live: project.live ?? githubProject.live,
            date: githubProject.date,
            stats: githubProject.stats,
            isPrivate: githubProject.isPrivate,
            tech: project.tech.length > 0 ? project.tech : githubProject.tech,
          };
        });

        if (!isMounted) {
          return;
        }

        setProjects(transformed);
      } catch {
        if (!isMounted) {
          return;
        }

        setProjects(fallbackProjects);
        setGithubLoadError("Unable to load repositories from GitHub. Showing saved projects instead.");
      } finally {
        if (isMounted) {
          setIsLoadingProjects(false);
        }
      }
    }

    void loadGithubProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setShowAllMobile(false);
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-24 py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-card/50">
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
            Curated projects with the problem context, implementation direction, and outcome notes.
          </p>

          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            Live demo first, source code second, screenshots always visible.
          </div>

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

          {(isLoadingProjects || githubLoadError) && (
            <p className="mt-4 text-sm text-muted-foreground">
              {isLoadingProjects ? "Syncing projects from GitHub..." : githubLoadError}
            </p>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
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

                  {project.outcome && (
                    <p className="text-xs text-foreground/80 bg-secondary/60 border border-border rounded-lg p-2.5 mb-3 leading-relaxed">
                      <span className="font-semibold text-primary">Outcome:</span> {project.outcome}
                    </p>
                  )}

                  {/* Stats line */}
                  <Separator className="mb-3" />
                  <p className="text-xs text-primary/70 font-medium mb-4">
                    {project.stats}
                  </p>
                </CardContent>

                {/* Links */}
                <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap items-center gap-3">
                  {project.title === "Wholesale & Retail E-Commerce Website" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent text-xs"
                    >
                      <Link href="/case-study/roshan-enterprises">
                        <LayoutGrid className="w-3.5 h-3.5" />
                        Case Study
                      </Link>
                    </Button>
                  )}
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile See More */}
        {filteredProjects.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              aria-expanded={showAllMobile}
              aria-controls="projects"
            >
              {showAllMobile ? "See less projects" : `See more projects (${filteredProjects.length - 3})`}
            </button>
          </div>
        )}

        {/* View More */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 px-8 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
          >
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
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
