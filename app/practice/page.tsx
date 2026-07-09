import type { Metadata } from "next";
import Link from "next/link";
import Wireframes from "@/components/Wireframes";
import Callout from "@/components/Callout";
import CodeFile from "@/components/CodeFile";

export const metadata: Metadata = {
  title: "Practice",
  description: "Write test cases from a wireframe, in plain language.",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">Practice, testing from a wireframe</h1>
        <p>
          Here is a tiny product you have never seen: a screen to book a table at a
          restaurant, and the screen you get after booking. Your job is not to build it.
          Your job is to work out how it is supposed to behave, and to write that down as
          test cases anyone could follow.
        </p>
        <p>
          This is one of the best exercises in testing, because it forces the thing that
          matters most: understanding the product. You cannot test what you do not
          understand, and half of what you write down will be questions the design never
          answered. That is the point.
        </p>

        <Wireframes />

        <h2>Write your test cases in plain language</h2>
        <p>
          Not in code, and not in jargon. Write each one the way you would explain it to
          a friend who is not technical: what you do, and what should happen. If a person
          off the street could pick up your list and check the app, you have written it
          well.
        </p>
        <p>Here is one, worked all the way through, in exactly that plain style:</p>
        <CodeFile name="A test case, in plain words">{`Title:   Booking a table for tonight works
Do this: Pick today's date, choose 7:00 PM, set party size to 2,
         type a name and a real email, then press Book.
Expect:  A confirmation screen appears, showing the same date,
         time and number of people I chose.`}</CodeFile>

        <h2>Now write a handful more</h2>
        <p>
          Aim for eight to ten. Start with the obvious happy path, then get suspicious.
          Here are prompts to get you going, but the good ones will be the questions you
          think of that are not on this list:
        </p>
        <ul>
          <li>What should happen if I pick a date in the past?</li>
          <li>What should happen if I book a table for 0 people? Or for 50?</li>
          <li>What should happen if I leave the name empty and press Book?</li>
          <li>What should happen if I type <code>banana</code> in the email box?</li>
          <li>What does the confirmation screen show if I did not fill in a name?</li>
          <li>On the confirmation screen, what happens when I press Cancel booking, and then go back?</li>
        </ul>

        <Callout type="why">
          Notice how many of these the wireframe does not answer. Should a past date be
          blocked, or accepted with a warning? Is the maximum party size 8, or 100, or
          anything? A real tester takes these questions to whoever owns the product. That
          conversation is you doing the job, not failing to.
        </Callout>

        <Callout type="tip">
          Two habits from the course apply directly here. Push inputs to their edges (a
          party of 0, an enormous number, an empty field), and distrust dates, because
          dates break products more than almost anything. And where you are unsure what
          is correct, write down what the requirement would need to say.
        </Callout>

        <h2>When you are done</h2>
        <p>
          Save your list as a markdown file and keep it. It shows the same skill your{" "}
          <Link href="/codelabs/bug-hunt">week two</Link> artifact does: turning a product
          into clear, followable test cases. If a word here was unfamiliar, the{" "}
          <Link href="/glossary">glossary</Link> has it in plain terms.
        </p>
      </div>
    </div>
  );
}
