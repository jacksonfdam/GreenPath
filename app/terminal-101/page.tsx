import type { Metadata } from "next";
import Terminal from "@/components/Terminal";
import MacNote from "@/components/MacNote";
import Callout from "@/components/Callout";
import DocLink from "@/components/DocLink";

export const metadata: Metadata = {
  title: "Terminal 101",
  description: "A calm, specific survival guide to the macOS terminal.",
};

export default function TerminalPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">The macOS terminal, survived</h1>
        <p>
          This is the page you read when a command has just failed and you are
          already annoyed. So it is calm and specific, and it assumes nothing. The
          terminal is a text box that runs programs. That is the whole trick. It looks
          austere because it is old, not because it is judging you.
        </p>

        <h2>Opening it</h2>
        <p>
          Press Command and Space to open Spotlight, type Terminal, and press Enter.
          If you prefer clicking, it lives in Applications, then Utilities, then
          Terminal. A window opens with a blinking cursor. That cursor is waiting for
          you, indefinitely, without complaint.
        </p>

        <h2>Where am I, what is here, how do I move</h2>
        <p>
          Three commands cover almost everything. This block is safe to run; none of
          it changes a single file.
        </p>
        <Terminal
          note="Print where you are, list what is here, then move around."
          commands={["pwd", "ls", "cd ~/Desktop", "cd ..", "cd ~"]}
        />
        <p>
          <code>pwd</code> prints the current folder. <code>ls</code> lists what is in
          it. <code>cd foldername</code> goes into a folder, <code>cd ..</code> goes up
          one level, and <code>cd ~</code> goes home. The <code>~</code> is shorthand
          for your home folder, which saves a lot of typing.
        </p>

        <h2>Copy and paste</h2>
        <p>
          Command and C to copy, Command and V to paste, exactly as everywhere else on
          the Mac. Every command block in this course has a Copy button in its corner,
          so you never have to retype one and never have to wonder whether that was a
          lowercase L or a one.
        </p>

        <h2>It printed nothing</h2>
        <Callout type="why">
          On a Mac, a great many successful commands say nothing at all. No output is
          usually success, not a fault. The terminal only speaks up when it has
          something to report, which is often an error. Silence means it did the thing
          and is waiting for the next instruction.
        </Callout>

        <h2>The password you cannot see</h2>
        <MacNote>
          Some commands ask for your Mac password, usually ones that begin with{" "}
          <code>sudo</code>. When you type it, nothing appears. No dots, no asterisks,
          no cursor movement. That is deliberate, not frozen. Type the password anyway
          and press Enter.
        </MacNote>

        <h2>Piping a script from the internet, with caution</h2>
        <p>
          Some tools install by downloading a script and running it straight away, a
          pattern called curl into bash. It is convenient and, from a source you
          trust, fine. From a source you do not, it is a stranger you have handed the
          keys. Only run those commands from official sites, like the ones linked in
          this course.
        </p>

        <h2>Two tools that spare you the terminal</h2>
        <p>
          You do not have to live in here. For most of this course you can use apps
          with buttons. <DocLink href="https://desktop.github.com/">GitHub Desktop</DocLink>{" "}
          handles git with a friendly window instead of commands, and the Postman app
          handles API testing without a shell in sight. Use them without guilt.
        </p>

        <h2>When you are ready for more</h2>
        <p>
          Two tools worth knowing about later, not now.{" "}
          <DocLink href="https://github.com/nvm-sh/nvm">nvm</DocLink>, the Node version
          manager, lets you switch between Node versions per project. Run the install
          command shown in its README, because that command includes the current
          version and the one you half remember will be out of date. Then install the
          long term support release.
        </p>
        <Terminal
          note="Only after nvm is installed. The install command itself belongs in nvm's README."
          commands={["nvm install --lts"]}
        />
        <p>
          And <DocLink href="https://brew.sh/">Homebrew</DocLink> installs command line
          tools for you. Copy its install command from the homepage rather than from
          memory, for the same reason: the official one is the one that is current.
        </p>
      </div>
    </div>
  );
}
