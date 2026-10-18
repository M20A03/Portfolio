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
    title: "Mobile & Full-Stack",
    icon: "Globe",
    skills: [
      { name: "Android App Development", level: 90 },
      { name: "React Native & Expo", level: 88 },
      { name: "React 19 & Next.js 15", level: 90 },
      { name: "Node.js & Express", level: 85 },
      { name: "Tailwind CSS 4", level: 92 },
      { name: "RESTful APIs & WebSockets", level: 90 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "Wrench",
    skills: [
      { name: "AWS (S3, EC2)", level: 86 },
      { name: "Railway Cloud", level: 88 },
      { name: "Supabase", level: 88 },
      { name: "Firebase", level: 86 },
      { name: "Cloudflare", level: 85 },
      { name: "Vercel", level: 92 },
    ],
  },
  {
    title: "Database & Backend",
    icon: "Database",
    skills: [
      { name: "FastAPI & Python 3.11", level: 90 },
      { name: "Supabase (PostgreSQL & pgvector)", level: 90 },
      { name: "MongoDB & Mongoose", level: 88 },
      { name: "Firebase / Firestore", level: 86 },
      { name: "MySQL & Relational Modeling", level: 85 },
    ],
  },
  {
    title: "AI ML & Clinical NLP",
    icon: "BarChart3",
    skills: [
      { name: "Whisper ASR & Speech-to-Text", level: 90 },
      { name: "Mistral-7B & Medical NLP", level: 88 },
      { name: "YOLOv11 Computer Vision", level: 88 },
      { name: "Knowledge Graphs & Vector Embeddings", level: 90 },
      { name: "PyTorch & Deep Learning", level: 85 },
      { name: "OpenCV & Image Processing", level: 84 },
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
