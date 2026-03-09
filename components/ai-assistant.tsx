"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const knowledgeResponses: Record<string, string[]> = {
    profile: [
        "Mayank Raj Gupta is a BCA student at Christ University, Bangalore. He made a surprising but passionate pivot from Commerce to Computer Science, qualifying for Christ on his first attempt!",
        "A student with a unique blend of backgrounds—Mayank combines his logic from a Commerce foundation with a lifelong passion for computers and laptops.",
        "From excelling in Information Practices in Class 12 to mastering BCA today, Mayank is an engineer who never looks back, though he still keeps his business roots through subjects like Investing and Marketing."
    ],
    stack: [
        "He's an absolute beast at MySQL and a pro at AI Prompt Engineering—in fact, he considers prompt engineering his current technical superpower!",
        "His core arsenal includes React, Next.js, and Node.js. He's also highly skilled in database architecture, specifically MySQL where he's practically unbeatable.",
        "Mayank leverages AI (like 80-90% of his project builds) as a powerful mentor. While he's modest about it, his ability to orchestrate complex tools through prompt engineering is top-tier."
    ],
    projects: [
        "He's built the MRG App and various simulators. He's very honest about his process, using AI as a primary collaborator while he strives to master every line of code.",
        "Check out his MRG Marketplace architecture. He views every project as a step towards his goal of using AI less (20-30%) as his own mastery grows.",
        "His portfolio spans from e-commerce platforms to deep-tech simulations. He believes in 'building to learn', using current tools to architect the startups of tomorrow."
    ],
    contact: [
        "You can reach him at mayankrajgupta01@gmail.com or call +91 9835139865. He's always open to discussing tech or business!",
        "Feel free to drop a message at mayankrajgupta01@gmail.com. He's always open to discussing new opportunities or tech collaborations.",
        "Need to connect? You can find him on LinkedIn or use the contact form right here on the website. He usually responds within 24 hours!"
    ],
    location: [
        "Mayank is currently based in Bangalore, India for his BCA at Christ University.",
        "He is located in Bangalore, India and regularly participates in local university tech events.",
        "Bangalore, India is his current base for studies and project work."
    ],
    education: [
        "He's currently in his BCA years at Christ University (2025-2028). Interestingly, he chose courses like 'Investment & Trading' and 'Marketing' to stay connected to his commerce roots.",
        "At Christ University, he's currently maintaining a 3.2+ CGPA. He chose BCA over B.Tech because of his commerce background, and he's been acing it since day one.",
        "Currently based in Bangalore for his BCA. His academic journey is a mix of high-level coding and strategic business subjects like Marketing & Selling."
    ],
    experience: [
        "Mayank is a regular at hackathons like YUGASTR and has been building since his Class 11 IP days. He's constantly evolving from a 'kid with a laptop' to a professional dev.",
        "His experience is built through constant iteration. He's a 'Christite' through and through, active in GameJams and tech workshops in Bangalore.",
        "From mastering MySQL in school to architecting B2B2C marketplaces today, his journey is marked by a relentless drive to 'learn by building'."
    ],
    future: [
        "He believes life is unpredictable and in God's hands. His current plan? Finish BCA, pursue an MBA, and launch his own startup one day!",
        "After his BCA at Christ University, Mayank aims to do a Masters (MBA) to combine his technical skills with high-level business strategy.",
        "The goal is simple: secure a great job first, settle into a professional rhythm, and build a startup on the side to change the world."
    ],
    hobbies: [
        "To clear his head after a long day of coding, Mayank loves driving. It's his favorite way to relax and 'cool down' his mind.",
        "He's a traveler and a driver! Exploring new places or just taking a long drive helps him stay creative for his next project.",
        "Cycling was a great hobby, but these days, a long drive is his go-to for relaxing and finding fresh inspiration for his work."
    ],
    ai_philosophy: [
        "Mayank is very humble—he uses AI for 80-90% of his work right now, but his goal is to sharpen his skills until he only needs it for 20-30% of the heavy lifting.",
        "He views AI as a mentor. While he builds complex apps like MRG with it, he's constantly studying the 'why' behind the code to gain ultimate mastery.",
        "He believes in using the best tools available. Currently a Prompt Engineering expert, he's using that power to build faster while he masters the fundamentals."
    ],
    greetings: [
        "Namaste! Curious about Mayank's journey from Commerce to BCA? Or his latest projects? Ask away!",
        "Hello! I'm Mayank's personal AI. I know all about his 'IP' days, his MySQL expertise, and his future MBA goals!",
        "Hi there! Want to know why Mayank chose Christ University or what he drives to relax? I've got the answers!"
    ],
    fallback: [
        "That's a great question! While I don't have that specific detail in my memory yet, you can definitely ask Mayank directly via the contact form below.",
        "I'm still learning! For more specific information, I recommend checking out Mayank's LinkedIn or sending him a quick email.",
        "I'm not exactly sure about that, but Mayank would love to chat about it! You can reach him at mayankrajgupta01@gmail.com."
    ]
};

const demoQuestions = [
    { id: 1, text: "Tell me about Mayank", category: "profile" },
    { id: 2, text: "What's his tech stack?", category: "stack" },
    { id: 3, text: "Latest projects?", category: "projects" },
    { id: 4, text: "How to contact him?", category: "contact" },
    { id: 5, text: "Where does he study?", category: "education" },
    { id: 6, text: "Professional experience?", category: "experience" },
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
        else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("mrg") || lowerText.includes("proud") || lowerText.includes("build")) category = 'projects';
        else if (lowerText.includes("stack") || lowerText.includes("tech") || lowerText.includes("skills") || lowerText.includes("language") || lowerText.includes("programming") || lowerText.includes("prompt")) category = 'stack';
        else if (lowerText.includes("education") || lowerText.includes("study") || lowerText.includes("college") || lowerText.includes("university") || lowerText.includes("christ") || lowerText.includes("commerce") || lowerText.includes("science")) category = 'education';
        else if (lowerText.includes("experience") || lowerText.includes("hackathon") || lowerText.includes("workshop") || lowerText.includes("activity") || lowerText.includes("yugastr") || lowerText.includes("ip")) category = 'experience';
        else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("call") || lowerText.includes("message")) category = 'contact';
        else if (lowerText.includes("where") || lowerText.includes("location") || lowerText.includes("live") || lowerText.includes("base") || lowerText.includes("bangalore")) category = 'location';
        else if (lowerText.includes("hobby") || lowerText.includes("outside") || lowerText.includes("cycling") || lowerText.includes("travel") || lowerText.includes("relax") || lowerText.includes("driving") || lowerText.includes("drive")) category = 'hobbies';
        else if (lowerText.includes("ai") || lowerText.includes("chatgpt") || lowerText.includes("bot")) category = 'ai_philosophy';
        else if (lowerText.includes("who") || lowerText.includes("profile") || lowerText.includes("bio") || lowerText.includes("mayank") || lowerText.includes("about")) category = 'profile';
        else if (lowerText.includes("hi") || lowerText.includes("hello") || lowerText.includes("namaste") || lowerText.includes("hey")) category = 'greetings';

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
