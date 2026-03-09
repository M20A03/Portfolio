"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Code2, Lightbulb, Bike, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubStatsCard } from "./github-stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const textSuffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * numericValue);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <p ref={ref} className="text-2xl md:text-3xl font-bold text-foreground">
      {count}{textSuffix}
    </p>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const education = [
  {
    year: "2025 — 2028",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Christ University",
    location: "Bangalore, India",
    details: "3.2 / 4.0 CGPA (1st Semester)",
  },
  {
    year: "2023 — 2025",
    degree: "Higher Secondary (12th Commerce)",
    institution: "Rajkamal Swarswati Vidya Mandir, Dhanbad (CBSE)",
    location: "Dhanbad, Jharkhand",
    details: "76%",
  },
];

const highlights = [
  { icon: Code2, label: "Languages", value: "5+" },
  { icon: Lightbulb, label: "Projects", value: "7+" },
  { icon: GraduationCap, label: "Certifications", value: "5+" },
];

const interests = [
  { icon: Plane, label: "Travelling", description: "Exploring new places" },
  { icon: Bike, label: "Cycling", description: "Around the city" },
  { icon: Code2, label: "Coding", description: "Building solutions" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 px-4 sm:px-6 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Section Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            Passionate about creating
            <span className="text-primary"> digital experiences</span>
          </h2>

          {/* Bio Cards */}
          <motion.div className="grid md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
            <Card className="hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">My Journey</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated <span className="text-foreground font-medium">Computer Applications student</span> with a strong foundation in programming and web development. My journey in tech started with <span className="text-primary">curiosity about how things work</span>, and has evolved into a passion for building solutions that matter.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">My Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Always <span className="text-primary">inquisitive to new technologies</span> and eager to learn. I believe in writing clean, efficient code and creating user-friendly experiences. Every project is an opportunity to grow and make an impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div className="grid grid-cols-3 gap-3 md:gap-4 mb-12" variants={itemVariants}>
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 md:p-6 text-center group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default">
                <CardContent className="p-0">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <AnimatedCounter value={item.value} />
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Code Activity Dashboard */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="relative group">
              {/* Decorative Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-border to-primary/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative p-8 md:p-12 rounded-[2.2rem] bg-card border border-border/50 shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                  {/* Left Side: Static Metrics */}
                  <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <div>
                      <h3 className="text-3xl font-black text-foreground tracking-tighter mb-2">Code <span className="text-primary">Activity</span></h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        An overview of my development pulse. Combining public contributions with my private engineering workspace and primary tech stack: <span className="text-foreground font-bold">TypeScript, JavaScript, & HTML</span>.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Public Repos", value: "8", sub: "GitHub Profile" },
                        { label: "Private Repos", value: "2", sub: "Personal Projects" },
                        { label: "Top Skills", value: "TS / JS", sub: "Most Used" },
                        { label: "Followers", value: "7", sub: "Active Profile" },
                      ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors group/stat">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1 group-hover/stat:text-primary transition-colors">{stat.label}</p>
                          <p className="text-xl font-black text-foreground">{stat.value}</p>
                          <p className="text-[9px] text-muted-foreground font-medium">{stat.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: GitHub Profile Cards */}
                  <div className="w-full lg:w-2/3">
                    <GitHubStatsCard />

                    <div className="mt-8 flex items-center gap-2 justify-center lg:justify-end text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Verified Data from GitHub Profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">When I&apos;m not coding...</h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/50 border-border hover:border-primary/50 transition-all text-sm"
                  >
                    <interest.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{interest.label}</span>
                    <span className="text-muted-foreground hidden sm:inline">• {interest.description}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Education
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 md:pl-20 group"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />

                  <Card className="hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline" className="gap-2 text-primary border-primary/20">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </Badge>
                        <Badge variant="secondary" className="gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <Separator className="my-2" />
                      <p className="text-primary text-sm font-medium">{edu.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
