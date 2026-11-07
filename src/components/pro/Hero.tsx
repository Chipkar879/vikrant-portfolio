"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ScrambleText from "./ScrambleText";

function CountUp({ value }: { value: number }) {
  const [n, setN] = useState(value);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [value]);
  return <>{n}</>;
}

export default function Hero({
  name,
  headline,
  stats,
}: {
  name: string;
  headline: string;
  stats: { label: string; value: number }[];
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative grid min-h-[78vh] items-center gap-12 md:grid-cols-[1.2fr_1fr]">
      <div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          Professional Mode
        </motion.p>

        <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block text-ink/90">Hi, I&rsquo;m</span>
          <ScrambleText text={name} className="text-glow-gradient" />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {headline}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/pro/projects"
            className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(225,29,72,0.7)] transition-transform hover:scale-105"
          >
            View projects <ArrowRight size={16} />
          </Link>
          <Link
            href="/pro/achievements"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
          >
            Achievements
          </Link>
        </motion.div>

        <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/15 pl-4">
              <p className="font-display text-3xl font-semibold text-ink">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <div
          className="absolute inset-0 rounded-full border border-white/10"
          style={{ animation: "spin-slow 30s linear infinite" }}
        >
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan shadow-[0_0_20px_6px_rgba(34,211,238,0.7)]" />
        </div>
        <div
          className="absolute inset-8 rounded-full border border-dashed border-crimson/40"
          style={{ animation: "spin-rev 22s linear infinite" }}
        >
          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-crimson shadow-[0_0_20px_6px_rgba(225,29,72,0.7)]" />
        </div>
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-crimson/25 to-cyan/25 blur-2xl" />
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Logo size={170} />
        </motion.div>
      </div>
    </section>
  );
}