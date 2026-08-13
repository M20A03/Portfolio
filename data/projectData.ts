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
    slug: "roshan-enterprises",
    title: "Wholesale & Retail E-Commerce Website",
    subtitle: "Roshan Enterprises",
    description:
      "A full-stack e-commerce platform for Roshan Enterprises, enabling both retail and wholesale purchasing. Features guest browsing, Firebase authentication, interactive cart, protected checkout, order history, and a premium dark-mode UI with glassmorphism effects.",
    techStack: ["React", "Vite", "Firebase", "Vanilla CSS", "Lucide React"],
    demoUrl: "https://e-commerce-roshan-enterprises-dhn.web.app",
    githubUrl: "https://github.com/M20A03/SRS-E-commerce-Online-Shopping-for-Retail-and-Wholesale-MayankRaj-2543115",
    thumbnailAlt: "Roshan Enterprises Wholesale & Retail E-Commerce Storefront",
    category: "Full-Stack",
    date: "Jan 2026",
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "🛒",
    image: "/images/srs-ecommerce.png",
    isPrivate: false,
    stats: "JS 68.6% · CSS 31.1% · Semester Final Project",
    outcome: "Delivered a complete checkout flow and role-based buying journey for both retail and wholesale customers.",
    highlights: [
      "Retail + wholesale buying journeys in one interface",
      "Firebase authentication, protected checkout, and order history",
      "Premium dark-mode UI with glassmorphism and clear product hierarchy",
      "Built for a semester final project with a live demo"
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
    slug: "lumi-glow",
    title: "Lumi Glow Beauty Storefront",
    subtitle: "Lumi Glow",
    description:
      "A modern makeup and beauty products website designed to showcase beauty collections with elegant product presentation, responsive shopping-style sections, and a polished user experience across devices.",
    techStack: ["JavaScript", "HTML", "CSS", "Vercel"],
    demoUrl: "https://lumi-glow-sigma.vercel.app",
    githubUrl: "https://github.com/M20A03/Lumi-Glow",
    thumbnailAlt: "Lumi Glow Modern Beauty Products Storefront Interface",
    category: "Frontend",
    date: "Mar 2026",
    color: "from-pink-500/20 to-rose-500/20",
    emoji: "✨",
    image: "/images/lumi-glow.png",
    isPrivate: false,
    stats: "JavaScript · Vercel Deployed",
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
    slug: "gmt-mart",
    title: "GMT Mart Grocery & Retail Platform",
    subtitle: "GMT Mart",
    description:
      "A comprehensive online grocery and retail shopping application offering product catalog browsing, instant search, dynamic cart management, and streamlined customer checkout.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    demoUrl: "https://github.com/M20A03/GMT-Mart",
    githubUrl: "https://github.com/M20A03/GMT-Mart",
    thumbnailAlt: "GMT Mart Online Grocery & Retail E-Commerce Application",
    category: "Full-Stack",
    date: "2026",
    color: "from-emerald-500/20 to-lime-500/20",
    emoji: "🏬",
    image: "/images/gmt-mart.svg",
    isPrivate: false,
    stats: "TypeScript · React · Retail Application",
    outcome: "Streamlined grocery ordering with instant item filtering and quick checkout flow.",
    highlights: [
      "Full retail grocery storefront with category filtering and real-time search",
      "Cart management system supporting item count updates and total price calculation",
      "Responsive layout tailored for mobile shoppers and desktop users alike",
      "Built with modern React & TypeScript architecture for maintainability"
    ],
    featureTitle: "High-Speed Retail Commerce & Inventory UX",
    process: [
      {
        title: "Problem",
        text: "Local retail markets require fast-loading digital storefronts with low-latency search for daily essentials."
      },
      {
        title: "Design",
        text: "Created an intuitive grid interface prioritizing quick add-to-cart actions and clear item pricing."
      },
      {
        title: "Build",
        text: "Implemented stateful React components with strict TypeScript interfaces and dynamic filtering."
      },
      {
        title: "Outcome",
        text: "Engineered a performant retail prototype ready for commercial deployment."
      }
    ]
  },
  {
    slug: "pokedex-lite",
    title: "Pokedex Lite",
    subtitle: "Lightweight Pokemon Encyclopedia",
    description:
      "A fast, responsive web application for exploring Pokemon stats, abilities, evolutions, and elemental types using data fetched directly from the official RESTful PokéAPI.",
    techStack: ["JavaScript", "React", "PokeAPI", "Tailwind CSS"],
    demoUrl: "https://github.com/M20A03/Pokedex-Lite",
    githubUrl: "https://github.com/M20A03/Pokedex-Lite",
    thumbnailAlt: "Pokedex Lite Pokemon Discovery Application Interface",
    category: "Full-Stack",
    date: "2026",
    color: "from-amber-500/20 to-red-500/20",
    emoji: "⚡",
    image: "/images/pokedex-lite.svg",
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
    title: "Sakhti Dental Clinic Portal",
    subtitle: "Healthcare & Patient Booking System",
    description:
      "A healthcare web platform built for Sakhti Dental Clinic featuring patient appointment booking, doctor schedules, treatment information, and contact management.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    demoUrl: "https://github.com/M20A03/Sakhti-Dental-Clinic",
    githubUrl: "https://github.com/M20A03/Sakhti-Dental-Clinic",
    thumbnailAlt: "Sakhti Dental Clinic Patient Appointment & Healthcare Portal",
    category: "Full-Stack",
    date: "2026",
    color: "from-sky-500/20 to-blue-500/20",
    emoji: "🩺",
    image: "/images/sakhti-dental-clinic.svg",
    isPrivate: false,
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
    slug: "samagra",
    title: "Samagra - Computer Science Department Portal",
    subtitle: "Academic Department Website",
    description:
      "An all-in-one portal created for the Computer Science Department featuring academic notices, course syllabus downloads, faculty directories, event schedules, and student project showcases.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://github.com/M20A03/Samagra",
    githubUrl: null,
    thumbnailAlt: "Samagra Computer Science Department Website Portal",
    category: "Full-Stack",
    date: "2026",
    color: "from-violet-500/20 to-indigo-500/20",
    emoji: "🎓",
    image: "/images/samagra.svg",
    isPrivate: false,
    stats: "Next.js · Department Portal · CS Academic Hub",
    outcome: "Unified departmental announcements, syllabus materials, and student resources into a central digital platform.",
    highlights: [
      "Official Computer Science department hub for notices, curriculum, and exam updates",
      "Faculty profiles, research publication links, and office hour schedules",
      "Student project showcase section highlighting departmental talent",
      "Modern Next.js architecture with fast server rendering and responsive layouts"
    ],
    featureTitle: "Academic Information Architecture & Portal Engineering",
    process: [
      {
        title: "Problem",
        text: "Department information, timetables, and notices were dispersed across noticeboards and informal channels."
      },
      {
        title: "Design",
        text: "Structured a institutional layout with intuitive tabs for Syllabus, Faculty, Events, and Notices."
      },
      {
        title: "Build",
        text: "Engineered scalable Next.js layout pages with TypeScript models for faculty and notice boards."
      },
      {
        title: "Outcome",
        text: "Built a modern, unified digital front door for the CS department."
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
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectData.find((project) => project.slug === slug);
}
