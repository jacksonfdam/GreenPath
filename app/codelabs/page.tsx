import type { Metadata } from "next";
import { getAllCodelabs } from "@/lib/codelabs";
import CodelabsIndex from "@/components/CodelabsIndex";

export const metadata: Metadata = {
  title: "Codelabs",
  description: "Seven codelabs from rusty JavaScript to a junior QA portfolio.",
};

export default function CodelabsPage() {
  const codelabs = getAllCodelabs();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">The seven codelabs</h1>
      <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
        Each week ends with something that exists: a repo, a Postman collection, a
        report. Do them in order. The tools stack, and week four does not go well if
        week one never ran.
      </p>
      <div className="mt-8">
        <CodelabsIndex codelabs={codelabs} />
      </div>
    </div>
  );
}
