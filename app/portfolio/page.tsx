import type { Metadata } from "next";
import { getAllCodelabs } from "@/lib/codelabs";
import PortfolioIndex from "@/components/PortfolioIndex";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The index of what you built, one link per week.",
};

export default function PortfolioPage() {
  const codelabs = getAllCodelabs();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Your portfolio</h1>
      <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
        Paste the repo or deploy link for each week as you finish it. This renders
        into a tidy index you can send with an application. Watching it fill up is a
        better progress bar than a percentage, because every line is a thing you can
        point at.
      </p>
      <div className="mt-8">
        <PortfolioIndex codelabs={codelabs} />
      </div>
    </div>
  );
}
