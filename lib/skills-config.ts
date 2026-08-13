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
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "C++", level: 78 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Web & MERN Stack",
    icon: "Globe",
    skills: [
      { name: "React 19", level: 90 },
      { name: "Next.js 15", level: 88 },
      { name: "Node.js & Express", level: 85 },
      { name: "Tailwind CSS 4", level: 92 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "Wrench",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Supabase", level: 88 },
      { name: "Cloudflare", level: 85 },
      { name: "Railway", level: 84 },
      { name: "Render", level: 84 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    title: "Database & Backend",
    icon: "Database",
    skills: [
      { name: "Supabase (PostgreSQL)", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase / Firestore", level: 82 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    title: "Python & AI ML",
    icon: "BarChart3",
    skills: [
      { name: "YOLOv11 Computer Vision", level: 85 },
      { name: "PyTorch & Deep Learning", level: 82 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    icon: "Code2",
    skills: [
      { name: "Arrays & Strings", level: 90 },
      { name: "Binary & Linear Search", level: 92 },
      { name: "Linked Lists", level: 85 },
      { name: "Stacks & Queues", level: 85 },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: "Palette",
    skills: [
      { name: "Figma (Prototypes & Systems)", level: 88 },
      { name: "WCAG Accessibility", level: 85 },
      { name: "Canva", level: 95 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "AntiGravity AI", level: 100 },
      { name: "Vite", level: 85 },
    ],
  },
];
