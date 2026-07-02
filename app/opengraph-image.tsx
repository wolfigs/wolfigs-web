import { ImageResponse } from "next/og";

export const alt = "Wolfigs — Deterministic developer tools";
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3 2.5 20h19L12 3Z"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M12 10.5 8 20"
              stroke="#2fb376"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -2 }}>Wolfigs</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          Software should be provable.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#a1a1a1" }}>
          Deterministic developer tools. Same input, same output — byte for byte.
        </div>
      </div>
    ),
    size
  );
}
