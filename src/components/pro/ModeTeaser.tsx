import { Lock } from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

export default function ModeTeaser() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal className="h-full">
        <SpotlightCard>
          <div className="flex h-full flex-col gap-3 p-8">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              You&rsquo;re here
            </p>
            <h3 className="font-display text-2xl font-semibold">
              Professional Mode
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              A clean, fast way to explore my achievements and work.
            </p>
          </div>
        </SpotlightCard>
      </Reveal>

      <Reveal delay={0.08} className="h-full">
        <div className="relative h-full overflow-hidden rounded-2xl border border-crimson/30 bg-panel/60 p-8">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative flex h-full flex-col gap-3">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-crimson">
              <Lock size={14} /> Coming soon
            </p>
            <h3 className="font-display text-2xl font-semibold">
              Explorer Mode
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              A first-person 3D sci-fi facility to walk through, with hidden
              secrets to uncover. Under construction.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}