import { packageJson } from "@/lib/package";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  const info_md = join(process.cwd(), "docs/about/author_info_20240327.md");
  const info = fs.readFileSync(info_md, "utf8");
  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg px-8 py-4 shadow-lg dark:bg-slate-700">
      <div className="-mt-16 flex justify-center md:justify-end">
        <Image
          className="h-20 w-20 rounded-full object-cover"
          alt="Author avatar"
          width={400}
          height={600}
          src="/images/author.jpg"
        />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">
        {packageJson.author.name}
      </h1>
      <h2 className="text-slate-400">
        (Author of {packageJson.productName}
        <span>&nbsp;v{packageJson.version}</span>)
      </h2>

      {packageJson.author.description && (
        <p className="mt-2 dark:text-gray-200">
          {packageJson.author.description}
        </p>
      )}

      <div className="details mt-2 text-left">
        <MDXRemote source={info} />
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href={`mailto:${packageJson.author.url}`}
          className="text-xl font-medium text-blue-500  decoration-wavy hover:cursor-pointer hover:underline dark:text-blue-300"
        >
          📧
        </Link>
        <Link
          href={packageJson.author.url}
          className="text-xl font-medium text-blue-500  decoration-wavy hover:cursor-pointer hover:underline dark:text-blue-300"
          target="_blank"
        >
          🌐
        </Link>
      </div>
    </div>
  );
}
