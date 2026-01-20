"use client";

import { Code2, Database, Wrench, Globe, BarChart3, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "React", "Flask"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Python Libraries",
    icon: BarChart3,
    skills: ["Pandas", "CSV Handling", "Matplotlib", "NumPy"],
  },
  {
    title: "Data Structures & Algorithms",
    icon: Code2,
    skills: ["Arrays", "Linked List", "Stack", "Queue"],
  },
  {
    title: "Design & Media",
    icon: Palette,
    skills: ["Canva", "Clipchamp"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "VS Code"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
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
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
