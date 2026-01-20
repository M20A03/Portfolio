"use client";

import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mayankrajgupta01@gmail.com",
    href: "mailto:mayankrajgupta01@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98351 39865",
    href: "tel:+919835139865",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/M20A03",
    username: "@M20A03",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-raj-gupta-159020396",
    username: "Mayank Raj Gupta",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Work
            <span className="text-primary"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group flex-1"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                          {link.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Languages:</span> English, Hindi
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mb-6">
                <Send className="w-8 h-8" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to start a project?
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind or just want to chat about
                technology and ideas, I&apos;d love to hear from you. Let&apos;s
                create something amazing together.
              </p>

              <a href="mailto:mayankrajgupta01@gmail.com">
                <Button
                  size="lg"
                  className="gap-2 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Send Me an Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
