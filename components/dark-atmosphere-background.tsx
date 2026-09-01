"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function DarkAtmosphereBackground() {
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
      // Normalize from -1 to 1 across viewport
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = normX;
      targetY = normY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        const normX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const normY = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
        targetX = normX;
        targetY = normY;
      }
    };

    const updateDampedMotion = () => {
      // Heavy smooth damping for calm, enterprise feel
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--x", currentX.toFixed(4));
        containerRef.current.style.setProperty("--y", currentY.toFixed(4));
      }

      rafId = requestAnimationFrame(updateDampedMotion);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    rafId = requestAnimationFrame(updateDampedMotion);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  // Active exclusively in Dark Mode
  if (resolvedTheme !== "dark") return null;

  return (
    <div
      ref={containerRef}
      style={{ "--x": "0", "--y": "0" } as React.CSSProperties}
      className="fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Canvas: Dark Charcoal radial gradient (#16161A -> #0A0A0C) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(120% 95% at 50% 35%, #16161A 0%, #111115 50%, #0A0A0C 100%)",
        }}
      />

      {/* 2. Atmospheric Depth (The "Gallery" Effect): 3 Overlapping Ultra-Soft Elliptical Blurs */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: "translate(calc(-8px * var(--x)), calc(-8px * var(--y)))",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Deep Muted Burgundy: #3B1C2A */}
        <div
          className="absolute top-[-8%] left-[12%] w-[680px] h-[520px] rounded-full blur-[180px] opacity-35 animate-dark-drift-1 will-change-transform"
          style={{ backgroundColor: "#3B1C2A" }}
        />

        {/* Deep Faded Indigo: #1A1F35 */}
        <div
          className="absolute top-[32%] right-[8%] w-[720px] h-[560px] rounded-full blur-[180px] opacity-35 animate-dark-drift-2 will-change-transform"
          style={{ backgroundColor: "#1A1F35" }}
        />

        {/* Deep Forest Green: #1A2A22 */}
        <div
          className="absolute bottom-[-10%] left-[20%] w-[760px] h-[580px] rounded-full blur-[180px] opacity-35 animate-dark-drift-3 will-change-transform"
          style={{ backgroundColor: "#1A2A22" }}
        />
      </div>

      {/* 3. Refined Geometry: 6 Hollow Wireframe Geometric Shapes (3 Circles, 2 Arcs, 1 Line) */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: "translate(calc(-4px * var(--x)), calc(-4px * var(--y)))",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`
              @keyframes wireframeRotateCW {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes wireframeRotateCCW {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }
              .wf-cluster-cw {
                transform-origin: 78% 28%;
                animation: wireframeRotateCW 52s linear infinite;
              }
              .wf-cluster-ccw {
                transform-origin: 22% 72%;
                animation: wireframeRotateCCW 58s linear infinite;
              }
            `}</style>
          </defs>

          {/* Primary Rotating Wireframe Geometry Cluster (Upper-Right) */}
          <g className="wf-cluster-cw" stroke="#2A2A35" strokeWidth="1.5" fill="none" opacity="0.4">
            {/* Shape 1: Circle Large (Radius 220) */}
            <circle cx="0" cy="0" r="220" />

            {/* Shape 2: Circle Medium (Radius 140) */}
            <circle cx="0" cy="0" r="140" strokeDasharray="6 8" />

            {/* Shape 3: Arc 1 (Intersecting Concentric Segment) */}
            <path d="M -260,0 A 260,260 0 0,1 0,-260" />
          </g>

          {/* Secondary Counter-Rotating Wireframe Cluster (Lower-Left) */}
          <g className="wf-cluster-ccw" stroke="#2A2A35" strokeWidth="1.5" fill="none" opacity="0.4">
            {/* Shape 4: Circle Small (Radius 85) */}
            <circle cx="0" cy="0" r="85" />

            {/* Shape 5: Arc 2 (Architectural Segment) */}
            <path d="M 0,-180 A 180,180 0 0,0 -180,0" strokeDasharray="4 6" />
          </g>

          {/* Shape 6: Single Refined Straight Horizontal Line */}
          <g stroke="#2A2A35" strokeWidth="1.5" fill="none" opacity="0.4">
            <line x1="8%" y1="52%" x2="92%" y2="52%" strokeDasharray="2 12" />
          </g>
        </svg>
      </div>
    </div>
  );
}
