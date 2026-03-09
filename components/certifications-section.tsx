"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const certifications = [
  {
    year: "2026",
    title: "YUGASTR IT FEST Hackathon",
    issuer: "Ramaiah College of Arts, Science & Commerce",
    image: "/certificates/certificate-5.jpg",
  },
  {
    year: "2026",
    title: "HACKNOVA Game Jam",
    issuer: "CHRIST (Deemed to be University)",
    image: "/certificates/certificate-4.jpg",
  },
  {
    year: "2025",
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    image: "/certificates/certificate-2.jpg",
  },
  {
    year: "2025",
    title: "AI Prompt Engineering Masterclass",
    issuer: "Microsoft & Reliance Digital",
    image: "/certificates/certificate-3.jpg",
  },
  {
    year: "2023",
    title: "C++ Programming",
    issuer: "Sai Computer Education",
    image: "/certificates/certificate-6.jpg",
  },
  {
    year: "2025",
    title: "Infosys HTML-5 Programming Course",
    issuer: "Infosys Springboard",
    image: "/certificates/certificate-1.jpg",
  },
  {
    year: "2025",
    title: "Co-pilot Workshop",
    issuer: "Samsung Opera House, Bangalore",
    image: "/certificates/certificate-7.jpg",
  },
];

export function CertificationsSection() {
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="certifications"
      className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-card/50"
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
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden flex flex-col"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden border border-border/50 bg-muted/50 flex flex-col items-center justify-center">
                {brokenImages[cert.image] ? (
                  <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted-foreground px-4">
                    Certificate preview unavailable
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate from ${cert.issuer}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() =>
                      setBrokenImages((prev) => ({
                        ...prev,
                        [cert.image]: true,
                      }))
                    }
                  />
                )}
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
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

        {/* Tagline */}
        <p className="mt-10 text-center text-sm text-muted-foreground italic">
          &quot;Every certificate is a step forward - learning never stops.&quot; 🎯
        </p>
      </div>
    </section>
  );
}
