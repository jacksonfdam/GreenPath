import CopyButton from "./CopyButton";

interface TerminalProps {
  /** One or more related shell commands. Keep the list short. */
  commands: string[];
  /** A one line "what this does", shown above the block. */
  note?: string;
}

export default function Terminal({ commands, note }: TerminalProps) {
  const joined = commands.join("\n");

  return (
    <div className="my-5">
      {note ? <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">{note}</p> : null}
      <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
          <span className="font-mono text-xs text-slate-400">Terminal</span>
          <CopyButton value={joined} label="Copy commands" />
        </div>
        <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed text-slate-100">
          <code>
            {commands.map((cmd) => (
              <span key={cmd} className="block">
                <span className="select-none text-pass-ring" aria-hidden="true">
                  ${" "}
                </span>
                {cmd}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
