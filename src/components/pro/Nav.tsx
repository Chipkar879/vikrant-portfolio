"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { href: "/pro", label: "Home" },
  { href: "/pro/about", label: "About" },
  { href: "/pro/achievements", label: "Achievements" },
  { href: "/pro/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto max-w-4xl rounded-full border border-white/10 bg-void/60 px-5 shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)] backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/pro"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Logo size={32} />
            <span className="font-display text-sm font-semibold tracking-wide">
              Vikrant
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-white/10 text-cyan"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="rounded-full p-2 text-muted hover:text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 max-w-4xl rounded-3xl border border-white/10 bg-void/90 p-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm ${
                  active ? "bg-white/10 text-cyan" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}