export type Skill = {
  name: string;
  level: number;
};

export type SkillIconKey = "Code2" | "Database" | "Wrench" | "Globe" | "BarChart3" | "Palette";

export type SkillCategoryData = {
  title: string;
  icon: SkillIconKey;
  skills: Skill[];
};

export const skillCategoriesData: SkillCategoryData[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Web Technologies",
    icon: "Globe",
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
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Python Libraries",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: 85 },
      { name: "CSV Handling", level: 90 },
      { name: "Matplotlib", level: 75 },
      { name: "NumPy", level: 80 },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    icon: "Code2",
    skills: [
      { name: "Arrays", level: 90 },
      { name: "Linked List", level: 85 },
      { name: "Stack", level: 85 },
      { name: "Queue", level: 85 },
    ],
  },
  {
    title: "Design & Media",
    icon: "Palette",
    skills: [
      { name: "Canva", level: 95 },
      { name: "Adobe", level: 70 },
      { name: "Clipchamp", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "AntiGravity", level: 100 },
    ],
  },
];
