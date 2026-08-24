import "server-only";
import { Resend } from "resend";
import { site } from "@/content/site";
import type { Lead } from "@/lib/lead";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] as string);

export const LEAD_SUBJECT = "New Lead — Health Billing Revenue Audit Request";

function rows(lead: Lead): [string, string][] {
  return [
    ["Practice / Organization", lead.practice],
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Specialty", lead.specialty],
    ["Service of interest", lead.service],
    ["Current challenges", lead.message || "—"],
  ];
}

export function leadEmailText(lead: Lead) {
  return [LEAD_SUBJECT, "", ...rows(lead).map(([k, v]) => `${k}: ${v}`), "", `Sent from ${site.url}/free-audit`].join("\n");
}

export function leadEmailHtml(lead: Lead) {
  const tr = rows(lead)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e1e8f0;color:#5c6f82;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #e1e8f0;color:#152130;font-size:14px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="margin:0;background:#f6f9fc;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <div style="max-width:600px;margin:24px auto;background:#fff;border:1px solid #e1e8f0;border-radius:12px;overflow:hidden">
    <div style="background:#0b1f3a;color:#fff;padding:20px 24px"><div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#10a394">${escapeHtml(site.name)}</div><div style="font-size:18px;font-weight:600;margin-top:4px">${escapeHtml(LEAD_SUBJECT)}</div></div>
    <table style="width:100%;border-collapse:collapse">${tr}</table>
    <div style="padding:14px 24px;color:#8a9bab;font-size:12px">Reply directly to this email to reach the sender. Sent from ${escapeHtml(site.url)}/free-audit</div>
  </div></body></html>`;
}

export type SendResult = { ok: true; id?: string } | { ok: false; reason: "not_configured" | "provider_error" };

/**
 * Sends the lead notification through Resend. Credentials come from env only:
 *   RESEND_API_KEY   – secret, server-side only
 *   LEAD_TO_EMAIL    – inbox that receives leads (defaults to site.leadInbox)
 *   LEAD_FROM_EMAIL  – verified sender, e.g. "Health Billing <leads@healthbilling.us>"
 */
export async function sendLeadEmail(lead: Lead): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || site.leadInbox;
  const from = process.env.LEAD_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[lead] RESEND_API_KEY missing — logging lead instead of sending.\n" + leadEmailText(lead));
      return { ok: true };
    }
    console.error("[lead] RESEND_API_KEY is not set in production.");
    return { ok: false, reason: "not_configured" };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: LEAD_SUBJECT,
      text: leadEmailText(lead),
      html: leadEmailHtml(lead),
    });
    if (error) {
      console.error("[lead] Resend error:", error);
      return { ok: false, reason: "provider_error" };
    }
    return { ok: true, id: data?.id };
  } catch (err) {
    console.error("[lead] Resend threw:", err);
    return { ok: false, reason: "provider_error" };
  }
}
