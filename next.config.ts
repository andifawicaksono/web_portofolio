import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimasi gambar: izinkan domain eksternal jika dibutuhkan di masa depan
  images: {
    remotePatterns: [
      // Tambahkan domain gambar eksternal di sini jika diperlukan
      // Contoh: { protocol: 'https', hostname: 'avatars.githubusercontent.com' }
    ],
    // Format modern untuk performa lebih baik
    formats: ["image/avif", "image/webp"],
  },

  // Header keamanan untuk production
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
