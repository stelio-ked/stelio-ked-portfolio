import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const dynamic = "force-static"; // exigido por output: "export"
export const alt = `${personalInfo.name} — ${personalInfo.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de prévia do link (tema Aurora). Textos vêm de lib/data.ts.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(6,214,160,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.25), transparent 45%), #06060e",
          color: "#eeeef5",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            borderRadius: 3,
            marginBottom: 36,
            background: "linear-gradient(90deg, #06d6a0, #3b82f6, #8b5cf6)",
          }}
        />
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>
          {personalInfo.name}
        </div>
        <div style={{ fontSize: 44, color: "#06d6a0", marginTop: 16 }}>
          {personalInfo.subtitle}
        </div>
        <div style={{ fontSize: 30, color: "#7a7a9e", marginTop: 28, maxWidth: 900 }}>
          {personalInfo.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
