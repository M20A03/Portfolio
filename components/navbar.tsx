"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume", isPage: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12" aria-label="Primary">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#main-content" className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
            MRG<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors relative group text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                  className={`text-sm font-medium transition-colors relative group ${activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              )
            )}
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/M20A03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
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
                    href="https://www.linkedin.com/in/mayank-raj-gupta-159020396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>

            <Separator orientation="vertical" className="hidden md:block h-5" />

            {/* Theme Toggle */}
            {mounted && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 transition-transform rotate-0 scale-100" />
                    ) : (
                      <Moon className="w-5 h-5 transition-transform rotate-0 scale-100" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{theme === "dark" ? "Light mode" : "Dark mode"}</TooltipContent>
              </Tooltip>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-nav-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium transition-colors text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                  className={`text-base font-medium transition-colors ${activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/M20A03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-raj-gupta-159020396"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
