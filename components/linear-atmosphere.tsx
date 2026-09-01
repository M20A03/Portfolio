"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface Spark {
  x: number;
  y: number;
  size: number;
  color: string;
  glow: string;
  vy: number;
  swaySpeed: number;
  swayAmp: number;
  phase: number;
  opacity: number;
  maxOpacity: number;
}

export function LinearAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isDark = resolvedTheme === "dark";

    // 7 Elegant Micro-Sparks (Emerald Mint & Cyan Ice Mix)
    const sparkPalettes = isDark
      ? [
          { color: "#10B981", glow: "rgba(16, 185, 129, 0.5)" }, // Emerald
          { color: "#06B6D4", glow: "rgba(6, 182, 212, 0.5)" },  // Cyan
          { color: "#34D399", glow: "rgba(52, 211, 153, 0.5)" }, // Mint
          { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.45)" },// Sky blue
          { color: "#10B981", glow: "rgba(16, 185, 129, 0.5)" }, // Emerald
          { color: "#6EE7B7", glow: "rgba(110, 231, 183, 0.45)" },// Light mint
          { color: "#06B6D4", glow: "rgba(6, 182, 212, 0.5)" },  // Cyan
        ]
      : [
          { color: "#059669", glow: "rgba(5, 150, 105, 0.3)" },
          { color: "#0284C7", glow: "rgba(2, 132, 199, 0.3)" },
          { color: "#0D9488", glow: "rgba(13, 148, 136, 0.3)" },
          { color: "#059669", glow: "rgba(5, 150, 105, 0.3)" },
          { color: "#0284C7", glow: "rgba(2, 132, 199, 0.3)" },
          { color: "#0D9488", glow: "rgba(13, 148, 136, 0.3)" },
          { color: "#059669", glow: "rgba(5, 150, 105, 0.3)" },
        ];

    // Exactly 7 sparks distributed across the upper landing page
    const sparks: Spark[] = sparkPalettes.map((p, idx) => ({
      x: width * (0.15 + (idx * 0.7) / 7 + Math.random() * 0.05),
      y: Math.random() * (height * 0.85),
      size: Math.random() * 0.8 + 1.4, // 1.4px to 2.2px tiny micro-sparks
      color: p.color,
      glow: p.glow,
      vy: -(Math.random() * 0.45 + 0.25), // gentle upward float
      swaySpeed: Math.random() * 0.015 + 0.01,
      swayAmp: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.3 + 0.3,
      maxOpacity: Math.random() * 0.35 + 0.5,
    }));

    let time = 0;

    const render = () => {
      time++;
      ctx.clearRect(0, 0, width * dpr, height * dpr);
      ctx.save();
      ctx.scale(dpr, dpr);

      sparks.forEach((s) => {
        // Natural ember twinkle
        s.phase += 0.03;
        const currentOpacity = s.opacity + Math.sin(s.phase) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(s.maxOpacity, currentOpacity));

        s.y += s.vy;
        s.x += Math.sin(time * s.swaySpeed + s.phase) * s.swayAmp;

        // Wrap around when rising past top
        if (s.y < -15) {
          s.y = height * 0.85 + Math.random() * 50;
          s.x = Math.random() * width;
        }

        // Draw Glow Halo
        ctx.fillStyle = s.glow;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Spark Core
        ctx.globalAlpha = clampedAlpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base Canvas: Ultra-Clean Obsidian (#09090B) in Dark / Apple Studio (#F8F9FA) in Light */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-700"
        style={{
          backgroundColor: isDark ? "#09090B" : "#F8F9FA",
        }}
      />

      {/* Linear-Style Ambient Spotlight Glow (Top-Center Horizon Radiance) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(ellipse 85% 55% at 50% -15%, rgba(120, 119, 198, 0.16), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(16, 185, 129, 0.04), transparent 60%),
              radial-gradient(ellipse 60% 40% at 15% 75%, rgba(99, 102, 241, 0.04), transparent 60%)
            `
            : `
              radial-gradient(ellipse 85% 55% at 50% -15%, rgba(99, 102, 241, 0.08), transparent 70%),
              radial-gradient(ellipse 60% 40% at 85% 60%, rgba(16, 185, 129, 0.03), transparent 60%),
              radial-gradient(ellipse 60% 40% at 15% 75%, rgba(245, 158, 11, 0.03), transparent 60%)
            `,
        }}
      />

      {/* Professional Architectural Grid with Smooth Radial Falloff Mask (Vercel & Linear Style) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to right, rgba(255, 255, 255, 0.075) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.075) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 60% at 50% 25%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 25%, black 30%, transparent 85%)",
        }}
      />

      {/* Top Hairline Horizon Glow Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-50"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent 0%, rgba(120, 119, 198, 0.6) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.35) 50%, transparent 100%)",
        }}
      />

      {/* 7 Floating Micro-Sparks Canvas (Emerald & Cyan Mix) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
