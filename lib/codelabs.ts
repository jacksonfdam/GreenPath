import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CodelabFrontmatter, CodelabMeta, StepMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "codelabs");

/**
 * Pull the ordered list of steps straight from the raw MDX, without executing
 * it. The left rail and the Back/Next stepper need this before any MDX is
 * compiled, and a regex over stable <Step> tags is cheaper and more predictable
 * than running the content twice.
 */
function parseSteps(source: string): StepMeta[] {
  const stepRegex = /<Step\s+([^>]*?)>/g;
  const steps: StepMeta[] = [];
  let match: RegExpExecArray | null;

  while ((match = stepRegex.exec(source)) !== null) {
    const attrs = match[1];
    const id = /id="([^"]+)"/.exec(attrs)?.[1];
    const title = /title="([^"]+)"/.exec(attrs)?.[1];
    const minutes = /minutes=\{(\d+)\}/.exec(attrs)?.[1];

    if (!id || !title) continue;

    steps.push({
      id,
      title,
      minutes: minutes ? Number(minutes) : 0,
    });
  }

  return steps;
}

export function getCodelabSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCodelabSource(slug: string): {
  content: string;
  frontmatter: CodelabFrontmatter;
  steps: StepMeta[];
} {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    content,
    frontmatter: data as CodelabFrontmatter,
    steps: parseSteps(content),
  };
}

/** Every codelab's metadata, ordered by week. Safe to hand to client pages. */
export function getAllCodelabs(): CodelabMeta[] {
  return getCodelabSlugs()
    .map((slug) => {
      const { frontmatter, steps } = getCodelabSource(slug);
      return { ...frontmatter, steps };
    })
    .sort((a, b) => a.week - b.week);
}

export function getCodelabMeta(slug: string): CodelabMeta {
  const { frontmatter, steps } = getCodelabSource(slug);
  return { ...frontmatter, steps };
}
