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
