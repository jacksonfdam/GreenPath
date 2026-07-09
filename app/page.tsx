import Link from "next/link";
import { getAllCodelabs } from "@/lib/codelabs";
import { getAllStepIds } from "@/lib/steps";
import OverallRing from "@/components/OverallRing";

export default function HomePage() {
  const codelabs = getAllCodelabs();
  const first = codelabs[0];
  const allStepIds = getAllStepIds();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="max-w-prose">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-pass">
            Seven weeks. One green tick.
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A codelab path back into tech, aimed squarely at a junior QA role.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            You know HTML, CSS, and JavaScript from before. This picks up where that
            left off and points it at quality: test design, APIs, and JavaScript
            automation with Cypress. Short steps, real artifacts, nothing that hinges
            on a memory you would rather not rely on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {first ? (
              <Link
                href={`/codelabs/${first.slug}`}
                className="rounded-lg bg-pass px-5 py-2.5 font-semibold text-white transition hover:bg-pass-ring"
              >
                Start here
              </Link>
            ) : null}
            <Link
              href="/codelabs"
              className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold transition hover:border-pass dark:border-slate-700"
            >
              See all codelabs
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            New here and not sure where to begin? The{" "}
            <Link href="/how-to-use" className="text-pass underline underline-offset-2">
              two-minute guide
            </Link>{" "}
            lays out the order and what every part of the site is for.
          </p>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <OverallRing allStepIds={allStepIds} />
        </div>
      </div>

      <p className="mt-12 max-w-prose text-sm text-slate-500 dark:text-slate-400">
        Progress is saved in this browser, on this Mac. No login, no account, no one
        watching over your shoulder. First time on this machine? Install everything on
        the{" "}
        <Link href="/setup" className="text-pass underline underline-offset-2">
          Setup
        </Link>{" "}
        page before week one. New to the terminal? The{" "}
        <Link href="/terminal-101" className="text-pass underline underline-offset-2">
          Terminal 101
        </Link>{" "}
        page is the one to read when a command has just failed and you are already
        annoyed.
      </p>
    </div>
  );
}
