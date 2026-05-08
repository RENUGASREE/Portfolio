import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Restoring basePath for GitHub Pages subfolder deployment
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
