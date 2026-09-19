import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  // Lead delivery is deliberately disabled until Revplus confirms a recipient
  // inbox and approves a server-side delivery service. Do not read, store, log
  // or forward the submitted payload in the meantime.
  return NextResponse.json(
    {
      ok: false,
      message: "Online consultation delivery is not configured yet. Please call Revplus directly.",
    },
    { status: 503 },
  );
}
