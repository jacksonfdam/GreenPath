"use client";

import { useProgress, completionRatio } from "@/lib/progress";
import ProgressRing from "./ProgressRing";

export default function OverallRing({ allStepIds }: { allStepIds: string[] }) {
  const { state, hydrated } = useProgress();
  const ratio = hydrated ? completionRatio(state.steps, allStepIds) : 0;
  return <ProgressRing ratio={ratio} label="Overall" />;
}
