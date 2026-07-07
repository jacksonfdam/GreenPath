import { getAllCodelabs } from "./codelabs";

/** Every step id across every codelab, in order. Used for the overall
 *  progress bar and dashboard totals. */
export function getAllStepIds(): string[] {
  return getAllCodelabs().flatMap((codelab) => codelab.steps.map((s) => s.id));
}
