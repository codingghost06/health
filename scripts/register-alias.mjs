/**
 * Lets Node's built-in test runner import app modules directly:
 *  - resolves the `@/` path alias (tsconfig `paths`) to ./src
 *  - resolves extensionless relative imports ("./foo" → "./foo.ts")
 * No bundler or extra tooling required.
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(
  `data:text/javascript,${encodeURIComponent(`
    const root = ${JSON.stringify(pathToFileURL(process.cwd() + "/src/").href)};
    const withExt = (s) => [s, s + ".ts", s + ".tsx", s + "/index.ts"];
    export async function resolve(specifier, context, next) {
      const candidates = specifier.startsWith("@/")
        ? withExt(root + specifier.slice(2))
        : specifier.startsWith(".") && !/\\.[a-z]+$/.test(specifier)
          ? withExt(specifier)
          : [specifier];
      let lastErr;
      for (const c of candidates) {
        try { return await next(c, context); } catch (e) { lastErr = e; }
      }
      throw lastErr;
    }
  `)}`,
);
