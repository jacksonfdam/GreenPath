"use client";

import { useProgress, completionRatio } from "@/lib/progress";

/** A persistent slim bar showing overall completion across every step. */
export default function GlobalProgressBar({ allStepIds }: { allStepIds: string[] }) {
  const { state, hydrated } = useProgress();
  const ratio = hydrated ? completionRatio(state.steps, allStepIds) : 0;
  const percent = Math.round(ratio * 100);

  return (
    <div
      className="h-1 w-full bg-slate-200 dark:bg-slate-800"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-label="Overall course progress"
    >
      <div
        className="h-full bg-pass transition-[width] duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
