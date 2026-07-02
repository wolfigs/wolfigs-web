import { ImageResponse } from "next/og";

export const alt = "Prism — the build-time topology compiler for Java";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#2fb376" }}>Prism</div>
          <div
            style={{
              fontSize: 20,
              color: "#a1a1a1",
              border: "1px solid #333",
              borderRadius: 999,
              padding: "4px 16px",
            }}
          >
            by Wolfigs
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          Topology is a compile flag.
        </div>
        <div style={{ marginTop: 32, fontSize: 29, color: "#a1a1a1", lineHeight: 1.4 }}>
          Develop like a monolith. Deploy like microservices.
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 56,
            fontSize: 24,
            fontFamily: "monospace",
            color: "#666",
          }}
        >
          <span style={{ color: "#2fb376" }}>$</span>
          <span>mvn prism:compile -Dprism.topology=services</span>
        </div>
      </div>
    ),
    size
  );
}
