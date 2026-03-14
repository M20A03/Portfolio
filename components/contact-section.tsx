"use client";

import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mayankrajgupta01@gmail.com",
    href: "mailto:mayankrajgupta01@gmail.com",
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
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://www.mayankraj.me",
    username: "mayankraj.me",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const formStatusMessageId = "contact-form-status";
  const nameErrorId = "contact-name-error";
  const emailErrorId = "contact-email-error";
  const messageErrorId = "contact-message-error";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    if (formStatus === "error") {
      setFormStatus("idle");
    }
  };

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < 2) {
      nextErrors.name = "Enter your full name (at least 2 characters).";
    }

    if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address, for example name@example.com.";
    }

    if (trimmedMessage.length < 10) {
      nextErrors.message = "Message should be at least 10 characters so I can understand your request.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      setFormStatus("error");
      return;
    }

    setFormErrors({});
    setFormStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // ← replace with your free key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio message from ${formData.name}`,
          message: formData.message,
        }),
      });
      const json = await response.json();
      if (json.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormErrors({});
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <Card
                      key={index}
                      className="flex-row items-center gap-4 p-4 border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </Card>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group flex-1"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{link.label}</p>
                            <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                              {link.username}
                            </p>
                          </div>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Visit {link.label} profile</TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <Card className="p-4">
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Languages:</span> English, Hindi
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative p-8 md:p-10 rounded-2xl bg-card border border-border overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Send a Message</h3>
              <p className="text-muted-foreground text-sm mb-6">I&apos;ll get back to you as soon as possible.</p>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center" role="status" aria-live="polite">
                  <CheckCircle className="w-14 h-14 text-green-500" />
                  <h4 className="text-xl font-semibold text-foreground">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thanks for reaching out! I&apos;ll reply to your email as soon as I can.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2 bg-transparent"
                    onClick={() => setFormStatus("idle")}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-describedby={formStatus === "error" ? formStatusMessageId : undefined}
                  aria-busy={formStatus === "loading"}
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">
                        Your Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        aria-invalid={Boolean(formErrors.name)}
                        aria-describedby={formErrors.name ? nameErrorId : undefined}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mayank Raj"
                      />
                      {formErrors.name && (
                        <p id={nameErrorId} className="text-xs text-destructive" role="alert">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">
                        Email Address <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? emailErrorId : undefined}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />
                      {formErrors.email && (
                        <p id={emailErrorId} className="text-xs text-destructive" role="alert">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="subject">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Opportunity"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message">
                      Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      required
                      rows={4}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? messageErrorId : undefined}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Mayank, I'd love to discuss..."
                      className="resize-none"
                    />
                    {formErrors.message && (
                      <p id={messageErrorId} className="text-xs text-destructive" role="alert">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {formStatus === "error" && (
                    <div id={formStatusMessageId} role="alert" className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {Object.keys(formErrors).length > 0
                          ? "Please review the highlighted fields and try again."
                          : "Something went wrong while sending. Please try again or email me directly."}
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formStatus === "loading"}
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:scale-100"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
