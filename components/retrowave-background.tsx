"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function RetroWaveBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Parallax shift opposite to cursor (12px max)
      const x = -((e.clientX - centerX) / centerX) * 14;
      const y = -((e.clientY - centerY) / centerY) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  // Only render in light mode
  const isLight = resolvedTheme === "light";
  if (!isLight) return null;

  return (
    <div
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden select-none"
      style={{
        backgroundColor: "#FDE8D0",
        backgroundImage: "radial-gradient(rgba(229, 200, 160, 0.45) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes memphis-float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-32px) rotate(180deg); }
        }
        @keyframes memphis-float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(-12deg); }
        }
        @keyframes memphis-float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-38px) rotate(360deg); }
        }
        @keyframes memphis-float-4 {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-28px) rotate(225deg); }
        }
        @keyframes memphis-float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(180deg); }
        }
        @keyframes memphis-float-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(8deg) scale(1.05); }
        }
        @keyframes memphis-float-7 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes memphis-float-8 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(90deg); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.15) rotate(45deg); }
        }
      `}</style>

      {/* Parallax Container */}
      <div
        className="relative w-full h-full"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* Shape 1: Teal Pac-Man / Bitten Circle (#14B8A6) */}
        <div
          className="absolute left-[4vw] top-[14vh] w-24 h-24 sm:w-32 sm:h-32"
          style={{
            animation: "memphis-float-1 7s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-none">
            <path
              d="M 50 50 L 95 20 A 45 45 0 1 0 95 80 Z"
              fill="#14B8A6"
            />
          </svg>
        </div>

        {/* Shape 2: Hot Pink Squiggly Line Wave (#EC4899) */}
        <div
          className="absolute right-[6vw] top-[18vh] w-28 sm:w-40"
          style={{
            animation: "memphis-float-2 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 120 40" className="w-full h-auto" fill="none">
            <path
              d="M 5 20 Q 20 5, 35 20 T 65 20 T 95 20 T 115 20"
              stroke="#EC4899"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Shape 3: Mustard Yellow Triangle (#FBBF24) */}
        <div
          className="absolute left-[12vw] bottom-[22vh] w-20 h-20 sm:w-28 sm:h-28"
          style={{
            animation: "memphis-float-3 7.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" fill="#FBBF24" />
          </svg>
        </div>

        {/* Shape 4: Deep Blue Diamond (#3B82F6) */}
        <div
          className="absolute right-[16vw] top-[50vh] w-16 h-16 sm:w-24 sm:h-24"
          style={{
            animation: "memphis-float-4 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="25" y="25" width="50" height="50" fill="#3B82F6" rx="4" />
          </svg>
        </div>

        {/* Shape 5: Coral Half-Circle (#FB7185) */}
        <div
          className="absolute left-[38vw] top-[8vh] w-20 h-10 sm:w-28 sm:h-14"
          style={{
            animation: "memphis-float-5 6.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <path d="M 0 50 A 50 50 0 0 1 100 50 Z" fill="#FB7185" />
          </svg>
        </div>

        {/* Shape 6: Lavender Abstract Freeform Blob (#A78BFA) */}
        <div
          className="absolute right-[8vw] bottom-[14vh] w-28 h-28 sm:w-36 sm:h-36"
          style={{
            animation: "memphis-float-6 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 45,-60 C 58,-52 68,-38 72,-23 C 76,-7 75,9 68,23 C 62,37 50,48 37,56 C 23,64 7,69 -8,68 C -24,67 -40,61 -51,50 C -62,38 -69,22 -71,5 C -73,-12 -70,-30 -60,-42 C -50,-55 -34,-62 -18,-64 C -2,-66 32,-68 45,-60 Z"
              transform="translate(100 100)"
              fill="#A78BFA"
            />
          </svg>
        </div>

        {/* Shape 7: Mint Green Ring (#34D399) */}
        <div
          className="absolute left-[22vw] top-[48vh] w-20 h-20 sm:w-28 sm:h-28"
          style={{
            animation: "memphis-float-7 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="38" stroke="#34D399" strokeWidth="14" fill="none" />
          </svg>
        </div>

        {/* Shape 8: Orange Cross / Plus Symbol (#F97316) */}
        <div
          className="absolute left-[48vw] bottom-[10vh] w-14 h-14 sm:w-18 sm:h-18"
          style={{
            animation: "memphis-float-8 6.8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="40" y="10" width="20" height="80" rx="6" fill="#F97316" />
            <rect x="10" y="40" width="80" height="20" rx="6" fill="#F97316" />
          </svg>
        </div>

        {/* Micro-Details: 4-Point Gold Sparkle Stars (#FCD34D) */}
        {[
          { top: "25vh", left: "28vw", delay: "0s", duration: "3s" },
          { top: "65vh", left: "78vw", delay: "1s", duration: "3.8s" },
          { top: "80vh", left: "32vw", delay: "1.8s", duration: "4.2s" },
          { top: "35vh", right: "24vw", delay: "0.5s", duration: "3.5s" },
        ].map((star, idx) => (
          <div
            key={idx}
            className="absolute w-5 h-5 sm:w-6 sm:h-6 pointer-events-none"
            style={{
              top: star.top,
              left: star.left,
              right: (star as { right?: string }).right,
              animation: `star-twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FCD34D">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
