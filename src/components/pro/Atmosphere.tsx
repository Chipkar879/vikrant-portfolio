"use client";

import { useEffect, useRef } from "react";
import WaveSweep from "./WaveSweep";

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ "--mx": "50vw", "--my": "30vh" } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute -left-1/4 -top-1/4 h-[70vmax] w-[70vmax] rounded-full bg-crimson/25 blur-[100px]"
        style={{ animation: "aurora 18s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[60vmax] w-[60vmax] rounded-full bg-cyan/20 blur-[100px]"
        style={{ animation: "aurora 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx) var(--my), rgba(34,211,238,0.10), transparent 60%)",
        }}
      />
      <WaveSweep />
    </div>
  );
}