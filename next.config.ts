import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  eslint: {
    ignoreDuringBuilds: true, // <-- THIS prevents ESLint from failing the build
  },
};

export default nextConfig;
