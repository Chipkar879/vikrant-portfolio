import {
  Atom,
  Box,
  Calculator,
  Rocket,
  Target,
  Terminal,
  Timer,
} from "lucide-react";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { profile } from "@/content/profile";

const tiles = [
  { title: "Mathematics", Icon: Calculator },
  { title: "Code & AI", Icon: Terminal },
  { title: "Science", Icon: Atom },
  { title: "Entrepreneurship", Icon: Rocket },
  { title: "Athletics", Icon: Timer },
  { title: "Rubik\u2019s Cube", Icon: Box },
];

export default function AboutBento() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Reveal className="h-full sm:col-span-2 md:row-span-2">
        <SpotlightCard>
          <div className="flex h-full flex-col justify-between gap-8 p-8">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-crimson/40 px-3 py-1 text-xs text-crimson">
                Founder &amp; CEO
              </span>
              <span className="rounded-full border border-cyan/40 px-3 py-1 text-xs text-cyan">
                Bull Run Academy
              </span>
            </div>
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">
              I&rsquo;m {profile.name}. I enjoy mathematics and Olympiad
              problem-solving, write Python, and build projects where{" "}
              <span className="text-glow-gradient">
                science, technology and AI
              </span>{" "}
              meet.
            </p>
          </div>
        </SpotlightCard>
      </Reveal>

      {tiles.map(({ title, Icon }, i) => (
        <Reveal key={title} delay={i * 0.05} className="h-full">
          <SpotlightCard>
            <div className="flex h-full flex-col gap-3 p-6">
              <Icon size={22} className="text-cyan" />
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="text-xs leading-relaxed text-muted">
                {profile.interests[i]}
              </p>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}

      <Reveal delay={0.3} className="h-full sm:col-span-2">
        <SpotlightCard>
          <div className="p-6">
            <div className="flex items-center gap-2 text-crimson">
              <Target size={20} />
              <h3 className="font-display text-lg font-semibold text-ink">
                Missions
              </h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {profile.goals.map((g, i) => (
                <li key={g} className="flex gap-3">
                  <span className="font-display text-xs text-crimson">
                    0{i + 1}
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </SpotlightCard>
      </Reveal>
    </div>
  );
}