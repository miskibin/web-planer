/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
    ],
  },
  transpilePackages: ["jotai-devtools"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    swcPlugins: [["@swc-jotai/debug-label", {}]],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
