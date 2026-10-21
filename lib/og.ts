/**
 * Fetches just the glyphs a social card needs from Google Fonts, at build
 * time. `family` is a css2 family spec such as "Figtree:wght@500".
 */
export async function googleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer> {
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
