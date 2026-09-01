"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface FireSpark {
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  vy: number;
  vxBase: number;
  swaySpeed: number;
  swayOffset: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  increasing: boolean;
}

export function SparkAtmosphere() {
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

    // Mouse coordinates for gentle wind turbulence
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const isDark = resolvedTheme === "dark";

    // Green and Blue Fire Spark Palette (Emerald, Mint, Cyan, Electric Blue)
    const darkSparkColors = [
      { core: "#10B981", glow: "rgba(16, 185, 129, 0.4)" },  // Emerald green
      { core: "#34D399", glow: "rgba(52, 211, 153, 0.45)" }, // Bright mint
      { core: "#06B6D4", glow: "rgba(6, 182, 212, 0.4)" },   // Cyan
      { core: "#38BDF8", glow: "rgba(56, 189, 248, 0.35)" }, // Electric sky blue
      { core: "#059669", glow: "rgba(5, 150, 105, 0.35)" },  // Deep emerald
      { core: "#6EE7B7", glow: "rgba(110, 231, 183, 0.4)" }, // Light mint spark
    ];

    const lightSparkColors = [
      { core: "#059669", glow: "rgba(5, 150, 105, 0.25)" },
      { core: "#0284C7", glow: "rgba(2, 132, 199, 0.25)" },
      { core: "#0D9488", glow: "rgba(13, 148, 136, 0.25)" },
    ];

    const colors = isDark ? darkSparkColors : lightSparkColors;

    // Create 50 delicate rising fire sparks
    const SPARK_COUNT = 55;
    const createSpark = (initialRandomY = false): FireSpark => {
      const col = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: initialRandomY ? Math.random() * height : height + Math.random() * 40,
        size: Math.random() * 1.5 + 1.2, // 1.2px to 2.7px tiny spark
        color: col.core,
        glowColor: col.glow,
        vy: -(Math.random() * 0.6 + 0.35), // gentle upward fire drift
        vxBase: (Math.random() - 0.5) * 0.2,
        swaySpeed: Math.random() * 0.02 + 0.015,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.2,
        maxOpacity: Math.random() * 0.45 + 0.45,
        fadeSpeed: Math.random() * 0.008 + 0.004,
        increasing: Math.random() > 0.5,
      };
    };

    const sparks: FireSpark[] = Array.from({ length: SPARK_COUNT }, () => createSpark(true));

    let time = 0;

    const render = () => {
      time++;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width * dpr, height * dpr);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Render & update rising fire embers
      sparks.forEach((s, idx) => {
        // Natural ember twinkle / flicker
        if (s.increasing) {
          s.opacity += s.fadeSpeed;
          if (s.opacity >= s.maxOpacity) s.increasing = false;
        } else {
          s.opacity -= s.fadeSpeed;
          if (s.opacity <= 0.15) s.increasing = true;
        }

        // Horizontal sinusoidal fire sway
        const sway = Math.sin(time * s.swaySpeed + s.swayOffset) * 0.4;
        s.x += s.vxBase + sway;
        s.y += s.vy;

        // Gentle mouse breeze displacement
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          s.x += (dx / dist) * force * 1.5;
          s.y += (dy / dist) * force * 1.5;
        }

        // Reset spark when it floats off the top
        if (s.y < -20 || s.x < -20 || s.x > width + 20) {
          sparks[idx] = createSpark(false);
          return;
        }

        // Draw Spark Outer Glow
        ctx.fillStyle = s.glowColor;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Spark Core
        ctx.globalAlpha = Math.max(0.1, Math.min(1, s.opacity));
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
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base Canvas: Soothing Obsidian Slate */}
      <div
        className="absolute inset-0 w-full h-full transition-colors duration-500"
        style={{
          backgroundColor: isDark ? "#090A0E" : "#F8F9FA",
        }}
      />

      {/* Layer 1: Ambient Studio Lighting (Muted Emerald-Teal Radiance) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(16, 185, 129, 0.035), transparent 70%),
              radial-gradient(ellipse 50% 40% at 85% 75%, rgba(6, 182, 212, 0.03), transparent 60%),
              radial-gradient(ellipse 60% 40% at 15% 85%, rgba(16, 185, 129, 0.025), transparent 60%)
            `
            : `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(16, 185, 129, 0.02), transparent 70%),
              radial-gradient(ellipse 50% 40% at 85% 75%, rgba(6, 182, 212, 0.02), transparent 60%)
            `,
        }}
      />

      {/* Layer 2: Ultra-Light 2D Fire Sparks Canvas (Small Emerald & Blue Mix) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
