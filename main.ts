// One-Line Laugh-Off entry: writes exactly one funny line to entry.txt.
//
// Why the line works: a psychic's whole job is seeing the future, so when she
// refunds the client because she "saw no future in me bothering her again",
// she is using that gift to reject HIM. The service provider turns away the
// customer, and "whispering" sells the deadpan: she delivers the insult
// quietly, as if it were a professional courtesy.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The psychic refunded my ten dollars, whispering that she saw no future in me bothering her again.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// \r, \n, NEL (U+0085) and the Unicode line/paragraph separators
// (U+2028, U+2029). Built from a string so the source holds only ASCII escapes.
const LINE_BREAKS = new RegExp("[\\r\\n\\u0085\\u2028\\u2029]");

function validate(line: string): void {
  // Count code points, not UTF-16 units, so an emoji counts as one character.
  const length = [...line].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Line must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${length}.`,
    );
  }
  if (LINE_BREAKS.test(line)) {
    throw new Error("Line must be a single line (no line breaks).");
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
}

function main(): void {
  validate(LINE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  // Written without a trailing newline so the file is exactly the line.
  writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
}

try {
  main();
} catch (err) {
  // Fail with a clear message and a non-zero exit code instead of a stack trace.
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}
