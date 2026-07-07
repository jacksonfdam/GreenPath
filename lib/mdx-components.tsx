import type { MDXComponents } from "mdx/types";
import Step from "@/components/Step";
import Checkpoint from "@/components/Checkpoint";
import Terminal from "@/components/Terminal";
import MacNote from "@/components/MacNote";
import Callout from "@/components/Callout";
import DocLink from "@/components/DocLink";
import CodeFile from "@/components/CodeFile";
import Exercise from "@/components/Exercise";

/** The component map handed to compileMDX so codelab authors can use these
 *  tags directly in MDX. */
export const mdxComponents: MDXComponents = {
  Step,
  Checkpoint,
  Terminal,
  MacNote,
  Callout,
  DocLink,
  CodeFile,
  Exercise,
};
