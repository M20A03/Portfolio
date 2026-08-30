"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sparkles, CheckCircle2, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug } from "@/data/projectData";
import { motion } from "framer-motion";

const siteUrl = "https://www.mayankraj.me";

interface DynamicCaseStudyProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: DynamicCaseStudyProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category === "Tools" ? "EducationalApplication" : "DeveloperApplication",
    "operatingSystem": "Web",
    "author": {
      "@type": "Person",
      "name": "Mayank Raj Gupta",
      "url": siteUrl,
    },
    "url": `${siteUrl}/case-study/${project.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": `${siteUrl}/#projects`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${siteUrl}/case-study/${project.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([projectSchema, breadcrumbSchema]) }}
      />
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Button asChild variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary">
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full px-3 py-1">Case Study</Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1">{project.category}</Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1">{project.date}</Badge>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-medium">{project.subtitle || project.title}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <Button asChild size="lg" className="gap-2 rounded-full px-6">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6 bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <Card className="relative overflow-hidden border-border/70 bg-background/80 shadow-2xl shadow-primary/10">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Key Highlights</p>
                    <p className="text-sm text-muted-foreground">{project.stats || "Architecture & Implementation"}</p>
                  </div>
                </div>
                <Separator />
                <ul className="space-y-3">
                  {(project.highlights || [
                    "Clean responsive user experience designed for real-world usage",
                    "Modular architecture with component reusability",
                    "Optimized performance and accessibility compliance",
                    "Built with standard software design principles"
                  ]).map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="mb-6 flex items-center gap-3">
          <LayoutGrid className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Tech Stack & Tools Used</h2>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {project.techStack.map((tech) => (
            <motion.div
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
              }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm rounded-full bg-primary/10 border-primary/20 text-primary hover:bg-primary/25 transition-colors cursor-default">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {project.process && project.process.length > 0 && (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8"
          >
            {project.process.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                }}
              >
                <Card className="border-border/70 bg-card/70 hover:border-primary/50 transition-colors duration-300 h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="text-sm font-bold text-primary">0{idx + 1}. {step.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.section>

      {project.outcome && (
        <motion.section 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20"
        >
          <Card className="overflow-hidden border-border/70 bg-primary/5">
            <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Outcome</p>
                <h2 className="text-2xl sm:text-3xl font-bold">{project.outcome}</h2>
                <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Demonstrates end-to-end software execution, clean UI polish, and practical problem solving.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2 rounded-full px-6 group">
                  <Link href="/#projects">
                    Back to Portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      )}
    </main>
  );
}
