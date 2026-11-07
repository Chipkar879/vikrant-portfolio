"use client";

import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/+*#";

export default function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const total = 28;
    const id = setInterval(() => {
      frame++;
      const reveal = Math.floor((frame / total) * text.length);
      setOut(
        text
          .split("")
          .map((c, i) =>
            c === " " || i < reveal
              ? c
              : chars[Math.floor(Math.random() * chars.length)],
          )
          .join(""),
      );
      if (frame >= total) {
        clearInterval(id);
        setOut(text);
      }
    }, 40);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      {out}
    </span>
  );
}