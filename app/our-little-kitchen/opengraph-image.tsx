import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { ourLittleKitchen as app } from "@/content/apps/our-little-kitchen/app";
import { googleFont as font } from "@/lib/og";
import { plainText } from "@/lib/markdown";

export const alt = `${app.name}: ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The hero title, "What shall we *eat tonight*?", split around its one
// *emphasis*. Any other shape is drawn as plain text without a scribble.
const emphasis = /^([^*]*)\*([^*]+)\*([^*]*)$/.exec(app.hero.title);
const [lead, mark, tail] = emphasis
  ? emphasis.slice(1)
  : [plainText(app.hero.title), "", ""];
const detail = app.hero.facts.join(" · ");

/** The app's warm pink ground, its accent, and the icon's drawing, like the page. */
export default async function OpenGraphImage() {
  const icon = readFileSync(path.join(process.cwd(), "public", app.icon.src));
  const [display, sans] = await Promise.all([
    font("Young+Serif", lead + mark + tail),
    font("Nunito:wght@700", app.name.toUpperCase() + detail),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 80px",
        background: app.themeColor,
        color: "#1a1614",
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
          boxShadow: "0 30px 50px -18px rgba(150, 70, 40, 0.4)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontFamily: "Nunito",
            fontSize: 26,
            color: "#a3431a",
            letterSpacing: 3,
          }}
        >
          {app.name.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Young Serif",
            fontSize: 76,
            lineHeight: 1.08,
            marginTop: 18,
          }}
        >
          <span style={{ marginRight: 18 }}>{lead.trim()}</span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#a3431a",
            }}
          >
            {mark}
            {/* The page's crayon scribble under the emphasis. */}
            <svg
              width="100%"
              height="18"
              viewBox="0 0 200 16"
              preserveAspectRatio="none"
              style={{ marginTop: -6 }}
            >
              <path
                d="M3 10c30-5 62-6 96-4 34 2 66 1 98-3M12 13c40-4 90-4 170-2"
                fill="none"
                stroke="#c0501f"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </span>
          <span>{tail}</span>
        </div>
        <div
          style={{
            fontFamily: "Nunito",
            fontSize: 24,
            color: "#5a4c46",
            marginTop: 26,
          }}
        >
          {detail}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Young Serif", data: display, weight: 400 },
        { name: "Nunito", data: sans, weight: 700 },
      ],
    },
  );
}
