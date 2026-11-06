import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.STATIC_PREVIEW === "1" ? "export" : undefined,
  trailingSlash: process.env.STATIC_PREVIEW === "1" ? true : undefined,
  cacheComponents: process.env.STATIC_PREVIEW !== "1",
  partialPrefetching: process.env.STATIC_PREVIEW !== "1",
  images: {
    unoptimized: process.env.STATIC_PREVIEW === "1",
    qualities: [75, 85, 90, 92, 100],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
