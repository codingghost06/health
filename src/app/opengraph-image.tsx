import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
// Generated at build time (required for static export).
export const dynamic = "force-static";
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
          background: "linear-gradient(135deg,#061a35 0%,#0b2648 58%,#00855d 150%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 10, height: 40, background: "#0b2648", borderRadius: 2 }} />
            <div style={{ position: "absolute", width: 40, height: 10, background: "#0b2648", borderRadius: 2 }} />
            <div style={{ position: "absolute", right: 8, top: 9, width: 30, height: 8, background: "#00855d", borderRadius: 6, transform: "rotate(-42deg)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 16, letterSpacing: 4, color: "#10a394", textTransform: "uppercase" }}>{site.tagline}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            More clarity across your revenue cycle.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,.75)", maxWidth: 900 }}>
            Medical billing, coding, claims, denials, credentialing and receivables support from Houston, Texas.
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 22, color: "rgba(255,255,255,.8)" }}>
          <span>HIPAA-compliant workflows</span>
          <span>·</span>
          <span>Clear communication</span>
          <span>·</span>
          <span>Structured follow-up</span>
        </div>
      </div>
    ),
    size,
  );
}
