"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function PureCssAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // Single passive listener: Delta from viewport center in pixels
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = e.clientX - cx;
      const my = e.clientY - cy;

      // Update CSS variables for 100% GPU compositor parallax (0 JS render loops)
      containerRef.current.style.setProperty("--mx", `${mx.toFixed(1)}px`);
      containerRef.current.style.setProperty("--my", `${my.toFixed(1)}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-screen h-screen -z-1 pointer-events-none overflow-hidden select-none pure-css-atmosphere-root ${
        isDark ? "theme-dark" : "theme-light"
      }`}
      aria-hidden="true"
    >
      {/* Parallax Container: Shifts 1/30th via GPU CSS translate3d with 1.5s cubic-bezier damping */}
      <div className="pure-css-parallax-wrapper">
        {/* Layer 1: The "Atmosphere" - 3 Drifting Gradient Orbs via GPU CSS Keyframes (20-28s ease-in-out) */}
        <div className="pure-css-orb orb-1" />
        <div className="pure-css-orb orb-2" />
        <div className="pure-css-orb orb-3" />

        {/* Layer 2: The "Structure" - 50px Scalable Geometric Dot Grid Overlay */}
        <div className="pure-css-grid" />
      </div>
    </div>
  );
}
