import { readFileSync } from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { familyAssets as app } from "@/content/apps/family-assets/app";
import { googleFont as font } from "@/lib/og";
import { plainText } from "@/lib/markdown";

export const alt = `${app.name}: ${app.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The hero title, "All you own, *less all you owe*.", split around its one
// *emphasis*. Any other shape is drawn as plain text without the rules.
const emphasis = /^([^*]*)\*([^*]+)\*([^*]*)$/.exec(app.hero.title);
const [lead, mark, tail] = emphasis
  ? emphasis.slice(1)
  : [plainText(app.hero.title), "", ""];
const label = `${app.name} · ${app.platforms.join(" & ")}`.toUpperCase();
const detail = app.hero.facts.join(" · ");

/** Account-book paper with its red margin rule, the pig icon, and the title ruled off twice, like the page. */
export default async function OpenGraphImage() {
  const icon = readFileSync(path.join(process.cwd(), "public", app.icon.src));
  const [display, italic, sans] = await Promise.all([
    font("DM+Serif+Display", lead + tail),
    font("DM+Serif+Display:ital@1", mark),
    font("Manrope:wght@600", label + detail),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: "0 80px 0 72px",
        backgroundColor: app.themeColor,
        backgroundImage:
          "linear-gradient(90deg, transparent 40px, rgba(208,110,93,0.45) 40px, rgba(208,110,93,0.45) 42px, transparent 42px), linear-gradient(rgba(43,31,27,0.07) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 100% 42px",
        color: "#2b1f1b",
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
          transform: "rotate(-4deg)",
          boxShadow:
            "0 0 0 1px rgba(43,31,27,0.08), 0 30px 50px -18px rgba(150, 80, 50, 0.4)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontSize: 22,
            color: "#a5473a",
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
            fontFamily: "DM Serif Display",
            fontSize: 96,
            lineHeight: 1.04,
            marginTop: 18,
          }}
        >
          <span style={{ marginRight: 22 }}>{lead.trim()}</span>
          {/* The emphasis keeps the closing punctuation on its line. */}
          <span style={{ display: "flex", alignItems: "flex-end" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "DM Serif Display Italic",
                color: "#a5473a",
              }}
            >
              {mark}
              {/* The page's double rule under the emphasis. */}
              <span
                style={{
                  display: "flex",
                  height: 12,
                  marginTop: -2,
                  borderTop: "4px solid rgba(208,110,93,0.8)",
                  borderBottom: "4px solid rgba(208,110,93,0.8)",
                }}
              />
            </span>
            <span style={{ marginBottom: 14 }}>{tail}</span>
          </span>
        </div>
        <div
          style={{
            fontFamily: "Manrope",
            fontSize: 22,
            color: "#5c4b44",
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
        { name: "DM Serif Display", data: display, weight: 400 },
        {
          name: "DM Serif Display Italic",
          data: italic,
          weight: 400,
          style: "italic",
        },
        { name: "Manrope", data: sans, weight: 600 },
      ],
    },
  );
}
