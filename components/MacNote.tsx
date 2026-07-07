import type { ReactNode } from "react";

/** macOS specific guidance. Kept visually distinct from tips so it stays
 *  skimmable for a reader who is new to the Mac terminal. */
export default function MacNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-5 rounded-lg border border-slate-300 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-900">
      <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        <span aria-hidden="true">macOS</span>
        <span className="sr-only">macOS note</span>
      </p>
      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 [&_a]:text-pass [&_a]:underline [&_code]:rounded [&_code]:bg-black/10 [&_code]:px-1 [&_code]:font-mono dark:[&_code]:bg-white/10">
        {children}
      </div>
    </aside>
  );
}
