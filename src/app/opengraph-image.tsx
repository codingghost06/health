import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          background: "linear-gradient(135deg,#0b1f3a 0%,#0f2f57 55%,#124c8f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg,#1e7be0,#0f427c)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 10, height: 40, background: "#fff", borderRadius: 3 }} />
            <div style={{ position: "absolute", width: 40, height: 10, background: "#fff", borderRadius: 3 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 16, letterSpacing: 4, color: "#10a394", textTransform: "uppercase" }}>{site.tagline}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            Stop Losing Revenue. Start Getting Paid What You Deserve.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,.75)", maxWidth: 900 }}>
            Medical billing, RCM, coding, credentialing & denial management for 4,800+ providers across all 50 states.
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 22, color: "rgba(255,255,255,.8)" }}>
          <span>98.2% first-pass claim rate</span>
          <span>·</span>
          <span>$2.4B+ recovered</span>
          <span>·</span>
          <span>500+ payers</span>
        </div>
      </div>
    ),
    size,
  );
}
