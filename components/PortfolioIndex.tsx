"use client";

import { useProgress } from "@/lib/progress";
import type { CodelabMeta } from "@/lib/types";

export default function PortfolioIndex({ codelabs }: { codelabs: CodelabMeta[] }) {
  const { getPortfolio, setPortfolio, hydrated } = useProgress();

  return (
    <div className="space-y-4">
      {codelabs.map((codelab) => {
        const key = `w${codelab.week}`;
        const url = getPortfolio(key);
        return (
          <div
            key={codelab.slug}
            className="rounded-xl border border-slate-200 p-5 dark:border-slate-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-bold tracking-tight">
                <span className="text-slate-400">Week {codelab.week}.</span>{" "}
                {codelab.artifact.name}
              </h2>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-pass underline underline-offset-2"
                >
                  Open link
                </a>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {codelab.artifact.where}
            </p>
            <label className="mt-3 block">
              <span className="sr-only">
                Link for week {codelab.week} artifact
              </span>
              <input
                type="url"
                inputMode="url"
                placeholder="https://github.com/you/your-repo"
                defaultValue={url}
                disabled={!hydrated}
                onBlur={(e) => setPortfolio(key, e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-mono focus:border-pass dark:border-slate-700 dark:bg-slate-900"
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
