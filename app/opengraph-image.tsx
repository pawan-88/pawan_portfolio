import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal";

export const runtime = "edge";
export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const profileUrl = new URL(personalInfo.profileImage, personalInfo.siteUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #050816 0%, #0a1628 50%, #050816 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(0,245,212,0.25)",
            borderRadius: "24px",
            padding: "48px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
            <div
              style={{
                fontSize: 18,
                color: "#00F5D4",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Portfolio
            </div>
            <div style={{ fontSize: 56, fontWeight: 700, color: "white", lineHeight: 1.1 }}>
              {personalInfo.name}
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#94a3b8",
                marginTop: 20,
                lineHeight: 1.4,
                maxWidth: 680,
              }}
            >
              {personalInfo.title}
            </div>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 12,
              }}
            >
              {["Python", "FastAPI", "AI", "Full Stack"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(0,245,212,0.3)",
                    color: "#00F5D4",
                    fontSize: 18,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginLeft: 40,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileUrl}
              alt=""
              width={280}
              height={340}
              style={{
                borderRadius: 16,
                objectFit: "cover",
                border: "2px solid rgba(0,245,212,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
