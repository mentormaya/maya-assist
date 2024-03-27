import { packageJson } from "@/lib/package";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import { join } from 'path';


export default function Home() {
  const info_md = join(process.cwd(), "docs/about/app_info_20240327.md")

  const info = fs.readFileSync(info_md, 'utf8');

  return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 rounded-lg shadow-lg dark:bg-slate-700">
      <div className="flex justify-center -mt-16 md:justify-end">
        <Image className="object-contain w-20 h-20 rounded-full"
          alt="App icon"
          width={400}
          height={600}
          src="/icons/icon-256.png" />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">{packageJson.productName}</h1>
      <h2 className="text-slate-400">v{packageJson.version}</h2>

      {packageJson.description && (
        <p className="mt-2 text-slate-300 dark:text-gray-200">
          {packageJson.description}
        </p>
      )}

      <div className="details text-left mt-2">
        <MDXRemote source={info} />
      </div>

      <div className="flex justify-end mt-4">
        <Link href={packageJson.homepage} className="text-xl hover:underline decoration-wavy  font-medium text-blue-500 dark:text-blue-300 hover:cursor-pointer" target="_blank">Learn More...</Link>
      </div>
    </div >
  );
}