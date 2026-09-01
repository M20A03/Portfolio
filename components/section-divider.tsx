"use client";

export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center my-6 md:my-10 ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <div className="w-full max-w-6xl px-6 relative flex items-center justify-center">
        {/* Luminous Neon Gradient Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Center Glowing Accent Node */}
        <div className="absolute w-2 h-2 rounded-full bg-primary/60 blur-[1px] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </div>
    </div>
  );
}
