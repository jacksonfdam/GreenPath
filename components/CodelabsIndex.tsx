"use client";

import Link from "next/link";
import { useProgress, completionRatio } from "@/lib/progress";
import type { CodelabMeta } from "@/lib/types";

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  return Number.isInteger(hours) ? `${hours} hr` : `${hours.toFixed(1)} hr`;
}

export default function CodelabsIndex({ codelabs }: { codelabs: CodelabMeta[] }) {
  const { state, hydrated } = useProgress();

  return (
    <ol className="space-y-4">
      {codelabs.map((codelab) => {
        const ids = codelab.steps.map((s) => s.id);
        const ratio = hydrated ? completionRatio(state.steps, ids) : 0;
        const percent = Math.round(ratio * 100);
        const doneCount = hydrated ? ids.filter((id) => state.steps[id]).length : 0;

        return (
          <li key={codelab.slug}>
            <Link
              href={`/codelabs/${codelab.slug}`}
              className="block rounded-xl border border-slate-200 p-5 transition hover:border-pass hover:shadow-sm dark:border-slate-800"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-bold tracking-tight">
                  <span className="text-slate-400">Week {codelab.week}.</span>{" "}
                  {codelab.title}
                </h2>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {formatTime(codelab.estimatedMinutes)} · {codelab.steps.length} steps
                </span>
              </div>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{codelab.summary}</p>

              <div className="mt-4 flex items-center gap-3">
                <div
                  className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={percent}
                  aria-label={`Week ${codelab.week} progress`}
                >
                  <div
                    className="h-full bg-pass transition-[width] duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="w-24 text-right text-sm tabular-nums text-slate-500 dark:text-slate-400">
                  {doneCount}/{ids.length} done
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
