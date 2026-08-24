import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { serviceSummaries } from "./summary.ts";
import { services } from "./index.ts";

describe("service summaries", () => {
  it("stay in sync with the full service pages", () => {
    assert.equal(serviceSummaries.length, services.length);
    services.forEach((s, i) => {
      const summary = serviceSummaries[i];
      assert.deepEqual(summary, { slug: s.slug, path: s.path, name: s.name, navSub: s.navSub, icon: s.icon }, `mismatch for ${s.slug}`);
    });
  });
});
