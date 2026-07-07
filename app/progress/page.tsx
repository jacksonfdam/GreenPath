import type { Metadata } from "next";
import { getAllCodelabs } from "@/lib/codelabs";
import ProgressDashboard from "@/components/ProgressDashboard";

export const metadata: Metadata = {
  title: "Progress",
  description: "Per week percentages, overall completion, and your current streak.",
};

export default function ProgressPage() {
  const codelabs = getAllCodelabs();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Your progress</h1>
      <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
        The honest numbers. A streak is nice, but the portfolio filling up is the one
        that gets you hired.
      </p>
      <div className="mt-8">
        <ProgressDashboard codelabs={codelabs} />
      </div>
    </div>
  );
}
