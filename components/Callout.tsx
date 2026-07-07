import type { ReactNode } from "react";

type CalloutType = "tip" | "why" | "warning";

const STYLES: Record<CalloutType, { label: string; box: string; tag: string }> = {
  tip: {
    label: "Tip",
    box: "border-sky-300 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/40",
    tag: "text-sky-700 dark:text-sky-300",
  },
  why: {
    label: "Why",
    box: "border-pass bg-pass-soft dark:border-pass dark:bg-pass/10",
    tag: "text-pass",
  },
  warning: {
    label: "Warning",
    box: "border-amber-400 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40",
    tag: "text-amber-700 dark:text-amber-300",
  },
};

export default function Callout({
  type = "tip",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const style = STYLES[type];
  return (
    <div className={`my-5 rounded-lg border-l-4 p-4 ${style.box}`}>
      <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${style.tag}`}>
        {style.label}
      </p>
      <div className="text-sm leading-relaxed [&_a]:text-pass [&_a]:underline [&_code]:rounded [&_code]:bg-black/10 [&_code]:px-1 [&_code]:font-mono dark:[&_code]:bg-white/10">
        {children}
      </div>
    </div>
  );
}
