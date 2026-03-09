"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const roles = [
  "Full-Stack Developer",
  "BCA Student",
  "Problem Solver",
  "Open Source Enthusiast",
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), Math.random() * 50 + 50);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* LEFT: Text content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Mayank
              </span>
            </h1>

            {/* Typing animation */}
            <div
              className="text-2xl md:text-3xl text-muted-foreground font-light mb-6 min-h-[2.5rem] transition-all duration-1000"
              style={{ transitionDelay: "200ms" }}
              aria-live="polite"
            >
              <span className="text-foreground font-medium">{displayed}</span>
              <span className="animate-pulse text-primary" aria-hidden="true">|</span>
            </div>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              Crafting elegant digital experiences with modern technologies.
              Passionate about building responsive, user-centric applications
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium border-border hover:bg-secondary transition-all hover:scale-105 bg-transparent gap-2"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="px-6 py-6 text-base font-medium gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all group"
              >
                <a href="/resume.pdf" download="Mayank_Raj_Gupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "800ms" }}
            >
              {[
                { href: "https://github.com/M20A03", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mayank-raj-gupta-159020396", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:mayankrajgupta01@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Avatar */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-2xl animate-pulse" />
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/30 p-1">
                <div className="w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center">
                  {avatarError ? (
                    <span className="text-7xl select-none" aria-hidden="true">👨‍💻</span>
                  ) : (
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Portrait of Mayank Raj Gupta"
                      fill
                      sizes="(max-width: 768px) 16rem, 24rem"
                      className="object-cover rounded-full"
                      onError={() => setAvatarError(true)}
                    />
                  )}
                </div>
              </div>
              {/* Orbiting decoration dots */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

