"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { StepperContext } from "./Stepper";
import type { StepMeta } from "@/lib/types";

interface CodelabViewProps {
  slug: string;
  title: string;
  week: number;
  steps: StepMeta[];
  children: ReactNode;
}

export default function CodelabView({
  slug,
  title,
  week,
  steps,
  children,
}: CodelabViewProps) {
  const { isStepDone, hydrated, getLastStep, setLastStep } = useProgress();
  const [activeId, setActiveId] = useState(steps[0]?.id ?? "");
  const restoredRef = useRef(false);

  // Once progress has loaded, resume at the last step viewed for this codelab
  // rather than snapping back to step one. Runs once, after hydration.
  useEffect(() => {
    if (!hydrated || restoredRef.current) return;
    restoredRef.current = true;
    const last = getLastStep(slug);
    if (last && steps.some((s) => s.id === last)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(last);
    }
  }, [hydrated, getLastStep, slug, steps]);

  const index = steps.findIndex((s) => s.id === activeId);
  const prev = index > 0 ? steps[index - 1] : null;
  const next = index < steps.length - 1 ? steps[index + 1] : null;

  function goTo(id: string) {
    setActiveId(id);
    setLastStep(slug, id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <StepperContext.Provider value={{ steps, activeId, goTo }}>
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 md:grid-cols-[16rem_1fr]">
        <aside className="md:sticky md:top-6 md:self-start">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Week {week}
          </p>
          <h1 className="mb-4 text-lg font-bold tracking-tight">{title}</h1>
          <nav aria-label="Steps in this codelab">
            <ol className="space-y-1">
              {steps.map((step, i) => {
                const done = isStepDone(step.id);
                const active = step.id === activeId;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => goTo(step.id)}
                      aria-current={active ? "step" : undefined}
                      className={`flex w-full items-start gap-2 rounded px-2 py-1.5 text-left text-sm transition ${
                        active
                          ? "bg-pass-soft font-semibold text-pass dark:bg-pass/10"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          done ? "border-pass bg-pass text-white" : "border-slate-400"
                        }`}
                      >
                        {done ? (
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                            <path
                              d="M2.5 6.5L5 9l4.5-5"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : null}
                      </span>
                      <span>
                        {i + 1}. {step.title}
                        {done ? <span className="sr-only"> (complete)</span> : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>
          <Link
            href="/codelabs"
            className="mt-4 inline-block text-sm text-slate-500 underline underline-offset-2 hover:text-pass dark:text-slate-400"
          >
            All codelabs
          </Link>
        </aside>

        <div className="min-w-0">
          {children}

          <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
            <button
              type="button"
              onClick={() => prev && goTo(prev.id)}
              disabled={!prev}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition enabled:hover:border-pass disabled:opacity-40 dark:border-slate-700"
            >
              Back
            </button>
            {next ? (
              <button
                type="button"
                onClick={() => goTo(next.id)}
                className="rounded-lg bg-pass px-4 py-2 text-sm font-semibold text-white transition hover:bg-pass-ring"
              >
                Next
              </button>
            ) : (
              <Link
                href="/progress"
                className="rounded-lg bg-pass px-4 py-2 text-sm font-semibold text-white transition hover:bg-pass-ring"
              >
                See your progress
              </Link>
            )}
          </div>
        </div>
      </div>
    </StepperContext.Provider>
  );
}
