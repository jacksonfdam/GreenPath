import CopyButton from "./CopyButton";

/** A code block with a filename header, for when the learner needs to create
 *  a specific file. Pass the file body as a single string child. */
export default function CodeFile({ name, children }: { name: string; children: string }) {
  const code = typeof children === "string" ? children.replace(/\n$/, "") : String(children);

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="font-mono text-xs text-slate-300">{name}</span>
        <CopyButton value={code} label={`Copy ${name}`} />
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
