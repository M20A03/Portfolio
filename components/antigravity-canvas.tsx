"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface SkillOrb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  ringColor: string;
  ringAngle: number;
  ringSpeed: number;
  floatOffset: number;
  floatSpeed: number;
  vx: number;
  vy: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

export default function AntigravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Active in dark mode
    const isDark =
      resolvedTheme === "dark" ||
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (!isDark) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -9999, y: -9999, radius: 180 };

    // 1. Nebula Gas Clouds
    const nebulae: NebulaCloud[] = [
      { x: width * 0.25, y: height * 0.3, radius: 280, color: "rgba(168, 85, 247, 0.12)", vx: 0.15, vy: 0.1 },
      { x: width * 0.75, y: height * 0.4, radius: 320, color: "rgba(6, 182, 212, 0.12)", vx: -0.12, vy: 0.08 },
      { x: width * 0.5, y: height * 0.8, radius: 360, color: "rgba(236, 72, 153, 0.09)", vx: 0.08, vy: -0.1 },
    ];

    // 2. Constellation Stars (200)
    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
    }));

    // 3. Antigravity Skill Orbs with Orbital Rings
    const orbColors = [
      { core: "rgba(6, 182, 212, 0.85)", ring: "#00f3ff" },
      { core: "rgba(236, 72, 153, 0.85)", ring: "#ff007f" },
      { core: "rgba(168, 85, 247, 0.85)", ring: "#a855f7" },
      { core: "rgba(59, 130, 246, 0.85)", ring: "#3b82f6" },
    ];

    const orbs: SkillOrb[] = Array.from({ length: 9 }, (_, i) => {
      const baseX = (width * (i + 1)) / 10 + (Math.random() - 0.5) * 80;
      const baseY = height * 0.3 + Math.random() * 0.4 * height;
      const palette = orbColors[i % orbColors.length];
      return {
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        radius: Math.random() * 12 + 16,
        color: palette.core,
        ringColor: palette.ring,
        ringAngle: Math.random() * Math.PI * 2,
        ringSpeed: (Math.random() * 0.03 + 0.015) * (Math.random() > 0.5 ? 1 : -1),
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.02 + 0.01,
        vx: 0,
        vy: 0,
      };
    });

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.forEach((s) => {
        s.x = Math.random() * width;
        s.y = Math.random() * height;
      });
      orbs.forEach((orb, i) => {
        orb.baseX = (width * (i + 1)) / 10;
        orb.baseY = height * 0.3 + Math.random() * 0.4 * height;
      });
    };

    // Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    // Render Loop (60fps)
    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Deep Space Radial Background (#1a0b2e -> #05050a)
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, "#120724");
      bgGrad.addColorStop(0.5, "#0b0517");
      bgGrad.addColorStop(1, "#040208");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Nebula Cloud Drift (Global Composite: Screen)
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      nebulae.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;
        if (nebula.x < -100) nebula.x = width + 100;
        if (nebula.x > width + 100) nebula.x = -100;
        if (nebula.y < -100) nebula.y = height + 100;
        if (nebula.y > height + 100) nebula.y = -100;

        const nGrad = ctx.createRadialGradient(nebula.x, nebula.y, 10, nebula.x, nebula.y, nebula.radius);
        nGrad.addColorStop(0, nebula.color);
        nGrad.addColorStop(1, "transparent");
        ctx.fillStyle = nGrad;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Constellation Network Lines (d < 140px)
      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15;
            ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Twinkling Stars
      stars.forEach((s) => {
        const currentAlpha = (Math.sin(time * s.twinkleSpeed) + 1) * 0.5 * s.alpha;
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Antigravity Skill Orbs
      orbs.forEach((orb) => {
        // Floating Sine-Wave motion
        const floatY = orb.baseY + Math.sin(time * orb.floatSpeed + orb.floatOffset) * 22;
        const targetX = orb.baseX + Math.cos(time * (orb.floatSpeed * 0.7) + orb.floatOffset) * 12;

        // Interactive Zero-G Elastic Repel
        const dx = mouse.x - orb.x;
        const dy = mouse.y - orb.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          orb.vx -= Math.cos(angle) * force * 1.8;
          orb.vy -= Math.sin(angle) * force * 1.8;
        }

        // Apply friction and spring back to equilibrium
        orb.vx += (targetX - orb.x) * 0.04;
        orb.vy += (floatY - orb.y) * 0.04;
        orb.vx *= 0.88;
        orb.vy *= 0.88;

        orb.x += orb.vx;
        orb.y += orb.vy;

        // Outer Glow
        const glow = ctx.createRadialGradient(orb.x, orb.y, orb.radius * 0.2, orb.x, orb.y, orb.radius * 2.5);
        glow.addColorStop(0, orb.color);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Pulsating Core
        ctx.fillStyle = orb.color;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();

        // Rapidly Rotating Planetary Ring
        orb.ringAngle += orb.ringSpeed;
        ctx.save();
        ctx.translate(orb.x, orb.y);
        ctx.rotate(orb.ringAngle);
        ctx.scale(1, 0.35); // Elliptical ring perspective

        ctx.strokeStyle = orb.ringColor;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = orb.ringColor;
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ctx.arc(0, 0, orb.radius * 1.8, 0, Math.PI * 1.6); // Open arc
        ctx.stroke();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
