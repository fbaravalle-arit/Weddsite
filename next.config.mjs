/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    // next/image with static export requires unoptimized.
    unoptimized: true,
  },
};

export default nextConfig;
