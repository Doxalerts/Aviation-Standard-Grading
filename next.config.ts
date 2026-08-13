import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vvfbemeofpmdaxvaghbf.supabase.co",
        pathname: "/storage/v1/object/public/cert-images/**"
      }
    ]
  }
};

export default nextConfig;
