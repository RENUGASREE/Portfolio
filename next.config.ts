import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  trailingSlash: true, // Recommended for GitHub Pages static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
