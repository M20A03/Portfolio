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
      { name: "Supabase (PostgreSQL & pgvector)", level: 90 },
      { name: "MongoDB & Mongoose", level: 88 },
      { name: "FastAPI & Express.js", level: 86 },
      { name: "Firebase / Firestore", level: 84 },
      { name: "MySQL & Relational Modeling", level: 85 },
    ],
  },
  {
    title: "AI ML & Computer Vision",
    icon: "BarChart3",
    skills: [
      { name: "YOLOv11 Computer Vision", level: 88 },
      { name: "Knowledge Graphs & Vector Embeddings", level: 90 },
      { name: "PyTorch & Deep Learning", level: 84 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "OpenCV & Image Processing", level: 82 },
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
  {
    title: "Generative AI & Prompting",
    icon: "BarChart3",
    skills: [
      { name: "ChatGPT & OpenAI API", level: 95 },
      { name: "Google Gemini SDK & Live API", level: 92 },
      { name: "Anthropic Claude API", level: 90 },
      { name: "DeepSeek API Integration", level: 88 },
      { name: "AI Prompt Engineering", level: 98 },
    ],
  },
];
