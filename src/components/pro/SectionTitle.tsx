export default function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-end gap-4">
      <span className="font-display text-sm text-crimson">{index}</span>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {children}
      </h2>
      <span className="mb-2 h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
    </div>
  );
}