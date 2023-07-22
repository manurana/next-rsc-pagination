/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
