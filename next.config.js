/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Privacy policies' previous addresses; App Store listings may still link here.
      {
        source: "/taxsavingtracker",
        destination: "/savings-room/privacy",
        permanent: true,
      },
      {
        source: "/familyassets",
        destination: "/family-assets/privacy",
        permanent: true,
      },
      // Family Assets' policy and Markdown twin were briefly published under the old slug.
      {
        source: "/familyassets/privacy",
        destination: "/family-assets/privacy",
        permanent: true,
      },
      {
        source: "/familyassets.md",
        destination: "/family-assets.md",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // /savings-room.md serves the Markdown twin of an app page (app/md/[slug]/route.ts).
      { source: "/:slug.md", destination: "/md/:slug" },
    ];
  },
};

module.exports = nextConfig;
