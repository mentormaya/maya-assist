import { packageJson } from "@/lib/package";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import { join } from "path";

export default function Home() {
  const info_md = join(process.cwd(), "docs/about/app_info_20240327.md");

  const info = fs.readFileSync(info_md, "utf8");

  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg px-8 py-4 shadow-lg dark:bg-slate-700">
      <div className="-mt-16 flex justify-center md:justify-end">
        <Image
          className="h-20 w-20 rounded-full object-contain"
          alt="App icon"
          width={400}
          height={600}
          src="/icons/icon-256.png"
        />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">
        {packageJson.productName}
      </h1>
      <h2 className="text-slate-400">v{packageJson.version}</h2>

      {packageJson.description && (
        <p className="mt-2 dark:text-gray-200">{packageJson.description}</p>
      )}

      <div className="details mt-2 text-left">
        <MDXRemote source={info} />
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href={packageJson.homepage}
          className="text-xl font-medium text-blue-500  decoration-wavy hover:cursor-pointer hover:underline dark:text-blue-300"
          target="_blank"
        >
          Learn More...
        </Link>
      </div>
    </div>
  );
}
