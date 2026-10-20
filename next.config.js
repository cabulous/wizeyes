/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The privacy policy's previous address; App Store listings may still link here.
      {
        source: "/taxsavingtracker",
        destination: "/savings-room/privacy",
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
