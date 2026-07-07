import type { ReactNode } from "react";

/** A hands-on challenge box, visually distinct from tips and warnings so the
 *  "now you try" moments stand out from the reading. */
export default function Exercise({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-indigo-400 bg-indigo-50 p-4 dark:border-indigo-700 dark:bg-indigo-950/40">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
        {title ? `Try it: ${title}` : "Try it"}
      </p>
      <div className="text-sm leading-relaxed [&_a]:text-pass [&_a]:underline [&_code]:rounded [&_code]:bg-black/10 [&_code]:px-1 [&_code]:font-mono dark:[&_code]:bg-white/10">
        {children}
      </div>
    </div>
  );
}
