"use client";

import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    year: "2025",
    title: "C Programming Course",
    issuer: "Infosys in association with Springboard",
  },
  {
    year: "2025",
    title: "AI Prompt Engineering, AI Technology",
    issuer: "Microsoft",
  },
  {
    year: "2025",
    title: "Leadership Skill Development",
    issuer: "Christ University, Bangalore",
  },
  {
    year: "2025",
    title: "Co-pilot Workshop",
    issuer: "Samsung, Samsung Opera House, Bangalore",
  },
  {
    year: "2023",
    title: "C++ Programming",
    issuer: "Sai Computer Education (ISO 9001:2015 certified) - Certificate #01523",
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 px-6 md:px-12 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Certifications &
            <span className="text-primary"> Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
            Professional certifications and training programs that validate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              <div className="relative z-10">
                {/* Award Icon */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {cert.year}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
