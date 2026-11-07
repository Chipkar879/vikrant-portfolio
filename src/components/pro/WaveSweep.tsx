"use client";

import { useEffect, useState } from "react";

const W = 1000;
const H = 180;

type Wave = { crest: string; fill: string; rgb: string };

function buildWave(): Wave {
  const r = (min: number, max: number) => min + Math.random() * (max - min);
  const a1 = r(10, 22);
  const a2 = r(5, 14);
  const a3 = r(2, 6);
  const f1 = r(0.004, 0.01);
  const f2 = r(0.012, 0.025);
  const f3 = r(0.03, 0.06);
  const p1 = r(0, Math.PI * 2);
  const p2 = r(0, Math.PI * 2);
  const p3 = r(0, Math.PI * 2);
  const slope = r(-0.05, 0.05);
  const base = 80;

  const pts: string[] = [];
  for (let x = 0; x <= W; x += 10) {
    const y =
      base +
      (x - W / 2) * slope +
      a1 * Math.sin(x * f1 + p1) +
      a2 * Math.sin(x * f2 + p2) +
      a3 * Math.sin(x * f3 + p3);
    pts.push(`${x},${y.toFixed(1)}`);
  }
  const crest = "M" + pts.join(" L");
  return {
    crest,
    fill: `${crest} L${W},${H} L0,${H} Z`,
    rgb: Math.random() < 0.25 ? "225,29,72" : "34,211,238",
  };
}

export default function WaveSweep() {
  const [wave, setWave] = useState<Wave | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setWave(buildWave());
  }, []);

  if (!wave) return null;

  return (
    <div
      className="absolute inset-x-0 top-0"
      style={{ height: H, animation: "scan 9s linear infinite" }}
      onAnimationIteration={() => setWave(buildWave())}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="wave-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={`rgb(${wave.rgb})`} stopOpacity="0.16" />
            <stop offset="1" stopColor={`rgb(${wave.rgb})`} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={wave.fill} fill="url(#wave-fill)" />
        <path
          d={wave.crest}
          fill="none"
          stroke={`rgba(${wave.rgb},0.55)`}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}