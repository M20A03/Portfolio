export type Skill = {
  name: string;
  level: number;
  highlight?: string;
  tag?: "Expert" | "Advanced" | "Proficient";
};

export type SkillIconKey =
  | "Code2"
  | "Database"
  | "Wrench"
  | "Globe"
  | "BarChart3"
  | "Palette"
  | "Cpu"
  | "Server"
  | "Shield";

export type SkillCategoryData = {
  id: string;
  title: string;
  shortTitle: string;
  icon: SkillIconKey;
  description: string;
  skills: Skill[];
};

export const skillCategoriesData: SkillCategoryData[] = [
  {
    id: "languages",
    title: "Programming Languages & Core Java",
    shortTitle: "Languages & Java",
    icon: "Code2",
    description: "Strong object-oriented design, systems programming, and modern typed scripting.",
    skills: [
      { name: "Java (Core & OOP)", level: 94, highlight: "Multithreading, Collections, Robust Architecture", tag: "Expert" },
      { name: "Java Server Pages (JSP)", level: 88, highlight: "MVC Architecture, Servlets, Session State", tag: "Advanced" },
      { name: "Java Swing", level: 90, highlight: "Event-Driven GUI, Layout Managers, Custom Graphics", tag: "Advanced" },
      { name: "Python", level: 92, highlight: "NumPy, Pandas, PyTorch, FastAPI, Automation", tag: "Expert" },
      { name: "TypeScript", level: 90, highlight: "Strict Typing, Generics, Full-Stack Contract Safety", tag: "Expert" },
      { name: "JavaScript (ES6+)", level: 94, highlight: "Asynchronous I/O, Event Loop, DOM Architecture", tag: "Expert" },
      { name: "C++", level: 82, highlight: "Memory Management, STL, Performance Systems", tag: "Proficient" },
      { name: "C", level: 85, highlight: "Pointers, Data Structures, Unix System Calls", tag: "Advanced" },
    ],
  },
  {
    id: "fullstack",
    title: "Mobile & Full-Stack Web",
    shortTitle: "Web & Mobile",
    icon: "Globe",
    description: "High-performance reactive frontends, native mobile apps, and low-latency APIs.",
    skills: [
      { name: "Android App Development", level: 92, highlight: "Native Android Architecture, Permissions, Mobile Storage", tag: "Expert" },
      { name: "React Native & Expo", level: 90, highlight: "Dual-ecosystem Doctor & Patient mobile apps for Praxirence", tag: "Expert" },
      { name: "React 19 & Next.js 15", level: 94, highlight: "Server Components, Suspense, App Router, Virtualization", tag: "Expert" },
      { name: "FastAPI (Python 3.11)", level: 92, highlight: "Async Endpoints, Pydantic, ML Pipeline Microservices", tag: "Expert" },
      { name: "Node.js & Express", level: 86, highlight: "REST Services, Middleware, Token Authentication", tag: "Advanced" },
      { name: "Tailwind CSS 4", level: 95, highlight: "Fluid Design Systems, Modern CSS Variables, OKLCH Colors", tag: "Expert" },
      { name: "RESTful APIs & WebSockets", level: 90, highlight: "Real-time Consultation Waveforms, Push Feeds", tag: "Advanced" },
    ],
  },
  {
    id: "ai-vision",
    title: "AI, Deep Learning & Vision",
    shortTitle: "AI & Computer Vision",
    icon: "BarChart3",
    description: "State-of-the-art vision segmentation, clinical speech recognition, and LLM fine-tuning.",
    skills: [
      { name: "PyTorch & Deep Learning", level: 90, highlight: "Custom Neural Architectures, GPU Training & Inference", tag: "Expert" },
      { name: "Whisper ASR Speech-to-Text", level: 92, highlight: "LoRA (FP16) fine-tuning for multi-speaker clinical transcription", tag: "Expert" },
      { name: "Mistral-7B Medical NLP", level: 90, highlight: "QLoRA 4-bit quantization for automated SOAP clinical synthesis", tag: "Expert" },
      { name: "U2-Net Salient Segmentation", level: 92, highlight: "Sub-120ms background removal across 2,300 physical specimens", tag: "Expert" },
      { name: "YOLOv11 Computer Vision", level: 88, highlight: "Real-time edge object detection & feature localization", tag: "Advanced" },
      { name: "OpenCV & Image Processing", level: 88, highlight: "Lanczos-3 resampling, Porter-Duff alpha compositing", tag: "Advanced" },
      { name: "Vis-NIR Spectroscopy Analytics", level: 86, highlight: "400nm-1000nm diffuse reflectance spectral curve pairing", tag: "Advanced" },
    ],
  },
  {
    id: "database-cloud",
    title: "Database, Vector & Cloud Systems",
    shortTitle: "Cloud & Databases",
    icon: "Database",
    description: "Relational persistence, vector similarity indexing, and global edge deployments.",
    skills: [
      { name: "PostgreSQL & pgvector", level: 92, highlight: "768d dense semantic triple search, ACID compliance", tag: "Expert" },
      { name: "Supabase", level: 90, highlight: "Row-Level Security (RLS), Realtime database subscriptions", tag: "Expert" },
      { name: "Firebase (Auth, Firestore)", level: 88, highlight: "Realtime databases, rules security, edge hosting", tag: "Advanced" },
      { name: "MySQL & Relational Design", level: 86, highlight: "Schema normalization, indexing, transaction integrity", tag: "Advanced" },
      { name: "AWS (S3, EC2)", level: 85, highlight: "Secure object storage buckets, GPU compute instances", tag: "Advanced" },
      { name: "Railway & Vercel Edge", level: 92, highlight: "Zero-downtime serverless deployments, edge caching", tag: "Expert" },
    ],
  },
  {
    id: "devops-systems",
    title: "DevOps, Security & Systems",
    shortTitle: "DevOps & Security",
    icon: "Shield",
    description: "Enterprise compliance standards, zero-trust infrastructure, and version control.",
    skills: [
      { name: "Zero-Trust Architecture", level: 92, highlight: "In-memory audio shredding, AES-256-GCM data encryption", tag: "Expert" },
      { name: "DPDP & HIPAA Standards", level: 90, highlight: "Blind HMAC-SHA256 indexing, patient vault protection", tag: "Expert" },
      { name: "Git & GitHub CI/CD", level: 92, highlight: "Branching strategies, action workflows, release tags", tag: "Expert" },
      { name: "Linux / Bash Shell", level: 90, highlight: "CLI pipeline automation, server configuration, POSIX tools", tag: "Advanced" },
      { name: "Docker Containerization", level: 85, highlight: "Reproducible microservices, multi-stage Docker builds", tag: "Advanced" },
    ],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    shortTitle: "DSA & Theory",
    icon: "Cpu",
    description: "Rigorous analytical problem solving, search algorithms, and algorithmic complexity.",
    skills: [
      { name: "Binary & Linear Search", level: 95, highlight: "Interactive visualization tools with step-by-step logic", tag: "Expert" },
      { name: "Arrays, Hashing & Strings", level: 92, highlight: "Optimal time/space bounds, sliding window, two-pointer", tag: "Expert" },
      { name: "Stacks, Queues & Deques", level: 88, highlight: "LIFO/FIFO buffers, monotonic stack optimizations", tag: "Advanced" },
      { name: "Linked Lists & Trees", level: 86, highlight: "Pointer manipulation, tree traversals, recursion", tag: "Advanced" },
      { name: "Time & Space Complexity", level: 92, highlight: "Big-O asymptotic analysis, amortized efficiency", tag: "Expert" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI, LLMs & Agents",
    shortTitle: "GenAI & LLMs",
    icon: "BarChart3",
    description: "Agentic tool architectures, multi-turn context synthesis, and prompt engineering.",
    skills: [
      { name: "AI Prompt Engineering", level: 98, highlight: "Few-shot prompting, structured JSON schema enforcement", tag: "Expert" },
      { name: "Anthropic Claude SDK", level: 92, highlight: "Streaming responses, dynamic financial audit consulting", tag: "Expert" },
      { name: "OpenAI API (ChatGPT)", level: 92, highlight: "Function calling, embeddings, fine-tuned completions", tag: "Expert" },
      { name: "Google Gemini SDK & Live API", level: 90, highlight: "Multimodal audio/vision context, real-time streaming", tag: "Advanced" },
      { name: "DeepSeek API Integration", level: 88, highlight: "High-reasoning code analysis and math synthesis", tag: "Advanced" },
    ],
  },
  {
    id: "uiux-accessibility",
    title: "Design Systems & Accessibility",
    shortTitle: "Design & UX",
    icon: "Palette",
    description: "Accessible user interfaces, design token consistency, and interactive feedback.",
    skills: [
      { name: "WCAG 2.1 AA Accessibility", level: 92, highlight: "Keyboard navigation, screen reader ARIA, 4.5:1 contrast", tag: "Expert" },
      { name: "Figma (UI Tokens & Systems)", level: 88, highlight: "Component auto-layouts, dark/light variants, wireframing", tag: "Advanced" },
      { name: "Framer Motion Animations", level: 92, highlight: "Hardware-accelerated physics, page view transitions", tag: "Expert" },
      { name: "Responsive Mobile UX", level: 95, highlight: "Safe area viewports, 44px touch targets, iOS zoom safety", tag: "Expert" },
    ],
  },
];
