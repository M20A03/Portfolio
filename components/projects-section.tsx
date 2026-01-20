"use client";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Wholesale & Retail E-Commerce Website",
    description:
      "Full-stack e-commerce website for wholesale and retail product distribution. Allows retailers to place bulk orders, track supply availability, and receive delivery updates.",
    tech: ["React", "HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
    date: "Jan 2026 — Ongoing",
  },
  {
    title: "Online Meeting Prototype",
    description:
      "Meeting platform UI with login and meeting start/join interface. Python Flask backend with Pandas and Numpy for data handling. MySQL stores meeting logs and user details.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL", "Pandas"],
    github: "https://github.com/M20A03/OnlineMeetingApp",
    date: "Nov 2025",
  },
  {
    title: "Amazon Clone Prototype",
    description:
      "Responsive Amazon-style e-commerce website with product listings, shopping cart, and user authentication. Features product display layouts and cart functionality with MySQL database.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/M20A03/Amazon-Clone-.git",
    date: "Sep 2025",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-card/50">
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
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
            A selection of projects that showcase my skills in web development,
            from interactive games to full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Project Number */}
              <span className="absolute top-6 right-6 text-7xl font-bold text-border/50 group-hover:text-primary/20 transition-colors select-none">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Date */}
                <p className="text-sm text-muted-foreground mb-3">{project.date}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                {project.github && (
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/M20A03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8 border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
