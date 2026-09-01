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
  baseAlpha: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  decay: number;
  color: string;
  trail: { x: number; y: number }[];
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
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -9999, y: -9999, radius: 220 };

    // 1. Nebula Gas Clouds
    const nebulae: NebulaCloud[] = [
      { x: width * 0.2, y: height * 0.25, radius: 340, color: "rgba(147, 51, 234, 0.15)", vx: 0.12, vy: 0.08 },
      { x: width * 0.8, y: height * 0.35, radius: 380, color: "rgba(6, 182, 212, 0.14)", vx: -0.1, vy: 0.06 },
      { x: width * 0.45, y: height * 0.75, radius: 420, color: "rgba(236, 72, 153, 0.11)", vx: 0.07, vy: -0.09 },
      { x: width * 0.7, y: height * 0.85, radius: 300, color: "rgba(16, 185, 129, 0.09)", vx: -0.06, vy: -0.06 },
    ];

    // 2. Constellation Stars (Multi-Layer Depth)
    const stars: Star[] = Array.from({ length: 220 }, () => {
      const baseAlpha = Math.random() * 0.7 + 0.3;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: Math.random() * 0.035 + 0.012,
      };
    });

    // 3. Shooting Stars (Meteors)
    const shootingStars: ShootingStar[] = [];
    const meteorColors = ["#00f3ff", "#a855f7", "#ec4899", "#ffffff"];

    const spawnShootingStar = () => {
      const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 degrees diagonal
      const speed = Math.random() * 8 + 12;
      const startX = Math.random() * width * 1.2 - width * 0.1;
      const startY = Math.random() * height * 0.4;
      const color = meteorColors[Math.floor(Math.random() * meteorColors.length)];

      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 100,
        speed,
        angle,
        opacity: 1,
        decay: Math.random() * 0.015 + 0.015,
        color,
        trail: [],
      });
    };

    // 4. Antigravity Skill Orbs with Orbital Rings
    const orbColors = [
      { core: "rgba(6, 182, 212, 0.9)", ring: "#00f3ff" },
      { core: "rgba(236, 72, 153, 0.9)", ring: "#ff007f" },
      { core: "rgba(168, 85, 247, 0.9)", ring: "#c084fc" },
      { core: "rgba(59, 130, 246, 0.9)", ring: "#60a5fa" },
      { core: "rgba(16, 185, 129, 0.9)", ring: "#34d399" },
    ];

    const orbs: SkillOrb[] = Array.from({ length: 10 }, (_, i) => {
      const baseX = (width * (i + 1)) / 11 + (Math.random() - 0.5) * 60;
      const baseY = height * 0.25 + Math.random() * 0.5 * height;
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
        orb.baseX = (width * (i + 1)) / 11;
        orb.baseY = height * 0.25 + Math.random() * 0.5 * height;
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
    let nextMeteorFrame = Math.floor(Math.random() * 120 + 80);

    // Render Loop (60fps)
    const render = () => {
      time++;

      // Periodic Shooting Star spawn
      if (time >= nextMeteorFrame) {
        spawnShootingStar();
        nextMeteorFrame = time + Math.floor(Math.random() * 160 + 100);
      }

      // Deep Space Radial Background (#10061e -> #05030a)
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        60,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, "#0e051a");
      bgGrad.addColorStop(0.45, "#080312");
      bgGrad.addColorStop(1, "#030206");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Nebula Cloud Drift (Global Composite: Screen)
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      nebulae.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;
        if (nebula.x < -120) nebula.x = width + 120;
        if (nebula.x > width + 120) nebula.x = -120;
        if (nebula.y < -120) nebula.y = height + 120;
        if (nebula.y > height + 120) nebula.y = -120;

        const nGrad = ctx.createRadialGradient(nebula.x, nebula.y, 15, nebula.x, nebula.y, nebula.radius);
        nGrad.addColorStop(0, nebula.color);
        nGrad.addColorStop(1, "transparent");
        ctx.fillStyle = nGrad;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Constellation Network Lines (d < 130px)
      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
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

      // Draw Shooting Stars (Meteors)
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= star.decay;

        if (star.opacity <= 0 || star.x > width + 200 || star.y > height + 200) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const grad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.7, star.color);
        grad.addColorStop(1, "#ffffff");

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Glowing Star Head
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw Antigravity Skill Orbs
      orbs.forEach((orb) => {
        // Floating Sine-Wave motion
        const floatY = orb.baseY + Math.sin(time * orb.floatSpeed + orb.floatOffset) * 24;
        const targetX = orb.baseX + Math.cos(time * (orb.floatSpeed * 0.7) + orb.floatOffset) * 14;

        // Interactive Zero-G Elastic Repel
        const dx = mouse.x - orb.x;
        const dy = mouse.y - orb.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          orb.vx -= Math.cos(angle) * force * 2.2;
          orb.vy -= Math.sin(angle) * force * 2.2;
        }

        // Apply friction and spring back to equilibrium
        orb.vx += (targetX - orb.x) * 0.04;
        orb.vy += (floatY - orb.y) * 0.04;
        orb.vx *= 0.88;
        orb.vy *= 0.88;

        orb.x += orb.vx;
        orb.y += orb.vy;

        // Outer Glow
        const glow = ctx.createRadialGradient(orb.x, orb.y, orb.radius * 0.2, orb.x, orb.y, orb.radius * 2.8);
        glow.addColorStop(0, orb.color);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius * 2.8, 0, Math.PI * 2);
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
        ctx.scale(1, 0.36); // Elliptical ring perspective

        ctx.strokeStyle = orb.ringColor;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = orb.ringColor;
        ctx.shadowBlur = 10;

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
