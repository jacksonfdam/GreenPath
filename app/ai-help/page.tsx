import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/components/Callout";
import CodeFile from "@/components/CodeFile";
import DocLink from "@/components/DocLink";

export const metadata: Metadata = {
  title: "AI help",
  description: "How to use AI agents to help through the course, and how not to.",
};

export default function AiHelpPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <div className="prose-body">
        <h1 className="text-2xl font-bold tracking-tight">Using AI agents to help</h1>
        <p>
          The role this course points at asks for it, so learn to use it well and out
          in the open. An AI assistant is a fast, tireless, confidently wrong junior
          colleague. Treated as a colleague whose work you review, it speeds you up.
          Treated as an oracle whose output you paste unread, it will embarrass you at
          the worst possible moment, which in testing is a special kind of irony.
        </p>

        <h2>The words, briefly</h2>
        <p>
          A little vocabulary, so the rest of this page and half the internet make
          sense. None of it is complicated once someone says it plainly.
        </p>
        <ul>
          <li>
            <strong>Prompt.</strong> The instruction you give the model. It is the whole
            job, really. A vague prompt gets a vague answer; a specific one gets
            something useful.
          </li>
          <li>
            <strong>Context.</strong> Everything the model can see at once: your prompt,
            the files or text you gave it, the conversation so far. It has a limit, so
            what you leave out matters as much as what you put in.
          </li>
          <li>
            <strong>Model.</strong> The AI itself, the thing that turns your prompt into
            words. Claude, GPT, and Gemini are models. Each has versions, and newer is
            usually, not always, better.
          </li>
          <li>
            <strong>Agent.</strong> A model given the ability to act in a loop: read
            files, run commands, check the result, and try again toward a goal. A chat
            answers; an agent does.
          </li>
          <li>
            <strong>Skill.</strong> A reusable, packaged set of instructions an agent can
            load to do a specific task well, often written as a plain file the agent
            reads. Think of it as a saved recipe rather than re-explaining every time.
          </li>
          <li>
            <strong>Markdown, the .md file.</strong> A plain-text format for writing with
            light structure: headings, lists, links. It is what READMEs are written in,
            and increasingly how agents are instructed, in files like{" "}
            <code>README.md</code>, <code>SKILL.md</code>, or <code>AGENTS.md</code>. It
            is readable by both you and the machine, which is the point.
          </li>
        </ul>

        <h2>What it is genuinely good at</h2>
        <p>
          Widening your thinking and removing blank-page friction. Ask it to generate
          extra test cases from a requirement and it will suggest edge cases you would
          have reached eventually, sooner. Paste an error message and it will usually
          explain what the terminal was too terse to. Ask it to draft a boilerplate
          Cypress spec, translate a requirement into a checklist, or rephrase a bug
          report more clearly, and it will give you a solid first draft to correct.
          Correcting a draft is faster than writing from nothing, and you learn from
          the corrections.
        </p>

        <h2>What it is bad at, and will not warn you about</h2>
        <p>
          Being right. It invents API methods that do not exist, guesses at selectors
          it has never seen, and states all of it with the same steady confidence it
          uses for the true parts. It does not know your app, and its knowledge of any
          tool has a cutoff date, so its Cypress advice may quietly describe last
          year's Cypress. None of this is a reason to avoid it. It is the reason to
          verify everything it hands you.
        </p>

        <Callout type="warning">
          Never paste secrets into an assistant: passwords, API keys, private company
          code, anything you would not put on a postcard. The practice targets in this
          course are public on purpose, so you can share their details freely. Real
          work is not.
        </Callout>

        <h2>The tools</h2>
        <p>
          A few worth knowing. <DocLink href="https://claude.ai/">Claude</DocLink> and{" "}
          <DocLink href="https://chatgpt.com/">ChatGPT</DocLink> are general assistants
          you talk to in a browser, good for explanations, test ideas, and reviewing a
          snippet you paste in. <DocLink href="https://github.com/features/copilot">GitHub Copilot</DocLink>{" "}
          and <DocLink href="https://cursor.com/">Cursor</DocLink> live inside an editor
          and suggest code as you type, which is handy once you can tell a good
          suggestion from a plausible one. Start with a browser assistant. The
          in-editor tools are more useful after you have enough judgement to reject
          their worse ideas.
        </p>

        <h2>The desktop, or the REPL</h2>
        <p>
          You reach these tools in two broad ways, and it is worth knowing both. The
          first is a desktop app or a browser window: you type into a chat box, paste
          code in, and read the reply. This is the gentle end, ideal for explanations,
          test ideas, and reviewing a snippet, and it is where you should start. The
          second is the REPL, the command line: agentic tools that run in your terminal,
          or inside an editor, and can read and change the files in your project
          directly instead of waiting for you to copy and paste.{" "}
          <DocLink href="https://www.anthropic.com/claude-code">Claude Code</DocLink> is
          one you drive from the terminal, and an agentic IDE like{" "}
          <DocLink href="https://antigravity.google/">Antigravity</DocLink> brings the
          same idea inside the editor.
        </p>
        <p>
          The command-line end is more powerful and more dangerous in equal measure,
          because an agent that can edit your files can also edit them wrongly, quickly,
          and across several files at once. Start in the chat window. Move to the REPL
          once you can tell a good change from a plausible one, and keep everything in
          version control, so a bad edit is one `git` command away from undone. The
          agent gets bolder access as you get better at reviewing it, not before.
        </p>

        <h2>How to ask, so the answer is worth having</h2>
        <p>
          The quality of the reply tracks the quality of the prompt. Four habits do
          most of the work. Give it context, including which tool and version you are
          using. Show an example of what good looks like, even a rough one. Ask it to
          explain its reasoning, so you can catch a wrong assumption. And ask for a
          specific format, so the output is usable rather than an essay. Anthropic has
          a fuller guide to this at{" "}
          <DocLink href="https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview">
            the prompting documentation
          </DocLink>
          , and the same principles carry across tools.
        </p>
        <p>A weak prompt and a stronger one, for the same goal:</p>
        <CodeFile name="Weak prompt">{`write cypress tests for a login page`}</CodeFile>
        <CodeFile name="Stronger prompt">{`I am testing the SauceDemo login page with Cypress, latest version, in
JavaScript. The username field has a data-test attribute of "username",
the password field "password", and the button "login-button". A successful
login shows an element with the class "inventory_list".

Write three end-to-end tests: a successful login, a login with a wrong
password, and a login with an empty username. For each, explain in one line
what it proves. Use data-test selectors, not class or id selectors.`}</CodeFile>
        <p>
          The second prompt gets you tests you can almost use as written, because you
          told it what you already know. The first gets you a guess.
        </p>

        <h2>Write to a spec, not a vibe</h2>
        <p>
          There is a name for taking that stronger prompt seriously: spec-driven
          development. Instead of nudging an agent with half a sentence and hoping, you
          write a short, clear specification of what you want first, then let the agent
          build against it. The spec is the source of truth; the agent is the literal-
          minded pair who follows it.
        </p>
        <p>
          You already know this discipline, because it is what a good requirement or a
          clear acceptance criterion is in QA. A spec for an agent answers the same
          questions a test case does: what should happen, under what conditions, and how
          you will know it worked. Keep it plain. A few sentences of "here is what I
          want, here are the constraints, here is what done looks like" beats a
          paragraph of vibes every time. If you want to see the idea formalised, GitHub's{" "}
          <DocLink href="https://github.com/github/spec-kit">Spec Kit</DocLink> is a free,
          readable example of the workflow, and its{" "}
          <DocLink href="https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/">
            introduction
          </DocLink>{" "}
          explains the thinking without demanding you adopt the whole tool.
        </p>
        <Callout type="tip">
          Do not over-engineer this. For most of what you will do in this course, the
          "spec" is three or four honest sentences at the top of your prompt. The point
          is to decide what you want before you ask, not to fill in a template.
        </Callout>

        <h2>Getting better at prompts</h2>
        <p>
          Prompting is a skill you improve by reading a little and practising a lot. The
          official guides are short and worth the time, and they mostly agree with each
          other: be clear, give context, show examples, ask for a format.
        </p>
        <ul>
          <li>
            <DocLink href="https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview">
              Anthropic prompt engineering
            </DocLink>
            . Clear, practical, and the one this site's own guidance leans on.
          </li>
          <li>
            <DocLink href="https://platform.openai.com/docs/guides/prompting">
              OpenAI prompting guide
            </DocLink>
            . Strategies and worked examples for the GPT models.
          </li>
          <li>
            <DocLink href="https://ai.google.dev/gemini-api/docs/prompting-strategies">
              Google Gemini prompting strategies
            </DocLink>
            . Google's take, useful even if you never touch Gemini.
          </li>
          <li>
            <DocLink href="https://www.promptingguide.ai/">Prompting Guide</DocLink>. A
            vendor-neutral reference, deeper than the others if you want the theory.
          </li>
        </ul>

        <h2>The QA workflow, and why it doubles as an interview answer</h2>
        <p>
          There is a specific loop that shows judgement rather than just typing speed.
          Take a requirement, ask an assistant to generate test cases and to suggest
          scenarios you did not think of, then do the part that matters: review its
          output, keep what holds up, fix what does not, and write a short note on what
          it got right and what you had to correct.
        </p>
        <Callout type="why">
          That note is a ready-made interview answer. "I used AI to widen my coverage,
          then reviewed and corrected its output" describes exactly the judgement a
          team wants from a tester. Using AI well is listed in the job. Using it
          without checking is the only version that goes wrong, and it goes wrong
          publicly.
        </Callout>
        <p>
          This is the same loop as step four of{" "}
          <Link href="/codelabs/autopilot">week six</Link>, where you make it a
          permanent part of your portfolio. Practising it now, on the earlier weeks,
          means it is a habit by then rather than a task.
        </p>

        <h2>A short honesty note</h2>
        <p>
          Use these tools to learn faster, not to skip the learning. An assistant that
          writes a test you do not understand has left you with a test you cannot
          maintain and cannot explain in an interview. Read what it gives you until it
          makes sense. The goal is a tester who can work with AI, which is a different,
          more valuable thing than a tester who is replaced by it.
        </p>
      </div>
    </div>
  );
}
