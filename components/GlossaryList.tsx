"use client";

import { useMemo, useState } from "react";
import { GLOSSARY, type GlossaryEntry } from "@/lib/glossary";

function matches(entry: GlossaryEntry, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (entry.term.toLowerCase().includes(q)) return true;
  if (entry.definition.toLowerCase().includes(q)) return true;
  return (entry.aliases ?? []).some((a) => a.toLowerCase().includes(q));
}

export default function GlossaryList() {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term)),
    [],
  );

  const filtered = useMemo(
    () => sorted.filter((entry) => matches(entry, query)),
    [sorted, query],
  );

  // Group the filtered results by first letter for skimmable headings.
  const groups = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      const list = map.get(letter) ?? [];
      list.push(entry);
      map.set(letter, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-4 bg-white/90 px-4 py-3 backdrop-blur dark:bg-slate-950/90">
        <label className="block">
          <span className="sr-only">Search the glossary</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms, e.g. regression, 404, flaky"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-pass dark:border-slate-700 dark:bg-slate-900"
          />
        </label>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
          {filtered.length} of {sorted.length} terms
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-slate-600 dark:text-slate-300">
          Nothing matches that. Either it is not here yet, or it is spelled with more
          confidence than accuracy. Try a shorter query.
        </p>
      ) : (
        <div className="mt-4 space-y-8">
          {groups.map(([letter, entries]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h2
                id={`letter-${letter}`}
                className="mb-2 text-sm font-bold uppercase tracking-widest text-pass"
              >
                {letter}
              </h2>
              <dl className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.term}
                    className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <dt className="font-semibold tracking-tight">
                      {entry.term}
                      {entry.aliases?.length ? (
                        <span className="ml-2 text-sm font-normal text-slate-400">
                          {entry.aliases.join(", ")}
                        </span>
                      ) : null}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {entry.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
