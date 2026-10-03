import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "Prestigious Consultancy corporate training and consultancy";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08172f",
          color: "#ffffff",
          border: "18px solid #d4af6d",
        }}
      >
        <div style={{ color: "#d4af6d", fontSize: 26, marginBottom: 28 }}>
          {siteConfig.brandName}
        </div>
        <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
          Corporate Training
        </div>
        <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
          &amp; Consultancy
        </div>
        <div style={{ color: "#e8e2d5", fontSize: 28, marginTop: 28 }}>
          Nairobi, Kenya
        </div>
      </div>
    ),
    size,
  );
}