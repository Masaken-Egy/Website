import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Hide the dev-mode route indicator (bottom-left "N" badge)
  devIndicators: false,
  turbopack: {
    // Parent dir has an unrelated lockfile (old Vite scaffold) — pin the root here
    root: path.join(__dirname),
  },
  images: {
    // AVIF first, WebP fallback; qualities must be allowlisted in Next 16
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

export default nextConfig;
