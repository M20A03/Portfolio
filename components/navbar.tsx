"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X, Sun, Moon, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

function getSectionId(href: string) {
  return href.includes("#") ? href.split("#")[1] : href;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const isDarkMode = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically close mobile menu whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine active section on the home page via scroll
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter((link) => link.href.includes("#"))
        .map((link) => getSectionId(link.href));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle mobile navigation click without race condition unmounting
  const handleMobileNavClick = useCallback(
    (href: string) => {
      if (href.startsWith("/#") && pathname === "/") {
        const sectionId = href.replace("/#", "");
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Give the browser touch event and client router a short window to register
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 120);
    },
    [pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 print:hidden transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12" aria-label="Primary">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
            }}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            MRG<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 lg:gap-10">
            {navLinks.map((link) => {
              const isSectionActive = pathname === "/" && activeSection === getSectionId(link.href);
              const isPageActive = pathname === link.href;
              const isActive = isSectionActive || isPageActive;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-base font-medium transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Ask AI Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-ai-assistant"))}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-xs font-semibold text-primary transition-all cursor-pointer shadow-xs group"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary group-hover:rotate-12 transition-transform" />
              <span>Ask AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            {/* Quick Command Palette Button */}
            <button
              onClick={() =>
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
                )
              }
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 hover:bg-muted/80 text-xs text-foreground/80 hover:text-foreground transition-all cursor-pointer shadow-2xs"
              aria-label="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span className="font-medium">Search</span>
              <kbd className="font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            <div className="hidden md:flex items-center gap-2.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/M20A03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/mayank-raj-gupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-6" />

            {/* Theme Toggle */}
            {mounted && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleThemeToggle}
                    aria-label="Toggle theme"
                    className="w-10 h-10 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    {isDarkMode ? (
                      <Sun className="w-5 h-5 transition-transform rotate-0 scale-100" />
                    ) : (
                      <Moon className="w-5 h-5 transition-transform rotate-0 scale-100" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isDarkMode ? "Light mode" : "Dark mode"}</TooltipContent>
              </Tooltip>
            )}

            {/* Mobile Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all cursor-pointer"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-y-auto max-h-[calc(100vh-5.5rem)] pb-8"
            >
              <div className="flex flex-col gap-1.5 pt-4 pb-6 border-t border-border">
                {navLinks.map((link, index) => {
                  const isSectionActive = pathname === "/" && activeSection === getSectionId(link.href);
                  const isPageActive = pathname === link.href;
                  const isActive = isSectionActive || isPageActive;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`text-lg font-semibold py-3 px-4 rounded-xl transition-all block ${
                          isActive
                            ? "text-primary font-bold bg-primary/15 border-l-4 border-primary pl-3"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => handleMobileNavClick(link.href)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.03 }}
                  className="pt-3"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent("open-ai-assistant"));
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold text-base hover:bg-primary/20 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Ask AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
                  </button>
                </motion.div>

                <motion.div
                  className="flex items-center gap-5 pt-4 mt-2 border-t border-border px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.03 + 0.05 }}
                >
                  <a
                    href="https://github.com/M20A03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors p-2"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayank-raj-gupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors p-2"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
