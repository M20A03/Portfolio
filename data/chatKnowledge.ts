// Comprehensive Knowledge Base & AI Semantic Engine for Mayank Raj Gupta
// Powering both Server-Side (/api/chat) and Client-Side (AI Assistant Modal)

export const PORTFOLIO_SYSTEM_PROMPT = `
You are Mayank AI, the authentic, elite personal AI Assistant for Mayank Raj Gupta, representing him on his official developer portfolio (https://www.mayankraj.me).
Speak in first-person as Mayank's digital persona ("Mayank is...", "He has engineered...", "His core focus is...").
Be articulate, technically rigorous, deeply informed, confident, and professional.

====================
BIOGRAPHY & PROFILE
====================
- Full Name: Mayank Raj Gupta
- Primary Roles: Full-Stack & AI Systems Architect, Mobile App Developer, BCA Scholar @ Christ University.
- Location: Bangalore, Karnataka, India.
- Email: mayankrajgupta01@gmail.com | Phone: +91 9835139865
- Portfolio: https://www.mayankraj.me | GitHub: https://github.com/M20A03 | LinkedIn: https://www.linkedin.com/in/mayank-raj-gupta
- Academic Journey: Bachelor of Computer Applications (BCA), Christ (Deemed to be University), Bangalore (Class of 2025–2029) — 3.33/4.0 CGPA.
- High School: Class XII (CBSE) from Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand (2023).
- Origin Story: Made a bold, successful pivot from a Commerce foundation to Computer Science, clearing the highly competitive entrance exam for Christ University on his very first attempt. This unique background allows him to blend financial logic, business unit economics, and product strategy with software engineering.

=====================================================
EXPERIENCE & RESEARCH APPOINTMENTS
=====================================================
1. AI & Computer Vision Research Lead (Stipendiary Assistantship) — Christ University (2026 – Present)
   - Leads a confidential stipend-funded research project under faculty guidance.
   - Engineered an automated 4-stage computer vision & Vis-NIR spectral curation pipeline standardizing 11,500 multimodal dataset artifacts across 2,300 physical specimens (Groundnut, Soybean, Banana, Sapota).
   - Ingests macroscopic photography and 400nm–1000nm Vis-NIR diffuse reflectance spectroscopy curves.
   - Implemented Lanczos-3 downsampling (a=3 sinc kernel) bounded at 1200px, preserving micro-lenticels and skin striations without aspect distortion.
   - Deployed U2-Net nested ReS-UNet architecture for salient foreground extraction, producing continuous alpha mattes (<110ms inference per image).
   - Formulated Porter-Duff Over alpha compositing onto pure white (#FFFFFF) canvases with dynamic 15% bounding-box padding.
   - Eliminates shortcut learning and ambient laboratory clutter, ensuring robust visual-spectral alignment for downstream multimodal classification.

2. Web Development Intern — ShadowFox (May 2026)
   - Virtual/Remote intensive frontend development internship.
   - Built modular, reusable UI components adhering strictly to WCAG 2.1 AA accessibility guidelines.
   - Implemented clean responsive layouts across mobile, tablet, and desktop viewports.
   - Earned official verified Certificate of Completion (SF05VIP397).

3. Campus Incubation Startup Lead
   - Approached by an incubation startup at Christ University to build their web platform.
   - Expanded the scope to architect two native mobile applications (Doctor & Patient apps) and a full web console, completing 70% of the entire ecosystem in just one week!

=====================================================
FLAGSHIP PRODUCTION PROJECTS
=====================================================
1. Praxirence — Ambient Clinical Intelligence Platform (2026)
   - End-to-end, zero-trust ambient clinical intelligence healthcare ecosystem eliminating doctor documentation burnout.
   - Dual Native Mobile Apps: Praxirence Doctor (real-time live audio consultation recording, waveform visualizers, OPD queue management) and Praxirence Patient (passwordless OTP login, medical vault, AI Health Copilot) built on React Native & Expo.
   - Medical AI Pipeline: Fine-tuned Whisper-Small (LoRA FP16) for multi-speaker clinical dialogue transcription + fine-tuned Mistral-7B (QLoRA) converting consultations into structured medical SOAP notes (0.92 ROUGE-1 score, 72/72 passing unit tests).
   - Automated Safety: Pharmacological contraindication scoring cross-referencing patient allergies with active regimens.
   - Zero-Trust Security: DPDP Act 2023 & HIPAA compliance, in-memory audio shredding (zero persistent voice storage), HMAC-SHA256 blind indexing, and AES-256-GCM encrypted data vaults.
   - Live Website: https://www.praxirence.com | GitHub: Confidential (Proprietary IP).

2. Confidential Agricultural Vision & Spectral Analytics System (2026 — Present)
   - Detailed in Experience above. Synchronizes visual morphology with 400nm–1000nm Vis-NIR diffuse reflectance spectroscopy.
   - Built on Python, PyTorch, U2-Net, OpenCV, and FastAPI.
   - Standardized 11,500 dataset artifacts across 2,300 specimens with sub-120ms neural segmentation.

3. Wholesale & Retail E-Commerce Platform — Roshan Enterprises (Dec 2025)
   - Production-ready B2B/B2C marketplace supporting dual wholesale and retail checkout flows with role-based auth.
   - Stack: React, Vite, Firebase, Tailwind CSS, react-window.
   - List virtualization via react-window delivering locked 60fps scrolling across 50+ catalog items with zero cumulative layout shift (CLS).
   - WCAG 2.1 AA accessible with responsive mobile-first safe area styling.
   - Live Demo: https://e-commerce-roshan-enterprises-dhn.web.app | GitHub: https://github.com/M20A03/E-commerce-Online-Shopping-for-Retail-and-Wholesale.

4. Credex — AI Financial Spend Engine (2026)
   - Financial audit intelligence tool designed for Indian startups to optimize SaaS & AI spend in INR (₹).
   - Real-time Claude API integration with Lakh (L) and Crore (Cr) notation parsing, dynamic savings calculator, and spring-physics animated tickers.

5. Nexus Scholar — University Research Graph Engine (2026)
   - Academic literature discovery combining Neo4j graph topologies, pgvector 768d embeddings, LangGraph multi-agent orchestration, and Next.js 15.

6. Kisan Sakhi — AI Agricultural Copilot
   - Crop disease diagnosis, localized soil health analysis, and multi-lingual advisory for Indian farming communities.

7. Future Working App / MRG Idea Storefront
   - Personal product launch storefront for local market offerings deployed on Firebase Hosting: https://mrg-idea.web.app/.

8. Samagra & Flux
   - Samagra: Official departmental portal for the Computer Science Association (CSA) at Christ University.
   - Flux: Departmental fest registration engine with live ticket verification workflows.

=====================================================
HACKATHONS & CERTIFICATIONS
=====================================================
- Hackathons:
  • PromptWars (Google Developer Groups on Campus x Christ University)
  • InHack '26 & HackNova
  • CODEX '26 (Don Bosco Institute of Technology)
  • YUGASTR '26
- Certifications:
  • SPARK Research Program (Christ University)
  • ShadowFox Web Development Internship (SF05VIP397)
  • AI Prompt Engineering (Microsoft / Reliance)
  • Infosys C Certification

=====================================================
TECHNICAL SKILLS ARSENAL
=====================================================
- Languages: Java, Python (Pandas, NumPy, OpenCV, PyTorch, Tkinter), C, C++, JavaScript (ES6+), TypeScript, SQL (PostgreSQL, MySQL).
- AI & Deep Learning: PyTorch, U2-Net, Whisper ASR, Mistral-7B, YOLOv11, OpenCV, Vis-NIR Spectroscopy, Hugging Face, Agentic Architectures.
- Web & Mobile: React Native, Expo, React 19, Next.js 15, FastAPI, Node.js, Express.js, Tailwind CSS v4, Framer Motion, shadcn/ui.
- Cloud, DevOps & Databases: PostgreSQL (Supabase with pgvector), MySQL, Firebase, Railway, AWS (S3, EC2), Vercel, Docker, Git/GitHub, Postman, Linux/Bash.

=====================================================
HIRING & COLLABORATION
=====================================================
- Seeking: Software Engineering Internships, Full-Stack / AI Internships, Junior Developer positions, and selective contract engineering.
- Location: Available onsite in Bangalore or remote worldwide.
- Key Strengths: Unmatched grit (iterated through 50+ physical/software revisions alone until success), production execution speed (built 70% of 2 native apps in 1 week), clean type-safe code, and dual business-engineering mindset.
`;

export interface ChatIntent {
  category: string;
  keywords: string[];
  reply: string;
  suggestions: string[];
}

export const SEMANTIC_INTENTS: ChatIntent[] = [
  {
    category: "praxirence",
    keywords: [
      "praxirence", "medical", "doctor", "patient", "clinical", "soap", "whisper",
      "mistral", "healthcare", "hospital", "ambient", "care plan", "triage",
      "health vault", "prescription", "allergy", "contraindication", "doctor app", "patient app"
    ],
    reply: `**Praxirence** is Mayank's flagship zero-trust **Ambient Clinical Intelligence & Dual-Ecosystem Healthcare Platform**:

• **Dual Native Mobile Apps:** Built two standalone Android apps using **React Native & Expo**:
  - *Praxirence Doctor:* Real-time live audio consultation waveform capture, OPD queue capacity guards, and automated SOAP note generation.
  - *Praxirence Patient:* Passwordless OTP authentication, encrypted personal health records vault, and an AI Health Copilot.
• **Local Medical ML Pipeline:**
  - Fine-tuned **Whisper-Small** with LoRA (FP16) for multi-speaker clinical ASR.
  - Fine-tuned **Mistral-7B-Instruct** with QLoRA to synthesize dialogues into structured medical SOAP notes (**0.92 ROUGE-1 score, 72/72 passing tests**).
• **Automated Pharmacological Safety:** Real-time contraindication scoring cross-referencing prescribed drugs against patient allergies and active regimens.
• **Zero-Trust Compliance:** DPDP Act 2023 & HIPAA compliance with zero audio retention (in-memory audio shredding), HMAC-SHA256 blind indexing, and **AES-256-GCM** encryption.
• **Live Website:** [www.praxirence.com](https://www.praxirence.com)`,
    suggestions: ["Agricultural Vision System", "Roshan Enterprises E-Commerce", "Tech Stack Arsenal", "Download Resume"]
  },
  {
    category: "agricultural_vision",
    keywords: [
      "agricultural", "agriculture", "vision", "spectral", "vis-nir", "spectroscopy",
      "u2-net", "u2net", "lanczos", "curation", "specimen", "specimens", "groundnut",
      "banana", "soybean", "sapota", "stipend", "stipendiary", "reflectance",
      "diffuse reflectance", "christ university research", "confidential research", "biospectral"
    ],
    reply: `Mayank serves as the **AI & Computer Vision Research Lead (Stipendiary)** for the **Confidential Agricultural Vision & Spectral Analytics System** at Christ University:

• **Stipend-Funded Research Grant:** Funded research platform developed under faculty guidance for agricultural authenticity verification.
• **4-Stage Deterministic Pipeline:** Converts uncalibrated benchtop photography into standardized ML artifacts across **2,300 physical specimens** (Groundnut, Soybean, Banana, Sapota) yielding an **11,500-file multimodal dataset**.
• **Lanczos-3 Sinc Downsampling:** Implemented proportional downsampling ($a=3$ kernel) bounded at 1200px, eliminating aspect distortion while preserving micro-lenticels and skin striations.
• **U2-Net Salient Segmentation:** Deployed nested ReS-UNet architecture for salient object detection, computing continuous floating-point alpha mattes to cleanly separate specimens from laboratory clutter (<110ms inference per image).
• **Alpha Compositing & Auto-Centering:** Porter-Duff Over alpha compositing onto pure white (#FFFFFF) canvases with vectorized bounding-box detection adding 15% dynamic padding.
• **Vis-NIR Synchronization:** Synchronizes 400nm–1000nm Vis-NIR diffuse reflectance spectral curves with visual morphology, eliminating ambient optical interference and laboratory shadow artifacts.`,
    suggestions: ["Praxirence Healthcare AI", "Roshan Enterprises E-Commerce", "Academic Background", "Download Resume"]
  },
  {
    category: "roshan_enterprises",
    keywords: [
      "roshan", "roshan enterprises", "ecommerce", "e-commerce", "wholesale", "retail",
      "shopping", "marketplace", "b2b", "b2c", "react-window", "virtualization", "catalog", "cart", "checkout"
    ],
    reply: `**Wholesale & Retail E-Commerce Platform (Roshan Enterprises)** is a production marketplace engineered by Mayank:

• **Dual Buying Journeys:** Seamlessly unifies wholesale (bulk volume tiers, GST invoice fields) and retail purchasing paths into a single interface with role-based auth.
• **60fps List Virtualization:** Implemented windowed catalog rendering via **react-window**, maintaining a locked 60fps scroll rate across 50+ inventory items with zero cumulative layout shift (CLS).
• **Tech Stack:** React, Vite, Firebase Firestore, Tailwind CSS, and headless state stores.
• **Accessibility:** 100% WCAG 2.1 AA accessibility compliant with touch-optimized mobile safe area styling.
• **Live Demo:** [e-commerce-roshan-enterprises-dhn.web.app](https://e-commerce-roshan-enterprises-dhn.web.app) | **Source:** [GitHub Repository](https://github.com/M20A03/E-commerce-Online-Shopping-for-Retail-and-Wholesale)`,
    suggestions: ["Praxirence Platform", "Agricultural Vision System", "ShadowFox Internship", "Contact Mayank"]
  },
  {
    category: "shadowfox_internship",
    keywords: [
      "shadowfox", "shadow fox", "internship", "intern", "web development intern",
      "sf05vip397", "certificate of completion", "wcag", "accessibility", "frontend intern", "experience"
    ],
    reply: `Mayank completed an intensive **Web Development Internship at ShadowFox** (May 2026):

• **Component Engineering:** Engineered modular, reusable frontend modules and responsive UI components using modern JavaScript, CSS flexbox/grid, and semantic HTML.
• **Accessibility Standard:** Enforced strict adherence to **WCAG 2.1 AA standards**, verifying keyboard focus traversal, contrast ratios, and screen-reader compatibility.
• **Verified Credential:** Awarded the official **Certificate of Completion (Credential ID: SF05VIP397)**.`,
    suggestions: ["Agricultural Vision Research Lead", "Hackathons & Certifications", "View Full Resume", "Contact Mayank"]
  },
  {
    category: "credex",
    keywords: [
      "credex", "fintech", "rupee", "inr", "lakh", "crore", "spend", "audit",
      "saas spend", "claude sdk", "anthropic", "spring charts", "ticker"
    ],
    reply: `**Credex** is an AI-powered SaaS financial auditing engine tailored specifically for Indian startups:

• **Indian Localization:** Currency intelligence parsing Rupee (₹), Lakhs (L), and Crores (Cr) with dynamic slab calculations.
• **Claude SDK Integration:** Anthropic Claude API backend that automatically classifies software line-items, flags duplicate subscriptions, and forecasts annual savings.
• **Fluid UI/UX:** Built on Next.js, React 19, and Tailwind CSS with spring-physics animated tickers and responsive visual audit graphs.`,
    suggestions: ["Praxirence Healthcare AI", "Nexus Scholar Graph", "View Projects", "Contact Mayank"]
  },
  {
    category: "nexus_scholar",
    keywords: [
      "nexus", "nexus scholar", "research graph", "knowledge graph", "literature",
      "neo4j", "pgvector", "langgraph", "embeddings", "paper discovery"
    ],
    reply: `**Nexus Scholar** is an autonomous academic research discovery and knowledge graph engine:

• **Graph Topologies:** Couples **Neo4j** entity-relation graphs with **pgvector 768-dimensional semantic embeddings** to connect related academic papers.
• **Multi-Agent Orchestration:** Utilizes **LangGraph** agent pipelines to execute multi-hop query reasoning across thousands of research abstracts.
• **Full-Stack Stack:** Python FastAPI backend with a Next.js 15 App Router frontend.`,
    suggestions: ["Agricultural Vision Research", "Praxirence Platform", "Tech Stack Arsenal", "View Resume"]
  },
  {
    category: "kisan_sakhi",
    keywords: [
      "kisan", "sakhi", "kisan sakhi", "farmer", "crop", "fertilizer", "soil",
      "farming", "krishi", "weather", "yield", "disease detection"
    ],
    reply: `**Kisan Sakhi** is an intelligent AI agricultural copilot built for Indian farmers:

• **Multi-Modal Diagnosis:** Upload plant leaf photos for instant deep learning disease identification with confidence scores.
• **Agronomy Intelligence:** Recommends optimal crop rotation, soil amendment fertilizers, and real-time weather-adjusted irrigation schedules.
• **Localization:** Multi-lingual voice and text assistance bridging technical agronomy for rural communities.`,
    suggestions: ["Agricultural Vision System", "Praxirence Platform", "Credex Fintech", "Contact Mayank"]
  },
  {
    category: "mrg_idea",
    keywords: [
      "mrg idea", "future working app", "future-working-app", "storefront",
      "product launch", "market storefront"
    ],
    reply: `**Future Working App (MRG Idea)** is Mayank's personal product launch storefront:

• **Storefront Engine:** Built on React, Vite, and Firebase Hosting for rapid local market catalog browsing.
• **Dynamic Interactions:** Responsive catalog filtering, real-time preview drawers, and mobile-first storefront flows.
• **Live App:** [https://mrg-idea.web.app/](https://mrg-idea.web.app/) | **Code:** [GitHub Repository](https://github.com/M20A03/Future-working-app)`,
    suggestions: ["Roshan Enterprises Marketplace", "Praxirence Platform", "All Projects", "Contact Mayank"]
  },
  {
    category: "samagra_and_flux",
    keywords: [
      "samagra", "csa", "computer science association", "department portal",
      "flux", "fest", "registration portal", "ticketing", "event portal"
    ],
    reply: `Mayank is an active technical student leader for the **Computer Science Association (CSA) at Christ University**:

• **Samagra Portal:** Single-handedly designed, built, and maintains *Samagra*, the official departmental web portal centralizing academic syllabi, faculty directories, 6 student clubs, and event archives.
• **Flux Registration Engine:** Built the entire end-to-end online ticketing and registration system with automated QR verification for the department's flagship fest.`,
    suggestions: ["Teaching & Mentorship", "Academic Journey", "Research Lead Work", "View Resume"]
  },
  {
    category: "search_visualizer",
    keywords: [
      "linear search", "binary search", "search visualizer", "algorithms", "dsa",
      "star-command", "star command", "array visualizer", "interactive simulation"
    ],
    reply: `**Linear & Binary Search Visualizer** is an educational algorithm suite engineered by Mayank:

• **Interactive Simulations:** Features 5 visual simulations of Linear and Binary Search, plus real-life scenario simulations (dictionary lookups, library card catalogs).
• **Star-Command AI Chatbot:** Built-in intelligent AI assistant that explains Big-O time and space complexity step-by-step as array mutations occur.
• **Live Demo:** [linear-and-binary-search.web.app](https://linear-and-binary-search.web.app) | **Source:** [GitHub](https://github.com/M20A03/Linear-and-Binary-Search)`,
    suggestions: ["DSA & Problem Solving", "All Projects", "View Resume", "Contact Mayank"]
  },
  {
    category: "hackathons",
    keywords: [
      "hackathon", "hackathons", "promptwars", "inhack", "hacknova", "codex",
      "yugastr", "competition", "hackathon wins", "hackathon participation", "gamejam"
    ],
    reply: `Mayank thrives in high-pressure competitive engineering sprints:

• **PromptWars:** Organized by **Google Developer Groups (GDG) on Campus x Christ University**.
• **InHack '26 & HackNova:** Multi-stage hackathons building rapid AI prototypes under tight deadlines.
• **CODEX '26:** High-intensity coding hackathon hosted by Don Bosco Institute of Technology.
• **YUGASTR '26:** Intercollegiate technical symposium and developer challenges.`,
    suggestions: ["Certifications", "Praxirence Project", "Tech Stack Arsenal", "Download Resume"]
  },
  {
    category: "certifications",
    keywords: [
      "certification", "certifications", "certificate", "certificates", "spark",
      "spark research", "infosys", "microsoft", "reliance", "prompt engineering certification"
    ],
    reply: `Mayank holds several verified technical and research credentials:

• **SPARK Research Program:** Christ (Deemed to be University) faculty-sponsored research certification.
• **Web Development Internship:** Verified certificate from ShadowFox (**Credential ID: SF05VIP397**).
• **AI Prompt Engineering:** Certified by **Microsoft / Reliance**.
• **Infosys C Certification:** Foundational systems and procedural programming mastery.`,
    suggestions: ["Hackathons", "Academic Record", "Download Resume", "Contact Mayank"]
  },
  {
    category: "education_cgpa",
    keywords: [
      "education", "college", "university", "christ university", "bca", "degree",
      "cgpa", "gpa", "marks", "grades", "school", "rajkamal", "dhanbad", "cbse",
      "class 12", "class xii", "studies", "academic"
    ],
    reply: `**Education & Academic Record:**

• **Bachelor of Computer Applications (BCA)** — *Christ (Deemed to be University), Bangalore* (2025 – 2029)
  - **Academic Standing:** Maintained a **3.33/4.0 CGPA** while simultaneously leading university research and shipping production apps.
  - **Core Coursework:** Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (MySQL/PostgreSQL), Web Architecture, Discrete Mathematics.
• **Class XII (CBSE)** — *Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand* (2023)
  - Higher Secondary education with distinction before executing his successful pivot to Computer Science.`,
    suggestions: ["Pivot from Commerce", "Stipendiary Research Lead", "Teaching & Mentorship", "View Resume"]
  },
  {
    category: "commerce_pivot",
    keywords: [
      "pivot", "commerce", "switch", "origin story", "background", "non-cs",
      "first attempt", "why computer science", "commerce to cs", "story", "journey"
    ],
    reply: `Mayank made a bold and successful **pivot from a Commerce background in high school to Computer Science**, clearing Christ University's rigorous BCA entrance on his **very first attempt**!

• **Why This Matters:** Rather than seeing this as a handicap, it gives Mayank an unfair advantage over typical developers.
• **The Hybrid Advantage:** He thinks in terms of **unit economics, product-market fit, conversion rates, and business ROI** just as naturally as Big-O time complexity, database normalization, and neural inference latency.`,
    suggestions: ["Academic Record", "Praxirence Platform", "All Projects", "Contact Mayank"]
  },
  {
    category: "full_tech_stack",
    keywords: [
      "skills", "tech stack", "technologies", "languages", "frameworks", "tools",
      "what can you build", "technical competencies", "arsenal", "stacks"
    ],
    reply: `Mayank's comprehensive technical arsenal covers the full spectrum of modern software engineering:

• **Languages:** Java, Python (Pandas, NumPy, OpenCV, PyTorch), TypeScript, JavaScript (ES6+), C, C++, SQL (PostgreSQL, MySQL).
• **AI & Deep Learning:** PyTorch, U2-Net, Whisper ASR, Mistral-7B, YOLOv11, OpenCV, Vis-NIR Spectroscopy, Hugging Face, Agentic AI.
• **Frontend Engineering:** React 19, Next.js 15 (App Router, Server Components), Tailwind CSS v4, Framer Motion, shadcn/ui.
• **Mobile Development:** React Native, Expo, Android native architecture, Jetpack.
• **Backend & APIs:** FastAPI, Node.js, Express.js, RESTful APIs, WebSockets, JWT Auth.
• **Databases & Cloud:** PostgreSQL (Supabase with pgvector), MySQL, MongoDB, Firebase, Railway, AWS (S3, EC2), Vercel.
• **DevOps & Tools:** Git, GitHub, Postman, Linux/Bash, VS Code, Eclipse IDE, Docker.`,
    suggestions: ["Praxirence Platform", "Agricultural Vision System", "Download Resume", "Contact Mayank"]
  },
  {
    category: "python_ai_skills",
    keywords: [
      "python", "ai", "machine learning", "ml", "deep learning", "pytorch",
      "opencv", "whisper", "mistral", "u2-net", "yolov11", "pandas", "numpy"
    ],
    reply: `Mayank's **AI & Machine Learning Engineering** credentials:

• **Speech & LLMs:** Fine-tuned **Whisper-Small** for multi-speaker clinical transcription and **Mistral-7B** (QLoRA) for structured SOAP notes (0.92 ROUGE-1 score) in Praxirence.
• **Computer Vision:** Deployed **U2-Net** for salient foreground extraction and continuous alpha matting; trained custom **YOLOv11** architectures reaching 94%+ detection accuracy.
• **Spectral Processing:** Integrated **Vis-NIR 400nm–1000nm diffuse reflectance spectroscopy** with macro specimen morphology.
• **Libraries:** PyTorch, OpenCV, PIL/Pillow, NumPy, Pandas, Scikit-Learn, Hugging Face.`,
    suggestions: ["Agricultural Vision System", "Praxirence Architecture", "Full Tech Stack", "View Resume"]
  },
  {
    category: "web_frontend_skills",
    keywords: [
      "frontend", "react", "next.js", "nextjs", "typescript", "javascript",
      "tailwind", "framer motion", "shadcn", "css", "html", "react 19"
    ],
    reply: `Mayank is an expert **Modern Web & Frontend Architect**:

• **Frameworks:** React 19, Next.js 15 (App Router, Server Components, SSR/SSG caching), Vite.
• **Styling & Motion:** Tailwind CSS v4, Framer Motion springs and scroll animations, shadcn/ui, Radix UI.
• **Performance & Accessibility:** Locked 60fps virtualization (react-window), zero layout shift (CLS), 100% WCAG 2.1 AA accessibility.
• **Type Safety:** Strict-mode TypeScript end-to-end.`,
    suggestions: ["Roshan Enterprises Marketplace", "Credex Fintech", "Full Tech Stack", "Contact Mayank"]
  },
  {
    category: "mobile_app_skills",
    keywords: [
      "mobile", "android", "react native", "expo", "ios", "app development",
      "mobile apps", "doctor app", "patient app"
    ],
    reply: `Mayank's **Mobile App Development** expertise:

• **React Native & Expo:** Architected the dual-ecosystem mobile apps for **Praxirence**:
  - *Praxirence Doctor:* Real-time audio waveform transcription, consultation audio shredding, OPD triage queues.
  - *Praxirence Patient:* Passwordless OTP auth, encrypted health vault, and medication reminder copilot.
• **Speed & Grit:** Proactively developed 70% of 2 standalone Android apps for an incubation startup in just 7 days!`,
    suggestions: ["Praxirence Architecture", "Full Tech Stack", "Download Resume", "Contact Mayank"]
  },
  {
    category: "smruti_hardware_research",
    keywords: [
      "smruti", "dr smruti", "hardware", "prototype", "50 times", "50 iterations",
      "stalled", "measurements", "first prototype", "physical model"
    ],
    reply: `Mayank's standout **hardware and lab breakthrough under Dr. Smruti Ma'am**:

• **The Challenge:** In mid-July, Mayank joined a university research project that had stalled for 6 months at <10% output due to critical structural flaws.
• **Relentless Iteration:** Entrusted to redesign it from scratch—with no existing model in the world to reference—he spent 15 grueling days alone, testing and calculating over **50 component redesigns** until he built a functioning physical prototype.
• **Impact:** That working physical prototype is now actively deployed in the research lab collecting datasets for the computer vision pipeline.`,
    suggestions: ["Agricultural Vision Research", "Teaching & Mentorship", "Academic Record", "View Resume"]
  },
  {
    category: "teaching_mentorship",
    keywords: [
      "teach", "teaching", "mentoring", "mentor", "peer help", "class helper",
      "java lab", "python lab", "assignment help", "classmates"
    ],
    reply: `Mayank is widely known across his section as the **go-to mentor and technical helper**:

• **Full-Stack Java Lab:** When Dr. Smruti Ma'am requested help teaching full-stack Java (Eclipse, JDBC, MySQL) to the class, Mayank helped guide students through practical exercises.
• **Python Lab Instruction:** Taught the entire class how to bridge frontend (Streamlit) with backend (Flask) to build full interactive applications.
• **Peer Culture:** Known for patiently sitting with peers (friends and strangers alike) to debug syntax errors, explain algorithmic concepts, and demystify complex assignments.`,
    suggestions: ["Samagra Department Portal", "Academic Record", "Agricultural Vision Research", "Contact Mayank"]
  },
  {
    category: "hiring_and_roles",
    keywords: [
      "hire", "job", "recruiter", "interview", "hire mayank", "internship opportunity",
      "full time", "availability", "when can start", "relocation", "bangalore",
      "remote", "salary", "why hire", "differentiator"
    ],
    reply: `**Why Recruiters Hire Mayank Raj Gupta:**

1. **Extreme Problem-Solving Grit:** When physical hardware or deep learning models fail, he doesn't give up. He tested 50+ iterations alone to solve a stalled research project.
2. **Turnaround Velocity:** Built 70% of 2 standalone Android apps plus a full web platform in just one week for a campus incubation startup.
3. **Dual Mindset:** Pivoted from Commerce to CS—bringing business acumen, product sense, and unit economics to engineering decisions.
4. **Production Quality:** From DPDP/HIPAA-compliant healthcare (Praxirence) to 60fps virtualized marketplaces (Roshan Enterprises), he writes clean, type-safe, tested code.

• **Availability:** Open for Software Engineering & Full-Stack / AI Internships, Junior Developer positions, and contract engineering.
• **Location:** Available onsite in Bangalore or remotely worldwide.
• **Direct Email:** [mayankrajgupta01@gmail.com](mailto:mayankrajgupta01@gmail.com) | **Phone:** [+91 9835139865](tel:+919835139865)`,
    suggestions: ["Download Resume", "Praxirence Platform", "Agricultural Vision System", "Contact Mayank"]
  },
  {
    category: "contact_information",
    keywords: [
      "contact", "email", "phone", "call", "reach", "message", "whatsapp",
      "linkedin", "github", "address", "location", "connect"
    ],
    reply: `Connect directly with Mayank Raj Gupta:

• **Email:** [mayankrajgupta01@gmail.com](mailto:mayankrajgupta01@gmail.com)
• **Phone:** [+91 9835139865](tel:+919835139865)
• **LinkedIn:** [linkedin.com/in/mayank-raj-gupta](https://www.linkedin.com/in/mayank-raj-gupta)
• **GitHub:** [github.com/M20A03](https://github.com/M20A03)
• **Portfolio:** [https://www.mayankraj.me](https://www.mayankraj.me)
• **Location:** Bangalore, Karnataka, India`,
    suggestions: ["Download Resume", "Why Hire Mayank", "All Projects", "Tech Stack Arsenal"]
  },
  {
    category: "resume_download",
    keywords: ["resume", "cv", "pdf", "download resume", "view cv", "curriculum vitae", "summary"],
    reply: `You can view and download Mayank's complete recruiter-optimized **1-page resume** directly on the **[/resume](/resume)** page:

• Contains detailed breakdowns of his education at Christ University (3.33 CGPA), Stipend-Funded Research Assistantship, ShadowFox Internship, Praxirence, Roshan Enterprises, and complete technical skill matrix.
• Download links for both PDF and DOCX formats are available right on the page.`,
    suggestions: ["Open /resume Page", "Contact Mayank", "Praxirence Platform", "Agricultural Vision System"]
  },
  {
    category: "who_is_mayank",
    keywords: [
      "who is mayank", "about mayank", "introduce", "introduction", "tell me about yourself",
      "summary", "profile", "bio", "overview"
    ],
    reply: `**Mayank Raj Gupta** is a **Full-Stack & AI Systems Architect**, Mobile App Developer, and BCA Scholar at **Christ University, Bangalore** (3.33/4.0 CGPA):

• **Research Leadership:** Serves as **AI & Computer Vision Research Lead (Stipendiary)** at Christ University, engineering a 4-stage vision & Vis-NIR spectral analytics pipeline standardizing 11,500 artifacts across 2,300 specimens.
• **Flagship Engineering:** Architect of **Praxirence**, a zero-trust ambient clinical intelligence healthcare platform with 2 native Android apps and fine-tuned Whisper & Mistral-7B models.
• **Production Platforms:** Built the **Roshan Enterprises** B2B/B2C virtualized e-commerce marketplace, **Credex** SaaS financial spend auditor, and **Samagra** CSA departmental portal.
• **Background:** Made a bold pivot from Commerce to Computer Science (cleared on first attempt), combining business ROI and unit economics with high-performance software engineering.`,
    suggestions: ["Praxirence Platform", "Agricultural Vision System", "Why Hire Mayank", "Download Resume"]
  },
  {
    category: "greetings",
    keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good afternoon", "good evening", "sup", "yo"],
    reply: `Namaste! I am **Mayank AI**, the dedicated intelligent portfolio assistant for **Mayank Raj Gupta**.

I have deep, verified knowledge of his **stipend-funded agricultural computer vision research at Christ University, his flagship Praxirence healthcare platform, Roshan Enterprises e-commerce marketplace, ShadowFox internship, technical skill arsenal, and recruiter interview details**.

How can I help you explore his work today?`,
    suggestions: [
      "Praxirence Healthcare AI",
      "Agricultural Vision System",
      "Full Tech Stack Arsenal",
      "Why Hire Mayank"
    ]
  }
];

// Advanced semantic resolution engine
export function synthesizeLocalResponse(userMessage: string): { reply: string; suggestions: string[] } {
  const normalized = userMessage.toLowerCase().trim();
  const words = normalized.split(/[^a-z0-9]+/i).filter(Boolean);
  const wordSet = new Set(words);

  let bestIntent: ChatIntent | null = null;
  let highestScore = 0;

  for (const intent of SEMANTIC_INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (kw.includes(" ")) {
        if (normalized.includes(kw)) score += 8;
      } else if (kw.length <= 3) {
        if (wordSet.has(kw)) score += 5;
      } else {
        if (wordSet.has(kw)) {
          score += 5;
        } else if (normalized.includes(kw)) {
          score += 3;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && highestScore >= 3) {
    return {
      reply: bestIntent.reply,
      suggestions: bestIntent.suggestions
    };
  }

  // Smart contextual synthesis referencing Mayank's verified accomplishments
  return {
    reply: `That's a great question regarding **"${userMessage}"**!

As Mayank's personal AI assistant, I can share that Mayank is a **Full-Stack & AI Systems Architect and BCA Scholar at Christ University (Bangalore, 3.33 CGPA)**. 

His key accomplishments include:
• **AI & Computer Vision Research Lead (Stipendiary):** Automated 4-stage vision & Vis-NIR spectral pipeline standardizing 11,500 dataset artifacts across 2,300 physical specimens using U2-Net and Lanczos-3 downsampling.
• **Praxirence Healthcare Ecosystem:** Dual native Android apps (React Native/Expo) with fine-tuned Whisper & Mistral-7B SOAP note synthesis and zero audio retention AES-256 vault.
• **Production Systems:** Roshan Enterprises virtualized B2B/B2C marketplace, Credex fintech audit engine, and ShadowFox web development internship (SF05VIP397).

What specific area would you like to dive deeper into?`,
    suggestions: [
      "Praxirence Healthcare AI",
      "Agricultural Vision System",
      "Full Tech Stack Arsenal",
      "Why Hire Mayank"
    ]
  };
}
