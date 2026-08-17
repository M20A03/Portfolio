export type ProjectCategory = "Full-Stack" | "Frontend" | "Tools";

export interface ProjectProcessStep {
  title: string;
  text: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  thumbnailAlt: string;
  category: ProjectCategory;
  date: string;
  color: string;
  emoji: string;
  image: string | null;
  isPrivate?: boolean;
  stats?: string;
  outcome?: string;
  highlights?: string[];
  subtitle?: string;
  featureTitle?: string;
  process?: ProjectProcessStep[];
}

export const projectData: ProjectData[] = [
  {
    slug: "credex",
    title: "Credex AI Spend Audit",
    subtitle: "Saver AI & Real-Time Savings Calculator",
    description:
      "A next-generation financial audit tool designed for Indian startups to optimize SaaS & AI spend in INR (₹). Features a dynamic savings calculator with lakh/crore notation, a floating orb AI chatbot powered by Anthropic's Claude SDK, and an animated results dashboard with spring-physics tickers.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS v4",
      "Anthropic SDK",
      "Supabase",
      "Zustand",
      "GSAP",
      "Framer Motion"
    ],
    demoUrl: "https://credex-sand.vercel.app",
    githubUrl: "https://github.com/M20A03/Credex",
    thumbnailAlt: "Credex AI Spend Audit Dashboard",
    category: "Full-Stack",
    date: "Feb 2026",
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "💳",
    image: "/images/credex.png",
    isPrivate: false,
    stats: "Next.js · Anthropic SDK · GSAP · Supabase",
    outcome: "Created a zero-latency auditing calculator with high-performance CSS animations and custom-tuned Claude consulting chat bot.",
    highlights: [
      "Real-time savings auditing engine calculating in Indian Rupee format",
      "State-of-the-art Claude-powered chat orb built via Anthropic SDK",
      "Zustand store persistent caching for immediate offline lookups",
      "GSAP scroll animations combined with lightweight pure CSS keyframes"
    ],
    featureTitle: "AI Spend Diagnostics & Spring-Physics Analytics",
    process: [
      {
        title: "Problem",
        text: "Indian startups overpay on AI APIs and SaaS subscriptions without a clear, localized tool to analyze and cut costs."
      },
      {
        title: "Design",
        text: "Crafted a dark-themed portal with interactive slider audits, glassmorphic layout wrappers, and liquid background bubbles."
      },
      {
        title: "Build",
        text: "Engineered audit logic in pure TS, integrated Supabase for lead capturing, and connected Claude AI to deliver real-time savings advice."
      },
      {
        title: "Outcome",
        text: "Shipped a zero-overhead landing page and analysis console deployed globally on Vercel."
      }
    ]
  },
  {
    slug: "gmt-mart",
    title: "GMT Mart Grocery & Retail Platform",
    subtitle: "GMT Mart Storefront",
    description:
      "A high-performance e-commerce platform built for GMT MART. Features a stunning Antigravity neon design, a blazing fast Next.js storefront, a secure Firebase Cloud Functions Express.js API backend, and a Supabase PostgreSQL database.",
    techStack: ["React", "Next.js", "Tailwind CSS v4", "Supabase", "Firebase", "Zustand", "PostHog"],
    demoUrl: "https://gmt-mart-black.vercel.app",
    githubUrl: "https://github.com/M20A03/Gmt-mart",
    thumbnailAlt: "GMT Mart Online Grocery & Retail E-Commerce Application",
    category: "Full-Stack",
    date: "Jan 2026",
    color: "from-emerald-500/20 to-lime-500/20",
    emoji: "🏬",
    image: "/images/gmt-mart.png",
    isPrivate: true,
    stats: "Next.js 16 · Supabase · Firebase SDK · Tailwind CSS v4",
    outcome: "Built a modern e-commerce platform with real-time stock management, custom-designed banners, and persistent Zustand-based cart management.",
    highlights: [
      "Stunning 'Antigravity' neon design with full dark-mode responsiveness",
      "Firebase Cloud Functions Express API serving as a middleware backend",
      "Supabase DB schemas for categories, products, store reviews, and orders",
      "Integrated analytics using PostHog client/node SDKs"
    ],
    featureTitle: "High-Speed Retail Commerce & Inventory UX",
    process: [
      {
        title: "Problem",
        text: "Create a unified grocery store that can handle fast product catalog queries, real-time reviews, and persistent state for user carts."
      },
      {
        title: "Design",
        text: "Implemented a dark-mode cyberpunk interface with green/cyan accents and Swiper.js image sliders."
      },
      {
        title: "Build",
        text: "Wrote Supabase SQL schemas for relational data, connected it to Next.js 16 and Tailwind CSS v4, and integrated Firebase Auth for admin dashboards."
      },
      {
        title: "Outcome",
        text: "Successfully deployed the live storefront on Vercel and configured the backend using Firebase hosting + functions."
      }
    ]
  },
  {
    slug: "roshan-enterprises",
    title: "Wholesale & Retail E-Commerce Website",
    subtitle: "Roshan Enterprises Storefront",
    description:
      "A full-stack e-commerce platform for Roshan Enterprises, enabling both retail and wholesale purchasing. Features guest browsing, Firebase authentication, interactive cart, protected checkout, order history, and a premium dark-mode UI with glassmorphism effects.",
    techStack: ["React", "Vite", "Firebase", "Vanilla CSS", "Lucide React", "js-cookie"],
    demoUrl: "https://e-commerce-roshan-enterprises-dhn.web.app",
    githubUrl: "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
    thumbnailAlt: "Roshan Enterprises Wholesale & Retail E-Commerce Storefront",
    category: "Full-Stack",
    date: "Jan 2026",
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "🛒",
    image: "/images/srs-ecommerce.png",
    isPrivate: false,
    stats: "React · Firebase Auth · js-cookie · list virtualization",
    outcome: "Delivered a complete checkout flow and role-based buying journey for both retail and wholesale customers.",
    highlights: [
      "Retail + wholesale buying journeys in one interface",
      "Firebase authentication, protected checkout, and order history",
      "Premium dark-mode UI with glassmorphism and clear product hierarchy",
      "List virtualization with react-window for high-performance product browsing"
    ],
    featureTitle: "E-Commerce Architecture & Conversion UX",
    process: [
      {
        title: "Problem",
        text: "Create a single storefront that serves both retail customers and wholesale buyers without making either path feel complicated."
      },
      {
        title: "Design",
        text: "Prioritized clear category browsing, product cards, and visible trust signals so users can shop with confidence."
      },
      {
        title: "Build",
        text: "Implemented the experience with React, Vite, Firebase auth, cart logic, and responsive styling."
      },
      {
        title: "Outcome",
        text: "Delivered a complete checkout journey with a polished interface and a live demo that is easy to present in interviews."
      }
    ]
  },
  {
    slug: "flux",
    title: "FLUX - Cyberpunk IT & Cultural Fest",
    subtitle: "Christ University Department Fest",
    description:
      "A cyberpunk-themed intercollegiate fest website built for the Department of Computer Science. Features a gamified hacker registration sequence, countdown timer, matrix-rain canvas, and a built-in search chatbot.",
    techStack: ["React", "Next.js", "Tailwind CSS v4", "Axios", "Lucide React"],
    demoUrl: "https://flux-six-mu.vercel.app",
    githubUrl: "https://github.com/M20A03/Flux",
    thumbnailAlt: "FLUX IT & Cultural Fest Portal",
    category: "Frontend",
    date: "2026",
    color: "from-purple-500/20 to-pink-500/20",
    emoji: "⚡",
    image: "/images/flux.png",
    isPrivate: true,
    stats: "Next.js 16 · Cyberpunk Theme · Canvas Effects · Custom Chatbot",
    outcome: "Built a highly interactive event website with a custom keyword-matching assistant chatbot and mock registration api.",
    highlights: [
      "Custom matrix cyber-rain backdrop using HTML5 canvas context API",
      "Built-in keyword-matching chatbot to assist attendees with event rules and fees",
      "Interactive cyberpunk event grid showcasing tech and cultural categories",
      "Mock registration modal with a gamified loading indicator"
    ],
    featureTitle: "Cyberpunk Immersive Landing & Event Assistant UX",
    process: [
      {
        title: "Problem",
        text: "Christ University fests need immersive, theme-focused portals that engage students and handle registrations."
      },
      {
        title: "Design",
        text: "Crafted a neon-glowing cyberpunk layout with matrix green, cyan, and magenta accent colors."
      },
      {
        title: "Build",
        text: "Implemented the site in Next.js 16 and Tailwind CSS v4, drawing a dynamic grid of technical and cultural events."
      },
      {
        title: "Outcome",
        text: "Delivered an interactive, theme-rich landing page complete with mock registration and an assistant bot."
      }
    ]
  },
  {
    slug: "event-registration-desk-system",
    title: "Event Registration & Admin Desk",
    subtitle: "Annual Tech Conference 2025",
    description:
      "A production-ready event registration platform built for the Annual Tech Conference. Integrates Node.js Express routes, EJS template engine, Supabase PostgreSQL database, and Nodemailer for sending structured email confirmations with .ics calendar attachments.",
    techStack: ["Node.js", "Express", "EJS", "Supabase", "PostgreSQL", "Nodemailer", "HTML/CSS/JS"],
    demoUrl: "https://event-registration-desk-system.vercel.app",
    githubUrl: "https://github.com/M20A03/Event-Registration-Desk-System",
    thumbnailAlt: "Event Registration Desk Interface",
    category: "Full-Stack",
    date: "2026",
    color: "from-purple-500/20 to-violet-500/20",
    emoji: "🎟️",
    image: "/images/event-registration.png",
    isPrivate: false,
    stats: "Node.js · EJS · Supabase DB · SMTP integration",
    outcome: "Built a secure registration flow with duplicate checks, email templates with custom .ics calendar attachments, and an admin dashboard with CSV exporting.",
    highlights: [
      "Input sanitation and server-side validation using express-validator",
      "Automated SMTP emails for attendees (with calendar invite) and organizers",
      "Custom EJS templates rendering responsive forms and admin boards",
      "Supabase PostgreSQL direct connections handling attendee storage"
    ],
    featureTitle: "Secure Attendee Registration & Database Infrastructure",
    process: [
      {
        title: "Problem",
        text: "Event hosts need a reliable registration page that sends immediate calendar attachments and a dashboard to download attendee lists as CSV."
      },
      {
        title: "Design",
        text: "Designed a simple, accessible layout for attendee sign-ups and a secure admin table view."
      },
      {
        title: "Build",
        text: "Developed Express backend routes, integrated node-postgres connections to Supabase, and used Nodemailer for mail SMTP transport."
      },
      {
        title: "Outcome",
        text: "Shipped the full-stack portal with automatic table provisioning and Vercel-ready serverless configurations."
      }
    ]
  },
  {
    slug: "samagra",
    title: "Samagra - Computer Science Department Portal",
    subtitle: "Christ University CSA",
    description:
      "The official web portal for the Computer Science Association (SAMAGRA) at Christ University. Centralizes academic announcements, event scheduling, student committees, club activities, and student blogs.",
    techStack: ["React", "Vite", "Tailwind CSS v4", "tsParticles", "Lenis", "Framer Motion", "React Router v7", "Zustand"],
    demoUrl: "https://samagara.vercel.app/",
    githubUrl: "https://github.com/M20A03/Samagara",
    thumbnailAlt: "Samagra Computer Science Department Website Portal",
    category: "Full-Stack",
    date: "2026",
    color: "from-violet-500/20 to-indigo-500/20",
    emoji: "🎓",
    image: "/images/samagara.png",
    isPrivate: true,
    stats: "React 19 · Vite 8 · Tailwind CSS v4 · tsParticles",
    outcome: "Centralized CS department information, providing a smooth user experience through Lenis scroll animations and canvas-based particles.",
    highlights: [
      "Built a fully dynamic navigation and page system using React Router v7",
      "Interactive club directory showcasing student programming activities",
      "Smooth scrolling container with Lenis and canvas particles background",
      "Clean UI layout leveraging Tailwind CSS v4's fast build times"
    ],
    featureTitle: "Academic Information Architecture & Portal Engineering",
    process: [
      {
        title: "Problem",
        text: "Department notices and student club updates were fragmented and lacked a clean, centralized digital platform."
      },
      {
        title: "Design",
        text: "Designed a professional academic portal using dark/light teal color accents, featuring particle effects on the Hero page."
      },
      {
        title: "Build",
        text: "Developed modular pages for Clubs, Events, and Members, implementing React 19 and Vite 8 for hot-reloading speed."
      },
      {
        title: "Outcome",
        text: "Deployed to Vercel, providing a streamlined hub for the CS department student body."
      }
    ]
  },
  {
    slug: "future-working-app",
    title: "Future Working App",
    subtitle: "Personal Product Idea & Landing",
    description: "A private project geared for a personal product launch, featuring local market catalog browsing and clean responsive interfaces.",
    techStack: ["React", "Vite", "Firebase", "Tailwind CSS"],
    demoUrl: "https://mrg-idea.web.app/",
    githubUrl: "https://github.com/M20A03/Future-working-app",
    thumbnailAlt: "Future Working App Local Market Storefront",
    category: "Full-Stack",
    date: "2026",
    color: "from-yellow-500/20 to-amber-500/20",
    emoji: "💡",
    image: "/images/future-working-app.png",
    isPrivate: true,
    stats: "React · Vite · Firebase Hosting",
  },
  {
    slug: "search-algorithm-simulator",
    title: "Search Algorithm Simulator",
    subtitle: "Linear & Binary Search Visualizer with AI",
    description:
      "An interactive web app featuring 5 visual simulations of Linear and Binary search algorithms, plus 2 real-life problem simulations. Integrates Star-Command AI chatbot to explain concepts step-by-step.",
    techStack: ["JavaScript", "HTML", "CSS", "Firebase", "AI Chatbot"],
    demoUrl: "https://linear-and-binary-search.web.app",
    githubUrl: "https://github.com/M20A03/Linear-and-Bineary-Search-Simulation",
    thumbnailAlt: "Search Algorithm Simulator Interactive Visualization Tool",
    category: "Tools",
    date: "Feb 2026",
    color: "from-cyan-500/20 to-blue-500/20",
    emoji: "🔍",
    image: "/images/project-search-sim.png",
    isPrivate: false,
    stats: "AI Chatbot · 5 Simulations · DSA Interactive Tool",
    outcome: "Made DSA concepts easier to understand with interactive visuals and guided explanations.",
    highlights: [
      "5 interactive algorithm visualization modes for Linear and Binary Search",
      "Real-world application simulations for practical computer science learning",
      "Star-Command AI chatbot integrated to explain search logic interactively",
      "Built with vanilla JS and hosted seamlessly on Firebase"
    ],
    featureTitle: "Interactive Learning & Algorithm Visualization",
    process: [
      {
        title: "Problem",
        text: "Data structures and algorithms can feel abstract. Students need an intuitive, hands-on visual aid to grasp search efficiency."
      },
      {
        title: "Design",
        text: "Designed step-by-step element highlight animations, execution speed controls, and interactive data arrays."
      },
      {
        title: "Build",
        text: "Engineered visual array mutations and integrated an intelligent AI chatbot helper for automated dynamic explanations."
      },
      {
        title: "Outcome",
        text: "Created an engaging learning application used by peers and instructors to master core DSA concepts."
      }
    ]
  },
  {
    slug: "study-archive",
    title: "Study Archive (CampusShare)",
    subtitle: "Campus Resource & Notes Sharing Platform",
    description:
      "A campus resource platform built to help students manage, share, and access study materials, notes, and previous year questions. Powered by Firebase real-time database for seamless collaboration.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
    demoUrl: "https://straw-hats-7795d.web.app",
    githubUrl: "https://github.com/M20A03/StudyArchive",
    thumbnailAlt: "Study Archive Campus Material Platform Interface",
    category: "Full-Stack",
    date: "Feb 2026",
    color: "from-purple-500/20 to-pink-500/20",
    emoji: "📚",
    image: "/images/project-study-archive.png",
    isPrivate: false,
    stats: "Firebase Realtime DB · Cloud Storage · Student Portal",
    outcome: "Created a single access point for study resources with cloud-backed updates.",
    highlights: [
      "Centralized study notes, syllabus PDFs, and previous year questions",
      "Firebase realtime database backend for instant resource sync across devices",
      "Clean filterable category navigation designed for rapid exam prep",
      "Live deployment serving active university students"
    ],
    featureTitle: "Cloud Collaboration & Academic Resource UX",
    process: [
      {
        title: "Problem",
        text: "Course materials were fragmented across multiple chat groups and hard to search during exam prep."
      },
      {
        title: "Design",
        text: "Organized resources by subject, semester, and material type with quick search and preview features."
      },
      {
        title: "Build",
        text: "Connected client interfaces directly with Firebase Cloud Storage and Realtime Database."
      },
      {
        title: "Outcome",
        text: "Built a reliable hub that streamlines academic resource distribution for students."
      }
    ]
  },
  {
    slug: "yolo11-deep-learning",
    title: "YOLOv11 Computer Vision & Object Detection System",
    subtitle: "Confidential Deep Learning Research @ Christ University",
    description:
      "A confidential deep learning research project utilizing state-of-the-art YOLOv11 computer vision architecture for high-speed object detection, spatial tracking, and automated image feature classification.",
    techStack: ["YOLOv11", "PyTorch", "Python", "Computer Vision", "OpenCV", "Deep Learning"],
    demoUrl: null,
    githubUrl: null,
    thumbnailAlt: "YOLOv11 Deep Learning Computer Vision System",
    category: "Tools",
    date: "2026 — Present",
    color: "from-purple-500/20 to-cyan-500/20",
    emoji: "👁️",
    image: "/images/yolo11-preview.svg",
    isPrivate: true,
    stats: "Confidential Research · YOLOv11 · Christ University",
    outcome: "Trained and evaluated custom YOLOv11 object detection pipelines for specialized vision benchmarks.",
    highlights: [
      "Confidential research project supervised at Christ University",
      "YOLOv11 neural network backbone optimized for low-latency visual inference",
      "Custom dataset annotation, feature extraction, and bounding-box evaluation",
      "Designed for real-time edge hardware deployment and spatial analysis"
    ],
    featureTitle: "Computer Vision Architecture & Neural Inference",
    process: [
      {
        title: "Research & Design",
        text: "Formulated object detection objectives and prepared annotated image datasets for YOLOv11 fine-tuning."
      },
      {
        title: "Model Training",
        text: "Trained YOLOv11 detection models with custom hyperparameters, data augmentations, and loss functions."
      },
      {
        title: "Evaluation",
        text: "Benchmarked mean Average Precision (mAP) and inference latency across diverse testing conditions."
      },
      {
        title: "Outcome",
        text: "Shipped a high-accuracy computer vision pipeline for academic research applications."
      }
    ]
  },
  {
    slug: "thermino-software-project",
    title: "Thermino Thermal Analytics & Modeling System",
    subtitle: "Confidential Deep Learning Project @ Christ University",
    description:
      "An advanced thermal analytics and deep learning software application engineered for heat distribution modeling, automated infrared anomaly detection, and predictive thermal profiling.",
    techStack: ["Deep Learning", "Python", "React", "TypeScript", "Thermal Modeling", "PyTorch"],
    demoUrl: null,
    githubUrl: null,
    thumbnailAlt: "Thermino Thermal Analytics & Deep Learning System",
    category: "Full-Stack",
    date: "2026 — Present",
    color: "from-red-500/20 to-orange-500/20",
    emoji: "🔥",
    image: "/images/thermino-preview.svg",
    isPrivate: true,
    stats: "Confidential Software · Thermal Deep Learning · Christ University",
    outcome: "Engineered specialized deep learning models for thermal heat map analysis and automated diagnostics.",
    highlights: [
      "Confidential software platform developed under Christ University guidance",
      "Deep learning neural networks for infrared pattern recognition and thermal gradients",
      "Full-stack analytical dashboard rendering dynamic heat maps and predictive graphs",
      "Integrated anomaly detection alerting for critical temperature thresholds"
    ],
    featureTitle: "Thermal Intelligence & Predictive Deep Learning",
    process: [
      {
        title: "Data Acquisition",
        text: "Ingested thermal sensor arrays and infrared image feeds into pre-processing data pipelines."
      },
      {
        title: "Model Engineering",
        text: "Developed deep learning regression and classification models to identify thermal hotspots."
      },
      {
        title: "Frontend Integration",
        text: "Built a responsive dashboard to visualize thermal telemetry and real-time inference results."
      },
      {
        title: "Outcome",
        text: "Delivered a full-stack thermal analytics suite for experimental and industrial evaluation."
      }
    ]
  },
  {
    slug: "pokedex-lite",
    title: "Pokedex Lite",
    subtitle: "Lightweight Pokemon Encyclopedia",
    description:
      "A fast, responsive web application for exploring Pokemon stats, abilities, evolutions, and elemental types using data fetched directly from the official RESTful PokéAPI. Implements custom type-based color attributes.",
    techStack: ["JavaScript", "React", "PokeAPI", "Firebase", "CSS"],
    demoUrl: "https://pokedex-deepsolv.web.app/",
    githubUrl: "https://github.com/M20A03/Pokedex-Lite",
    thumbnailAlt: "Pokedex Lite Pokemon Discovery Application Interface",
    category: "Full-Stack",
    date: "2026",
    color: "from-amber-500/20 to-red-500/20",
    emoji: "⚡",
    image: "/images/pokedex-lite.png",
    isPrivate: false,
    stats: "REST API · React · PokéAPI Integration",
    outcome: "Built an energetic, zero-latency visual encyclopedia with client-side caching.",
    highlights: [
      "Asynchronous fetching from PokéAPI with client-side request caching",
      "Type-based color accents matching Pokemon elemental attributes",
      "Search-as-you-type filtering and modal view for detailed stat distributions",
      "Mobile-first responsive design with smooth animations"
    ],
    featureTitle: "API Data Integration & Interactive Filtering",
    process: [
      {
        title: "Problem",
        text: "Standard Pokédex web tools can feel slow due to heavy asset payloads and unoptimized API calls."
      },
      {
        title: "Design",
        text: "Designed vibrant card UI components featuring dynamic color themes based on Pokémon types."
      },
      {
        title: "Build",
        text: "Structured asynchronous fetch calls, debounced search input, and client memory caching."
      },
      {
        title: "Outcome",
        text: "Delivered a snappy, enjoyable interactive encyclopedia web app."
      }
    ]
  },
  {
    slug: "sakhti-dental-clinic",
    title: "Sakthi Dental Clinic Portal",
    subtitle: "Healthcare & Patient Booking System",
    description:
      "A healthcare web platform built for Sakthi Dental Clinic featuring patient appointment booking, doctor schedules, treatment information, and contact management.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    demoUrl: "https://sakthi-dental-clinic-rust.vercel.app",
    githubUrl: "https://github.com/M20A03/Sakthi-Dental-Clinic",
    thumbnailAlt: "Sakthi Dental Clinic Patient Appointment & Healthcare Portal",
    category: "Full-Stack",
    date: "2026",
    color: "from-sky-500/20 to-blue-500/20",
    emoji: "🩺",
    image: "/images/sakhti-dental-clinic.png",
    isPrivate: true,
    stats: "TypeScript · Healthcare UI · Patient Management",
    outcome: "Digitized appointment scheduling and treatment discovery for patients.",
    highlights: [
      "Patient-centric appointment scheduling workflow with form validation",
      "Interactive treatment showcase outlining services, pricing, and FAQs",
      "Clean medical-themed visual styling fostering trust and accessibility",
      "Integrated emergency contact features and clinic operating hours"
    ],
    featureTitle: "Healthcare UX & Accessible Patient Workflows",
    process: [
      {
        title: "Problem",
        text: "Dental clinics need an intuitive online portal for patients to schedule appointments and learn about procedures without friction."
      },
      {
        title: "Design",
        text: "Established a calming blue and cyan palette with accessible typography and clean appointment forms."
      },
      {
        title: "Build",
        text: "Developed responsive form validation, date pickers, and service information accordions."
      },
      {
        title: "Outcome",
        text: "Delivered a healthcare management platform ready for patient interaction."
      }
    ]
  },
  {
    slug: "startup-pitch",
    title: "Startup Pitch",
    subtitle: "Business Landing Page",
    description:
      "A high-conversion responsive landing page designed for a startup pitch portal ('KaroStartup'), featuring custom Framer Motion transitions, trust indicators, and keyboard-friendly bypass elements.",
    techStack: ["React", "Vite", "Framer Motion", "Lucide React", "Tailwind CSS"],
    demoUrl: "https://startup-pitch-mu.vercel.app",
    githubUrl: "https://github.com/M20A03/Startup-Pitch",
    thumbnailAlt: "Startup Pitch Landing Page",
    category: "Frontend",
    date: "2026",
    color: "from-amber-500/20 to-orange-500/20",
    emoji: "🚀",
    image: "/images/startup-pitch.png",
    isPrivate: false,
    stats: "Vite · Framer Motion · a11y focus states",
    outcome: "Designed and engineered an accessible landing page for startup pitch consultations.",
    highlights: [
      "Beautiful section scroll reveals using react-intersection-observer",
      "Custom framer-motion slide-ins and interactive card animations",
      "Skip-to-main content accessibility keyboard bypass routing",
      "Responsive layout for mobile screens up to wide desktop monitors"
    ],
    featureTitle: "Conversion Landing Page & Accessibility Engineering",
    process: [
      {
        title: "Problem",
        text: "Startups need an elegant visual portal that establishes immediate trust with investors."
      },
      {
        title: "Design",
        text: "Created a modern gradient layout with clean typography, spacing, and structured cards."
      },
      {
        title: "Build",
        text: "Wrote reusable React items, configured Framer Motion triggers, and added keyboard outline focus rules."
      },
      {
        title: "Outcome",
        text: "Delivered a clean static page prototype optimized for conversion."
      }
    ]
  },
  {
    slug: "angappbackery",
    title: "Angappbackery Storefront",
    subtitle: "Bakery E-Commerce Portal",
    description:
      "An online bakery storefront application utilizing Angular's component lifecycle and RxJS state management. Integrates Firebase Auth and Cloud Firestore for managing bakery catalogs and customer carts.",
    techStack: ["Angular", "TypeScript", "Firebase Auth", "Cloud Firestore", "RxJS", "SCSS"],
    demoUrl: "https://angappbackery-216fe.web.app/",
    githubUrl: "https://github.com/M20A03/Angappbackery",
    thumbnailAlt: "Angappbackery Bakery Interface",
    category: "Full-Stack",
    date: "2026",
    color: "from-pink-500/20 to-rose-500/20",
    emoji: "🍰",
    image: "/images/angappbackery.png",
    isPrivate: false,
    stats: "Angular 18 · Firebase Auth · RxJS Observables",
    outcome: "Successfully implemented a reactive bakery storefront with live cart syncing.",
    highlights: [
      "Reactive streams using RxJS Observables for shopping cart updates",
      "Firebase client integration managing user authentication and bakery inventories",
      "Clean Angular Router modules providing seamless page transitions",
      "Structured SCSS modules for layout style scalability"
    ],
    featureTitle: "Reactive E-Commerce Architecture & Angular Lifecycle",
    process: [
      {
        title: "Problem",
        text: "A bakery wants an online portal where orders can be placed and catalog stock updates are visible in real-time."
      },
      {
        title: "Design",
        text: "Designed a soft-toned, warm storefront highlighting item categories (cakes, breads, pastries)."
      },
      {
        title: "Build",
        text: "Structured Angular services for Firebase queries, bound cart data to persistent observables, and validated forms."
      },
      {
        title: "Outcome",
        text: "Shipped a reactive single-page app deployed on Firebase Hosting."
      }
    ]
  },
  {
    slug: "fintech",
    title: "Akoin Fintech Page",
    subtitle: "Corporate Fintech Landing",
    description:
      "A comprehensive corporate financial technology landing page built for Akoin Fintech. Features custom preloader animations, theme toggling, and animated gradient mesh backdrops.",
    techStack: ["HTML", "CSS", "JavaScript", "Space Grotesk Font"],
    demoUrl: "https://fintech-six-pi.vercel.app",
    githubUrl: "https://github.com/M20A03/Fintech",
    thumbnailAlt: "Fintech Dashboard Interface",
    category: "Frontend",
    date: "2026",
    color: "from-emerald-500/20 to-teal-500/20",
    emoji: "📈",
    image: "/images/fintech.png",
    isPrivate: false,
    stats: "HTML5 · CSS3 · Custom preloader · Mesh Gradient",
    outcome: "Built an elegant corporate branding page with fluid background grids.",
    highlights: [
      "Custom preloader spinner with animated SVG stroke layouts",
      "Theme provider switching styles seamlessly between dark and light modes",
      "Fluid animated gradient mesh background using raw CSS keyframes",
      "Accessible skip-links and clean navigation hamburger configurations"
    ],
    featureTitle: "Visual Identity & Corporate Landing Page UX",
    process: [
      {
        title: "Problem",
        text: "Fintech platforms need high-quality branding to signal safety and financial competence."
      },
      {
        title: "Design",
        text: "Utilized Space Grotesk and Inter fonts, balanced with sharp geometric SVG assets and corporate amber color palettes."
      },
      {
        title: "Build",
        text: "Wrote semantic HTML5 code, responsive CSS custom variables, and lightweight JS scroll indicators."
      },
      {
        title: "Outcome",
        text: "Shipped a visually appealing corporate showcase page."
      }
    ]
  },
  {
    slug: "online-meeting-app",
    title: "Online Meeting App",
    subtitle: "Video Conferencing Metadata Portal",
    description:
      "A Python Flask prototype allowing users to register, login, and schedule meetings. Backed by a MySQL database for managing metadata, and features a responsive templates UI.",
    techStack: ["Python", "Flask", "MySQL", "EJS/HTML", "CSS"],
    demoUrl: null,
    githubUrl: "https://github.com/M20A03/OnlineMeetingApp",
    thumbnailAlt: "Online Meeting App Interface",
    category: "Tools",
    date: "2026",
    color: "from-sky-500/20 to-blue-500/20",
    emoji: "📹",
    image: "/images/online-meeting.png",
    isPrivate: false,
    stats: "Flask · Python · MySQL · Auth flow",
    outcome: "Delivered a secure login/register database management panel for meetings.",
    highlights: [
      "Secured endpoint handlers using custom Python login-required decorators",
      "Relational MySQL schema managing user records and meeting details",
      "EJS-style clean HTML templates rendering user dashboards",
      "Export routes configured for download of meeting data"
    ],
    featureTitle: "Backend Routing & Relational Database Management",
    process: [
      {
        title: "Problem",
        text: "Providing a quick local prototype for scheduling meeting timetables and user credential logging."
      },
      {
        title: "Design",
        text: "Kept a minimal and tabular layout focused on form validation and simple dashboards."
      },
      {
        title: "Build",
        text: "Connected Flask app endpoints to a MySQL server, implementing sessions for login states."
      },
      {
        title: "Outcome",
        text: "Shipped a functioning Flask metadata admin console ready for database queries."
      }
    ]
  },
  {
    slug: "amazon-clone",
    title: "Amazon Clone",
    subtitle: "E-Commerce Mockup Interface",
    description:
      "A classic static e-commerce homepage layout mimicking Amazon's catalog grid, navigation headers, and responsive product columns.",
    techStack: ["HTML", "CSS", "Responsive Layout"],
    demoUrl: "https://shadow-fox-e-commerce.vercel.app/",
    githubUrl: "https://github.com/M20A03/Amazon-Clone",
    thumbnailAlt: "Amazon Clone Interface",
    category: "Frontend",
    date: "2026",
    color: "from-orange-500/20 to-yellow-500/20",
    emoji: "🛒",
    image: "/images/amazon-clone.png",
    isPrivate: false,
    stats: "HTML · CSS · Static Layout",
    outcome: "Built a fully responsive product catalog grid mimicking Amazon's storefront layout.",
    highlights: [
      "Grid and flexbox layouts rendering columns across mobile and desktop screens",
      "Custom CSS styling simulating the Amazon search bar and navigation banners",
      "Semantic HTML structures organizing product lists",
      "Lightweight assets for immediate loading without script overhead"
    ],
    featureTitle: "Responsive Layouts & Static Page Replication",
    process: [
      {
        title: "Problem",
        text: "Practice responsive grid alignments on highly complex commercial storefront layouts."
      },
      {
        title: "Design",
        text: "Matched color schemes, font spacing, and product cards of Amazon's portal."
      },
      {
        title: "Build",
        text: "Wrote raw HTML5 structure and custom media queries in vanilla CSS."
      },
      {
        title: "Outcome",
        text: "Created a pixel-perfect homepage copy that loads instantaneously."
      }
    ]
  },
  {
    slug: "lumi-glow",
    title: "Lumi Glow Beauty Storefront",
    subtitle: "Lumi Glow",
    description:
      "A modern makeup and beauty products website designed to showcase beauty collections with elegant product presentation, responsive shopping-style sections, and a polished user experience across devices.",
    techStack: ["JavaScript", "HTML", "CSS", "Vite", "React"],
    demoUrl: "https://lumi-glow-sigma.vercel.app",
    githubUrl: "https://github.com/M20A03/Lumi-Glow",
    thumbnailAlt: "Lumi Glow Modern Beauty Products Storefront Interface",
    category: "Frontend",
    date: "Mar 2026",
    color: "from-pink-500/20 to-rose-500/20",
    emoji: "✨",
    image: "/images/lumi-glow.png",
    isPrivate: false,
    stats: "React · Vite · Storefront UI",
    outcome: "Shipped a polished responsive storefront with strong visual hierarchy and brand-focused UI.",
    highlights: [
      "Polished beauty product showcase with premium visual hierarchy",
      "Fully responsive design that looks stunning on mobile, tablet, and desktop",
      "Modern styling with careful attention to spacing, typography, and brand consistency",
      "Built with core web technologies for maximum accessibility and performance"
    ],
    featureTitle: "Visual Craftsmanship & Design System",
    process: [
      {
        title: "Problem",
        text: "A makeup brand needs a storefront that feels premium and inviting, selling through elegance rather than visual clutter."
      },
      {
        title: "Design",
        text: "Focused on clean layouts, generous whitespace, and a curated luxury color scheme."
      },
      {
        title: "Build",
        text: "Crafted custom responsive CSS and lightweight JavaScript components for quick rendering."
      },
      {
        title: "Outcome",
        text: "Shipped a design-forward platform demonstrating deep UI polish and responsive layout design."
      }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectData.find((project) => project.slug === slug);
}
