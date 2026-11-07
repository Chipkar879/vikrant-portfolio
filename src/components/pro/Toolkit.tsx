import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const groups = [
  {
    title: "Build",
    chip: "border-cyan/30 text-cyan",
    items: ["Python", "React", "Next.js", "FastAPI", "SQLite"],
  },
  {
    title: "Explore",
    chip: "border-crimson/30 text-crimson",
    items: [
      "Mathematics & Olympiads",
      "Artificial intelligence",
      "Physics & circuit simulations",
    ],
  },
  {
    title: "Lead",
    chip: "border-white/25 text-ink",
    items: ["Business strategy", "Team coordination", "Communication"],
  },
];

export default function Toolkit() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((g, i) => (
        <Reveal key={g.title} delay={i * 0.06} className="h-full">
          <SpotlightCard>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className={`rounded-full border bg-white/5 px-3 py-1.5 text-xs ${g.chip}`}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}