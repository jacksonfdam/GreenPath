"use client";

import { useState } from "react";

export default function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard blocked. The command is right there to select by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded border border-white/20 px-2 py-1 text-xs font-medium text-slate-200 transition hover:bg-white/10"
      aria-label={label ?? "Copy to clipboard"}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
