"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  Command,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  ExternalLink,
  Code,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Contact" | "Actions";
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  external?: boolean;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2200);
  }, []);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-about",
      title: "About Mayank Raj",
      category: "Navigation",
      description: "Background, education, and Christ University research",
      icon: Sparkles,
      action: () => {
        router.push("/#about");
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      title: "Projects & Case Studies",
      category: "Navigation",
      description: "18+ deployed production architectures",
      icon: Code,
      action: () => {
        router.push("/#projects");
        setIsOpen(false);
      },
    },
    {
      id: "nav-journey",
      title: "Engineering Journey & Milestones",
      category: "Navigation",
      description: "Career timeline, Singularium Technologies & achievements",
      icon: ArrowRight,
      action: () => {
        router.push("/#journey");
        setIsOpen(false);
      },
    },
    {
      id: "nav-resume",
      title: "View / Download Resume",
      category: "Navigation",
      description: "PDF resume formatted for technical recruiters",
      icon: FileText,
      action: () => {
        router.push("/resume");
        setIsOpen(false);
      },
    },

    // Featured Projects
    {
      id: "proj-nexus",
      title: "Nexus Scholar",
      category: "Projects",
      description: "AI Knowledge Graph & Research Discovery Platform",
      icon: ExternalLink,
      action: () => {
        router.push("/case-study/nexus-scholar");
        setIsOpen(false);
      },
    },
    {
      id: "proj-akion",
      title: "Akion Fintech",
      category: "Projects",
      description: "Autonomous Algo-Trading & Market Analytics Suite",
      icon: ExternalLink,
      action: () => {
        router.push("/case-study/akion-fintech");
        setIsOpen(false);
      },
    },
    {
      id: "proj-credex",
      title: "Credex Financial Engine",
      category: "Projects",
      description: "P2P Micro-Financing & Decentralized Escrow",
      icon: ExternalLink,
      action: () => {
        router.push("/case-study/credex");
        setIsOpen(false);
      },
    },
    {
      id: "proj-yolo",
      title: "YOLOv11 Deep Learning Suite",
      category: "Projects",
      description: "Computer Vision & 94.6% mAP Industrial Inspection",
      icon: ExternalLink,
      action: () => {
        router.push("/case-study/yolo11-deep-learning");
        setIsOpen(false);
      },
    },

    // Contact
    {
      id: "contact-email-copy",
      title: "Copy Email Address",
      category: "Contact",
      description: "mayankrajgupta01@gmail.com",
      icon: Copy,
      action: () => {
        copyToClipboard("mayankrajgupta01@gmail.com", "Email");
      },
    },
    {
      id: "contact-linkedin",
      title: "Open LinkedIn Profile",
      category: "Contact",
      description: "linkedin.com/in/mayank-raj-gupta-159020396",
      icon: Linkedin,
      external: true,
      action: () => {
        window.open("https://www.linkedin.com/in/mayank-raj-gupta-159020396", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "contact-github",
      title: "Open GitHub Profile",
      category: "Contact",
      description: "github.com/M20A03 (18+ Repositories)",
      icon: Github,
      external: true,
      action: () => {
        window.open("https://github.com/M20A03", "_blank");
        setIsOpen(false);
      },
    },

    // Actions
    {
      id: "action-chat",
      title: "Chat with Mayank AI",
      category: "Actions",
      description: "Ask questions about MERN stack, projects, and bio",
      icon: Sparkles,
      action: () => {
        window.dispatchEvent(new CustomEvent("open-ai-assistant"));
        setIsOpen(false);
      },
    },
    {
      id: "action-theme",
      title: `Switch to ${isDark ? "Light" : "Dark"} Mode`,
      category: "Actions",
      description: "Toggle portfolio appearance",
      icon: isDark ? Sun : Moon,
      action: () => {
        setTheme(isDark ? "light" : "dark");
        setIsOpen(false);
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.description?.toLowerCase().includes(q)
    );
  });

  // Global keydown for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleArrowNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Toast Alert for Copy Actions */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[100] px-4 py-3 bg-primary text-primary-foreground font-medium rounded-xl shadow-2xl flex items-center gap-2.5 text-sm"
          >
            <Check className="w-4 h-4" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop & Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
              onKeyDown={handleArrowNav}
            >
              {/* Search Bar Header */}
              <div className="flex items-center px-4 py-3.5 border-b border-border gap-3">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or search (e.g. Nexus, Resume, Email)..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-md transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* List of Actions */}
              <div className="max-h-[380px] overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground text-sm">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filtered.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                          isSelected
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-2 rounded-lg ${
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{item.title}</p>
                            {item.description && (
                              <p className="text-xs text-muted-foreground truncate">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground ml-3 shrink-0">
                          {item.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">↑</kbd>
                    {" "}
                    <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">↓</kbd>
                    {" "}to navigate
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">↵</kbd>
                    {" "}to select
                  </span>
                </div>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">ESC</kbd>
                  {" "}to close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
