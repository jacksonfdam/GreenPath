#!/usr/bin/env bash
#
# Replays the build of Green Path as a series of small, conventional commits,
# one logical change each. Run it once, from the repo root, on a clean repo
# with no commits yet:
#
#   bash scripts/microcommits.sh
#
# It uses your own git identity. If git complains that your name or email is
# unset, set them first:
#
#   git config user.name "Your Name"
#   git config user.email "you@example.com"
#
# The script is idempotent-ish: it commits only what is staged for each step,
# so re-running after a partial run will simply add nothing new.

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

# A stale lock can linger if a previous git process was interrupted.
rm -f .git/index.lock 2>/dev/null || true

commit() {
  local message="$1"
  shift
  git add -- "$@"
  # Only commit if something is actually staged.
  if git diff --cached --quiet; then
    echo "skip (nothing staged): $message"
  else
    git commit -q -m "$message"
    echo "ok:   $message"
  fi
}

commit "chore: scaffold Next.js app with TypeScript and Tailwind" \
  package.json package-lock.json tsconfig.json next.config.mjs \
  postcss.config.mjs tailwind.config.ts eslint.config.mjs .gitignore app/globals.css

commit "feat: add site constants and content types" \
  lib/site.ts lib/types.ts

commit "feat: add localStorage progress context" \
  lib/progress.tsx

commit "feat: add MDX content loader and step parser" \
  lib/codelabs.ts lib/steps.ts

commit "feat: add reusable content components" \
  components/Terminal.tsx components/MacNote.tsx components/Callout.tsx \
  components/DocLink.tsx components/CodeFile.tsx components/CopyButton.tsx \
  components/Exercise.tsx

commit "feat: add checkpoint, step, and stepper components" \
  components/Checkpoint.tsx components/Step.tsx components/Stepper.tsx

commit "feat: add MDX component map" \
  lib/mdx-components.tsx

commit "feat: add progress ring and bars" \
  components/ProgressRing.tsx components/GlobalProgressBar.tsx components/OverallRing.tsx

commit "feat: add navigation and footer" \
  components/Nav.tsx components/Footer.tsx

commit "feat: add root layout" \
  app/layout.tsx

commit "feat: add home page with overall progress ring" \
  app/page.tsx

commit "feat: add codelabs index" \
  app/codelabs/page.tsx components/CodelabsIndex.tsx

commit "feat: add single codelab route with step-by-step view" \
  components/CodelabView.tsx "app/codelabs/[slug]/page.tsx"

commit "feat: add progress dashboard" \
  app/progress/page.tsx components/ProgressDashboard.tsx

commit "feat: add portfolio index" \
  app/portfolio/page.tsx components/PortfolioIndex.tsx

commit "feat: add macOS terminal survival guide" \
  app/terminal-101/page.tsx

commit "feat: add resources link list" \
  app/resources/page.tsx

commit "feat: add environment setup page" \
  app/setup/page.tsx

commit "feat: add AI help guide" \
  app/ai-help/page.tsx

commit "feat: add searchable QA glossary" \
  lib/glossary.ts components/GlossaryList.tsx app/glossary/page.tsx

commit "feat: add not-found page and site icon" \
  app/not-found.tsx app/icon.svg

commit "docs: add week 1 codelab, waking up JavaScript" \
  content/codelabs/week1-waking-up-javascript.mdx

commit "docs: add week 2 codelab, bug hunt" \
  content/codelabs/week2-bug-hunt.mdx

commit "docs: add week 3 codelab, the multiverse API" \
  content/codelabs/week3-multiverse-api.mdx

commit "docs: add week 4 codelab, first green" \
  content/codelabs/week4-first-green.mdx

commit "docs: add week 5 codelab, comanda" \
  content/codelabs/week5-comanda.mdx

commit "docs: add week 6 codelab, autopilot" \
  content/codelabs/week6-autopilot.mdx

commit "docs: add week 7 codelab, ship it" \
  content/codelabs/week7-ship-it.mdx

commit "chore: add progress checklist generator" \
  scripts/generate-progress.mjs scripts/microcommits.sh PROGRESS.md

commit "ci: run lint and build on push" \
  .github/workflows/ci.yml

commit "docs: add project readme" \
  README.md

echo
echo "Done. Review with: git log --oneline"
