import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Lead } from "./lead.ts";
import {
  buildWeb3FormsPayload,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_SUBJECT,
} from "./web3forms.ts";

const lead: Lead = {
  practice: "Houston Medical Group",
  firstName: "Avery",
  lastName: "Morgan",
  email: "avery@example.com",
  phone: "+1 (832) 555-0100",
  specialty: "Cardiology",
  service: "Denial Management",
  message: "We would like to discuss our follow-up workflow.",
  website: "",
  startedAt: 1_700_000_000_000,
};

describe("Web3Forms integration", () => {
  it("uses the approved endpoint and subject", () => {
    assert.equal(WEB3FORMS_ENDPOINT, "https://api.web3forms.com/submit");
    assert.equal(WEB3FORMS_SUBJECT, "Revplus Medical Solutions — New Consultation Request");
  });

  it("maps every consultation field into the browser-safe payload", () => {
    const payload = buildWeb3FormsPayload(lead);
    assert.equal(payload.access_key, WEB3FORMS_ACCESS_KEY);
    assert.equal(payload.practice, lead.practice);
    assert.equal(payload.first_name, lead.firstName);
    assert.equal(payload.last_name, lead.lastName);
    assert.equal(payload.email, lead.email);
    assert.equal(payload.phone, lead.phone);
    assert.equal(payload.specialty, lead.specialty);
    assert.equal(payload.service, lead.service);
    assert.equal(payload.message, lead.message);
    assert.equal(payload.botcheck, "");
    assert.equal("startedAt" in payload, false);
  });
});
