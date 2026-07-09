"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProgressState } from "./types";

const STORAGE_KEY = "green-path:progress:v1";

const EMPTY_STATE: ProgressState = {
  version: 1,
  steps: {},
  portfolio: {},
  lastStep: {},
  lastActive: null,
  streakDays: 0,
};

function todayISO(): string {
  // Local calendar day, YYYY-MM-DD. Streaks should follow the learner's day,
  // not UTC's idea of it.
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/** Advance the streak given the last active day and today. */
function nextStreak(prev: ProgressState): Pick<ProgressState, "lastActive" | "streakDays"> {
  const today = todayISO();
  if (prev.lastActive === today) {
    return { lastActive: today, streakDays: Math.max(prev.streakDays, 1) };
  }
  if (prev.lastActive && daysBetween(prev.lastActive, today) === 1) {
    return { lastActive: today, streakDays: prev.streakDays + 1 };
  }
  return { lastActive: today, streakDays: 1 };
}

interface ProgressContextValue {
  state: ProgressState;
  hydrated: boolean;
  isStepDone: (id: string) => boolean;
  setStepDone: (id: string, done: boolean) => void;
  getPortfolio: (week: string) => string;
  setPortfolio: (week: string, url: string) => void;
  getLastStep: (slug: string) => string;
  setLastStep: (slug: string, stepId: string) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ProgressState;
        // One-time hydration from localStorage, deliberately after mount.
        // Reading it during render would cause a server/client mismatch.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState({ ...EMPTY_STATE, ...parsed });
      }
    } catch {
      // A corrupt blob is not worth crashing over. Start clean.
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage full or blocked. Nothing to be done, and nothing to crash for.
    }
  }, []);

  const touchActivity = useCallback(
    (base: ProgressState): ProgressState => ({ ...base, ...nextStreak(base) }),
    [],
  );

  const setStepDone = useCallback(
    (id: string, done: boolean) => {
      setState((prev) => {
        const steps = { ...prev.steps };
        if (done) {
          steps[id] = true;
        } else {
          delete steps[id];
        }
        const next = touchActivity({ ...prev, steps });
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [touchActivity],
  );

  const setPortfolio = useCallback(
    (week: string, url: string) => {
      setState((prev) => {
        const portfolio = { ...prev.portfolio };
        const trimmed = url.trim();
        if (trimmed) {
          portfolio[week] = trimmed;
        } else {
          delete portfolio[week];
        }
        const next = { ...prev, portfolio };
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const setLastStep = useCallback((slug: string, stepId: string) => {
    setState((prev) => {
      const next = { ...prev, lastStep: { ...prev.lastStep, [slug]: stepId } };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    persist({ ...EMPTY_STATE });
  }, [persist]);

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      hydrated,
      isStepDone: (id: string) => Boolean(state.steps[id]),
      setStepDone,
      getPortfolio: (week: string) => state.portfolio[week] ?? "",
      setPortfolio,
      getLastStep: (slug: string) => state.lastStep[slug] ?? "",
      setLastStep,
      reset,
    }),
    [state, hydrated, setStepDone, setPortfolio, setLastStep, reset],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used inside a ProgressProvider");
  }
  return ctx;
}

/** Share of the given step ids that are marked done, 0 to 1. */
export function completionRatio(done: Record<string, boolean>, ids: string[]): number {
  if (ids.length === 0) return 0;
  const count = ids.filter((id) => done[id]).length;
  return count / ids.length;
}
