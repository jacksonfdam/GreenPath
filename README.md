# Green Path

A seven week, codelab style course that takes a returning developer from a
rusty grasp of JavaScript up to a junior QA level, with a bias toward
JavaScript based test automation. The site is the course, and the repo is
itself meant to read as a portfolio piece.

The name is the green of a passing test run.

## What it is

- Seven codelabs, one per week, written in MDX and split into short steps.
- Each step has a checkpoint that saves to `localStorage`, so progress persists
  across reloads and you can stop and resume anywhere.
- Every terminal instruction carries a plain macOS note, because the course
  assumes no terminal fluency.
- Each week ends with a real artifact: a repo, a Postman collection, a report.
- A portfolio page collects those artifacts into an index you can send with an
  application.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- MDX content via `next-mdx-remote`, frontmatter parsed with `gray-matter`
- No backend, no database, no auth. Progress lives in the browser.

## Running locally

```
npm install
npm run dev
```

Then open the printed local URL. To produce the production build:

```
npm run build
npm run start
```

## Content

Codelabs live in `content/codelabs` as MDX files with frontmatter. Steps are
delimited with a `<Step id title minutes>` component, and each ends in a
`<Checkpoint id>` whose id matches the step. Step ids are stable and globally
unique (`w{week}-s{n}`); renumbering a shipped step would wipe saved progress,
so they are treated as permanent.

Regenerate the plain-text checklist backup after editing content:

```
npm run progress
```

## Deploying

Push to a public GitHub repo, then import it at
[vercel.com](https://vercel.com/). Next.js needs no configuration. Every push to
`main` redeploys.

## Routes

- `/` home, with the overall progress ring
- `/setup` install every tool the course needs, in order
- `/codelabs` the index of all seven
- `/codelabs/[slug]` a single codelab, one step at a time
- `/practice` write test cases from a wireframe, in plain language
- `/progress` per week and overall completion, streak, and a reset
- `/portfolio` paste your artifact links, get a tidy index
- `/terminal-101` the macOS terminal survival guide
- `/mobile-qa` mobile testing principles, for awareness
- `/ai-help` how to use AI agents through the course, and how not to
- `/glossary` a searchable QA and testing glossary
- `/resources` the master link list
