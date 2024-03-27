import { packageJson } from "@/lib/package";
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import { join } from 'path';
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  const info_md = join(process.cwd(), "docs/about/author_info_20240327.md")
  const info = fs.readFileSync(info_md, 'utf8');
  return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 rounded-lg shadow-lg dark:bg-slate-700">
      <div className="flex justify-center -mt-16 md:justify-end">
        <Image className="object-cover w-20 h-20 rounded-full"
          alt="Author avatar"
          width={400}
          height={600}
          src="/images/author.jpg" />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">{packageJson.author.name}</h1>
      <h2 className="text-slate-400">(Author of {packageJson.productName}<span>&nbsp;v{packageJson.version}</span>)</h2>

      {packageJson.author.description && (
        <p className="mt-2 dark:text-gray-200">
          {packageJson.author.description}
        </p>
      )}

      <div className="details text-left mt-2">
        <MDXRemote source={info} />
      </div>

      <div className="flex justify-end mt-4">
        <Link href={`mailto:${packageJson.author.url}`} className="text-xl hover:underline decoration-wavy  font-medium text-blue-500 dark:text-blue-300 hover:cursor-pointer">📧</Link>
        <Link href={packageJson.author.url} className="text-xl hover:underline decoration-wavy  font-medium text-blue-500 dark:text-blue-300 hover:cursor-pointer" target="_blank">🌐</Link>
      </div>
    </div >
  );
}