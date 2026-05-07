import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // The repo name is 'Portfolio', so we use it as the base path
  basePath: '/Portfolio',
  // Ensure assets are also loaded from the subfolder
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
  },
  // This helps with GitHub Pages' directory structure
  trailingSlash: true,
};

export default nextConfig;
