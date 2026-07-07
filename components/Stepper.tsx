"use client";

import { createContext, useContext } from "react";
import type { StepMeta } from "@/lib/types";

interface StepperContextValue {
  steps: StepMeta[];
  activeId: string;
  goTo: (id: string) => void;
}

export const StepperContext = createContext<StepperContextValue | null>(null);

export function useStepper(): StepperContextValue {
  const ctx = useContext(StepperContext);
  if (!ctx) {
    throw new Error("useStepper must be used inside a CodelabView");
  }
  return ctx;
}
