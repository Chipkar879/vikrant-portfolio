import type { Achievement } from "@/content/types";

const labels: Record<Achievement["category"], string> = {
  award: "Award",
  certificate: "Certificate",
  programme: "Programme",
  event: "Event",
  role: "Role",
  competition: "Competition",
  milestone: "Milestone",
};

export default function AchievementRow({ item }: { item: Achievement }) {
  return (
    <li className="group flex flex-col gap-2 border-b border-white/10 px-2 py-5 transition-all duration-300 hover:bg-white/[0.04] hover:pl-5 sm:flex-row sm:items-baseline sm:gap-6">
      <span className="w-24 shrink-0 font-display text-sm text-cyan">
        {item.year}
      </span>
      <div className="flex-1">
        <p className="font-medium transition-colors group-hover:text-cyan">
          {item.title}
        </p>
        {item.description && (
          <p className="mt-1 text-sm text-muted">{item.description}</p>
        )}
      </div>
      <span className="w-fit rounded-full border border-crimson/40 px-3 py-1 text-xs text-crimson">
        {labels[item.category]}
      </span>
    </li>
  );
}