import type { Metadata } from "next";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import MacNote from "@/components/MacNote";
import Callout from "@/components/Callout";
import DocLink from "@/components/DocLink";

export const metadata: Metadata = {
  title: "Setup",
  description: "Install everything the course needs, once, in the right order.",
};

export default function SetupPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">Set up your Mac, once</h1>
        <p>
          Everything the seven weeks need, installed in one sitting so you are never
          stopped mid-lesson hunting for a download. None of this is urgent to
          understand; it is plumbing. Work top to bottom, and if you are new to the
          terminal, keep <Link href="/terminal-101">Terminal 101</Link> open in
          another tab. You will not need all of these on day one, but installing them
          now beats installing them while annoyed later.
        </p>

        <Callout type="tip">
          You can do most of this course without living in the terminal. Several of
          these tools have friendly windows and buttons, and they are marked as such.
          Use them without apology.
        </Callout>

        <h2>1. Node.js</h2>
        <p>
          The runtime everything else sits on. Go to{" "}
          <DocLink href="https://nodejs.org/">nodejs.org</DocLink>, click the big LTS
          button, open the `.pkg`, and click through. LTS is the boring, dependable
          release, which is exactly what you want holding up your tools. Take the
          latest LTS rather than an older one you might have used before.
        </p>
        <MacNote>
          To confirm, open Terminal (Command and Space, type Terminal, Enter) and run
          the check below. Two version numbers means success. On a Mac, a command that
          prints a version and nothing else has worked perfectly.
        </MacNote>
        <Terminal
          note="Confirm Node and npm are installed, and see their versions."
          commands={["node -v", "npm -v"]}
        />

        <h2>2. Python</h2>
        <p>
          Not the star of this course, which is JavaScript through and through, but
          worth having. Plenty of QA tooling, small automation scripts, and data
          wrangling assume a working Python, and you will meet it sooner or later. Get
          the latest version from{" "}
          <DocLink href="https://www.python.org/downloads/">python.org/downloads</DocLink>,
          open the installer, and click through.
        </p>
        <MacNote>
          macOS may already have an older Python that Apple ships for its own use. Do
          not build on that one. Install the current release from python.org, then
          confirm with the commands below. On a Mac the command is `python3`, not
          `python`, and `pip3` is its package installer.
        </MacNote>
        <Terminal
          note="Confirm Python and pip are installed, and see their versions."
          commands={["python3 --version", "pip3 --version"]}
        />

        <h2>3. An IDE, with an agent built in</h2>
        <p>
          You need somewhere to write and read code. The recommendation for this course
          is <DocLink href="https://antigravity.google/">Google Antigravity</DocLink>, a
          free, agentic IDE launched in late 2025 with AI coding agents built into the
          editor rather than bolted on. Since a chunk of the modern QA role is working
          well alongside AI, learning in a tool that treats an agent as a first-class
          citizen is a head start, not a gimmick. Download it for macOS from{" "}
          <DocLink href="https://antigravity.google/download">antigravity.google/download</DocLink>.
        </p>
        <MacNote>
          Antigravity needs a Google account to sign in, which unlocks the built-in
          model. Open the downloaded file and drag the app into Applications, the same
          as any Mac app. The <Link href="/ai-help">AI help</Link> page covers how to
          actually use the agent well, and how not to.
        </MacNote>
        <Callout type="tip">
          Prefer something more conventional, or already know one? Any editor works,
          and <DocLink href="https://code.visualstudio.com/">Visual Studio Code</DocLink>{" "}
          is the widely-used, agent-optional default that every tutorial assumes. Pick
          one and move on; you can switch later without losing anything.
        </Callout>

        <h2>4. A GitHub account</h2>
        <p>
          GitHub is where your work lives and where employers will look. Create a free
          account at <DocLink href="https://github.com/">github.com</DocLink>. Pick a
          username you would be comfortable putting on a CV, because you will be putting
          it on a CV.
        </p>

        <h2>5. Git, and GitHub Desktop</h2>
        <p>
          Git is the tool that tracks versions of your code.{" "}
          <DocLink href="https://git-scm.com/">git-scm.com</DocLink> is its home, but you
          may not need to install it separately: it ships with Apple's developer command
          line tools, which macOS offers to install the first time you run `git`.
        </p>
        <MacNote>
          The friendlier route is <DocLink href="https://desktop.github.com/">GitHub Desktop</DocLink>,
          which does git with buttons instead of commands. Install it, sign in with the
          account from step 4, and you can create, commit, and publish repositories
          without touching the terminal. This is the recommended path for the early
          weeks.
        </MacNote>
        <p>If you do want the terminal version, set your identity once so commits are yours:</p>
        <Terminal
          note="One-time setup. Use your own name and the email tied to your GitHub account."
          commands={['git config --global user.name "Your Name"', 'git config --global user.email "you@example.com"']}
        />

        <h2>6. Google Chrome</h2>
        <p>
          You will test against a browser, and Cypress drives one. Chrome is the safe
          default because it is what most test setups assume. Get it from{" "}
          <DocLink href="https://www.google.com/chrome/">google.com/chrome</DocLink> if it
          is not already on the machine.
        </p>

        <h2>7. Postman</h2>
        <p>
          For testing APIs in week three. Download it from{" "}
          <DocLink href="https://www.postman.com/downloads/">postman.com/downloads</DocLink>,
          a normal Mac app you drag to Applications. There is also a web version if you
          would rather not install anything. No terminal required either way.
        </p>

        <h2>8. Cypress</h2>
        <p>
          The automation framework at the heart of the course. You do not install this
          globally or now; it goes into each project as a dependency, which week four
          walks through. It is listed here only so you know it is coming and why the
          project folders exist. The command, when you get there, is:
        </p>
        <Terminal
          note="For reference. You run this inside a project in week four, not yet."
          commands={["npm install cypress --save-dev"]}
        />
        <p>
          The docs live at <DocLink href="https://docs.cypress.io/">docs.cypress.io</DocLink>{" "}
          and are unusually good.
        </p>

        <h2>9. A Vercel account</h2>
        <p>
          For putting the site online in week seven. Sign up at{" "}
          <DocLink href="https://vercel.com/">vercel.com</DocLink> using your GitHub
          account, so the two are already connected when you come to deploy. Nothing to
          install; it lives in the browser.
        </p>

        <h2>Keep your tools and libraries current</h2>
        <p>
          A habit worth forming now: prefer the latest stable versions, and check what
          you actually have rather than assuming. Pinning an old version because a
          tutorial from three years ago used it is how projects quietly rot. The
          commands below tell you where you stand.
        </p>
        <Terminal
          note="See the versions you have installed."
          commands={["node -v", "npm -v", "python3 --version"]}
        />
        <p>
          Inside a project with a `package.json`, npm can tell you which libraries have
          moved on without you, and install the newest one when you decide to upgrade:
        </p>
        <Terminal
          note="List outdated project libraries, then upgrade one to its latest version."
          commands={["npm outdated", "npm install cypress@latest --save-dev"]}
        />
        <p>On the Python side, pip does the same:</p>
        <Terminal
          note="List Python packages that have newer versions available."
          commands={["pip3 list --outdated"]}
        />
        <Callout type="why">
          Where a version genuinely matters, install the latest and let the tooling
          report its own number, rather than hard-coding one that will age badly. That
          is the same instinct as choosing Node's LTS and, in week six, writing{" "}
          `node-version: lts/*` into the pipeline instead of a fixed number. Current by
          default, pinned only when you have a reason.
        </Callout>

        <h2>When you want more, later</h2>
        <p>
          Two terminal tools worth knowing about eventually, not now:{" "}
          <DocLink href="https://github.com/nvm-sh/nvm">nvm</DocLink> for switching Node
          versions per project, and <DocLink href="https://brew.sh/">Homebrew</DocLink>{" "}
          for installing command line tools. Both are covered, calmly, on the{" "}
          <Link href="/terminal-101">Terminal 101</Link> page. Ignore them until
          something actually needs them.
        </p>

        <h2>The five-minute check</h2>
        <p>
          Before you start week one, confirm the essentials are in place. You do not
          need every tool yet, but these unblock everything else.
        </p>
        <ul>
          <li>
            <strong>Node.</strong> `node -v` prints a version number in Terminal.
          </li>
          <li>
            <strong>An IDE.</strong> Antigravity, or your editor of choice, opens and
            you can create a file.
          </li>
          <li>
            <strong>GitHub.</strong> You can sign in, and GitHub Desktop is installed
            or you are comfortable with `git` in the terminal.
          </li>
        </ul>

        <Callout type="tip">
          Stuck on any step? The <Link href="/ai-help">AI help</Link> page shows how to
          get an assistant to walk you through an install error without pretending you
          already know the answer.
        </Callout>
      </div>
    </div>
  );
}
