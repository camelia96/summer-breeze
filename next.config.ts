import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  transpilePackages: [],
  experimental: {
    optimizeCss: true,

  },
  async headers() {
    return [
      {
        source: "/_next/static/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    qualities: [70],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
        pathname: "/id/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/seed/picsum",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
