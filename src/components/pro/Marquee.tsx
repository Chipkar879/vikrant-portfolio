export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
    >
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 font-display text-lg uppercase tracking-[0.3em] text-white/30"
          >
            {t} <span className="ml-12 text-crimson">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}