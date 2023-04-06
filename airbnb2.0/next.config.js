/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
