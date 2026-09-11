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
import { useRouter } from "next/navigation";

// Client-side fallback knowledge base with complete authentic background
const CLIENT_KNOWLEDGE_BASE: Array<{
  category: string;
  keywords: string[];
  reply: string;
  suggestions: string[];
}> = [
  {
    category: "smruti_research",
    keywords: ["smruti", "dr smruti", "mam", "research", "hardware", "prototype", "computer vision", "50 times", "50000", "50,000", "images", "mid-july", "mid july", "measurements", "iteration", "dataset"],
    reply: "Mayank works directly with **Dr. Smruti Ma'am** on university-affiliated research in the Department of Computer Science:\n\n• **Hardware & Vision Prototype:** In mid-July, Mayank joined a project that had been stalled for 6 months at <10% output. He identified fundamental structural flaws in the design. Entrusted by Dr. Smruti Ma'am to redesign it from scratch—with no existing model in the world to reference—he iterated through **over 50 component redesigns across 15 grueling days alone** until it worked. That working model is with the team right now, actively collecting datasets for the software and computer vision pipeline!\n• **Computer Vision Pipeline:** Built custom deep learning architectures from scratch, overcoming an initial 30% accuracy by curating, cleaning, and preprocessing **50,000+ images**, pushing accuracy to **81%**.",
    suggestions: ["Incubation Startup Apps", "Teaching Experience", "MERN Stack Details", "View Resume"]
  },
  {
    category: "incubation_startup",
    keywords: ["incubation", "startup", "android", "apps", "mobile app", "october", "founder", "client", "play store", "2 apps", "app development"],
    reply: "Mayank was approached by a startup from **Christ University's Incubation Centre** to build their digital platform:\n\n• **Strategic Expansion:** While they initially asked for just a website, Mayank evaluated their roadmap and proposed building their mobile applications as well.\n• **Rapid Turnaround:** Overcoming earlier struggles with Android development, he rebuilt his architectural foundations and **single-handedly completed 70% of both Android apps plus their full website in just one week**!\n• **Live Launch:** Both live Android apps and the web platform are scheduled for official launch this **October**. The startup founder was extremely impressed with his execution speed.",
    suggestions: ["Dr. Smruti Research", "Credex Architecture", "MERN Stack Skills", "Contact Mayank"]
  },
  {
    category: "teaching_peer_help",
    keywords: ["teach", "teaching", "classmates", "java", "eclipse", "flask", "streamlit", "help", "assignment", "exam help", "peers", "friends", "class"],
    reply: "Mayank is widely known across his section as the **go-to person for academic and coding help**:\n\n• **Teaching Full-Stack Java:** When Dr. Smruti Ma'am asked for help teaching Java full-stack with Eclipse and MySQL to the class, Mayank helped guide the class because he had mastered the stack beforehand.\n• **Python Lab Leadership:** Taught the entire class how to bridge frontend **Streamlit** with backend **Flask** to build and deploy interactive apps.\n• **Peer Mentorship:** Whether someone is a close friend or a stranger, Mayank always takes out time to debug classmates' code, explain assignment concepts, and share study materials.",
    suggestions: ["Samagra Department Portal", "Dr. Smruti Research", "Academic CGPA", "Contact Mayank"]
  },
  {
    category: "samagra",
    keywords: ["samagra", "csa", "department portal", "association", "portal", "cs department"],
    reply: "Mayank is a core technical volunteer for the **Computer Science Association (CSA)** at Christ University:\n\n• **Built from Scratch:** He single-handedly designed, built, and maintains **Samagra**, the official departmental web portal.\n• **Features:** Centralizes academic resources, faculty details, 6 student clubs, and committee showcases.\n• **Stability:** The platform is already live and running smoothly, serving hundreds of students across the department.",
    suggestions: ["Flux Event", "Dr. Smruti Research", "MERN Stack Experience", "View Resume"]
  },
  {
    category: "flux",
    keywords: ["flux", "fest", "event", "postponed", "february", "ticket", "registration portal"],
    reply: "For the departmental fest **Flux**, Mayank took the initiative to build the entire **online event registration and ticketing system single-handedly**.\n\n• The portal was built and fully tested with live verification workflows.\n• The departmental event was subsequently **postponed to February**, where the platform will be used for registrations.",
    suggestions: ["Samagra Portal", "Incubation Startup Apps", "Tech Stack", "Contact Mayank"]
  },
  {
    category: "caps",
    keywords: ["caps", "tech tank", "club", "volunteer", "stepped down", "left"],
    reply: "Mayank was previously a technical volunteer with **CAPS in Tech Tank** at Christ University.\n\nHe made the responsible decision to step down from CAPS so he could dedicate his full focus to his deep learning research under Dr. Smruti Ma'am and the engineering of the Samagra departmental portal.",
    suggestions: ["Dr. Smruti Research", "Samagra Portal", "View Resume", "Contact Mayank"]
  },
  {
    category: "cgpa",
    keywords: ["cgpa", "grade", "marks", "gpa", "score", "3.3", "academics", "percentage", "studies"],
    reply: "Mayank scored a **3.3 CGPA** in his previous semester at Christ University.\n\nHe achieved this while balancing intensive laboratory research with Dr. Smruti Ma'am, building live Android apps for an incubation startup, developing Samagra, and shipping 18+ real-world projects. He is actively working hard to push his academic score even higher this semester!",
    suggestions: ["Pivot from Commerce", "Dr. Smruti Research", "Projects Overview", "Contact Mayank"]
  },
  {
    category: "mern_stack",
    keywords: ["mern", "stack", "mongodb", "express", "node", "react", "fullstack", "full stack", "backend", "frontend", "javascript", "typescript"],
    reply: "Mayank is an accomplished **MERN Stack Specialist** proficient in:\n\n• **MongoDB & Mongoose:** Schema design, aggregation pipelines, performance indexing, and Atlas clustering.\n• **Express.js & Node.js:** Scalable REST APIs, JWT authentication, middleware pipelines, and microservices.\n• **React 19 & Next.js 15:** Server Components, client state machines, SSR/SSG caching, and fluid Framer Motion animations.\n• **Strict TypeScript:** End-to-end type safety across client and server.",
    suggestions: ["Credex Architecture", "Incubation Startup", "Dr. Smruti Research", "View Resume"]
  },
  {
    category: "projects",
    keywords: ["project", "projects", "work", "built", "showcase", "case study", "apps", "portfolio"],
    reply: "Mayank has built and deployed **18+ production-ready case studies**, including:\n\n1. **Incubation Center Startup:** 2 live Android apps + website launching in October.\n2. **Dr. Smruti Research Prototype:** Custom hardware setup + computer vision pipeline.\n3. **Credex:** AI-driven financial spend auditor built with Claude API, Indian Rupee (₹) Lakh/Crore formatting, and spring charts.\n4. **Samagra:** The official web portal for the Computer Science Association at Christ University.\n5. **GMT Mart:** High-speed e-commerce storefront with neon cyberpunk aesthetics and Firebase serverless backend.\n\nExplore them in the **[Projects Section](#projects)**!",
    suggestions: ["Tell me about Credex", "Incubation Startup Apps", "Dr. Smruti Research", "View Resume"]
  },
  {
    category: "credex",
    keywords: ["credex", "fintech", "rupee", "finance", "spend", "audit", "lakh", "crore"],
    reply: "**Credex** is Mayank's flagship financial intelligence SaaS platform tailored for the Indian market:\n\n• **Core Engine:** Built on Next.js, React 19, and TypeScript with real-time Claude API integration for automated spend classification and anomaly detection.\n• **Indian Context:** Fully localized currency parsing supporting Rupee (₹), Lakhs (L), and Crores (Cr).\n• **UI/UX:** Interactive spring-physics charts, responsive dashboards, and zero-latency state updates.\n\nCheck out the full case study in the **[Projects Section](#projects)**!",
    suggestions: ["Incubation Startup Apps", "View Resume", "Tech Stack", "Contact Mayank"]
  },
  {
    category: "christ_university",
    keywords: ["christ", "university", "college", "bca", "campus", "bangalore"],
    reply: "Mayank is pursuing his **Bachelor of Computer Applications (BCA)** at **Christ University, Bangalore** (Class of 2025–2028):\n\n• He serves as a tech student lead, having built **Samagra** for the department and the registration engine for **Flux**.\n• Conducts research under Dr. Smruti Ma'am in computer vision and hardware modeling.\n• Helps classmates in Java and Python labs and balances hands-on engineering with coursework in Marketing and Investment Trading.",
    suggestions: ["Pivot from Commerce", "Dr. Smruti Research", "Teaching Experience", "Contact Mayank"]
  },
  {
    category: "pivot",
    keywords: ["pivot", "commerce", "switch", "background", "story", "origin", "non-cs", "non cs", "first attempt"],
    reply: "Mayank made a bold and successful **pivot from a Commerce background to Computer Science**, clearing the rigorous entrance for Christ University's BCA program on his **very first attempt**!\n\nThis background gives him a unique competitive edge: he doesn't just write code; he understands unit economics, product-market fit, conversion, and business strategy.",
    suggestions: ["Academic CGPA", "Dr. Smruti Research", "Education", "Contact Mayank"]
  },
  {
    category: "experience",
    keywords: ["experience", "internship", "intern", "company", "singularium", "shadowfox", "job", "work experience", "career"],
    reply: "Mayank's professional industry experience includes:\n\n• **Research Intern (Christ University):** Working under Dr. Smruti Ma'am on custom hardware modeling and deep learning vision pipelines.\n• **Singularium Technologies (Full-Stack Engineer Intern):** Architected scalable Next.js and Node.js microservices, optimized database queries, and integrated automated testing.\n• **ShadowFox (Web Development Intern):** Developed reusable component systems adhering to WCAG 2.1 AA accessibility standards and integrated REST APIs.\n• **Campus Incubation Startup:** Solo developer for 2 Android apps and a web platform launching this October.",
    suggestions: ["Dr. Smruti Research", "Incubation Startup Apps", "View Resume", "Contact Mayank"]
  },
  {
    category: "hire_me",
    keywords: ["hire", "job", "offer", "recruiting", "recruiter", "interview", "salary", "internship", "opportunity", "availability", "available", "full time", "part time", "contract"],
    reply: "Mayank is **actively open for Full-Stack / MERN Engineering Internships, Junior Developer roles, and selective Freelance projects**!\n\n• **Location:** Available onsite in Bangalore or remotely worldwide.\n• **Key Differentiator:** Extreme problem-solving grit (iterating 50+ times to solve stalled research problems), fast shipping velocity (70% of 2 apps built in 1 week), and clean TypeScript code.\n• **Get in Touch:** Email directly at **mayankrajgupta01@gmail.com** or call **+91 9835139865** to schedule an interview!",
    suggestions: ["Download Resume", "Email Mayank", "View Projects", "Dr. Smruti Research"]
  },
  {
    category: "resume",
    keywords: ["resume", "cv", "curriculum", "pdf", "download", "summary"],
    reply: "You can view and download Mayank's complete recruiter-optimized resume directly on the **[/resume](/resume)** page.\n\nIt features comprehensive breakdowns of his education at Christ University, research with Dr. Smruti Ma'am, internships at Singularium and ShadowFox, 18+ deployed projects, and complete technical proficiencies.",
    suggestions: ["Open Resume Page", "Contact Mayank", "Projects Overview", "MERN Skills"]
  },
  {
    category: "contact",
    keywords: ["contact", "email", "phone", "call", "reach", "message", "whatsapp", "linkedin", "github", "address", "location"],
    reply: "You can connect with Mayank directly via:\n\n• **Email:** [mayankrajgupta01@gmail.com](mailto:mayankrajgupta01@gmail.com)\n• **Phone:** [+91 9835139865](tel:+919835139865)\n• **LinkedIn:** [linkedin.com/in/mayank-raj-gupta](https://www.linkedin.com/in/mayank-raj-gupta-159020396)\n• **GitHub:** [github.com/M20A03](https://github.com/M20A03)\n• **Location:** Bangalore, Karnataka, India\n\nYou can also use the contact form at the bottom of the page!",
    suggestions: ["Send Email", "View Resume", "Check Projects", "MERN Skills"]
  },
  {
    category: "greetings",
    keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good afternoon", "good evening", "sup", "yo"],
    reply: "Namaste! I am **Mayank AI**, the interactive digital assistant for Mayank Raj Gupta.\n\nI can tell you all about his **research under Dr. Smruti Ma'am, his 2 upcoming Android apps for a campus startup, Samagra, MERN stack expertise, or how to get in touch for hiring and collaborations**. What would you like to explore?",
    suggestions: ["Dr. Smruti Research", "Incubation Startup Apps", "MERN Stack Skills", "How to Hire Mayank"]
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

  if (bestIntent && highestScore >= 2) {
    return {
      reply: bestIntent.reply,
      suggestions: bestIntent.suggestions
    };
  }

  return {
    reply: `That's an interesting question regarding **"${userMessage}"**!\n\nAs Mayank's personal assistant, I can share that Mayank is a **Full-Stack MERN Developer and BCA Scholar at Christ University (Bangalore)** known for his relentless problem-solving grit. Whether it's redesigning custom hardware prototypes through 50+ iterations under Dr. Smruti Ma'am, single-handedly developing 2 live Android apps for a college incubation startup, or building the *Samagra* portal, he thrives on tackling challenges that others consider difficult.\n\nWould you like to explore his research, check out his mobile and web projects, or connect with him directly?`,
    suggestions: [
      "Dr. Smruti Research",
      "Incubation Startup Apps",
      "MERN Stack Skills",
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

    const formattedParts: (string | React.ReactNode)[] = [];
    let remaining = line;
    let partKey = 0;

    while (remaining.length > 0) {
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
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
  "Dr. Smruti Ma'am Research",
  "Incubation Startup Apps",
  "MERN Stack Experience",
  "Teaching & Peer Help",
  "Commerce to CS Pivot",
  "Samagra Department Portal"
];

interface ChatMessage {
  id: string;
  type: "user" | "bot";
  text: string;
  suggestions?: string[];
  source?: string;
  isStreaming?: boolean;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      type: "bot",
      text: "Namaste! I am **Mayank AI**, the official digital assistant for Mayank Raj Gupta.\n\nAsk me anything about his **research with Dr. Smruti Ma'am, his 2 live Android apps for a campus startup, Samagra, or his MERN stack skills**!",
      suggestions: [
        "Dr. Smruti Ma'am Research",
        "Incubation Startup Apps",
        "Teaching & Peer Help",
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

  // Auto-scroll on new messages or during streaming
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  // Realistic word-by-word streaming typewriter effect
  const streamBotResponse = useCallback((fullText: string, suggestions?: string[], source?: string) => {
    const botId = `bot-${Date.now()}`;
    setIsTyping(false);

    // Initial placeholder message
    setMessages((prev) => [
      ...prev,
      {
        id: botId,
        type: "bot",
        text: "",
        suggestions: [],
        source,
        isStreaming: true
      }
    ]);

    const words = fullText.split(" ");
    let currentIdx = 0;
    let accumulated = "";

    const streamInterval = setInterval(() => {
      if (currentIdx < words.length) {
        accumulated += (currentIdx > 0 ? " " : "") + words[currentIdx];
        const nextText = accumulated;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botId ? { ...msg, text: nextText } : msg
          )
        );
        currentIdx++;
      } else {
        clearInterval(streamInterval);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botId ? { ...msg, suggestions, isStreaming: false } : msg
          )
        );
        if (soundEnabled) playChime("receive");
      }
    }, 18);
  }, [soundEnabled]);

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
        streamBotResponse(data.reply, data.suggestions, data.source);
        return;
      }
    } catch {
      // Network error / offline: silently fall back to local semantic engine
    }

    // Fallback local engine response
    const fallback = getClientFallbackResponse(userText);
    setTimeout(() => {
      streamBotResponse(fallback.reply, fallback.suggestions, "semantic_engine");
    }, 300);
  }, [messages, isTyping, soundEnabled, streamBotResponse]);

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        type: "bot",
        text: "Conversation cleared! What else would you like to know about Mayank's research under Dr. Smruti Ma'am, his incubation startup apps, or MERN skills?",
        suggestions: ["Dr. Smruti Ma'am Research", "Incubation Startup Apps", "MERN Stack Experience", "Contact Mayank"]
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
                      MERN & AI
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
                    {msg.isStreaming && (
                      <span className="inline-block w-1.5 h-3.5 ml-1 bg-primary animate-pulse align-middle" />
                    )}
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

            {/* Footer Input & Initial Suggestions */}
            <div className="p-3.5 sm:p-4 bg-card/60 border-t border-border/50 flex flex-col gap-3">
              {/* Initial Demo Questions */}
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
                  placeholder="Ask about Dr. Smruti research, startup apps..."
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
