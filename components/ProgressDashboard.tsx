"use client";

import { useState } from "react";
import { useProgress, completionRatio } from "@/lib/progress";
import ProgressRing from "./ProgressRing";
import Callout from "./Callout";
import type { CodelabMeta } from "@/lib/types";

export default function ProgressDashboard({ codelabs }: { codelabs: CodelabMeta[] }) {
  const { state, hydrated, reset } = useProgress();
  const [confirming, setConfirming] = useState(false);

  const allIds = codelabs.flatMap((c) => c.steps.map((s) => s.id));
  const overall = hydrated ? completionRatio(state.steps, allIds) : 0;

  return (
    <div>
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        <ProgressRing ratio={overall} size={140} label="Overall" />
        <dl className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">Current streak</dt>
            <dd className="text-2xl font-bold">
              {hydrated ? state.streakDays : 0}
              <span className="ml-1 text-base font-normal text-slate-500">
                {state.streakDays === 1 ? "day" : "days"}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500 dark:text-slate-400">Last active</dt>
            <dd className="text-2xl font-bold">
              {hydrated && state.lastActive ? state.lastActive : "not yet"}
            </dd>
          </div>
        </dl>
      </div>

      <h2 className="mt-10 text-lg font-bold tracking-tight">By week</h2>
      <ul className="mt-4 space-y-3">
        {codelabs.map((codelab) => {
          const ids = codelab.steps.map((s) => s.id);
          const percent = Math.round(
            (hydrated ? completionRatio(state.steps, ids) : 0) * 100,
          );
          return (
            <li key={codelab.slug} className="flex items-center gap-4">
              <span className="w-16 shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                Week {codelab.week}
              </span>
              <span className="hidden w-48 shrink-0 truncate text-sm sm:block">
                {codelab.title}
              </span>
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
              <span className="w-12 text-right text-sm tabular-nums text-slate-500 dark:text-slate-400">
                {percent}%
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <Callout type="warning">
          This progress lives in this browser, on this Mac. Clear your browser data
          and it is gone. That is the trade for a site with no login. The{" "}
          <a href="/portfolio">portfolio page</a> and the repo checklist are the
          backups that survive a cleared cache.
        </Callout>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        {confirming ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm">Reset every checkpoint? There is no undo.</span>
            <button
              type="button"
              onClick={() => {
                reset();
                setConfirming(false);
              }}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Yes, reset it all
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium dark:border-slate-700"
            >
              Keep my progress
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:border-red-500 dark:border-slate-700"
          >
            Reset progress
          </button>
        )}
      </div>
    </div>
  );
}
