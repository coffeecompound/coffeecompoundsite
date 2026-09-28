import type { NextConfig } from "next";

// Static export: `next build` writes a plain HTML site to ./out, which Cloudflare Pages serves from its edge.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /menu/ -> out/menu/index.html, matching the planned URLs
  images: { unoptimized: true }, // no image optimizer on a static host
  reactStrictMode: true,
};

export default nextConfig;
