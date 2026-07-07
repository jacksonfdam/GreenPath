import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/components/Callout";
import DocLink from "@/components/DocLink";

export const metadata: Metadata = {
  title: "Mobile QA",
  description: "The principles of testing mobile, for awareness and interviews.",
};

export default function MobileQaPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">Mobile QA, the principles</h1>
        <p>
          This course aims you at web automation with JavaScript, and that is where
          your time should go. But mobile comes up in interviews and in real teams, and
          the good news is that most of what you already know transfers. This page is
          awareness, not a second career: enough to test a mobile web app sensibly and
          to talk about native testing without bluffing.
        </p>

        <Callout type="why">
          The testing mindset does not change on mobile. You still make risk visible,
          design cases with the same techniques, and write reproducible bug reports.
          What changes is the list of things that can go wrong, and that list is longer
          on a device someone carries around all day.
        </Callout>

        <h2>Know what kind of app you are testing</h2>
        <p>
          The word "app" hides four quite different things, and the difference decides
          your approach. A native app is built for one platform (Swift for iOS, Kotlin
          for Android) and installed from a store. A hybrid app wraps web content in a
          native shell. A mobile web app is just a website viewed on a phone. And a
          progressive web app is a website that behaves more like an installed app. The
          closer to plain web, the more your existing skills apply directly.
        </p>

        <h2>The concerns that web does not have</h2>
        <p>
          Testing mobile means holding a longer list of ways the world interferes.
          Device fragmentation comes first: countless screen sizes, resolutions, and
          operating system versions, and you cannot test them all. You choose a
          representative set by risk, the popular devices and the OS versions your users
          actually run, which is risk based testing wearing a different hat.
        </p>
        <p>
          Then there is everything a phone does that a desktop does not. Interruptions:
          a call arrives, a notification drops, the user switches apps and comes back,
          the battery dies. Your app should survive all of it and resume where it was.
          Network: mobile connections go offline, crawl, or switch from wifi to cellular
          mid-action, so an app that assumes a fast, stable connection will embarrass
          itself on a train. Gestures and input: tap, swipe, pinch, long-press, and a
          keyboard that slides up and covers the field you were typing into. Orientation:
          rotating the device should not lose your data. Permissions: camera, location,
          and notifications can be granted or denied, and both paths need testing.
        </p>

        <Callout type="tip">
          A quick way to find real mobile bugs: turn the network off mid-task, rotate
          the screen, and background the app then return. Those three moves surface more
          issues than an hour of tapping through the happy path.
        </Callout>

        <h2>Real devices, emulators, and simulators</h2>
        <p>
          An emulator (Android) or simulator (iOS) runs a fake device on your computer.
          They are fast and free, and fine for early checks of layout and logic. They
          are not the truth, though: real performance, real touch behaviour, real
          sensors, and real network conditions only show up on real hardware. Teams
          usually do both, and use a device cloud like{" "}
          <DocLink href="https://www.browserstack.com/">BrowserStack</DocLink> or{" "}
          <DocLink href="https://saucelabs.com/">Sauce Labs</DocLink> to reach the
          devices they do not own.
        </p>

        <h2>The tools, for awareness</h2>
        <p>
          You do not need these yet, but you should recognise the names. For native
          automation, <DocLink href="https://appium.io/">Appium</DocLink> drives both iOS
          and Android and, helpfully, has JavaScript bindings and a WebDriver-style
          approach, which makes it the shortest bridge from what this course teaches to
          native testing. Platform-specific tools exist too:{" "}
          <DocLink href="https://developer.android.com/training/testing/espresso">Espresso</DocLink>{" "}
          for Android and{" "}
          <DocLink href="https://developer.apple.com/documentation/xctest">XCUITest</DocLink>{" "}
          for iOS. For mobile web, you already have the best starting point: your browser.
        </p>

        <Callout type="tip">
          Try it now, no install required. Open{" "}
          <DocLink href="https://www.saucedemo.com/">SauceDemo</DocLink> in Chrome, open
          DevTools, and switch on the device toolbar to emulate a phone. Resize across a
          few device presets and watch what the layout does. That is mobile web testing,
          and it uses skills you already have.
        </Callout>

        <h2>Accessibility counts double here</h2>
        <p>
          Phones are how a lot of people with disabilities use the internet, so mobile
          accessibility is not optional. The screen readers to know are VoiceOver on iOS
          and TalkBack on Android. Dynamic text sizing, sufficient contrast, and touch
          targets large enough to hit without a surgeon's aim all belong on your list.
        </p>

        <p>
          When you are ready to go deeper, the same instincts from{" "}
          <Link href="/codelabs/bug-hunt">week two</Link> apply straight to mobile: pick
          your risks, design your cases, and write reports a developer can reproduce. The
          device is new; the discipline is not.
        </p>
      </div>
    </div>
  );
}
