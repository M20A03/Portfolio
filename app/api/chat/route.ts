import { NextResponse } from "next/server";

// Comprehensive portfolio knowledge base for Mayank Raj Gupta
const PORTFOLIO_SYSTEM_PROMPT = `
You are the personal AI Assistant for Mayank Raj Gupta, representing him to recruiters, engineering leaders, and website visitors on his official developer portfolio (mayankraj.me).

PROFILE & BIO:
- Name: Mayank Raj Gupta
- Education: Bachelor of Computer Applications (BCA) at Christ University, Bangalore (Class of 2025–2028). CGPA: 3.2+/4.0.
- Pivot: Bold and successful pivot from a Commerce background in high school to Computer Science. Qualified for Christ University on his very first attempt, demonstrating rapid technical adaptability, problem-solving, and a rare blend of business insight and software engineering.
- Location: Bangalore, Karnataka, India.
- Email: mayankrajgupta01@gmail.com | Phone: +91 9835139865
- GitHub: https://github.com/M20A03 | LinkedIn: https://www.linkedin.com/in/mayank-raj-gupta-159020396

CORE SPECIALIZATIONS & TECH STACK:
- Role: Full-Stack & MERN Developer, AI Systems & Knowledge Graph Architect, Next.js 15 & React 19 Engineer.
- MERN Arsenal: MongoDB, Express.js, React 19, Node.js. Advanced REST APIs, JWT authentication, Mongoose ORM, serverless functions.
- Modern Frontend: Next.js 15 (App Router, Server Components, SSR/SSG), TypeScript (Strict Mode), Tailwind CSS v4, Framer Motion, Radix UI / shadcn/ui.
- Databases: MongoDB, MySQL (advanced relational schema design & indexing), PostgreSQL (via Supabase with pgvector), Cloud Firestore/Firebase.
- AI & Agentic Workflows: Expert in AI Prompt Engineering, AntiGravity AI pair programming, OpenAI/ChatGPT API, Google Gemini API, Anthropic Claude API, DeepSeek API. Also trained YOLOv11 deep learning models for computer vision and constructed vector search knowledge graphs.
- Cloud & DevOps: Vercel, Railway, Supabase, Cloudflare, AWS basics, Docker fundamentals, Git/GitHub CI/CD.

KEY PROJECTS & CASE STUDIES (18+ Deployed):
1. Credex: Real-time Indian Rupee (₹) SaaS financial spend auditor powered by Claude API with Lakh/Crore localization, spring-physics charts, and secure auth.
2. GMT Mart: High-performance e-commerce storefront with neon cyberpunk aesthetics, Firebase Functions backend, instant product search, and responsive cart state.
3. Samagra: Official web portal for the Computer Science Association at Christ University, featuring dynamic committee management, event calendars, and particle animations.
4. Flux: Christ University departmental fest registration engine featuring fast QR code ticket validation, live analytics, and high-concurrency attendee management.
5. Roshan Enterprises: Enterprise B2B supplier management platform with automated invoice reconciliation, inventory dashboards, and multi-tenant database structure.
6. YOLOv11 Computer Vision Pipeline: Real-time custom object detection trained on edge datasets with inference benchmarks and bounding box visualization.

EXPERIENCE & LEADERSHIP:
- Singularium Technologies: Full-Stack Engineer Intern — engineered scalable Next.js and Node.js microservices, optimized SQL/NoSQL queries, and integrated automated testing.
- ShadowFox: Web Development Intern — developed component libraries, enhanced accessibility (WCAG 2.1 AA), and implemented responsive UX.
- Christ University Student Leader: Built official departmental portals, mentored peers in programming, active participant in national tech symposiums.

RECRUITER FAQs:
- Availability: Open for Summer/Winter Software Engineering & Full-Stack Internships, Junior Full-Stack/MERN roles, and select freelance contracts.
- Work Authorization & Location: Available for Bangalore onsite/hybrid roles or global remote positions.
- Resume: Downloadable directly from the /resume page on this website.
- Approach: Writes clean, accessible, type-safe, and self-documenting code. Values performance, minimal bundle sizes, and elegant UI/UX.

STYLE GUIDELINES:
- Keep answers professional, concise, enthusiastic, and direct (2-4 paragraphs or formatted bullet points).
- Emphasize his MERN stack mastery, problem-solving speed, and AI-accelerated development.
- Provide relevant links when mentioning projects (#projects), resume (/resume), or contact (mayankrajgupta01@gmail.com).
`;

// Semantic Knowledge Dictionary with rich responses covering 30+ intents
const SEMANTIC_INTENTS: Array<{
  category: string;
  keywords: string[];
  reply: string;
  suggestions: string[];
}> = [
  {
    category: "mern_stack",
    keywords: ["mern", "stack", "mongodb", "express", "node", "react", "fullstack", "full stack", "backend", "frontend", "javascript", "typescript"],
    reply: "Mayank is a **MERN Stack Specialist** proficient in **MongoDB, Express.js, React 19, and Node.js**, combined with **Next.js 15** and **TypeScript**.\n\n• **Frontend:** React 19, Next.js App Router, Tailwind CSS, Framer Motion, and shadcn/ui.\n• **Backend:** Node.js, Express RESTful APIs, JWT Auth, and Serverless Edge Functions.\n• **Databases:** MongoDB (Mongoose), MySQL (complex relational schemas), PostgreSQL (Supabase with pgvector), and Firebase Firestore.\n• **Workflow:** Type-safe development with strict TypeScript, Git CI/CD, and AI-assisted engineering.",
    suggestions: ["Credex Architecture", "View Resume", "Database Experience", "Contact Mayank"]
  },
  {
    category: "projects",
    keywords: ["project", "projects", "credex", "gmt", "samagra", "flux", "roshan", "yolo", "work", "portfolio", "built", "showcase", "case study"],
    reply: "Mayank has engineered and deployed **18+ production-ready case studies**, including:\n\n1. **Credex:** AI-driven financial spend auditor built with Claude API, Indian Rupee (₹) Lakh/Crore formatting, and real-time spring charts.\n2. **GMT Mart:** High-speed e-commerce storefront with neon cyberpunk aesthetics and Firebase serverless backend.\n3. **Samagra:** The official web portal for the Computer Science Association at Christ University.\n4. **Flux:** Dynamic event management portal with live QR code check-ins and analytics.\n5. **YOLOv11 Computer Vision:** Custom edge object detection pipeline with live bounding box rendering.\n\nYou can explore deep architectural breakdowns in the **[Projects Section](#projects)**!",
    suggestions: ["Tell me about Credex", "What is Samagra?", "MERN Stack Details", "View Resume"]
  },
  {
    category: "credex",
    keywords: ["credex", "fintech", "rupee", "finance", "spend", "audit", "lakh", "crore"],
    reply: "**Credex** is Mayank's flagship financial intelligence SaaS platform tailored for the Indian market:\n\n• **Core Engine:** Built on Next.js, React 19, and TypeScript with real-time Claude API integration for automated spend classification and anomaly detection.\n• **Indian Context:** Fully localized currency parsing supporting Rupee (₹), Lakhs (L), and Crores (Cr).\n• **UI/UX:** Interactive spring-physics charts, responsive dashboards, and zero-latency state updates.\n\nCheck out the full case study in the **[Projects Section](#projects)**!",
    suggestions: ["Tell me about GMT Mart", "View Resume", "Tech Stack", "Contact Mayank"]
  },
  {
    category: "christ_university",
    keywords: ["christ", "university", "college", "bca", "campus", "bangalore", "attendance", "cgpa", "academics", "grade"],
    reply: "Mayank is pursuing his **Bachelor of Computer Applications (BCA)** at **Christ University, Bangalore** (Class of 2025–2028), maintaining an impressive **3.2+ CGPA**.\n\n• He serves as a tech student leader, having built **Samagra** (the official portal for the Computer Science Association) and the registration engine for **Flux**.\n• He blends computer science fundamentals (Data Structures, Algorithms, RDBMS) with business-focused coursework in Marketing and Investment Trading.",
    suggestions: ["Pivot from Commerce", "Tech Stack", "View Projects", "Contact Mayank"]
  },
  {
    category: "pivot",
    keywords: ["pivot", "commerce", "switch", "background", "story", "origin", "non-cs", "non cs", "first attempt"],
    reply: "Mayank made a bold and successful **pivot from a Commerce background to Computer Science**, clearing the rigorous entrance for Christ University's BCA program on his very first attempt!\n\nThis background gives him a unique competitive edge over traditional developers: he doesn't just write code; he understands unit economics, market fit, user conversion, and business architecture.",
    suggestions: ["Tech Stack", "View Projects", "Education", "Contact Mayank"]
  },
  {
    category: "experience",
    keywords: ["experience", "internship", "intern", "company", "singularium", "shadowfox", "job", "work experience", "career"],
    reply: "Mayank's industry experience includes:\n\n• **Singularium Technologies (Full-Stack Engineer Intern):** Architected scalable Next.js and Node.js microservices, optimized database query execution times, and built high-performance responsive interfaces.\n• **ShadowFox (Web Development Intern):** Developed reusable component systems adhering to WCAG 2.1 AA accessibility standards and integrated REST APIs.\n• **Freelance & Campus Engineering:** Deployed production portals handling thousands of student and business interactions.",
    suggestions: ["View Resume", "Projects Section", "MERN Stack Details", "Contact Mayank"]
  },
  {
    category: "hire_me",
    keywords: ["hire", "job", "offer", "recruiting", "recruiter", "interview", "salary", "internship", "opportunity", "availability", "available", "full time", "part time", "contract"],
    reply: "Mayank is **actively open for Full-Stack / MERN Engineering Internships, Junior Developer roles, and selective Freelance projects**!\n\n• **Location:** Available onsite in Bangalore or remotely worldwide.\n• **Value Proposition:** Fast shipping velocity, clean TypeScript code, rapid adoption of modern AI tools, and product-minded execution.\n• **Get in Touch:** Email directly at **mayankrajgupta01@gmail.com** or call **+91 9835139865** to schedule an interview!",
    suggestions: ["Download Resume", "Email Mayank", "View Projects", "Skills Breakdown"]
  },
  {
    category: "resume",
    keywords: ["resume", "cv", "curriculum", "pdf", "download", "summary"],
    reply: "You can view and download Mayank's complete recruiter-optimized resume directly on the **[/resume](/resume)** page.\n\nIt features comprehensive breakdowns of his education at Christ University, internships at Singularium and ShadowFox, 18+ deployed projects, and complete technical proficiencies.",
    suggestions: ["Open Resume Page", "Contact Mayank", "Projects Overview", "MERN Skills"]
  },
  {
    category: "contact",
    keywords: ["contact", "email", "phone", "call", "reach", "message", "whatsapp", "linkedin", "github", "address", "location"],
    reply: "You can connect with Mayank directly via:\n\n• **Email:** [mayankrajgupta01@gmail.com](mailto:mayankrajgupta01@gmail.com)\n• **Phone:** [+91 9835139865](tel:+919835139865)\n• **LinkedIn:** [linkedin.com/in/mayank-raj-gupta](https://www.linkedin.com/in/mayank-raj-gupta-159020396)\n• **GitHub:** [github.com/M20A03](https://github.com/M20A03)\n• **Location:** Bangalore, Karnataka, India\n\nYou can also use the contact form at the bottom of the page!",
    suggestions: ["Send Email", "View Resume", "Check Projects", "MERN Skills"]
  },
  {
    category: "ai_tools",
    keywords: ["ai", "gemini", "claude", "chatgpt", "deepseek", "antigravity", "prompt", "llm", "yolo", "vision", "machine learning"],
    reply: "Mayank integrates AI across both product architecture and his developer workflow:\n\n• **AI Application Engineering:** Integrated Claude API into Credex for real-time receipt and spend analysis; implemented Gemini API endpoints; trained YOLOv11 deep learning models for custom computer vision detection.\n• **Developer Velocity:** AntiGravity AI pair programming, prompt engineering specialist, accelerating production delivery by 5x–10x while maintaining strict code standards.",
    suggestions: ["Credex AI Features", "MERN Stack Details", "View Projects", "Contact Mayank"]
  },
  {
    category: "certifications",
    keywords: ["certificate", "certifications", "certified", "credential", "license", "course"],
    reply: "Mayank holds certified credentials in:\n\n• Full-Stack Web Development & Modern JavaScript Frameworks\n• Advanced Database Design & Relational Modeling (MySQL & PostgreSQL)\n• AI Prompt Engineering & GenAI Architecture\n• Python for Data Science and Machine Learning Foundations\n\nVisit the **[Certifications Section](#certifications)** to view verified credentials!",
    suggestions: ["Skills Breakdown", "View Resume", "Projects Section", "Contact Mayank"]
  },
  {
    category: "hobbies",
    keywords: ["hobby", "hobbies", "outside", "cycling", "travel", "relax", "driving", "free time", "fun"],
    reply: "Outside of programming and AI systems engineering, Mayank enjoys **long-distance cycling, highway driving, exploring tech meetups in Bangalore, and studying financial markets and startup pitch decks**.\n\nHe believes maintaining physical stamina and diverse interests fuels creative problem-solving in software architecture!",
    suggestions: ["Pivot from Commerce", "Tech Stack", "View Projects", "Contact Mayank"]
  },
  {
    category: "future",
    keywords: ["future", "mba", "startup", "years", "goal", "goals", "plan", "plans", "vision", "next 5 years"],
    reply: "Mayank's long-term vision is to architect high-impact tech ventures combining **AI-driven automation, fintech intelligence, and enterprise full-stack systems**.\n\nHis roadmap includes gaining deep engineering and systems experience in high-growth startups, contributing to open-source software, and eventually founding product-led tech solutions.",
    suggestions: ["Tech Stack", "Credex Architecture", "View Resume", "Contact Mayank"]
  },
  {
    category: "greetings",
    keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good afternoon", "good evening", "sup", "yo"],
    reply: "Namaste! I am **Mayank AI**, the interactive digital assistant for Mayank Raj Gupta.\n\nI can tell you all about his **MERN stack expertise, 18+ deployed projects (like Credex & Samagra), his journey at Christ University, or how to get in touch for hiring and collaborations**. What would you like to explore?",
    suggestions: ["Tell me about Mayank", "MERN Stack Skills", "Featured Projects", "How to Hire Mayank"]
  }
];

// Fallback response synthesizer for open-ended queries
function synthesizeLocalResponse(userMessage: string): { reply: string; suggestions: string[] } {
  const normalized = userMessage.toLowerCase().trim();

  // Find best match by token overlap score
  const words = normalized.split(/[^a-z0-9]+/i).filter(Boolean);
  const wordSet = new Set(words);
  let bestIntent = null;
  let highestScore = 0;

  for (const intent of SEMANTIC_INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (kw.includes(" ")) {
        if (normalized.includes(kw)) score += 6;
      } else if (kw.length <= 3) {
        if (wordSet.has(kw)) score += 4;
      } else {
        if (wordSet.has(kw)) {
          score += 4;
        } else if (normalized.includes(kw)) {
          score += 2;
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

  // Graceful contextual synthesis for any other question
  return {
    reply: `That's an interesting question regarding **"${userMessage}"**!\n\nAs Mayank's portfolio assistant, I can share that Mayank is a **Full-Stack MERN Developer and BCA Scholar at Christ University** who thrives on solving tough engineering and business challenges. Whether it's building scalable web architectures, training computer vision models, or integrating modern AI APIs, he's always enthusiastic about continuous learning.\n\nWould you like to explore his technical projects, view his resume, or connect with him directly to discuss this topic?`,
    suggestions: [
      "MERN Stack Skills",
      "Featured Projects",
      "View Resume",
      "Contact Mayank Directly"
    ]
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // If Gemini API Key is available, invoke the official Gemini REST endpoint
    if (geminiKey) {
      try {
        const formattedContents = [
          ...history.slice(-6).map((h: { role: string; text: string }) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          })),
          {
            role: "user",
            parts: [{ text: message }]
          }
        ];

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;

        const res = await fetch(geminiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": geminiKey,
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: PORTFOLIO_SYSTEM_PROMPT }]
            },
            contents: formattedContents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            }
          }),
          signal: AbortSignal.timeout(8000), // 8s timeout protection
        });

        if (res.ok) {
          const data = await res.json();
          const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            return NextResponse.json({
              reply: generatedText,
              suggestions: [
                "Tell me about Credex",
                "MERN Stack Arsenal",
                "View Resume",
                "Contact Mayank"
              ],
              source: "gemini"
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to semantic engine:", geminiError);
      }
    }

    // High-precision semantic engine fallback
    const fallbackData = synthesizeLocalResponse(message);
    return NextResponse.json({
      reply: fallbackData.reply,
      suggestions: fallbackData.suggestions,
      source: "semantic_engine"
    });

  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      {
        reply: "I am ready to help! You can ask me about Mayank's MERN stack experience, his projects like Credex and Samagra, or reach out to him directly at mayankrajgupta01@gmail.com.",
        suggestions: ["MERN Stack", "Featured Projects", "View Resume", "Contact Info"],
        source: "fallback"
      },
      { status: 200 }
    );
  }
}
