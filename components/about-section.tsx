"use client";

import { GraduationCap, Calendar, MapPin, Code2, Lightbulb, Bike, Plane } from "lucide-react";

const education = [
  {
    year: "2025 — 2028",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Christ University",
    location: "Bangalore, India",
    details: "3.2 / 4.0 CGPA (1st Semester)",
  },
  {
    year: "2023 — 2025",
    degree: "Higher Secondary (12th)",
    institution: "Rajkamal Swarswati Vidya Mandir, Dhanbad (CBSE)",
    location: "Dhanbad, Jharkhand",
    details: "76%",
  },
  {
    year: "2021",
    degree: "Secondary (10th)",
    institution: "Dhanbad Public School, Hirak Branch (CBSE)",
    location: "Dhanbad, Jharkhand",
    details: "72%",
  },
];

const highlights = [
  { icon: Code2, label: "Languages", value: "5+" },
  { icon: Lightbulb, label: "Projects", value: "3+" },
  { icon: GraduationCap, label: "Certifications", value: "5" },
];

const interests = [
  { icon: Plane, label: "Travelling", description: "Exploring new places" },
  { icon: Bike, label: "Cycling", description: "Around the city" },
  { icon: Code2, label: "Coding", description: "Building solutions" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            Passionate about creating
            <span className="text-primary"> digital experiences</span>
          </h2>

          {/* Bio Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am a dedicated <span className="text-foreground font-medium">Computer Applications student</span> with a strong foundation in programming and web development. My journey in tech started with <span className="text-primary">curiosity about how things work</span>, and has evolved into a passion for building solutions that matter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">My Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Always <span className="text-primary">inquisitive to new technologies</span> and eager to learn. I believe in writing clean, efficient code and creating user-friendly experiences. Every project is an opportunity to grow and make an impact.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-card border border-border text-center group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Interests */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">When I&apos;m not coding...</h3>
            <div className="flex flex-wrap gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/50 border border-border hover:border-primary/50 transition-all"
                >
                  <interest.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{interest.label}</span>
                  <span className="text-muted-foreground text-sm hidden sm:inline">• {interest.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Education
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-primary text-sm mt-2 font-medium">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
