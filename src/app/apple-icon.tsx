import { ImageResponse } from "next/og";

// Generated at build time (required for static export).
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#1e7be0 0%,#0f427c 100%)",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", width: 24, height: 96, background: "#fff", borderRadius: 8 }} />
        <div style={{ position: "absolute", width: 96, height: 24, background: "#fff", borderRadius: 8 }} />
        <div style={{ position: "absolute", right: 30, bottom: 30, width: 26, height: 26, borderRadius: 13, background: "#10a394", border: "5px solid #fff" }} />
      </div>
    ),
    size,
  );
}
