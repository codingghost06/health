/**
 * Static build for GitHub Pages.
 *
 * GitHub Pages only serves files, so the `/api/lead` Route Handler (POST) cannot
 * exist in the export — Next refuses to export non-GET route handlers. We move it
 * aside for the duration of the build and always restore it afterwards.
 *
 * Usage: NEXT_PUBLIC_BASE_PATH=/health node scripts/build-pages.mjs
 */
import { spawnSync } from "node:child_process";
import { existsSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const apiDir = join(root, "src/app/api");
const parked = join(root, ".api-parked");

if (existsSync(parked)) {
  console.error("Found a leftover .api-parked directory — restore it to src/app/api before building.");
  process.exit(1);
}

renameSync(apiDir, parked);
let status = 1;
try {
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: { ...process.env, DEPLOY_TARGET: "github-pages", NEXT_PUBLIC_DEPLOY_TARGET: "github-pages" },
    shell: process.platform === "win32",
  });
  status = result.status ?? 1;
} finally {
  renameSync(parked, apiDir);
}

if (status === 0) {
  // Files under `_next/` start with an underscore; Jekyll would ignore them without this.
  writeFileSync(join(root, "out", ".nojekyll"), "");
  console.log("\nStatic site written to ./out (with .nojekyll).");
}
process.exit(status);
