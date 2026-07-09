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

        <h2>Ten more, from apps you already use</h2>
        <p>
          Once the booking screen clicks, keep the habit going on apps you open every
          day. For each one, first describe how it is supposed to behave, then get
          suspicious and explore the edges. No wireframe needed: the app is right there
          in your pocket. Write the cases in the same plain language.
        </p>
        <ol>
          <li>
            <strong>Alarm clock.</strong> Describe setting, snoozing, and deleting an
            alarm. Explore: an alarm for a time that already passed today, two alarms on
            the same minute, snooze pressed ten times, an alarm that should ring across
            midnight.
          </li>
          <li>
            <strong>A messaging app.</strong> Describe sending a message to one person
            and to a group. Explore: sending with the network off then back on, a message
            that is only spaces, editing or deleting after it was read, pasting an
            enormous wall of text.
          </li>
          <li>
            <strong>The phone calculator.</strong> Describe the basic operations and the
            clear button. Explore: dividing by zero, a very long number, several decimal
            points in a row, rotating the phone mid-sum, what the percent key actually
            does.
          </li>
          <li>
            <strong>A weather app.</strong> Describe how it shows today and the week.
            Explore: switching Celsius and Fahrenheit, denying location permission, a city
            that does not exist, opening it with no connection.
          </li>
          <li>
            <strong>Food delivery or a ride app.</strong> Describe placing and cancelling
            an order. Explore: an address with a typo, cancelling after it is confirmed,
            removing every item from the basket, what the total does when a coupon is
            added.
          </li>
          <li>
            <strong>A music player.</strong> Describe play, pause, skip, and building a
            playlist. Explore: skipping past the last track, playing with the network off,
            an empty playlist, what playback does when a call comes in.
          </li>
          <li>
            <strong>A bank transfer screen.</strong> Describe sending money to someone.
            Explore: an amount of 0, a negative amount, more than the balance, many
            decimal places, a currency symbol typed into the number field, and whether the
            confirmation shows exactly what you entered.
          </li>
          <li>
            <strong>A calendar event.</strong> Describe creating an event with a start and
            an end. Explore: an end time before the start, an all-day event, a repeating
            event, a date on 29 February, an event that crosses midnight or a change of
            time zone.
          </li>
          <li>
            <strong>Login and password reset.</strong> Describe signing in and resetting a
            forgotten password. Explore: the wrong password several times over, a reset for
            an email with no account, the reset link used twice, passwords at the very
            edge of the length rules.
          </li>
          <li>
            <strong>A shopping cart and checkout.</strong> Describe adding items and paying.
            Explore: a quantity of 0 or 999, an item that sells out while it sits in your
            basket, an expired coupon, a required field left blank, and pressing back right
            after paying.
          </li>
        </ol>
        <Callout type="tip">
          Notice the patterns repeating across all ten: money and quantities want their
          boundaries pushed, dates want distrusting, networks want cutting, and
          permissions want denying. Learn to reach for those four moves on any screen and
          you will find bugs on apps their own teams have not.
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
