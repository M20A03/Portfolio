"use client";

import { Code2, Database, Wrench, Globe, BarChart3, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Angular JS", level: 75 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Python Libraries",
    icon: BarChart3,
    skills: [
      { name: "Pandas", level: 85 },
      { name: "CSV Handling", level: 90 },
      { name: "Matplotlib", level: 75 },
      { name: "NumPy", level: 80 },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    icon: Code2,
    skills: [
      { name: "Arrays", level: 90 },
      { name: "Linked List", level: 85 },
      { name: "Stack", level: 85 },
      { name: "Queue", level: 85 },
    ],
  },
  {
    title: "Design & Media",
    icon: Palette,
    skills: [
      { name: "Canva", level: 95 },
      { name: "Adobe", level: 70 },
      { name: "Clipchamp", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "AntiGravity", level: 100 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12">
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
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, scale: 1.02 }}
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
                    </div>
                  </CardHeader>

                  {/* Skills */}
                  <CardContent className="flex flex-col gap-3 relative z-10 w-full">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col gap-1.5 w-full">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span>
                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 cursor-default">
                                  {skill.level}%
                                </Badge>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}: {skill.level}% proficiency</TooltipContent>
                          </Tooltip>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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
