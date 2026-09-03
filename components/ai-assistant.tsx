"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Sparkles,
  Search,
  Loader2,
  Trash2,
  Volume2,
  VolumeX,
  FileText,
  Mail,
  FolderGit2,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Client-side fallback knowledge base with 25+ rich categories
const CLIENT_KNOWLEDGE_BASE: Array<{
  category: string;
  keywords: string[];
  reply: string;
  suggestions: string[];
}> = [
  {
    category: "mern_stack",
    keywords: ["mern", "stack", "mongodb", "express", "node", "react", "fullstack", "full stack", "backend", "frontend", "javascript", "typescript"],
    reply: "Mayank is an accomplished **MERN Stack Specialist** proficient in:\n\n• **MongoDB & Mongoose:** Schema design, aggregation pipelines, performance indexing, and Atlas clustering.\n• **Express.js & Node.js:** Scalable REST APIs, JWT authentication, middleware pipelines, and microservices.\n• **React 19 & Next.js 15:** Server Components, client state machines, SSR/SSG caching, and fluid Framer Motion animations.\n• **Strict TypeScript:** End-to-end type safety across client and server.",
    suggestions: ["Credex Architecture", "View Resume", "Database Experience", "Contact Mayank"]
  },
  {
    category: "projects",
    keywords: ["project", "projects", "work", "built", "showcase", "case study", "apps", "portfolio"],
    reply: "Mayank has built and deployed **18+ production-ready case studies**, including:\n\n1. **Credex:** AI-driven financial spend auditor built with Claude API, Indian Rupee (₹) Lakh/Crore formatting, and spring charts.\n2. **GMT Mart:** High-speed e-commerce storefront with neon cyberpunk aesthetics and Firebase serverless backend.\n3. **Samagra:** The official web portal for the Computer Science Association at Christ University.\n4. **Flux:** Dynamic event management portal with live QR code check-ins and analytics.\n5. **YOLOv11 Computer Vision:** Custom edge object detection pipeline with live bounding box rendering.\n\nExplore them in the **[Projects Section](#projects)**!",
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
    keywords: ["christ", "university", "college", "bca", "campus", "bangalore", "attendance", "cgpa", "academics", "grade", "samagra", "csa"],
    reply: "Mayank is pursuing his **Bachelor of Computer Applications (BCA)** at **Christ University, Bangalore** (Class of 2025–2028), maintaining an impressive **3.2+ CGPA**.\n\n• He serves as a tech student leader, having built **Samagra** (the official portal for the Computer Science Association) and the registration engine for **Flux**.\n• He blends computer science fundamentals (Data Structures, Algorithms, RDBMS) with business-focused coursework in Marketing and Investment Trading.",
    suggestions: ["Pivot from Commerce", "Tech Stack", "View Projects", "Contact Mayank"]
  },
  {
    category: "pivot",
    keywords: ["pivot", "commerce", "switch", "background", "story", "origin", "non-cs", "non cs", "first attempt"],
    reply: "Mayank made a bold and successful **pivot from a Commerce background to Computer Science**, clearing the rigorous entrance for Christ University's BCA program on his very first attempt!\n\nThis background gives him a unique competitive edge: he doesn't just write code; he understands unit economics, product-market fit, conversion, and business strategy.",
    suggestions: ["Tech Stack", "View Projects", "Education", "Contact Mayank"]
  },
  {
    category: "experience",
    keywords: ["experience", "internship", "intern", "company", "singularium", "shadowfox", "job", "work experience", "career"],
    reply: "Mayank's professional industry experience includes:\n\n• **Singularium Technologies (Full-Stack Engineer Intern):** Architected scalable Next.js and Node.js microservices, optimized database queries, and integrated automated testing.\n• **ShadowFox (Web Development Intern):** Developed reusable component systems adhering to WCAG 2.1 AA accessibility standards and integrated REST APIs.\n• **Freelance & Campus Engineering:** Deployed production portals handling thousands of student and business interactions.",
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
    keywords: ["future", "mba", "startup", "years", "goal", "goals", "plan", "plans", "vision"],
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

function getClientFallbackResponse(userMessage: string): { reply: string; suggestions: string[] } {
  const normalized = userMessage.toLowerCase().trim();
  const words = normalized.split(/[^a-z0-9]+/i).filter(Boolean);
  const wordSet = new Set(words);

  let bestIntent = null;
  let highestScore = 0;

  for (const intent of CLIENT_KNOWLEDGE_BASE) {
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

  return {
    reply: `Thank you for asking about **"${userMessage}"**!\n\nAs Mayank's digital assistant, I can highlight that Mayank is a **Full-Stack MERN Developer and BCA Scholar at Christ University (Bangalore)** who builds scalable web architectures, AI-integrated SaaS tools, and high-performance applications.\n\nFeel free to explore his verified projects, review his resume, or connect with him directly to discuss this in depth!`,
    suggestions: [
      "MERN Stack Skills",
      "Featured Projects",
      "View Resume",
      "Contact Mayank"
    ]
  };
}

// Subtle synthesized audio feedback using Web Audio API
function playChime(type: "send" | "receive") {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "send") {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else {
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    }
  } catch {
    // AudioContext blocked by browser policy until interaction; ignore silently
  }
}

// Markdown-like text renderer
function renderFormattedMessage(text: string) {
  const lines = text.split("\n");

  return lines.map((line, idx) => {
    if (!line.trim()) {
      return <div key={idx} className="h-2" />;
    }

    // Replace bold **text** and [link](url)
    const formattedParts: (string | React.ReactNode)[] = [];
    let remaining = line;
    let partKey = 0;

    while (remaining.length > 0) {
      // Check for Markdown Link [label](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
      // Check for Markdown Bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

      if (linkMatch && (!boldMatch || (linkMatch.index ?? 0) <= (boldMatch.index ?? 0))) {
        const index = linkMatch.index ?? 0;
        if (index > 0) {
          formattedParts.push(remaining.slice(0, index));
        }
        const [, label, url] = linkMatch;
        formattedParts.push(
          <a
            key={`link-${idx}-${partKey++}`}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-primary underline font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-0.5"
          >
            {label}
            {url.startsWith("http") && <ExternalLink className="w-3 h-3 inline ml-0.5" />}
          </a>
        );
        remaining = remaining.slice(index + linkMatch[0].length);
      } else if (boldMatch) {
        const index = boldMatch.index ?? 0;
        if (index > 0) {
          formattedParts.push(remaining.slice(0, index));
        }
        formattedParts.push(
          <strong key={`bold-${idx}-${partKey++}`} className="font-semibold text-foreground">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.slice(index + boldMatch[0].length);
      } else {
        formattedParts.push(remaining);
        break;
      }
    }

    const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");

    return (
      <p key={idx} className={`${isBullet ? "pl-3 py-0.5 text-foreground/90" : "py-0.5"}`}>
        {formattedParts}
      </p>
    );
  });
}

const initialDemoQuestions = [
  "Tell me about Mayank",
  "MERN Stack Experience",
  "Featured Projects",
  "Commerce to CS Pivot",
  "Study at Christ University?",
  "How to Hire Mayank"
];

interface ChatMessage {
  id: string;
  type: "user" | "bot";
  text: string;
  suggestions?: string[];
  source?: string;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      type: "bot",
      text: "Namaste! I am **Mayank AI**, the full-stack digital assistant for Mayank Raj Gupta.\n\nAsk me anything about his **MERN stack skills, 18+ deployed projects (like Credex), internships, or how to contact him for hire**!",
      suggestions: [
        "MERN Stack Experience",
        "Credex Architecture",
        "Christ University BCA",
        "View Resume"
      ]
    }
  ]);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Listen for global open event
  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-ai-assistant", handleOpenEvent);
    return () => window.removeEventListener("open-ai-assistant", handleOpenEvent);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  const handleSend = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userText = text.trim();
    const userMsgId = `user-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      { id: userMsgId, type: "user", text: userText }
    ];

    setMessages(newMessages);
    setQuery("");
    setIsTyping(true);

    if (soundEnabled) playChime("send");

    try {
      // Prepare history for API context
      const conversationHistory = newMessages.slice(-6).map((m) => ({
        role: m.type === "user" ? "user" : "model",
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: conversationHistory
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            type: "bot",
            text: data.reply,
            suggestions: data.suggestions,
            source: data.source
          }
        ]);
        if (soundEnabled) playChime("receive");
        setIsTyping(false);
        return;
      }
    } catch {
      // Network error / offline: silently fall back to local semantic engine
    }

    // Fallback local engine response
    const fallback = getClientFallbackResponse(userText);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          type: "bot",
          text: fallback.reply,
          suggestions: fallback.suggestions,
          source: "semantic_engine"
        }
      ]);
      if (soundEnabled) playChime("receive");
      setIsTyping(false);
    }, 450);
  }, [messages, isTyping, soundEnabled]);

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        type: "bot",
        text: "Conversation cleared! What else would you like to know about Mayank's MERN skills, projects, or background?",
        suggestions: ["MERN Stack Experience", "Credex Architecture", "Contact Mayank"]
      }
    ]);
  };

  const handleQuickAction = (action: string) => {
    if (action === "resume") {
      router.push("/resume");
      setIsOpen(false);
    } else if (action === "projects") {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      } else {
        router.push("/#projects");
        setIsOpen(false);
      }
    } else if (action === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      } else {
        router.push("/#contact");
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 print:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
          aria-expanded={isOpen}
          aria-controls="ai-assistant-dialog"
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:bg-primary/90 flex items-center justify-center relative overflow-hidden group border-4 border-background focus-visible:ring-4 focus-visible:ring-primary/20"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Dialog Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            id="ai-assistant-dialog"
            role="dialog"
            aria-modal="false"
            aria-label="Mayank AI interactive assistant"
            className="fixed bottom-28 sm:bottom-28 right-3 sm:right-8 z-50 w-[94vw] sm:w-[440px] h-[640px] max-h-[calc(100dvh-8rem)] bg-background/95 backdrop-blur-2xl border border-border/70 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden ring-1 ring-primary/20"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-primary/10 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base tracking-tight text-foreground">Mayank AI</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/15 text-primary font-bold uppercase tracking-wider">
                      MERN
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                    <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                      Live Portfolio Agent
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
                  title={soundEnabled ? "Mute sounds" : "Enable sounds"}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  onClick={handleClearChat}
                  aria-label="Clear chat history"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close assistant"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Action Navigation Bar */}
            <div className="px-4 py-2 bg-muted/40 border-b border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span className="text-[11px] font-medium text-foreground/80">Quick Nav:</span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickAction("resume")}
                  className="px-2 py-1 rounded-md bg-background/80 border border-border/60 hover:border-primary/40 hover:text-primary transition-all flex items-center gap-1 text-[11px]"
                >
                  <FileText className="w-3 h-3" /> Resume
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction("projects")}
                  className="px-2 py-1 rounded-md bg-background/80 border border-border/60 hover:border-primary/40 hover:text-primary transition-all flex items-center gap-1 text-[11px]"
                >
                  <FolderGit2 className="w-3 h-3" /> Projects
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAction("contact")}
                  className="px-2 py-1 rounded-md bg-background/80 border border-border/60 hover:border-primary/40 hover:text-primary transition-all flex items-center gap-1 text-[11px]"
                >
                  <Mail className="w-3 h-3" /> Contact
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`p-4 rounded-[1.4rem] text-[13.5px] leading-relaxed shadow-sm max-w-[90%] ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted/60 text-foreground rounded-tl-none border border-border/60"
                    }`}
                  >
                    {renderFormattedMessage(msg.text)}
                  </div>

                  {/* Suggestion Chips under Bot Messages */}
                  {msg.type === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.suggestions.map((suggestion, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => handleSend(suggestion)}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-primary/25 bg-primary/5 hover:bg-primary/15 hover:border-primary/50 text-foreground/90 transition-all flex items-center gap-1 active:scale-95"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-primary" />
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted/60 p-3.5 rounded-[1.4rem] rounded-tl-none border border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Thinking...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer Input & Default Suggestions */}
            <div className="p-3.5 sm:p-4 bg-card/60 border-t border-border/50 flex flex-col gap-3">
              {/* Default Initial Questions */}
              {messages.length <= 2 && (
                <div className="flex overflow-x-auto gap-1.5 pb-1 scrollbar-none">
                  {initialDemoQuestions.map((q, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      className="text-[10.5px] font-semibold px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/15 hover:border-primary/40 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 text-foreground/80"
                      onClick={() => handleSend(q)}
                    >
                      <Search className="w-2.5 h-2.5 text-primary" />
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Box */}
              <div className="relative group">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(query);
                    }
                  }}
                  placeholder="Ask about MERN skills, projects, Christ Univ..."
                  aria-label="Ask Mayank anything"
                  disabled={isTyping}
                  className="w-full bg-background/70 border border-border/60 rounded-[1.4rem] py-3 pl-5 pr-12 text-[13.5px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm placeholder:text-muted-foreground/60 disabled:opacity-50"
                />
                <Button
                  size="icon"
                  aria-label="Send message"
                  className="absolute right-1.5 top-1.5 w-9 h-9 rounded-[1.1rem] shadow-md shadow-primary/20"
                  onClick={() => handleSend(query)}
                  disabled={!query.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
