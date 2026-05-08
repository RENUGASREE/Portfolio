import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Removed basePath/assetPrefix to align with root-domain deployment (Vercel/Custom Domain)
  // as requested for the resume link fix (href="/resume.pdf").
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
