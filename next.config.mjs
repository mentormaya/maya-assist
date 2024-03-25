/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    npm_package_productName: process.env.npm_package_productName,
    npm_package_version: process.env.npm_package_version,
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
