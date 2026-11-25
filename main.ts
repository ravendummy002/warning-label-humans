import { mkdirSync, writeFileSync } from "node:fs";

// Warning Label for Humans: one line, at most 160 characters.
// The joke lands in the last few words: the human agrees out loud,
// disagrees silently, and the bill comes due in a future argument.
const LINE =
  "WARNING: This human agrees with you out loud, disagrees with you silently, and will quote it back to you, word for word, in an argument in 2027.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
