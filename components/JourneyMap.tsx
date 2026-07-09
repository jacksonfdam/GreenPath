import Link from "next/link";

interface Week {
  week: number;
  slug: string;
  title: string;
}

function Chevron() {
  return (
    <svg viewBox="0 0 6 10" className="h-3 w-3 shrink-0 text-slate-300 dark:text-slate-600" aria-hidden="true">
      <path d="M1 1 L5 5 L1 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const pill =
  "inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm font-medium transition hover:border-pass hover:text-pass dark:border-slate-700";

/** A compact visual of the path: install, seven weeks, portfolio, apply. */
export default function JourneyMap({ weeks }: { weeks: Week[] }) {
  const lastSlug = weeks[weeks.length - 1]?.slug ?? "ship-it";

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
        <Link href="/setup" className={pill}>
          Setup
        </Link>
        <Chevron />
        <div className="flex flex-wrap items-center gap-1.5">
          {weeks.map((w) => (
            <Link
              key={w.slug}
              href={`/codelabs/${w.slug}`}
              title={`Week ${w.week}: ${w.title}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold transition hover:border-pass hover:text-pass dark:border-slate-700"
            >
              {w.week}
              <span className="sr-only">
                Week {w.week}, {w.title}
              </span>
            </Link>
          ))}
        </div>
        <Chevron />
        <Link href="/portfolio" className={pill}>
          Portfolio
        </Link>
        <Chevron />
        <Link href={`/codelabs/${lastSlug}`} className={pill}>
          Apply
        </Link>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Install once, then the seven weeks in order. Each week drops an artifact into
        your portfolio. Week seven, you apply.
      </p>
    </div>
  );
}
