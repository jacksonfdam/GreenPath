import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-pass">404</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight">
        This page failed its own test
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        The route you asked for is not here. Either it moved, or it never existed and
        the link was optimistic. A good bug report would note the steps to reproduce;
        for now, head back to somewhere that does exist.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-pass px-5 py-2.5 font-semibold text-white transition hover:bg-pass-ring"
        >
          Home
        </Link>
        <Link
          href="/codelabs"
          className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold transition hover:border-pass dark:border-slate-700"
        >
          The codelabs
        </Link>
      </div>
    </div>
  );
}
