import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { spendwise as app } from "@/content/apps/spendwise/app";

export const alt = `${app.name}: ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const lines = ["Let your bank alerts", "do the bookkeeping"];
const detail = app.hero.facts.join(" · ");

/** Fetches just the glyphs we need from Google Fonts, at build time. */
async function font(family: string, text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
    )
  ).text();
  const src = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!src) throw new Error(`Could not load ${family} for the social card.`);
  return (await fetch(src)).arrayBuffer();
}

/** Mint, navy and pink from the icon, in the page's flat sticker style. */
export default async function OpenGraphImage() {
  const icon = readFileSync(path.join(process.cwd(), "public", app.icon.src));
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 72,
        padding: "0 88px",
        background: "#e0f2ef",
        color: "#002537",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
      <img
        alt=""
        src={`data:image/png;base64,${icon.toString("base64")}`}
        width={320}
        height={320}
        style={{
          borderRadius: 74,
          border: "4px solid #002537",
          transform: "rotate(-5deg)",
          boxShadow: "12px 12px 0 0 #002537",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "4px 18px",
            borderRadius: 999,
            background: "#fd9aa8",
            fontFamily: "Instrument Sans",
            fontSize: 26,
            letterSpacing: 3,
          }}
        >
          {app.name.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bricolage",
            fontSize: 80,
            lineHeight: 1,
            letterSpacing: -2,
            marginTop: 26,
          }}
        >
          <span>{lines[0]}</span>
          <span style={{ display: "flex" }}>
            <span
              style={{
                background:
                  "linear-gradient(to bottom, transparent 56%, #fd9aa8 56%, #fd9aa8 92%, transparent 92%)",
              }}
            >
              {lines[1]}
            </span>
            .
          </span>
        </div>
        <div
          style={{
            fontFamily: "Instrument Sans",
            fontSize: 23,
            color: "#2f4f5f",
            marginTop: 30,
          }}
        >
          {detail}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Bricolage",
          data: await font(
            "Bricolage+Grotesque:opsz,wdth,wght@96,96,740",
            lines.join("") + ".",
          ),
          weight: 700,
        },
        {
          name: "Instrument Sans",
          data: await font(
            "Instrument+Sans:wght@600",
            app.name.toUpperCase() + detail,
          ),
          weight: 600,
        },
      ],
    },
  );
}
