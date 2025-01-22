import type { NextConfig } from "next";
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.clerk.com" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
