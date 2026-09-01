"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function LightAtmosphereBackground() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinate from -1 to 1 across viewport width and height
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = normX;
      targetY = normY;
    };

    const updateDampedMouse = () => {
      // Heavy damping curve for mature, non-bouncy micro-interaction
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", currentX.toFixed(4));
        containerRef.current.style.setProperty("--mouse-y", currentY.toFixed(4));
      }

      rafId = requestAnimationFrame(updateDampedMouse);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateDampedMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  // Render strictly in Light Mode
  if (resolvedTheme === "dark") return null;

  return (
    <div
      ref={containerRef}
      style={{ "--mouse-x": "0", "--mouse-y": "0" } as React.CSSProperties}
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Canvas: Subtle off-white to Slate-100 radial gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(125% 100% at 50% 20%, #FAFAFA 0%, #F8FAFC 55%, #F1F5F9 100%)",
        }}
      />

      {/* 2. Atmospheric Depth: 3 Overlapping Circular Gradients drifting at glacial speed */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: "translate(calc(-10px * var(--mouse-x)), calc(-10px * var(--mouse-y)))",
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* Muted Sage: #D6E0D6 */}
        <div
          className="absolute -top-[10%] left-[8%] w-[580px] h-[580px] rounded-full blur-[120px] opacity-50 animate-glacial-drift-1"
          style={{ backgroundColor: "#D6E0D6" }}
        />

        {/* Dusty Clay: #E2D6D0 */}
        <div
          className="absolute top-[28%] right-[6%] w-[620px] h-[620px] rounded-full blur-[120px] opacity-50 animate-glacial-drift-2"
          style={{ backgroundColor: "#E2D6D0" }}
        />

        {/* Soft Indigo: #D6DCE5 */}
        <div
          className="absolute -bottom-[12%] left-[22%] w-[660px] h-[660px] rounded-full blur-[120px] opacity-50 animate-glacial-drift-3"
          style={{ backgroundColor: "#D6DCE5" }}
        />
      </div>

      {/* 3. Refined Geometric Accents: Thin, Elegant Architectural SVG Arcs & Intersecting Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes slowRotateClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes slowRotateCounter {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            .geo-rotate-cw {
              transform-origin: 82% 24%;
              animation: slowRotateClockwise 45s linear infinite;
            }
            .geo-rotate-ccw {
              transform-origin: 18% 76%;
              animation: slowRotateCounter 55s linear infinite;
            }
          `}</style>
        </defs>

        {/* Upper-Right Architectural Cluster */}
        <g className="geo-rotate-cw" opacity="0.3" stroke="#94A3B8" strokeWidth="1.5" fill="none">
          {/* Primary Semicircle Arc */}
          <path d="M 0,-140 A 140,140 0 0,1 140,0" />
          {/* Inner Concentric Guide Arc */}
          <path d="M -80,0 A 80,80 0 0,1 0,-80" strokeDasharray="3 6" />
          {/* Intersecting Coordinate Lines */}
          <line x1="-160" y1="0" x2="160" y2="0" strokeDasharray="4 4" />
          <line x1="0" y1="-160" x2="0" y2="160" strokeDasharray="4 4" />
        </g>

        {/* Lower-Left Architectural Compass Cluster */}
        <g className="geo-rotate-ccw" opacity="0.3" stroke="#94A3B8" strokeWidth="1.5" fill="none">
          {/* Semicircle Arc */}
          <path d="M -180,0 A 180,180 0 0,0 0,180" />
          {/* Accent Inner Arc */}
          <path d="M 0,-100 A 100,100 0 0,0 -100,0" />
          {/* Axis Alignment Lines */}
          <line x1="-200" y1="0" x2="200" y2="0" />
          <line x1="0" y1="-200" x2="0" y2="200" />
        </g>

        {/* Minimal Static Corner Registration Marks */}
        <g opacity="0.25" stroke="#94A3B8" strokeWidth="1.5" fill="none">
          {/* Top-Left Framing */}
          <line x1="48" y1="36" x2="120" y2="36" />
          <line x1="48" y1="36" x2="48" y2="108" />

          {/* Bottom-Right Framing */}
          <line x1="calc(100% - 48px)" y1="calc(100% - 36px)" x2="calc(100% - 120px)" y2="calc(100% - 36px)" />
          <line x1="calc(100% - 48px)" y1="calc(100% - 36px)" x2="calc(100% - 48px)" y2="calc(100% - 108px)" />
        </g>
      </svg>
    </div>
  );
}
