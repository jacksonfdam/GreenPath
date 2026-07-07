"use client";

import type { ReactNode } from "react";
import { useProgress } from "@/lib/progress";

/** A labelled checkbox that marks its step complete and writes to localStorage.
 *  The checkpoint id matches the step id it completes. */
export default function Checkpoint({ id, children }: { id: string; children: ReactNode }) {
  const { isStepDone, setStepDone, hydrated } = useProgress();
  const done = isStepDone(id);

  return (
    <label
      className={`my-6 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
        done
          ? "border-pass bg-pass-soft dark:bg-pass/10"
          : "border-slate-300 bg-white hover:border-pass dark:border-slate-700 dark:bg-slate-900"
      }`}
    >
      <input
        type="checkbox"
        className="mt-0.5 h-5 w-5 shrink-0 accent-pass"
        checked={done}
        disabled={!hydrated}
        onChange={(e) => setStepDone(id, e.target.checked)}
      />
      <span className="text-sm leading-relaxed">
        <span className="font-semibold text-pass">Checkpoint. </span>
        <span className="[&_code]:rounded [&_code]:bg-black/10 [&_code]:px-1 [&_code]:font-mono dark:[&_code]:bg-white/10">
          {children}
        </span>
      </span>
    </label>
  );
}
