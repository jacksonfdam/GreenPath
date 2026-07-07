import type { Metadata } from "next";
import GlossaryList from "@/components/GlossaryList";

export const metadata: Metadata = {
  title: "Glossary",
  description: "A general QA and testing glossary, in plain words.",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">QA and testing glossary</h1>
      <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
        The terms this course uses, and the ones an interview might, defined in plain
        words. Search by term or by definition. This is the reference; your own cheat
        sheet from week one is the version that will actually stick, because you wrote
        it.
      </p>
      <div className="mt-6">
        <GlossaryList />
      </div>
    </div>
  );
}
