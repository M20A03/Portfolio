"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack & MERN Developer",
  "AI Systems & Knowledge Graph Architect",
  "Next.js 15 & React 19 Engineer",
  "Deep Learning & YOLOv11 Specialist",
  "Cloud & SRE Infrastructure",
];

const proofChips = [
  "18+ Deployed Case Studies",
  "Knowledge Graphs & AI Systems",
  "React 19 & Next.js 15",
  "TypeScript (Strict Mode)",
];

function MagneticIcon({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }, []);

  const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return (
    <a
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 0.2s ease-out" }}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for subtle gradient blob on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter loop
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), Math.random() * 40 + 40);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      ref={sectionRef}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      {/* Mouse-following gradient blob (Desktop only) */}
      <div
        className="absolute pointer-events-none w-[450px] h-[450px] rounded-full opacity-20 blur-3xl bg-primary/30 transition-transform duration-[1500ms] ease-out hidden md:block"
        style={{
          left: mousePos.x - 225,
          top: mousePos.y - 225,
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* Main bounded container preventing 4K over-stretching */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full min-h-[500px] flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">

          {/* LEFT: Core SEO & Action Column */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status Pill */}
            <div className="flex justify-center lg:justify-start mb-5">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border-primary/30 text-primary text-xs sm:text-sm font-semibold backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Full-Stack &amp; SRE Roles
              </Badge>
            </div>

            {/* H1 Semantic Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-3 tracking-tight leading-[1.15]">
              Mayank Raj{" "}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-teal-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Gupta
              </span>
            </h1>

            {/* Dynamic Animated Role Ticker */}
            <div
              className="text-xl sm:text-2xl md:text-3xl text-foreground font-semibold mb-4 min-h-[2.25rem] flex items-center justify-center lg:justify-start"
              aria-live="polite"
            >
              <span>{displayed}</span>
              <span className="animate-pulse text-primary ml-1" aria-hidden="true">|</span>
            </div>

            {/* H2 Semantic Punchy Tagline */}
            <h2 className="text-sm sm:text-base md:text-lg text-foreground/90 dark:text-slate-200 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-normal">
              Full-Stack &amp; MERN Developer building high-performance, accessible web platforms, research knowledge graphs, and AI-driven systems.
            </h2>

            {/* Feature Proof Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {proofChips.map((chip) => (
                <Badge
                  key={chip}
                  variant="secondary"
                  className="rounded-full px-3.5 py-1.5 bg-card/85 dark:bg-slate-900/80 border border-border/80 dark:border-white/20 text-xs text-foreground dark:text-slate-100 font-medium shadow-xs backdrop-blur-md hover:border-primary/50 transition-colors"
                >
                  {chip}
                </Badge>
              ))}
            </div>

            {/* TWO ACTIVE CTAs + RESUME BUTTON */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-7 py-6 text-sm sm:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Code className="w-4 h-4" />
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-7 py-6 text-sm sm:text-base font-semibold border-border/80 dark:border-white/25 hover:bg-secondary dark:hover:bg-white/10 hover:border-primary/70 transition-all hover:scale-105 active:scale-95 bg-card/80 dark:bg-slate-900/90 text-foreground dark:text-white gap-2 cursor-pointer shadow-md backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me / Freelance
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto px-5 py-6 text-sm sm:text-base font-medium gap-2 text-foreground/90 dark:text-slate-200 hover:text-primary hover:bg-primary/10 border border-border/60 dark:border-white/15 bg-card/50 dark:bg-slate-900/50 backdrop-blur-md transition-all active:scale-95 group focus-visible:ring-2 focus-visible:ring-primary"
              >
                <a href="/resume.pdf" download="Mayank_Raj_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {[
                { href: "https://github.com/M20A03", icon: Github, label: "GitHub Profile" },
                { href: "https://www.linkedin.com/in/mayank-raj-gupta-159020396", icon: Linkedin, label: "LinkedIn Profile" },
                { href: "mailto:mayankrajgupta01@gmail.com", icon: Mail, label: "Send Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <MagneticIcon
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-full border border-border/80 dark:border-white/20 bg-card/60 dark:bg-slate-900/80 text-foreground/90 dark:text-slate-200 hover:text-primary hover:border-primary hover:bg-primary/15 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 inline-block focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </MagneticIcon>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* RIGHT: Avatar with Explicit Width & Height */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
              {/* Outer Pulsing Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent blur-2xl animate-pulse pointer-events-none" />

              {/* Gradient Border Frame */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/40 p-1 shadow-2xl shadow-primary/15">
                <div className="w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center relative">
                  {avatarError ? (
                    <span className="text-6xl select-none" aria-hidden="true">👨‍💻</span>
                  ) : (
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Portrait of Mayank Raj Gupta - Full Stack Developer"
                      width={320}
                      height={320}
                      priority
                      className="object-cover w-full h-full rounded-full"
                      onError={() => setAvatarError(true)}
                    />
                  )}
                </div>
              </div>

              {/* Decorative Floating Status Rings */}
              <div
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary/80 border-2 border-background animate-bounce"
                style={{ animationDelay: "0.4s" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-blue-500/70 border-2 border-background animate-bounce"
                style={{ animationDelay: "0.9s" }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce p-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary rounded-full"
            aria-label="Scroll down to About section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
