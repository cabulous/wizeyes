import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { lablog as app } from "@/content/apps/lablog/app";
import { googleFont as font } from "@/lib/og";
import { plainText } from "@/lib/markdown";

export const alt = `${app.name}: ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The hero title, "Every result, *in its range*.", split around its one
// *emphasis*. Any other shape is drawn as plain text without a bracket.
const emphasis = /^([^*]*)\*([^*]+)\*([^*]*)$/.exec(app.hero.title);
const [lead, mark, tail] = emphasis
  ? emphasis.slice(1)
  : [plainText(app.hero.title), "", ""];
const label = `${app.name} · ${app.platforms.join(" & ")}`.toUpperCase();
const detail = app.hero.facts.join(" · ");

/** Lab paper ruled in a fine grid, the tube icon, and the title on its range bracket, like the page. */
export default async function OpenGraphImage() {
  const icon = readFileSync(path.join(process.cwd(), "public", app.icon.src));
  const [display, italic, mono] = await Promise.all([
    font("Instrument+Serif", lead + tail),
    font("Instrument+Serif:ital@1", mark),
    font("Geist+Mono:wght@500", label + detail),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: "0 88px 0 64px",
        backgroundColor: app.themeColor,
        backgroundImage:
          "linear-gradient(rgba(21,25,28,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,25,28,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        color: "#15191c",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
      <img
        alt=""
        src={`data:image/png;base64,${icon.toString("base64")}`}
        width={330}
        height={330}
        style={{
          borderRadius: 76,
          background: "#ffffff",
          transform: "rotate(-4deg)",
          boxShadow:
            "0 0 0 1px rgba(21,25,28,0.08), 0 30px 50px -18px rgba(120, 60, 20, 0.35)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: "#b4440c",
            letterSpacing: 4,
          }}
        >
          {label}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            fontFamily: "Instrument Serif",
            fontSize: 104,
            lineHeight: 1,
            marginTop: 20,
          }}
        >
          <span style={{ marginRight: 24 }}>{lead.trim()}</span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Instrument Serif Italic",
              color: "#b4440c",
            }}
          >
            {mark}
            {/* The page's range bracket under the emphasis. */}
            <svg
              width="100%"
              height="14"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              style={{ marginTop: -4 }}
            >
              <path
                d="M1 1v10M1 6h198M199 1v10"
                fill="none"
                stroke="#e2611a"
                strokeWidth="2.5"
                opacity="0.8"
              />
            </svg>
          </span>
          <span>{tail}</span>
        </div>
        <div
          style={{
            fontFamily: "Geist Mono",
            fontSize: 19,
            color: "#4a5257",
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
        { name: "Instrument Serif", data: display, weight: 400 },
        {
          name: "Instrument Serif Italic",
          data: italic,
          weight: 400,
          style: "italic",
        },
        { name: "Geist Mono", data: mono, weight: 500 },
      ],
    },
  );
}
