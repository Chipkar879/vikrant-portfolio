import { useId } from "react";

// Placeholder circular V logo. Replace with the real logo later.
export default function Logo({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      role="img"
      aria-label="V logo"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100" y2="100">
          <stop offset="0" stopColor="#e11d48" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke={`url(#${id})`} strokeWidth="4" />
      <path
        d="M28 30 L50 72 L72 30"
        stroke={`url(#${id})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}