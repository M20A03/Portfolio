import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { JourneySection } from "@/components/journey-section";
import { AIAssistant } from "@/components/ai-assistant";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import { SectionDivider } from "@/components/section-divider";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
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

export default function Portfolio() {
  return (
    <main id="main-content" className="min-h-screen bg-background relative selection:bg-primary/20">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider flip />
      <JourneySection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider flip />
      <SkillsSection />
      <SectionDivider />
      <CertificationsSection />
      <SectionDivider flip />
      <ContactSection />
      <AIAssistant />
      <ScrollToTop />

      {/* ─── Footer ─────────────────────────────────────────── */}
      <footer className="pt-0 pb-10 px-6 md:px-12 bg-background">
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
            <div className="flex gap-3 pt-1">
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
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
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
      </footer>
    </main>
  );
}
