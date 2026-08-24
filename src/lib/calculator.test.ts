import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { calculate, clamp, defaults, formatCurrency, limits, validateField } from "./calculator.ts";

describe("calculate()", () => {
  it("reproduces the reference site's default output", () => {
    const r = calculate(defaults);
    assert.equal(Math.round(r.current), 86_580);
    assert.equal(Math.round(r.projected), 102_120);
    assert.equal(Math.round(r.arGain), 9_900);
    assert.equal(Math.round(r.monthly), 25_440);
    assert.equal(Math.round(r.yearly), 305_280);
    assert.equal(r.gap, 14);
  });

  it("matches the reference for 1,000 visits", () => {
    const r = calculate({ ...defaults, visits: 1000 });
    assert.equal(Math.round(r.current), 144_300);
    assert.equal(Math.round(r.projected), 170_200);
    assert.equal(Math.round(r.monthly), 35_800);
    assert.equal(Math.round(r.yearly), 429_600);
  });

  it("applies the specialty multiplier to projected collections only", () => {
    const r = calculate({ ...defaults, specialty: 1.12 });
    assert.equal(Math.round(r.current), 86_580);
    assert.equal(Math.round(r.projected), Math.round(600 * 185 * 0.92 * 1.12));
  });

  it("never reports a negative opportunity or gap", () => {
    const r = calculate({ ...defaults, currentNcr: 99, improvedNcr: 90, ar: 0 });
    assert.equal(r.monthly, 0);
    assert.equal(r.yearly, 0);
    assert.equal(r.gap, 0);
  });
});

describe("clamp() / validateField()", () => {
  it("clamps to limits and treats NaN as the minimum", () => {
    assert.equal(clamp(-50, limits.allowed), limits.allowed.min);
    assert.equal(clamp(1e9, limits.ar), limits.ar.max);
    assert.equal(clamp(Number.NaN, limits.currentNcr), limits.currentNcr.min);
  });

  it("explains out-of-range values in user terms", () => {
    assert.equal(validateField("currentNcr", 150), "Maximum is 99%.");
    assert.equal(validateField("allowed", -50), "Minimum is $20.");
    assert.equal(validateField("visits", 600), null);
    assert.equal(validateField("ar", Number.NaN), "Enter a number.");
  });
});

describe("formatCurrency()", () => {
  it("formats whole US dollars", () => {
    assert.equal(formatCurrency(25440), "$25,440");
    assert.equal(formatCurrency(2640216000), "$2,640,216,000");
  });
});
