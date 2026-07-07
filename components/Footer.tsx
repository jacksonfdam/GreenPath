import { REPO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Green Path. A seven week path from rusty to junior QA.</p>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pass underline underline-offset-2"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
