"use client";

import { ExternalLink, Github, Lock, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectData, type ProjectData, type ProjectCategory } from "@/data/projectData";

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
const categories = ["All", "Full-Stack", "Frontend", "Tools"] as const;

function ProjectImage({ image, title, color, emoji }: { image: string | null; title: string; color: string; emoji: string }) {
  const [imgError, setImgError] = useState(false);

  if (!image || imgError) {
    return (
      <div className={`relative h-44 bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden border-b border-border/40`}>
        <div
          className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity"
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, white 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
        />
        <span className="text-6xl select-none drop-shadow-md group-hover:scale-110 transition-transform duration-500">
          {emoji}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden border-b border-border/40">
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>(projectData);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  const INITIAL_PROJECT_COUNT = 6;
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubMetadata() {
      setIsLoadingProjects(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
          {
            headers: { Accept: "application/vnd.github+json" },
          }
        );

        if (response.ok) {
          const repos = (await response.json()) as GithubRepo[];
          const repoMap = new Map(repos.map((r) => [r.name.toLowerCase(), r]));

          const enriched = projectData.map((project) => {
            const repoName = project.slug;
            const matched = repoMap.get(repoName.toLowerCase());
            if (matched) {
              return {
                ...project,
                stats: project.stats || `${matched.stargazers_count} ★ · ${matched.forks_count} forks`,
                githubUrl: project.githubUrl === null ? null : (project.githubUrl || matched.html_url),
                demoUrl: project.demoUrl === null ? null : (project.demoUrl || matched.homepage),
              };
            }
            return project;
          });

          if (isMounted) {
            setProjects(enriched);
          }
        }
      } catch {
        // Fallback to static projectData on network error
      } finally {
        if (isMounted) {
          setIsLoadingProjects(false);
        }
      }
    }

    void fetchGithubMetadata();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  return (
    <section id="projects" aria-label="Featured Projects and Engineering Case Studies" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-card/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            My Portfolio & Engineering Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 text-balance">
            Featured <span className="text-primary">Projects & Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty mb-8">
            Explore key full-stack applications, interactive tools, and web platforms built with React, Next.js, TypeScript, and Firebase.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border-border hover:border-primary hover:bg-secondary bg-transparent"
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.slug}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                layout
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
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
                  <Badge variant="outline" className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground border-border text-xs">
                    {project.date}
                  </Badge>

                  {/* Content */}
                  <CardContent className="p-6 flex flex-col flex-1">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs px-2.5 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/case-study/${project.slug}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {project.outcome && (
                      <p className="text-xs text-foreground/80 bg-secondary/60 border border-border rounded-lg p-2.5 mb-3 leading-relaxed">
                        <span className="font-semibold text-primary">Outcome:</span> {project.outcome}
                      </p>
                    )}

                    <Separator className="mb-3" />
                    <p className="text-xs text-primary/70 font-medium mb-2">
                      {project.stats || "Recruiter-ready case study"}
                    </p>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap items-center gap-2">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-xs font-semibold rounded-full"
                    >
                      <Link href={`/case-study/${project.slug}`}>
                        <LayoutGrid className="w-3.5 h-3.5" />
                        Case Study
                      </Link>
                    </Button>

                    {project.demoUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1.5 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent text-xs rounded-full"
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Demo
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Open live demo</TooltipContent>
                      </Tooltip>
                    )}

                    {project.githubUrl && !project.isPrivate && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1.5 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent text-xs rounded-full"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5" />
                              Code
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>View source on GitHub</TooltipContent>
                      </Tooltip>
                    )}
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Projects Toggle */}
        {filteredProjects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-10 text-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="gap-2 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold shadow-lg shadow-primary/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              {showAllProjects
                ? "Show Less Projects"
                : `See More Projects (${filteredProjects.length - INITIAL_PROJECT_COUNT} remaining)`}
            </Button>
          </div>
        )}

        {/* View GitHub All Button */}
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 px-8 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent rounded-full font-medium"
          >
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Explore All Repositories on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
