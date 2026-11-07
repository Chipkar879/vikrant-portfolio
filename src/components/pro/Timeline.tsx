"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import Reveal from "./Reveal";
import type { JourneyStage } from "@/content/journey";

const dot = {
  achievement: "bg-cyan",
  project: "bg-crimson",
  goal: "bg-white",
} as const;

export default function Timeline({ stages }: { stages: JourneyStage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-5 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan" /> Achievement
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-crimson" /> Project
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" /> Goal
        </span>
      </div>

      <div ref={ref} className="relative pl-10">
        <div className="absolute left-[5px] top-0 h-full w-px bg-white/10" />
        <motion.div
          className="absolute left-[5px] top-0 h-full w-px origin-top bg-gradient-to-b from-crimson to-cyan"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />

        {stages.map((s) => {
          const isNext = s.period === "Next";
          return (
            <Reveal key={s.period} className="relative pb-12 last:pb-0">
              <span
                className={`absolute -left-10 top-2 h-[11px] w-[11px] rounded-full ${
                  isNext
                    ? "animate-pulse bg-white shadow-[0_0_16px_4px_rgba(255,255,255,0.6)]"
                    : "bg-cyan shadow-[0_0_14px_3px_rgba(34,211,238,0.6)]"
                }`}
              />
              <h3 className="font-display text-2xl font-semibold">
                {s.period}
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li
                    key={it.text}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-panel/50 px-4 py-3 text-sm backdrop-blur"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot[it.kind]}`}
                    />
                    {it.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}