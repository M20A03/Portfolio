"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const knowledgeResponses: Record<string, string[]> = {
    profile: [
        "Mayank Raj Gupta is a Full-Stack Developer, AI Prompt Engineering Specialist, and BCA Scholar at Christ University (Bangalore). He has built multiple deployed applications including Credex, GMT Mart, and Samagra.",
        "Mayank pivoted from a Commerce background to Computer Science, qualifying for Christ University on his very first attempt. He combines sharp business logic with high-level software engineering.",
        "From mastering Information Practices in high school to architecting enterprise-grade full-stack systems, Mayank is a developer who values continuous learning, scalable code, and AI integration."
    ],
    stack: [
        "His core technical arsenal includes React (React 19), Next.js (Next.js 15), TypeScript, Node.js, and Express.",
        "He is highly skilled in databases, particularly MySQL (where he has advanced relational design expertise), PostgreSQL (via Supabase), and Firestore/Firebase.",
        "Mayank is a Prompt Engineering expert. He leverages advanced AI (using ChatGPT, Claude, Gemini, and DeepSeek) to build complex apps quickly while studying the core fundamentals to master every line of code."
    ],
    projects: [
        "Credex: A real-time Indian Rupee (₹) SaaS and AI spend auditor powered by Claude API with Lakh/Crore formatting and spring physics.",
        "GMT Mart: A high-speed e-commerce storefront with neon design, Firebase Functions backend, and robust relational product search.",
        "Samagra: The official web portal for the Computer Science Association at Christ University, featuring particle backgrounds and Lenis smooth scrolling.",
        "Future Working App: A private product idea launched with React, Vite, and Firebase hosting for local market storefront operations."
    ],
    christ_university: [
        "Mayank is currently pursuing his BCA at Christ University, Bangalore (2025-2028), maintaining an excellent 3.2+ CGPA.",
        "At Christ University, he is an active student leader, having built the official Computer Science Association web portal (Samagra) and participated in major fests like YUGASTR.",
        "Christ University provided the perfect campus for Mayank's pivot into CS. He also takes courses in Marketing and Investing to stay linked to his business roots."
    ],
    ai_tools: [
        "Mayank uses ChatGPT, Google Gemini, Anthropic Claude, and DeepSeek APIs in his development workflow, integrating them directly into products.",
        "He has designed custom chatbots, like the floating orb assistant in Credex (using Claude API) and the keyword-matching helper in Flux.",
        "Mayank believes that prompt engineering and agentic workflows (like AntiGravity AI) are developer superpowers that accelerate building by 10x."
    ],
    pivot: [
        "Yes! Mayank made a bold pivot from a Commerce background to BCA. He proved that logic, passion, and relentless building can bridge any educational gap.",
        "Having a Commerce background gives Mayank a unique edge in product design, startup strategy, selling, and marketing, making him a rare business-minded engineer."
    ],
    contact: [
        "You can reach Mayank directly at mayankrajgupta01@gmail.com or call +91 9835139865.",
        "Send him an email at mayankrajgupta01@gmail.com or connect with him on LinkedIn. He's always down to discuss software architecture or business ideas."
    ],
    location: [
        "Mayank is based in Bangalore, India, the tech capital of the country, where he studies at Christ University."
    ],
    education: [
        "Currently pursuing a Bachelor of Computer Applications (BCA) at Christ University, Bangalore (Class of 2028).",
        "He blends tech subjects (like data structures and MySQL) with business courses like 'Investment & Trading' and 'Marketing' at Christ University."
    ],
    experience: [
        "Mayank is a MERN Stack Specialist with practical experience at Singularium Technologies and ShadowFox.",
        "He built the fests registration portal (Flux) and the department site (Samagra) for Christ University, and regularly takes on complex freelance projects."
    ],
    fallback: [
        "That is a great question! While I don't have that specific detail in my local database, you can ask Mayank directly using the contact form below or email him at mayankrajgupta01@gmail.com."
    ],
    greetings: [
        "Namaste! I'm Mayank's AI assistant. Ask me about his tech stack, Christ University, his pivot from Commerce, or his projects!",
        "Hello! Want to know more about Mayank Raj Gupta's portfolio, full-stack projects, or how he uses AI tools like Claude and DeepSeek? Ask away!"
    ]
};

const demoQuestions = [
    { id: 1, text: "Tell me about Mayank", category: "profile" },
    { id: 2, text: "What's his tech stack?", category: "stack" },
    { id: 3, text: "Latest projects?", category: "projects" },
    { id: 4, text: "Commerce to BCA Pivot?", category: "pivot" },
    { id: 5, text: "How does he use AI tools?", category: "ai_tools" },
    { id: 6, text: "Study at Christ University?", category: "christ_university" },
];

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'user' | 'bot', text: string }[]>([
        { type: 'bot', text: "Namaste! I'm Mayank's AI assistant. I'm here to help you explore his work, skills, and background. Ask me anything, or pick a question below!" }
    ]);
    const [query, setQuery] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [history, setHistory] = useState<Record<string, number>>({});

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const getResponse = (text: string) => {
        const lowerText = text.toLowerCase();
        let category = 'fallback';

        if (lowerText.includes("future") || lowerText.includes("mba") || lowerText.includes("startup") || lowerText.includes("god") || lowerText.includes("years") || lowerText.includes("goal") || lowerText.includes("plan")) category = 'future';
        else if (lowerText.includes("pivot") || lowerText.includes("commerce") || lowerText.includes("background") || lowerText.includes("switch")) category = 'pivot';
        else if (lowerText.includes("ai") || lowerText.includes("chatgpt") || lowerText.includes("gemini") || lowerText.includes("claude") || lowerText.includes("deepseek") || lowerText.includes("prompt") || lowerText.includes("chatbot") || lowerText.includes("bot")) category = 'ai_tools';
        else if (lowerText.includes("christ") || lowerText.includes("university") || lowerText.includes("college") || lowerText.includes("csa") || lowerText.includes("samagra")) category = 'christ_university';
        else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("credex") || lowerText.includes("mart") || lowerText.includes("roshan") || lowerText.includes("flux") || lowerText.includes("build")) category = 'projects';
        else if (lowerText.includes("stack") || lowerText.includes("tech") || lowerText.includes("skills") || lowerText.includes("language") || lowerText.includes("programming") || lowerText.includes("mysql") || lowerText.includes("react") || lowerText.includes("next")) category = 'stack';
        else if (lowerText.includes("education") || lowerText.includes("study") || lowerText.includes("bca") || lowerText.includes("school") || lowerText.includes("degree")) category = 'education';
        else if (lowerText.includes("experience") || lowerText.includes("hackathon") || lowerText.includes("workshop") || lowerText.includes("singularium") || lowerText.includes("shadowfox")) category = 'experience';
        else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("call") || lowerText.includes("mail") || lowerText.includes("reach")) category = 'contact';
        else if (lowerText.includes("where") || lowerText.includes("location") || lowerText.includes("live") || lowerText.includes("base") || lowerText.includes("bangalore")) category = 'location';
        else if (lowerText.includes("hobby") || lowerText.includes("outside") || lowerText.includes("cycling") || lowerText.includes("travel") || lowerText.includes("relax") || lowerText.includes("driving") || lowerText.includes("drive")) category = 'hobbies';
        else if (lowerText.includes("who") || lowerText.includes("profile") || lowerText.includes("bio") || lowerText.includes("mayank") || lowerText.includes("about") || lowerText.includes("gupta")) category = 'profile';
        else if (lowerText.includes("hi") || lowerText.includes("hello") || lowerText.includes("namaste") || lowerText.includes("hey") || lowerText.includes("greetings")) category = 'greetings';

        const variations = knowledgeResponses[category] ?? knowledgeResponses.fallback;
        const lastIndex = history[category] !== undefined ? history[category] : -1;

        let nextIndex = Math.floor(Math.random() * variations.length);
        if (nextIndex === lastIndex) {
            nextIndex = (nextIndex + 1) % variations.length;
        }

        setHistory(prev => ({ ...prev, [category]: nextIndex }));
        return variations[nextIndex];
    };

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { type: 'user', text }]);
        setQuery("");
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const response = getResponse(text);
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 800);
    };

    return (
        <>
            {/* Floating Button */}
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
                    className="rounded-full w-14 h-14 sm:w-20 sm:h-20 bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-primary/90 flex items-center justify-center relative overflow-hidden group border-4 border-background"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex items-center justify-center">
                                <MessageSquare className="w-6 h-6" />
                                <motion.div className="absolute -top-1 -right-1" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        id="ai-assistant-dialog"
                        role="dialog"
                        aria-modal="false"
                        aria-label="Mayank AI assistant"
                        className="fixed bottom-32 right-4 sm:right-8 z-50 w-[92vw] sm:w-[400px] h-[600px] max-h-[calc(100dvh-10rem)] bg-background/95 backdrop-blur-2xl border border-border/50 rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden ring-1 ring-primary/10"
                    >
                        {/* Header */}
                        <div className="p-4 sm:p-6 bg-primary/10 border-b border-border/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/20 rotate-3">
                                    <Bot className="w-7 h-7 -rotate-3" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-lg tracking-tight">Mayank AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.15em]">Live & Interactive</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-primary/10" onClick={() => setIsOpen(false)} aria-label="Close assistant">
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`p-4 rounded-[1.5rem] text-[14px] leading-relaxed shadow-sm max-w-[88%] ${msg.type === 'user'
                                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                                        : 'bg-muted/50 text-foreground rounded-tl-none border border-border/50'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-muted/50 p-4 rounded-[1.5rem] rounded-tl-none border border-border/50">
                                        <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Questions Container */}
                        <div className="p-4 sm:p-6 bg-card/40 border-t border-border/50 flex flex-col gap-4">
                            {/* Demo Questions - Horizontal Scrollable */}
                            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none mask-fade-right">
                                {demoQuestions.map((q) => (
                                    <button
                                        key={q.id}
                                        type="button"
                                        aria-label={`Ask: ${q.text}`}
                                        className="text-[10px] font-extrabold px-4 py-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
                                        onClick={() => handleSend(q.text)}
                                    >
                                        <Search className="w-3 h-3 text-primary" />
                                        {q.text}
                                    </button>
                                ))}
                            </div>

                            {/* Input Field */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend(query)}
                                    placeholder="Ask Mayank anything..."
                                    aria-label="Ask Mayank anything"
                                    className="w-full bg-background/50 border border-border/50 rounded-[1.5rem] py-3 pl-6 pr-14 text-[14px] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-xl placeholder:text-muted-foreground/50"
                                />
                                <Button
                                    size="icon"
                                    aria-label="Send message"
                                    className="absolute right-1.5 top-1.5 w-10 h-10 rounded-[1.2rem] shadow-lg shadow-primary/20"
                                    onClick={() => handleSend(query)}
                                    disabled={!query.trim()}
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
