import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { savingsRoom as app } from "@/content/apps/savings-room/app";
import { googleFont as font } from "@/lib/og";

export const alt = `${app.name}: ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const headline = "Never guess your contribution room again.";
const detail = "RRSP · TFSA · FHSA · RESP · 401(k) · IRA · HSA · 529";

export default async function OpenGraphImage() {
  const icon = readFileSync(path.join(process.cwd(), "public", app.icon.src));
  const [display, sans] = await Promise.all([
    font("Fraunces:opsz,wght@72,450", headline),
    font("Figtree:wght@500", app.name.toUpperCase() + detail),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 72,
        padding: "0 88px",
        background:
          "radial-gradient(circle at 78% 30%, #f9ddd5 0%, #fbf4ee 55%)",
        color: "#2a1b15",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
      <img
        alt=""
        src={`data:image/png;base64,${icon.toString("base64")}`}
        width={340}
        height={340}
        style={{
          borderRadius: 78,
          transform: "rotate(-5deg)",
          boxShadow: "0 40px 60px -20px rgba(150,55,40,0.45)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontFamily: "Figtree",
            fontSize: 30,
            color: "#a8402f",
            letterSpacing: 3,
          }}
        >
          {app.name.toUpperCase()}
        </div>
        <div
          style={{
            fontFamily: "Fraunces",
            fontSize: 76,
            lineHeight: 1.02,
            marginTop: 18,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontFamily: "Figtree",
            fontSize: 25,
            color: "#6b564b",
            marginTop: 28,
          }}
        >
          {detail}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: display, weight: 400 },
        { name: "Figtree", data: sans, weight: 500 },
      ],
    },
  );
}
