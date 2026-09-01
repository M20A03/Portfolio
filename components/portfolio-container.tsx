"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { JourneySection } from "@/components/journey-section";
import { ProofSection } from "@/components/proof-section";
import { AIAssistant } from "@/components/ai-assistant";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionDivider } from "@/components/section-divider";
import { SparkAtmosphere } from "@/components/spark-atmosphere";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";

const siteUrl = "https://www.mayankraj.me";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Projects", href: "/#projects" },
  { label: "Proof", href: "/#proof" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/M20A03",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-raj-gupta-159020396",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mayankrajgupta01@gmail.com",
    icon: Mail,
  },
];

// Lightweight, 60fps GPU-composited fade-up without spring mass
const sectionAnimation: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
};

export function PortfolioContainer() {
  const profilePageLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Mayank Raj Gupta | Full Stack Developer Portfolio",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "Mayank Raj Gupta",
      jobTitle: "Full Stack Developer",
      url: siteUrl,
      sameAs: [
        "https://github.com/M20A03",
        "https://www.linkedin.com/in/mayank-raj-gupta-159020396",
      ],
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-transparent relative selection:bg-primary/20">
      <SparkAtmosphere />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
      />
      <ScrollProgress />
      <Navbar />

      <HeroSection />

      <SectionDivider />

      <motion.div {...sectionAnimation}>
        <AboutSection />
      </motion.div>

      <SectionDivider flip />

      <motion.div {...sectionAnimation}>
        <JourneySection />
      </motion.div>

      <SectionDivider />

      <motion.div {...sectionAnimation}>
        <ProjectsSection />
      </motion.div>

      <SectionDivider flip />

      <motion.div {...sectionAnimation}>
        <ProofSection />
      </motion.div>

      <SectionDivider />

      <motion.div {...sectionAnimation}>
        <SkillsSection />
      </motion.div>

      <SectionDivider />

      <motion.div {...sectionAnimation}>
        <CertificationsSection />
      </motion.div>

      <SectionDivider flip />

      <motion.div {...sectionAnimation}>
        <ContactSection />
      </motion.div>

      <AIAssistant />
      <ScrollToTop />

      {/* ─── Footer ─────────────────────────────────────────── */}
      <motion.footer
        {...sectionAnimation}
        className="pt-0 pb-10 px-6 md:px-12 bg-transparent"
      >
        <Separator className="mb-10" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-3">
            <p className="text-lg font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Mayank Raj Gupta
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BCA Student &amp; Full‑Stack Developer passionate about building
              clean, accessible, and performant web experiences.
            </p>
            <p className="text-xs text-muted-foreground/80 leading-relaxed pt-1">
              <span className="font-semibold text-primary inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary" /> AntiGravity Skill:
              </span>{" "}
              Proficient in autonomous multi-agent AI pair-programming, prompt engineering, and rapid architectural execution.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built with */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Motion", "AntiGravity AI", "shadcn/ui"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mayank Raj Gupta. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
