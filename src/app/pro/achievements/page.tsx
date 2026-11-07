import type { Metadata } from "next";
import Reveal from "@/components/pro/Reveal";
import AchievementRow from "@/components/pro/AchievementRow";
import { achievements } from "@/content/achievements";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  const items = [...achievements].reverse();
  return (
    <div>
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Achievements
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Awards, certificates and programmes, newest first.
        </p>
      </Reveal>
      <ul className="mt-10">
        {items.map((a) => (
          <AchievementRow key={a.id} item={a} />
        ))}
      </ul>
    </div>
  );
}