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
  Globe,
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
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <a
            href="https://blobs.vusercontent.net/blob/CV_Mayank%20Raj%20Gupta-4jNUkaOYOPkSQM9Mcm5L8NwAlYMpwx.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </a>
        </div>
      </header>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >
          {/* Name & Contact Header */}
          <motion.section
            variants={fadeInUp}
            className="text-center pb-10 border-b border-border"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mayank Raj <span className="text-primary">Gupta</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              BCA Student | Full-Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <a
                href="mailto:mayankrajgupta01@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                mayankrajgupta01@gmail.com
              </a>
              <a
                href="tel:+919835139865"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9835139865
              </a>
              <a
                href="https://github.com/M20A03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                github.com/M20A03
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-raj-gupta-159020396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.section>

          {/* Academic Qualifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Academic Qualifications
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  year: "2025 — 2028",
                  degree: "Bachelor of Computer Applications (BCA)",
                  institution: "Christ University, Bangalore",
                  score: "3.2 / 4.0 CGPA (1st Semester)",
                },
                {
                  year: "2023 — 2025",
                  degree: "Class XII (CBSE)",
                  institution:
                    "Rajkamal Swarswati Vidya Mandir, Dhanbad, Jharkhand",
                  score: "76%",
                },
                {
                  year: "2021",
                  degree: "Class X (CBSE)",
                  institution: "Dhanbad Public School, Hirak Branch, Jharkhand",
                  score: "72%",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-sm font-medium text-primary min-w-[120px]">
                    {edu.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Projects</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Amazon Clone Prototype",
                  date: "September 2025",
                  description: [
                    "Developed a responsive Amazon-style e-commerce website with product listings, shopping cart, and user authentication using HTML, CSS, JavaScript, and PHP.",
                    "Implemented product display layouts, cart section, and styles.",
                    "Backend created using PHP.",
                    "Designed MySQL database to store and manage users, products, and order data.",
                  ],
                  github: "https://github.com/M20A03/Amazon-Clone-.git",
                },
                {
                  title: "Online Meeting Prototype",
                  date: "November 2025",
                  description: [
                    "Designed meeting platform UI (login, meeting start/join interface) using HTML, CSS, JavaScript.",
                    "Used Python (Pandas and Numpy) for storing and handling record data.",
                    "Backend implemented using Python Flask. MySQL is used to store meeting logs and user details.",
                  ],
                  github: "https://github.com/M20A03/OnlineMeetingApp",
                },
                {
                  title: "Wholesale & Retail E-Commerce Website (Prototype)",
                  date: "January 2026 - Ongoing",
                  description: [
                    "Working on developing a full-stack e-commerce website for wholesale and retail product distribution.",
                    "The website will allow retailers to place bulk orders, track supply availability, and receive delivery updates.",
                    "Using HTML, CSS, and JavaScript (React) for front-end, MySQL database is used for storing product catalogue, customer records, and order details.",
                  ],
                  github:
                    "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {project.date}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Technical Skills
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  category: "Programming Languages",
                  skills: "C, C++, Python, JavaScript",
                },
                {
                  category: "Python Libraries",
                  skills: "Pandas, CSV Handling, Matplotlib",
                },
                {
                  category: "Data Structures & Algorithms",
                  skills: "Arrays, Linked List, Stack, Queue",
                },
                {
                  category: "Web Technologies",
                  skills: "HTML, CSS, React, Flask",
                },
                { category: "Database", skills: "MySQL" },
                {
                  category: "Design & Media",
                  skills: "Canva (Graphic Design), Clipchamp (Video Editing)",
                },
                {
                  category: "Tools",
                  skills: "GitHub, Visual Studio Code",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.skills}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Certifications
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "C Programming Course",
                  issuer: "Infosys in association with Springboard",
                  year: "2025",
                },
                {
                  title: "AI Prompt Engineering, AI Technology",
                  issuer: "Microsoft",
                  year: "2025",
                },
                {
                  title: "Leadership Skill Development",
                  issuer: "Christ University, Bangalore",
                  year: "2025",
                },
                {
                  title: "Co-pilot Workshop",
                  issuer: "Samsung, Samsung Opera House, Bangalore",
                  year: "2025",
                },
                {
                  title: "C++ Programming",
                  issuer:
                    "Sai Computer Education (ISO 9001:2015 certified) - Certificate #01523",
                  year: "2023",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <span className="text-xs text-primary">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Personal Details */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Personal Details
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Languages Known
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      English, Hindi
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Hobbies</h3>
                    <p className="text-sm text-muted-foreground">
                      Travelling, Bicycling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mayank Raj Gupta. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
