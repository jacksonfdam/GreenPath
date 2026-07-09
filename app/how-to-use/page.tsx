import type { Metadata } from "next";
import Link from "next/link";
import { getAllCodelabs } from "@/lib/codelabs";
import JourneyMap from "@/components/JourneyMap";
import Callout from "@/components/Callout";

export const metadata: Metadata = {
  title: "How to use this",
  description: "The order to follow, and what every part of the site is for.",
};

export default function HowToUsePage() {
  const weeks = getAllCodelabs().map((c) => ({
    week: c.week,
    slug: c.slug,
    title: c.title,
  }));

  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">How to use this</h1>
        <p>
          There is a course, and there is a set of tools around it. That can look like a
          lot at once, so here is the whole thing in two minutes: what to do in order,
          and what everything else is for. Read this once and you never have to wonder
          again.
        </p>

        <JourneyMap weeks={weeks} />

        <h2>The path, in order</h2>
        <p>
          This is the spine. Do it top to bottom. Everything else is optional support
          that hangs off it.
        </p>
        <ol>
          <li>
            <strong>Do <Link href="/setup">Setup</Link> first.</strong> Install
            everything the course needs, once, so you are never stopped mid-lesson
            hunting for a download.
          </li>
          <li>
            <strong>Work the <Link href="/codelabs">seven codelabs</Link> in order,
            one per week.</strong> Week four does not go well if week one never ran. Each
            week is built from short steps, none longer than a coffee.
          </li>
          <li>
            <strong>Tick the checkpoint at the end of each step.</strong> That saves your
            place in this browser, so you can stop anywhere and pick up later. A codelab
            reopens where you left it.
          </li>
          <li>
            <strong>Finish each week with its artifact.</strong> A repo, a Postman
            collection, a test suite. The thing you made is the thing you keep.
          </li>
          <li>
            <strong>Paste each artifact into your <Link href="/portfolio">Portfolio</Link>.</strong>{" "}
            Watching that list fill up, week by week, is the real progress bar, and the
            one you send with an application.
          </li>
          <li>
            <strong>In week seven, apply.</strong> The portfolio is the point. Waiting to
            feel ready is a losing strategy.
          </li>
        </ol>

        <h2>The tools around it, and when to reach for each</h2>
        <p>
          You do not read these front to back. You dip into them at the moment you need
          them.
        </p>
        <ul>
          <li>
            <strong><Link href="/progress">Progress</Link>.</strong> Your dashboard:
            how far you are, per week and overall, plus your streak. Check it when you
            want to see the shape of things.
          </li>
          <li>
            <strong><Link href="/practice">Practice</Link>.</strong> Warm-ups for the
            core skill, understanding a product by testing it. Good before week two, or
            in any spare twenty minutes, using apps you already have.
          </li>
          <li>
            <strong><Link href="/glossary">Glossary</Link>.</strong> Any term that is
            unfamiliar, in plain words. Search it and move on.
          </li>
          <li>
            <strong><Link href="/terminal-101">Terminal 101</Link>.</strong> The page to
            read the moment a command fails and you are already annoyed.
          </li>
          <li>
            <strong><Link href="/mobile-qa">Mobile QA</Link>.</strong> Awareness of how
            mobile testing differs, mainly for interviews. Read it any time after week
            two.
          </li>
          <li>
            <strong><Link href="/ai-help">AI help</Link>.</strong> How to use an AI
            assistant to learn faster without fooling yourself, plus how to write a
            decent prompt.
          </li>
          <li>
            <strong><Link href="/resources">Resources</Link>.</strong> The master list of
            official docs and practice targets, when you want to go deeper on anything.
          </li>
        </ul>

        <h2>A realistic rhythm</h2>
        <p>
          This is built for a life with other things in it. You do not need long
          stretches.
        </p>
        <ul>
          <li>A few sessions of twenty to forty minutes a week is plenty.</li>
          <li>One or two steps per session is real progress. The checkpoint holds your place.</li>
          <li>Nothing important depends on a single marathon sitting.</li>
          <li>When a week feels tight, ship a smaller artifact rather than nothing. Done beats perfect.</li>
        </ul>

        <Callout type="why">
          If you remember one thing, make it this: do the weeks in order, ship the
          artifact each week, and keep the portfolio filling up. Everything else on this
          site exists to keep you moving when you get stuck.
        </Callout>

        <p>
          Ready? <Link href="/setup">Start with Setup</Link>, then open{" "}
          <Link href="/codelabs">week one</Link>.
        </p>
      </div>
    </div>
  );
}
