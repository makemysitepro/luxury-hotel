import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demo/luxury-hotel",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
