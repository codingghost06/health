import { NextResponse, type NextRequest } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import { parseLead } from "@/lib/lead";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MIN_FILL_TIME_MS = 3000;
const MAX_BODY_BYTES = 16 * 1024;

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  // Basic abuse protection: same-origin only, size cap, per-IP rate limit.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, message: "Invalid origin." }, { status: 403 });
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: "Request too large." }, { status: 413 });
  }

  const rl = rateLimit(`lead:${clientIp(req)}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot filled → pretend success so bots learn nothing (checked before validation
  // so the response is indistinguishable from a real submission).
  if (body && typeof body === "object" && typeof (body as { website?: unknown }).website === "string" && (body as { website: string }).website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseLead(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Please fix the highlighted fields.", errors: parsed.errors }, { status: 422 });
  }

  const lead = parsed.data;

  // Submitted implausibly fast for a human → same silent fake success.
  if (Date.now() - lead.startedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendLeadEmail(lead);
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        message:
          result.reason === "not_configured"
            ? "Our email service is not configured yet. Please call or email us directly."
            : "We couldn't send your request right now. Please try again or contact us directly.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
