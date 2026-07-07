"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/codelabs", label: "Codelabs" },
  { href: "/progress", label: "Progress" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/terminal-101", label: "Terminal 101" },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
        <Link href="/" className="mr-2 text-lg font-bold tracking-tight">
          Green<span className="text-pass">Path</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded px-1 py-0.5 transition hover:text-pass ${
                    active ? "font-semibold text-pass" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
