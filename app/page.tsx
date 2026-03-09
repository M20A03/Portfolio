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
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
  return (
    <main id="main-content" className="min-h-screen bg-background relative selection:bg-primary/20">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <AIAssistant />

      <footer className="py-8 px-6 md:px-12">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mayank Raj Gupta. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
