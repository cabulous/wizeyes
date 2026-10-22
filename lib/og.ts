/**
 * Fetches just the glyphs a social card needs from Google Fonts, at build
 * time. `family` is a css2 family spec such as "Figtree:wght@500".
 */
export async function googleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer> {
  const cssResponse = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
  );
  if (!cssResponse.ok) {
    throw new Error(
      `Could not load ${family} for the social card (HTTP ${cssResponse.status}).`,
    );
  }
  const css = await cssResponse.text();
  const src = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!src) throw new Error(`Could not load ${family} for the social card.`);
  // An error page is not a font: fail here, not deep inside the image renderer.
  const response = await fetch(src);
  if (!response.ok) {
    throw new Error(
      `Could not download ${family} for the social card (HTTP ${response.status}).`,
    );
  }
  return response.arrayBuffer();
}
