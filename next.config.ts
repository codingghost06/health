import type { NextConfig } from "next";

/**
 * Two deploy targets share this config:
 *
 *  - default (Node host such as Vercel): full app incl. the `/api/lead` email route.
 *  - `DEPLOY_TARGET=github-pages`: static export for the client preview on GitHub
 *    Pages. Pages can't run server code, so the build script (`npm run build:pages`)
 *    excludes the API route and the form falls back to a "preview" notice.
 *    `NEXT_PUBLIC_BASE_PATH` is the repo sub-path, e.g. `/health`.
 */
const isPagesExport = process.env.DEPLOY_TARGET === "github-pages";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isPagesExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
