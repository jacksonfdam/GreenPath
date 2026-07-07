import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Regenerates PROGRESS.md from the codelab content, so the plain checklist in
// the repo never drifts from the site. Run with: npm run progress
const CONTENT_DIR = path.join(process.cwd(), "content", "codelabs");
const OUT = path.join(process.cwd(), "PROGRESS.md");

function parseSteps(source) {
  const regex = /<Step\s+([^>]*?)>/g;
  const steps = [];
  let match;
  while ((match = regex.exec(source)) !== null) {
    const attrs = match[1];
    const id = /id="([^"]+)"/.exec(attrs)?.[1];
    const title = /title="([^"]+)"/.exec(attrs)?.[1];
    if (id && title) steps.push({ id, title });
  }
  return steps;
}

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith(".mdx"))
  .sort();

const codelabs = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { content, data } = matter(raw);
    return { frontmatter: data, steps: parseSteps(content) };
  })
  .sort((a, b) => a.frontmatter.week - b.frontmatter.week);

const lines = [
  "# Progress",
  "",
  "The low-tech backup. This checklist survives a cleared browser cache, which",
  "the in-site tracker does not. Tick a box here by hand if you like, or just",
  "use it to see the whole plan without opening the site.",
  "",
];

for (const { frontmatter, steps } of codelabs) {
  lines.push(`## Week ${frontmatter.week}. ${frontmatter.title}`);
  lines.push("");
  lines.push(`_${frontmatter.summary}_`);
  lines.push("");
  for (const step of steps) {
    lines.push(`- [ ] ${step.id} ${step.title}`);
  }
  lines.push("");
  lines.push(`Artifact: ${frontmatter.artifact.name} (${frontmatter.artifact.where}).`);
  lines.push("");
}

fs.writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT}`);
