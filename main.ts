// main.ts — news-image-20261118 entrypoint.
//
// The entry is a single pre-built front-page image (entry.png). This program
// copies it byte for byte into the output directory, then reads the copy back
// and checks it matches, so every run writes exactly the same bytes.
//
// The image itself was composed for Wednesday 18 November 2026: a newspaper
// front page ("THE WORLD") typeset from verified news of the day, with
// editorial illustrations generated for the three photo stories. The
// front-page text is set in real fonts, so no headline or caption can come
// out garbled. No network is used at run time; everything the program needs
// ships in this repo.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png");

// make.fun runs the program with MAKEFUN_OUTPUT_DIR set; default to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.png");

const image = readFileSync(sourcePath);
if (image.length === 0) {
  throw new Error("bundled image is empty");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, image);

// Verify the write so a truncated or altered copy fails loudly instead of
// silently submitting different bytes.
const written = readFileSync(outputPath);
if (!image.equals(written)) {
  throw new Error("output does not match the bundled image");
}

console.log(`wrote ${outputPath} (${written.length} bytes, verified)`);
