/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  output: "export",
  images: {
    unoptimized: true, // needed because gh-pages can't optimize images
  },
};

module.exports = nextConfig;
