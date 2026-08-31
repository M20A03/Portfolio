"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  User,
  Github,
  Linkedin,
  Download,
  ArrowLeft,
  Star,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ResumePage() {
  const [showAllEducation, setShowAllEducation] = useState(false);

  return (
    <main id="main-content" className="min-h-screen bg-background selection:bg-primary/20">
      {/* Top Navigation Bar - Hidden on Print */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/resume.pdf" download="Mayank_Raj_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Download PDF Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Resume Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 print:py-0 print:px-0">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >
          {/* Header Section */}
          <motion.section variants={fadeInUp} className="pb-8 border-b border-border">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-black text-foreground mb-2">
                  Mayank Raj <span className="text-primary">Gupta</span>
                </h1>
                <p className="text-lg md:text-xl text-primary font-semibold">
                  Full-Stack Software Engineer &amp; AI Specialist
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Bangalore, India • BCA Scholar @ Christ University
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 text-sm text-muted-foreground">
                <a href="mailto:mayankrajgupta01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> mayankrajgupta01@gmail.com
                </a>
                <a href="tel:+919835139865" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" /> +91 9835139865
                </a>
                <a href="https://www.mayankraj.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" /> https://www.mayankraj.me
                </a>
              </div>
            </div>

            {/* Links & Quick Tech Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/M20A03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs sm:text-sm font-medium hover:border-primary/50 transition-all"
                >
                  <Github className="w-4 h-4 text-primary" /> github.com/M20A03
                </a>
                <a
                  href="https://www.linkedin.com/in/mayank-raj-gupta-159020396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs sm:text-sm font-medium hover:border-primary/50 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-primary" /> linkedin.com/in/mayank-raj-gupta
                </a>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["React 19", "Next.js 15", "TypeScript", "Python", "YOLO11", "Firebase", "PostgreSQL"].map((k) => (
                  <span key={k} className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Professional Summary */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Executive Summary</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Full-Stack Software Engineer and Computer Vision Specialist with a portfolio of <strong>17+ deployed applications</strong> and multiple national hackathon wins. Proficient in architecting high-performance web applications using <strong>React 19, Next.js 15, TypeScript</strong>, building resilient backend microservices and RESTful APIs, and implementing Computer Vision (YOLO11/OpenCV) pipelines. Experienced in managing full product lifecycles—from Figma design systems to serverless cloud infrastructure on Vercel and Firebase with sub-100ms response targets.
            </p>
          </motion.section>

          {/* Work & Research Experience */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Work &amp; Research Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-foreground text-base md:text-lg">Freelance Full-Stack Engineer</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">2026 — Present</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3">Singularium Technologies • Remote</p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                  <li>Architected and delivered custom full-stack web applications and client portals using React 19, Next.js 15, and TypeScript.</li>
                  <li>Integrated secure authentication, multi-tenant database models, and payment gateways with sub-50ms API latencies.</li>
                  <li>Optimized Lighthouse performance and accessibility scores to 95+ across all delivered client web properties.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-foreground text-base md:text-lg">AI &amp; Computer Vision Research Project Lead</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">2026 — Present</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3">Christ (Deemed to be University) • Bangalore</p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                  <li>Trained and benchmarked YOLO11 neural networks for real-time license plate detection and spatial object localization.</li>
                  <li>Engineered Thermino: a specialized thermal analytics deep learning software platform for spatial heat map modeling.</li>
                  <li>Achieved 94%+ detection accuracy under adverse lighting conditions using OpenCV adaptive image filters.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Featured Technical Projects */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Featured Technical Projects</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Credex — AI SaaS Spend Intelligence & Optimization",
                  tech: "Next.js 16, React 19, TypeScript, Zustand, Recharts, Claude 3.7 Sonnet",
                  link: "https://credex-sand.vercel.app",
                  points: [
                    "Engineered an enterprise financial intelligence SaaS platform monitoring recurring software expenditures and predictive run rates.",
                    "Integrated Claude 3.7 Sonnet LLM with structured JSON output schemas to automatically detect spend anomalies and vendor price hikes.",
                    "Rendered real-time dynamic Recharts dashboards with Zustand-managed local state and sub-100ms multi-filter response times.",
                  ],
                },
                {
                  title: "Enterprise Indian ALPR — Computer Vision & Traffic Security",
                  tech: "Python, YOLO11, OpenCV, CRNN/Transformers, Streamlit",
                  link: "https://github.com/M20A03/License-Plate-Detection",
                  points: [
                    "Developed an automated license plate recognition engine supporting standard, high-security, and high-angle vehicle plates.",
                    "Implemented OpenCV noise removal and CRNN OCR optical character recognition pipeline achieving over 94% text precision.",
                    "Deployed a high-throughput Streamlit analytics suite capable of video stream inference at 30+ FPS.",
                  ],
                },
                {
                  title: "Roshan Enterprises — Omnichannel B2B/B2C Commerce Platform",
                  tech: "React 19, Vite, Firebase Auth/Firestore, CSS Design Tokens, SRE Resilience",
                  link: "https://e-commerce-roshan-enterprises-dhn.web.app",
                  points: [
                    "Built and deployed a production commerce portal handling bulk and retail catalog orders across 100+ inventory SKUs.",
                    "Integrated real-time Firebase Firestore database sync, persistent cart management, and zero-FOUC design tokens.",
                    "Engineered a responsive, keyboard-accessible UI with WCAG 2.1 AA contrast compliance and 16px iOS zoom prevention.",
                  ],
                },
                {
                  title: "DSA Search Algorithm Visualizer & Space Explorer",
                  tech: "React 19, TypeScript, Vite, WebAudio API, FastAPI, Tailwind CSS",
                  link: "https://linear-and-binary-search.web.app",
                  points: [
                    "Engineered step-by-step interactive simulations for Linear and Binary search algorithms with dynamic sound frequency synthesis.",
                    "Integrated Star-Command AI chatbot for contextual algorithmic hints and step-by-step Big-O complexity explanations.",
                  ],
                },
              ].map((proj, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-foreground text-base md:text-lg">
                      {proj.title}
                    </h3>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      Live Demo / Repo <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs font-mono text-primary/80 mb-3">{proj.tech}</p>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc pl-5">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills Matrix */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Technical Skills Matrix</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-xl bg-card border border-border">
              {[
                { cat: "Programming Languages", val: "TypeScript, JavaScript (ES6+), Python (NumPy/Pandas), C++, C, SQL" },
                { cat: "Frontend & Full-Stack", val: "React 19, Next.js 15, Angular, Tailwind CSS v4, Framer Motion, HTML5/CSS3" },
                { cat: "Backend & APIs", val: "Node.js, Express.js, REST APIs, Python Flask, Fast-API, WebSockets" },
                { cat: "Databases & Storage", val: "PostgreSQL, Supabase, Firebase Firestore, MySQL, MongoDB, Redis" },
                { cat: "AI, ML & Vision", val: "YOLO11, OpenCV, LLM Prompt Engineering, Claude 3.7 API, Streamlit" },
                { cat: "DevOps & Cloud Tools", val: "Git, GitHub, Vercel, Docker, VS Code, Figma, Vite, Linux/Bash" },
              ].map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">{s.cat}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.val}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Academic Qualifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Education</h2>
            </div>
            <div className="space-y-3">
              <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <h3 className="font-bold text-foreground text-base md:text-lg">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    3.33 / 4.0 CGPA
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <p>Christ (Deemed to be University), Bangalore, Karnataka</p>
                  <p className="font-medium text-primary/80">2025 — 2029</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Relevant Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems, Web Architecture.
                </p>
              </div>

              {showAllEducation && (
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/40 text-sm text-muted-foreground space-y-1">
                  <div className="flex justify-between font-semibold text-foreground">
                    <span>Class XII (CBSE) — Senior Secondary</span>
                    <span className="text-primary">76%</span>
                  </div>
                  <p>Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand (2023 — 2025)</p>
                </div>
              )}

              <button
                onClick={() => setShowAllEducation(!showAllEducation)}
                className="text-xs font-medium text-primary hover:underline transition-colors print:hidden"
              >
                {showAllEducation ? "Hide previous education" : "+ Show Class XII details"}
              </button>
            </div>
          </motion.section>

          {/* Honors & Certifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Hackathons &amp; Certifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "InHack - Hackathon (Media Meet 2026)", issuer: "CHRIST (Deemed to be University), Yeshwanthpur" },
                { title: "CODEX'26 National Level AI Hackathon", issuer: "Don Bosco College, KR Puram, Bengaluru" },
                { title: "YUGASTR IT FEST Hackathon (2026)", issuer: "Ramaiah College of Arts, Science & Commerce" },
                { title: "HACKNOVA Game Jam (2026)", issuer: "CHRIST (Deemed to be University)" },
                { title: "AI Prompt Engineering Masterclass", issuer: "Microsoft & Reliance Digital (2025)" },
                { title: "C & HTML5 Programming Certified", issuer: "Infosys Springboard (2025)" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border text-xs">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-[11px]">{item.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border print:hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            Mayank Raj Gupta • Portfolio: <a href="https://www.mayankraj.me" className="text-primary hover:underline">mayankraj.me</a> • GitHub: <a href="https://github.com/M20A03" className="text-primary hover:underline">github.com/M20A03</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
