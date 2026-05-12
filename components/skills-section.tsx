"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Database, Wrench, Globe, BarChart3, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { skillCategoriesData } from "@/lib/skills-config";

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

function getProgressGradient(level: number) {
  if (level >= 90) return "from-emerald-500 to-teal-500";
  if (level >= 80) return "from-blue-500 to-cyan-500";
  if (level >= 70) return "from-violet-500 to-fuchsia-500";
  return "from-amber-500 to-orange-500";
}

function AnimatedProgress({ value, delay = 0, className }: { value: number; delay?: number; className?: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Delay creates a staggered fill effect for cleaner visual sequencing.
          setTimeout(() => setWidth(value), delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className={`relative h-2 w-full overflow-hidden rounded-full bg-secondary ${className || ""}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(value)} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 1000;

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Wrench,
  Globe,
  BarChart3,
  Palette,
};

export function SkillsSection() {
  const skillCategories = useMemo<SkillCategory[]>(
    () =>
      skillCategoriesData.map((category) => ({
        title: category.title,
        icon: iconMap[category.icon] ?? Code2,
        skills: category.skills,
      })),
    []
  );

  const normalizedCategories = useMemo(() => {
    return skillCategories
      .map((category) => {
        const sortedSkills = [...category.skills].sort((a, b) => b.level - a.level);
        const average = Math.round(
          sortedSkills.reduce((sum, skill) => sum + skill.level, 0) / sortedSkills.length
        );

        return {
          ...category,
          skills: sortedSkills,
          average,
        };
      })
      .sort((a, b) => b.average - a.average);
  }, []);

  const analytics = useMemo(() => {
    const allSkills = normalizedCategories.flatMap((category) => category.skills);
    const totalSkills = allSkills.length;
    const avgSkill = Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills);
    const strongestCategory = normalizedCategories[0];

    return {
      totalSkills,
      categoryCount: normalizedCategories.length,
      avgSkill,
      strongestCategory,
    };
  }, [normalizedCategories]);

  return (
    <section id="skills" className="scroll-mt-24 py-12 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Skills &
            <span className="text-primary"> Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Analytics */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/70">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Total Skills</p>
              <p className="text-3xl font-black text-foreground mt-2">
                <AnimatedNumber value={analytics.totalSkills} />
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Categories</p>
              <p className="text-3xl font-black text-foreground mt-2">
                <AnimatedNumber value={analytics.categoryCount} />
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardContent className="p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Average Proficiency</p>
              <p className="text-3xl font-black text-foreground mt-2">
                <AnimatedNumber value={analytics.avgSkill} suffix="%" />
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mb-8 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Strongest domain:</span> {analytics.strongestCategory?.title} ({analytics.strongestCategory?.average}%)
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {normalizedCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Category Header */}
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                      <Badge variant="secondary" className="ml-auto text-[10px] px-2 py-0.5 cursor-default">
                        Avg {category.average}%
                      </Badge>
                    </div>
                  </CardHeader>

                  {/* Skills */}
                  <CardContent className="flex flex-col gap-3 relative z-10 w-full">
                    {category.title === "Soft Skills" ? (
                      <div className="flex flex-wrap gap-2 py-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm" aria-label={skill.name}>
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="flex flex-col gap-1.5 w-full">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 cursor-default" aria-label={`${skill.name}: ${skill.level}% proficiency`}>
                              {skill.level}%
                            </Badge>
                          </div>
                          <AnimatedProgress value={skill.level} delay={180 + skillIndex * 100} />
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
