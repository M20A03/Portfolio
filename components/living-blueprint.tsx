"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface BlueprintNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  speed: number;
  driftOffset: number;
  ampY: number;
  ampX: number;
}

// Color palettes for seamless 1.2s interpolation
const PALETTE = {
  light: {
    bgTop: [246, 248, 250] as [number, number, number], // #F6F8FA
    bgMid: [255, 255, 255] as [number, number, number], // #FFFFFF
    bgBot: [238, 242, 246] as [number, number, number], // #EEF2F6
    orb: [234, 221, 219] as [number, number, number],   // #EADDDB (warm dusty peach)
    dots: [208, 216, 224] as [number, number, number],  // #D0D8E0
    dotsAlpha: 0.55,
    diagAlpha: 0.04,
    node: [9, 105, 218] as [number, number, number],    // #0969DA (rich blue)
    line: [208, 215, 222] as [number, number, number],  // #D0D7DE
    lineAlpha: 0.75,
    scanline: [9, 105, 218] as [number, number, number],
  },
  dark: {
    bgTop: [13, 17, 23] as [number, number, number],    // #0D1117
    bgMid: [22, 27, 34] as [number, number, number],    // #161B22
    bgBot: [10, 14, 20] as [number, number, number],    // #0A0E14
    orb: [26, 35, 58] as [number, number, number],      // #1A233A (deep muted indigo)
    dots: [42, 51, 68] as [number, number, number],     // #2A3344
    dotsAlpha: 0.38,
    diagAlpha: 0.035,
    node: [88, 166, 255] as [number, number, number],   // #58A6FF (muted developer blue)
    line: [48, 54, 61] as [number, number, number],     // #30363D
    lineAlpha: 0.65,
    scanline: [88, 166, 255] as [number, number, number],
  },
};

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpColor(c1: [number, number, number], c2: [number, number, number], t: number): [number, number, number] {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t)),
  ];
}

function rgbStr(c: [number, number, number], alpha = 1): string {
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
}

// Standard cubic bezier (0.23, 1, 0.32, 1) approximation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function LivingBlueprint() {
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
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();

    // Mouse & Touch coordinates for smooth Repulsion Lerp
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 250,
    };

    let scrollY = window.scrollY || 0;
    const handleScroll = () => {
      scrollY = window.scrollY || 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Initialize 30 Living Blueprint Data Nodes (Layer 3)
    const NODE_COUNT = 30;
    const nodes: BlueprintNode[] = Array.from({ length: NODE_COUNT }, () => {
      const bx = Math.random() * width;
      const by = Math.random() * height;
      return {
        x: bx,
        y: by,
        baseX: bx,
        baseY: by,
        vx: 0,
        vy: 0,
        speed: (Math.PI * 2) / (Math.random() * 600 + 900), // 15s to 25s per cycle (at 60fps)
        driftOffset: Math.random() * Math.PI * 2,
        ampY: Math.random() * 24 + 16,
        ampX: Math.random() * 14 + 8,
      };
    });

    // Theme Morphing State: 0 (light) -> 1 (dark) with 1.2s smooth interpolation
    let currentThemeFactor = resolvedTheme === "dark" ? 1 : 0;
    let targetThemeFactor = resolvedTheme === "dark" ? 1 : 0;

    let time = 0;

    // Scanline configuration (Layer 4): 8 seconds per sweep (480 frames at 60fps)
    const SCAN_CYCLE = 480;

    // Main 60fps Render Loop
    const render = () => {
      time++;

      // 1. Theme factor smooth 1.2s transition
      targetThemeFactor = document.documentElement.classList.contains("dark") || resolvedTheme === "dark" ? 1 : 0;
      currentThemeFactor += (targetThemeFactor - currentThemeFactor) * 0.045; // ~1.2s cubic ease convergence
      const tProgress = easeOutCubic(currentThemeFactor);

      // Interpolate all active palette tokens
      const colBgTop = lerpColor(PALETTE.light.bgTop, PALETTE.dark.bgTop, tProgress);
      const colBgMid = lerpColor(PALETTE.light.bgMid, PALETTE.dark.bgMid, tProgress);
      const colBgBot = lerpColor(PALETTE.light.bgBot, PALETTE.dark.bgBot, tProgress);
      const colOrb = lerpColor(PALETTE.light.orb, PALETTE.dark.orb, tProgress);
      const colDots = lerpColor(PALETTE.light.dots, PALETTE.dark.dots, tProgress);
      const dotsOpacity = lerp(PALETTE.light.dotsAlpha, PALETTE.dark.dotsAlpha, tProgress);
      const diagOpacity = lerp(PALETTE.light.diagAlpha, PALETTE.dark.diagAlpha, tProgress);
      const colNode = lerpColor(PALETTE.light.node, PALETTE.dark.node, tProgress);
      const colLine = lerpColor(PALETTE.light.line, PALETTE.dark.line, tProgress);
      const lineOpacity = lerp(PALETTE.light.lineAlpha, PALETTE.dark.lineAlpha, tProgress);
      const colScan = lerpColor(PALETTE.light.scanline, PALETTE.dark.scanline, tProgress);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.save();
      ctx.scale(dpr, dpr);

      // ─── Layer 1: Dynamic Morphing Background (Scroll-Aware Gradient + Soft Orb) ───
      const scrollNorm = Math.min(scrollY / Math.max(document.documentElement.scrollHeight - height, 1), 1);
      const gradCenterY = height * (0.35 + scrollNorm * 0.3);

      const baseGrad = ctx.createRadialGradient(
        width * 0.5,
        gradCenterY,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.95
      );
      baseGrad.addColorStop(0, rgbStr(colBgTop));
      baseGrad.addColorStop(0.55, rgbStr(colBgMid));
      baseGrad.addColorStop(1, rgbStr(colBgBot));

      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Massive Soft Blur Accent Orb (Drifting in a slow circular path)
      const orbX = width * 0.5 + Math.cos(time * 0.0025) * (width * 0.28);
      const orbY = height * 0.42 + Math.sin(time * 0.0025) * (height * 0.24);
      const orbRadius = Math.max(width, height) * 0.45;

      const orbGrad = ctx.createRadialGradient(orbX, orbY, orbRadius * 0.05, orbX, orbY, orbRadius);
      orbGrad.addColorStop(0, rgbStr(colOrb, 0.45));
      orbGrad.addColorStop(0.6, rgbStr(colOrb, 0.15));
      orbGrad.addColorStop(1, rgbStr(colOrb, 0));

      ctx.fillStyle = orbGrad;
      ctx.fillRect(0, 0, width, height);

      // ─── Layer 2: The "Anti-Empty" Blueprint Grid (Dots + Faint Diagonals) ───
      const GRID_STEP = 40;

      // Secondary Faintest Diagonal Texture Lines
      ctx.strokeStyle = rgbStr(colDots, diagOpacity);
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let d = -height; d < width + height; d += GRID_STEP * 3) {
        ctx.moveTo(d, 0);
        ctx.lineTo(d + height, height);
      }
      ctx.stroke();

      // Scalable Dot Matrix Grid (40px spacing)
      ctx.fillStyle = rgbStr(colDots, dotsOpacity);
      for (let x = 20; x < width; x += GRID_STEP) {
        for (let y = 20; y < height; y += GRID_STEP) {
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ─── Layer 3: The Interactive "Data Nodes" Network ───
      // Pulse Heartbeat: Every 3 seconds (180 frames), size pulses +2px
      const pulsePhase = (time % 180) / 180;
      const pulseExtra = Math.sin(pulsePhase * Math.PI) * 2; // Smooth 0 -> 2 -> 0

      // Update Node Physics (Glacial sinusoidal drift + Smooth Mouse Repulsion)
      nodes.forEach((node) => {
        const driftTargetY = node.baseY + Math.sin(time * node.speed + node.driftOffset) * node.ampY;
        const driftTargetX = node.baseX + Math.cos(time * (node.speed * 0.8) + node.driftOffset) * node.ampX;

        // Smooth Repulsion from Cursor
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          node.vx -= Math.cos(angle) * force * 1.8;
          node.vy -= Math.sin(angle) * force * 1.8;
        }

        // Fluid LERP return to drift trajectory
        node.vx += (driftTargetX - node.x) * 0.035;
        node.vy += (driftTargetY - node.y) * 0.035;
        node.vx *= 0.89;
        node.vy *= 0.89;

        node.x += node.vx;
        node.y += node.vy;
      });

      // Connect Nodes within 180px with thin straight lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * lineOpacity;
            ctx.strokeStyle = rgbStr(colLine, alpha);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes (Small 4px circles + Pulse)
      nodes.forEach((node) => {
        const currentRadius = 3.5 + pulseExtra;

        // Node Glow Halo
        ctx.fillStyle = rgbStr(colNode, 0.25);
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Node Core Solid
        ctx.fillStyle = rgbStr(colNode, 0.95);
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ─── Layer 4: The Horizon Scan Line (8s Full Sweep) ───
      const scanProgress = (time % SCAN_CYCLE) / SCAN_CYCLE;
      const scanY = scanProgress * (height + 140) - 70;

      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGrad.addColorStop(0, rgbStr(colScan, 0));
      scanGrad.addColorStop(0.5, rgbStr(colScan, 0.15));
      scanGrad.addColorStop(1, rgbStr(colScan, 0));

      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 60, width, 120);

      // Fine scan hairline center
      ctx.strokeStyle = rgbStr(colScan, 0.28);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none select-none transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
