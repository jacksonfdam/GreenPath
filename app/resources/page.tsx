import type { Metadata } from "next";
import DocLink from "@/components/DocLink";

export const metadata: Metadata = {
  title: "Resources",
  description: "The master link list. Official docs only, no random blogs.",
};

interface Resource {
  href: string;
  label: string;
  note: string;
}

const GROUPS: { heading: string; items: Resource[] }[] = [
  {
    heading: "JavaScript",
    items: [
      { href: "https://javascript.info/", label: "javascript.info", note: "The modern JavaScript tutorial, start to finish." },
      { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", label: "MDN JavaScript", note: "The reference you will keep open in a tab." },
    ],
  },
  {
    heading: "QA foundations",
    items: [
      { href: "https://www.istqb.org/", label: "ISTQB", note: "Foundation syllabus, free to download. Read for concepts; the exam is optional." },
      { href: "https://www.ministryoftesting.com/", label: "Ministry of Testing", note: "A community that talks about testing like a craft." },
      { href: "https://testautomationu.applitools.com/", label: "Test Automation University", note: "Free courses on test design and automation." },
    ],
  },
  {
    heading: "Tools",
    items: [
      { href: "https://learning.postman.com/", label: "Postman Learning Center", note: "How to drive Postman without guessing." },
      { href: "https://docs.cypress.io/", label: "Cypress", note: "The docs for the framework this course leans on." },
      { href: "https://playwright.dev/", label: "Playwright", note: "The other big JavaScript automation tool, for awareness." },
      { href: "https://docs.github.com/actions", label: "GitHub Actions", note: "How to make your tests run themselves on every push." },
    ],
  },
  {
    heading: "Practice targets",
    items: [
      { href: "https://www.saucedemo.com/", label: "SauceDemo", note: "A fake shop with bugs on purpose. Log in as standard_user with secret_sauce." },
      { href: "https://rickandmortyapi.com/", label: "Rick and Morty API", note: "A public API with no key required." },
      { href: "https://pokeapi.co/", label: "PokeAPI", note: "Another key-free API to point requests at." },
      { href: "https://todomvc.com/", label: "TodoMVC", note: "A tidy app to automate when you want a plan B." },
      { href: "https://the-internet.herokuapp.com/", label: "The Internet", note: "A grab bag of tricky UI behaviours to test against." },
    ],
  },
  {
    heading: "Mac and setup",
    items: [
      { href: "https://nodejs.org/", label: "Node.js", note: "The runtime everything else rides on. Download the LTS build." },
      { href: "https://desktop.github.com/", label: "GitHub Desktop", note: "Git with buttons, for when the terminal can wait." },
      { href: "https://github.com/nvm-sh/nvm", label: "nvm", note: "Switch Node versions per project, when you are ready." },
      { href: "https://brew.sh/", label: "Homebrew", note: "Installs command line tools. Copy the command from the homepage." },
    ],
  },
  {
    heading: "Build and deploy",
    items: [
      { href: "https://nextjs.org/docs", label: "Next.js", note: "The framework this very site is built with." },
      { href: "https://vercel.com/docs", label: "Vercel", note: "Where the site deploys, straight from GitHub." },
      { href: "https://mdxjs.com/", label: "MDX", note: "Markdown that can hold components. It is how these codelabs are written." },
      { href: "https://tailwindcss.com/", label: "Tailwind", note: "The styling used throughout." },
    ],
  },
  {
    heading: "The role",
    items: [
      { href: "https://careers.umain.com/jobs/6665867-qa-engineer", label: "Umain QA Engineer posting", note: "The job this whole path is pointed at." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Resources</h1>
      <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
        The master link list. Official docs and real practice targets, nothing
        scraped off a content farm. If a course step links somewhere, it links here
        too.
      </p>

      <div className="mt-8 space-y-10">
        {GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="text-lg font-bold tracking-tight">{group.heading}</h2>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.href} className="text-sm">
                  <DocLink href={item.href}>{item.label}</DocLink>
                  <span className="text-slate-500 dark:text-slate-400">. {item.note}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
