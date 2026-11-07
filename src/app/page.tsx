import Logo from "@/components/Logo";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
      <Logo size={96} />
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Vikrant <span className="text-crimson">Portfolio</span>
      </h1>
      <p className="font-script text-2xl text-cyan">Stage 1 test page</p>
      <p className="text-muted">
        Fonts, colours, logo and content files are working if you can read
        this.
      </p>
      <div className="flex gap-3">
        <span className="h-8 w-8 rounded bg-void ring-1 ring-white/20" />
        <span className="h-8 w-8 rounded bg-charcoal" />
        <span className="h-8 w-8 rounded bg-crimson" />
        <span className="h-8 w-8 rounded bg-cyan" />
      </div>
      <ul className="text-sm text-muted">
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
}