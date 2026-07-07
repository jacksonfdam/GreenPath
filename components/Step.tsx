"use client";

import type { ReactNode } from "react";
import { useProgress } from "@/lib/progress";
import { useStepper } from "./Stepper";

interface StepProps {
  id: string;
  title: string;
  minutes: number;
  children: ReactNode;
}

/** One step of a codelab. Only the active step renders its body; the rest
 *  stay out of the way so a short session still finishes something. */
export default function Step({ id, title, minutes, children }: StepProps) {
  const { activeId, steps } = useStepper();
  const { isStepDone } = useProgress();

  if (activeId !== id) return null;

  const index = steps.findIndex((s) => s.id === id);
  const done = isStepDone(id);

  return (
    <section aria-labelledby={`${id}-heading`} className="prose-body max-w-prose">
      <p className="mb-1 text-sm font-medium text-slate-500 dark:text-slate-400">
        Step {index + 1} of {steps.length}
        {minutes ? ` · about ${minutes} min` : ""}
        {done ? " · done" : ""}
      </p>
      <h2 id={`${id}-heading`} className="!mt-0 text-2xl font-bold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
