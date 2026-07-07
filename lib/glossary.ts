export interface GlossaryEntry {
  term: string;
  /** Optional shorter labels that should also match a search, e.g. acronyms. */
  aliases?: string[];
  definition: string;
}

/** A general QA and testing glossary. Definitions are plain, accurate, and in
 *  the reader's own likely order of need. Kept as data so the page can search
 *  and group it without touching the copy. */
export const GLOSSARY: GlossaryEntry[] = [
  {
    term: "Acceptance criteria",
    definition:
      "The specific, checkable conditions a feature must meet to count as done. Good ones read like ready-made test cases, which is not a coincidence.",
  },
  {
    term: "Acceptance testing",
    definition:
      "Checking whether the software does what the user actually needed, as opposed to merely what the spec said. Often the last gate before release.",
  },
  {
    term: "Accessibility testing",
    definition:
      "Checking that software works for people using assistive technology or a keyboard, not just a mouse and perfect eyesight. A quality effort that ignores it is quality for some.",
  },
  {
    term: "API",
    aliases: ["Application Programming Interface"],
    definition:
      "The contract by which one piece of software talks to another. Testing an API means checking that contract directly, below the visible interface.",
  },
  {
    term: "Assertion",
    definition:
      "The line in a test that states what must be true. Without one you have a script that clicks things and a comforting illusion.",
  },
  {
    term: "Boundary value analysis",
    definition:
      "Testing at the edges of an input range and just past them, because that is where off-by-one bugs live. For a field accepting 1 to 10, you test 0, 1, 10, and 11.",
  },
  {
    term: "Bug",
    aliases: ["Defect"],
    definition:
      "A place where the software behaves differently from what was intended or required. Also called a defect. See also error, failure, fault.",
  },
  {
    term: "Continuous integration",
    aliases: ["CI"],
    definition:
      "Running your build and tests automatically on a shared server every time code is pushed, so breakage is caught in minutes rather than on Friday afternoon.",
  },
  {
    term: "Continuous delivery",
    aliases: ["CD", "Continuous deployment"],
    definition:
      "Extending continuous integration so that code which passes its tests can be released automatically, or at the press of a single button.",
  },
  {
    term: "Component testing",
    aliases: ["Unit testing"],
    definition:
      "Testing a single unit of code in isolation from the rest of the system. Also called unit testing.",
  },
  {
    term: "Coverage",
    definition:
      "How much of the code, or of the requirements, your tests actually exercise. High coverage is reassuring, not proof; you can run a line without checking it does the right thing.",
  },
  {
    term: "Cypress",
    definition:
      "A JavaScript end-to-end testing framework that runs in the browser. The main automation tool in this course, chosen because it speaks the language you already know.",
  },
  {
    term: "Data-driven testing",
    definition:
      "Running the same test logic over many sets of input data, rather than copying and pasting the test once per case.",
  },
  {
    term: "Decision table",
    definition:
      "A grid of every combination of conditions and the outcome each should produce. Used when behaviour depends on several inputs at once and testing them one at a time would miss the interactions.",
  },
  {
    term: "DOM",
    aliases: ["Document Object Model"],
    definition:
      "The browser's live, structured representation of a page. Your selectors query it and your tests inspect it.",
  },
  {
    term: "Edge case",
    definition:
      "An input or situation at the extremes of what is expected, where behaviour is most likely to surprise you. The interesting part of the map.",
  },
  {
    term: "End-to-end testing",
    aliases: ["E2E"],
    definition:
      "Driving the whole system the way a user would, from the interface down, to check that the parts work together and not just alone.",
  },
  {
    term: "Environment",
    definition:
      "The specific setup a test ran in: browser, operating system, data, and versions. Half of every 'cannot reproduce' turns out to be a mismatched environment.",
  },
  {
    term: "Equivalence partitioning",
    definition:
      "Grouping inputs that all behave the same way and testing one representative from each group, instead of every value. The technique that makes thorough testing finite.",
  },
  {
    term: "Error, failure, fault",
    definition:
      "In careful usage: a person makes an error, which introduces a fault (a defect) in the code, which may cause a failure when the code runs. Interviews sometimes ask for the distinction.",
  },
  {
    term: "Exploratory testing",
    definition:
      "Skilled, unscripted investigation of the software, where you design and run tests as you learn. Not random clicking, though it can look like it from across the room.",
  },
  {
    term: "Fixture",
    definition:
      "A file of predefined test data that a test loads, so the data lives in one place and the test itself reads cleanly.",
  },
  {
    term: "Flaky test",
    definition:
      "A test that passes and fails without the code changing, usually thanks to timing or a dependency it should have controlled. Trusted less than a coin flip and roughly twice as annoying.",
  },
  {
    term: "Functional testing",
    definition:
      "Checking that the software does the right thing, measured against a requirement.",
  },
  {
    term: "Happy path",
    definition:
      "The scenario where everything goes right and the user behaves. Necessary to test, and never sufficient on its own.",
  },
  {
    term: "Headless and headed",
    definition:
      "A test run without a visible browser window (headless) versus with one (headed). Headless is faster and how a CI server runs; headed is for watching tests while you build them.",
  },
  {
    term: "HTTP methods",
    definition:
      "The verbs of the web. GET reads, POST creates, PUT updates, DELETE removes.",
  },
  {
    term: "Integration testing",
    definition:
      "Checking that two or more components work together at the point where they meet.",
  },
  {
    term: "ISTQB",
    definition:
      "A widely recognised testing certification body whose Foundation syllabus is a free and decent source of shared vocabulary. Read it for the concepts; the exam is optional.",
  },
  {
    term: "JSON",
    definition:
      "A lightweight data format that looks like a JavaScript object. How most APIs send their data, which is why your JavaScript background helps.",
  },
  {
    term: "Mock and stub",
    definition:
      "Stand-ins for a real dependency, so a test does not rely on something slow, flaky, or absent. A stub returns canned answers; a mock also records how it was called.",
  },
  {
    term: "Negative testing",
    definition:
      "Deliberately feeding bad input to check the software fails safely and helpfully, rather than falling over. Testing the unhappy path is the job, not pessimism.",
  },
  {
    term: "Page Object Model",
    definition:
      "A pattern that keeps the selectors and actions for a page in one place, so tests read at a high level and a redesign breaks one file instead of fifty.",
  },
  {
    term: "Playwright",
    definition:
      "Another major browser automation framework. Worth knowing it exists, even though this course leans on Cypress.",
  },
  {
    term: "Postman",
    definition:
      "A tool for sending API requests and asserting on the responses, with no code required to get started and JavaScript available when you want it.",
  },
  {
    term: "Priority",
    definition:
      "How soon a bug should be fixed. A business call, and distinct from severity: a typo in the logo can be high priority yet low severity.",
  },
  {
    term: "QA and QC",
    aliases: ["Quality assurance", "Quality control"],
    definition:
      "Quality assurance is the process side, building quality in; quality control is checking the finished product for defects. In practice the titles blur, and most 'QA' roles do plenty of QC.",
  },
  {
    term: "Regression testing",
    definition:
      "Re-checking things that used to work, to catch what a change quietly broke. The quiet majority of real testing.",
  },
  {
    term: "Requirement",
    definition:
      "A statement of what the software should do. Test cases trace back to these, and where a requirement is vague, testing gets interesting.",
  },
  {
    term: "REST",
    definition:
      "A common convention for APIs that maps tidy URLs to HTTP methods. Not a law, but a widely followed habit.",
  },
  {
    term: "Risk based testing",
    definition:
      "Spending your limited testing time where a failure would hurt most, rather than spreading it evenly and running out of week. A broken checkout is a catastrophe; a misaligned footer is a Tuesday.",
  },
  {
    term: "Sanity test",
    definition:
      "A quick, narrow check that one specific function works after a change, before you commit to deeper testing.",
  },
  {
    term: "Selector",
    definition:
      "How a test locates an element on a page, the same thinking as a CSS selector. Prefer stable attributes, like data-test, over selectors based on styling that a redesign will rename.",
  },
  {
    term: "Severity",
    definition:
      "How bad a bug's impact is. A technical call, and distinct from priority: something can be severe but rare, or minor but urgent.",
  },
  {
    term: "Smoke test",
    definition:
      "A fast, shallow pass over the core functions to decide whether a build is even worth testing further. If it fails, do not bother with the rest yet.",
  },
  {
    term: "Status code",
    definition:
      "The number an HTTP response returns to say how it went. 200 fine, 400 your fault, 401 not allowed, 404 not found, 500 the server broke.",
  },
  {
    term: "System testing",
    definition:
      "Testing the complete, integrated system as a whole, rather than any single part of it.",
  },
  {
    term: "Test case",
    definition:
      "A single documented check: a title, any preconditions, the steps, and the expected result.",
  },
  {
    term: "Test oracle",
    definition:
      "The source of truth a test uses to decide pass or fail: a specification, a known-good result, or a rule you can state.",
  },
  {
    term: "Test plan",
    definition:
      "A short document setting out what you will test, what you will not, and why. A page is usually plenty.",
  },
  {
    term: "Test runner",
    definition:
      "The tool that executes your tests and reports the results, such as Cypress.",
  },
  {
    term: "Test suite",
    definition: "A collection of related tests that are run together.",
  },
  {
    term: "Traceability",
    definition:
      "The links from requirements to the test cases that cover them, so you can see at a glance what is tested and, more usefully, what is not.",
  },
  {
    term: "User acceptance testing",
    aliases: ["UAT"],
    definition:
      "Testing by, or on behalf of, the eventual users, to confirm the software meets their real needs before it goes live.",
  },
  {
    term: "Verification and validation",
    definition:
      "Verification asks 'did we build it right', against the spec. Validation asks 'did we build the right thing', against the actual need. You can pass one and fail the other.",
  },
];
