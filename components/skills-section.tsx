"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Code2,
  Database,
  Wrench,
  Globe,
  BarChart3,
  Palette,
  Cpu,
  Server,
  Shield,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { skillCategoriesData, SkillCategoryData, Skill } from "@/lib/skills-config";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Wrench,
  Globe,
  BarChart3,
  Palette,
  Cpu,
  Server,
  Shield,
};

function getTagStyles(tag?: "Expert" | "Advanced" | "Proficient") {
  switch (tag) {
    case "Expert":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "Advanced":
      return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20";
    case "Proficient":
      return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20";
    default:
      return "bg-secondary text-secondary-foreground border-border";
  }
}

function getProgressGradient(level: number) {
  if (level >= 92) return "from-emerald-500 to-teal-400";
  if (level >= 88) return "from-cyan-500 to-blue-500";
  if (level >= 80) return "from-indigo-500 to-violet-500";
  return "from-amber-500 to-orange-400";
}

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
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
          setTimeout(() => setWidth(value), delay);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10"
    >
      <div
        className={`h-full rounded-full bg-gradient-to-r ${getProgressGradient(
          value
        )} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

// Interactive Spotlight Card with Dynamic Cursor Glow
function SpotlightSkillCard({
  category,
  searchQuery,
}: {
  category: SkillCategoryData;
  searchQuery: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const IconComponent = iconMap[category.icon] ?? Code2;

  // Filter skills if searchQuery exists
  const matchingSkills = useMemo(() => {
    if (!searchQuery.trim()) return category.skills;
    const q = searchQuery.toLowerCase().trim();
    return category.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        (s.highlight && s.highlight.toLowerCase().includes(q))
    );
  }, [category.skills, searchQuery]);

  if (matchingSkills.length === 0) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-[#0c121e]/80 backdrop-blur-xl p-5 sm:p-6 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 group overflow-hidden"
      >
        {/* Dynamic Cursor Spotlight Overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 75%)`
              : "none",
          }}
        />

        {/* Card Header */}
        <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-base sm:text-lg tracking-tight">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {category.description}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-[11px] font-semibold px-2 py-0.5 rounded-md border-border bg-slate-100/80 dark:bg-white/5 text-muted-foreground whitespace-nowrap"
          >
            {matchingSkills.length} skills
          </Badge>
        </div>

        {/* Skills List */}
        <div className="relative z-10 flex flex-col gap-3.5 mt-2">
          {matchingSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group/item flex flex-col gap-1 p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-semibold text-foreground truncate">
                    {skill.name}
                  </span>
                  {skill.tag && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${getTagStyles(
                        skill.tag
                      )}`}
                    >
                      {skill.tag}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* Highlight Note */}
              {skill.highlight && (
                <p className="text-[11px] text-muted-foreground/90 font-normal leading-tight line-clamp-1 group-hover/item:text-foreground transition-colors">
                  {skill.highlight}
                </p>
              )}

              {/* Progress Bar */}
              <AnimatedProgress value={skill.level} delay={idx * 60} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => skillCategoriesData, []);

  // Filtered categories according to tab selection and search
  const displayedCategories = useMemo(() => {
    let list = categories;
    if (selectedCategory !== "all") {
      list = list.filter((c) => c.id === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) =>
        c.skills.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            (s.highlight && s.highlight.toLowerCase().includes(q))
        )
      );
    }
    return list;
  }, [categories, selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return categories.reduce((sum, c) => sum + c.skills.length, 0);
  }, [categories]);

  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Full Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight text-balance">
            Skills &amp; Enterprise Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            A battle-tested spectrum of <strong>{totalSkillsCount}+ core engineering competencies</strong>—from Core Java, Swing &amp; JSP, to Next.js 15, FastAPI, and medical-grade AI Whisper &amp; PyTorch.
          </p>
        </motion.div>

        {/* Filter Controls & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Horizontal Scrolling Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-200/60 dark:hover:bg-white/10"
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200/60 dark:hover:bg-white/10"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, JSP, PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full border border-slate-200/90 dark:border-white/15 bg-white/80 dark:bg-card/60 backdrop-blur-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <SpotlightSkillCard
                key={category.id}
                category={category}
                searchQuery={searchQuery}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result State */}
        {displayedCategories.length === 0 && (
          <div className="text-center py-16 px-4">
            <p className="text-muted-foreground text-base mb-3">
              No skills found matching &ldquo;<strong>{searchQuery}</strong>&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
