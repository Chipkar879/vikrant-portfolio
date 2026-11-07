import type { Project } from "@/content/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-cyan/40">
      <p className="text-xs uppercase tracking-widest text-cyan">
        {project.period}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-crimson">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      {project.role && (
        <p className="mt-3 text-sm leading-relaxed text-ink/90">
          {project.role}
        </p>
      )}
      <ul className="mt-4 space-y-1.5 text-sm text-muted">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {f}
          </li>
        ))}
      </ul>
      {project.stack && (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}