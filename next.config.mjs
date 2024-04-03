import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  env: {
    npm_package_name: process.env.npm_package_name,
    npm_package_version: process.env.npm_package_version,
  },
  images: {
    unoptimized: true,
  },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {
  // See Options section below.
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
