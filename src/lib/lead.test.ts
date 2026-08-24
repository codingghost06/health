import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseLead } from "./lead.ts";

const good = {
  practice: "  Atlanta Cardiology Group ",
  firstName: "Ada",
  lastName: "Lovelace",
  email: "ada@example.com",
  phone: "+1 (415) 555-0100",
  specialty: "Cardiology",
  service: "Denial Management",
  message: "Aging AR",
  website: "",
  startedAt: 1_700_000_000_000,
};

describe("parseLead()", () => {
  it("accepts and normalises a valid submission", () => {
    const r = parseLead(good);
    assert.ok(r.success);
    assert.equal(r.data.practice, "Atlanta Cardiology Group");
    assert.equal(r.data.specialty, "Cardiology");
  });

  it("reports one message per invalid field", () => {
    const r = parseLead({ ...good, practice: "", email: "nope", phone: "123", specialty: "Astrology", service: "" });
    assert.equal(r.success, false);
    assert.deepEqual(Object.keys(r.errors!).sort(), ["email", "phone", "practice", "service", "specialty"]);
    assert.equal(r.errors!.email, "Enter a valid email address.");
  });

  it("rejects a filled honeypot and garbage input", () => {
    assert.equal(parseLead({ ...good, website: "http://spam" }).success, false);
    assert.equal(parseLead(null).success, false);
    assert.equal(parseLead("x").success, false);
  });

  it("enforces length caps", () => {
    const r = parseLead({ ...good, message: "x".repeat(2001) });
    assert.equal(r.success, false);
    assert.match(r.errors!.message!, /2000/);
  });
});
