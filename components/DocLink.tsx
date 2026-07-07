import type { ReactNode } from "react";

/** A consistently styled external link. Points at official docs, never a
 *  random blog. Opens in a new tab so the learner does not lose their step. */
export default function DocLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-pass underline underline-offset-2 hover:text-pass-ring"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
