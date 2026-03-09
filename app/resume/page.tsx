"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main id="main-content" className="min-h-screen bg-background selection:bg-primary/20">
      {/* Header - Hidden on Print */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <p className="text-xs text-muted-foreground italic hidden sm:block">
              Tip: Save as PDF via Print (Ctrl+P)
            </p>
            <Button size="sm" className="gap-2" onClick={handlePrint}>
              <Download className="w-4 h-4" />
              Save as PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 print:py-0 print:px-0">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >
          {/* Name & Contact Header */}
          <motion.section
            variants={fadeInUp}
            className="pb-10 border-b border-border"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Mayank Raj <span className="text-primary">Gupta</span>
                </h1>
                <p className="text-xl text-primary font-medium mb-4">
                  Full-Stack Developer | BCA @ Christ University
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground">
                <a href="mailto:mayankrajgupta01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> mayankrajgupta01@gmail.com
                </a>
                <a href="tel:+919835139865" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> +91 9835139865
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Bangalore, India
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="https://github.com/M20A03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm hover:border-primary/50 transition-all">
                <Github className="w-4 h-4" /> github.com/M20A03
              </a>
              <a href="https://www.linkedin.com/in/mayank-raj-gupta-159020396" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm hover:border-primary/50 transition-all">
                <Linkedin className="w-4 h-4" /> LinkedIn Profile
              </a>
            </div>
          </motion.section>

          {/* Professional Summary */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">Professional Summary</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Highly motivated <span className="text-foreground font-semibold">Bachelor of Computer Applications (BCA)</span> student at <span className="text-primary">Christ University</span> with a passion for building scalable, high-performance web applications. Expertise in <span className="text-foreground">React, Next.js, and Python</span>, with a strong foundation in <span className="text-foreground">DSA and AI prompt engineering</span>. Proven ability to deliver complex projects like B2B2C marketplaces and real-time simulators. Eager to apply technical skills in a challenging internship role.
            </p>
          </motion.section>

          {/* Academic Qualifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">Education</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  year: "2025 — 2028",
                  degree: "Bachelor of Computer Applications (BCA)",
                  institution: "Christ University, Bangalore",
                  score: "3.2 / 4.0 CGPA (1st Semester)",
                  highlight: "Core focus on Software Engineering & Data Structures",
                },
                {
                  year: "2023 — 2025",
                  degree: "Class XII (CBSE) - Commerce",
                  institution: "Rajkamal Swarswati Vidya Mandir, Dhanbad",
                  score: "76%",
                },
              ].map((edu, index) => (
                <div key={index} className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-foreground text-lg">{edu.degree}</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.score}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <p>{edu.institution}</p>
                    <p className="font-medium text-primary/80">{edu.year}</p>
                  </div>
                  {edu.highlight && <p className="mt-2 text-xs text-primary font-medium italic">⭐ {edu.highlight}</p>}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Core Projects */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">Technical Projects</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "MRG App: Next-Gen B2B2C Marketplace",
                  date: "Jan 2026 - Present",
                  tech: "React, Next.js, Node.js, Firebase",
                  points: [
                    "Developing a scalable marketplace connecting wholesalers, retailers, and customers (Zepto/Blinkit model).",
                    "Implementing real-time inventory sync and multi-user authentication roles.",
                    "Designed premium UI/UX focusing on glassmorphism and performance optimization.",
                  ],
                },
                {
                  title: "DSA Search Algorithm Visualizer & AI Assistant",
                  date: "Feb 2026",
                  tech: "JavaScript, HTML5, CSS3, AI Integration",
                  points: [
                    "Built 5+ visual simulations for Linear/Binary search with step-by-step animations.",
                    "Integrated 'Star-Command AI', an intelligent chatbot to explain algorithmic concepts dynamically.",
                    "Optimized rendering logic for smooth 60FPS visualizations of data sorting and searching.",
                  ],
                },
                {
                  title: "Wholesale & Retail E-Commerce Platform",
                  date: "Jan 2026",
                  tech: "React (Vite), Firebase, Context API, Lucide",
                  points: [
                    "Full-stack platform for Roshan Enterprises supporting bulk and retail purchases.",
                    "Features secure guest checkout, interactive cart, and personalized order history.",
                    "Achieved 95+ Lighthouse performance score through efficient state management.",
                  ],
                },
              ].map((project, index) => (
                <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <span className="text-xs font-semibold text-primary uppercase tracking-tighter">{project.date}</span>
                  </div>
                  <p className="text-xs font-mono text-primary/70 mb-4">{project.tech}</p>
                  <ul className="space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills - Printed in Columns */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-card/30 border border-border">
              {[
                { cat: "Languages", val: "C, C++, Python (Pandas/NumPy), JavaScript (ES6+), TypeScript" },
                { cat: "Frontend", val: "React, Next.js, Angular, Tailwind CSS, Framer Motion" },
                { cat: "Backend & Cloud", val: "Node.js, Firebase (Auth/Firestore), Python Flask" },
                { cat: "Database", val: "MySQL, Firestore" },
                { cat: "Developer Tools", val: "Git, GitHub, Vercel, VS Code, Figma" },
                { cat: "Other", val: "AI Prompt Engineering, DSA, UI/UX Design" },
              ].map((s, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{s.cat}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.val}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements & Certifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">Achievements & Credentials</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "YUGASTR IT FEST Hackathon (2026)",
                "HACKNOVA Game Jam Participant - CHRIST University (2026)",
                "Microsoft AI Prompt Engineering Masterclass",
                "Infosys C & HTML5 Programming Certified",
                "Leadership Skill Development - Christ University",
                "Samsung Co-pilot Workshop Attendee",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border text-sm">
                  <Star className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Footer - Hidden on Print */}
      <footer className="py-8 px-6 border-t border-border print:hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with React & Next.js • {new Date().getFullYear()} Mayank Raj Gupta
          </p>
        </div>
      </footer>

      {/* Print-specific Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .bg-background, .bg-card, .bg-card/30 {
            background: white !important;
          }
          .text-muted-foreground {
            color: #4b5563 !important;
          }
          .border {
            border-color: #e5e7eb !important;
          }
          .text-primary {
            color: #3b82f6 !important;
          }
          .bg-primary/10 {
            background: #eff6ff !important;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    </main>
  );
}
