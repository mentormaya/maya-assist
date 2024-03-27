import { packageJson } from "@/lib/package";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 rounded-lg shadow-lg dark:bg-slate-700">
      <div className="flex justify-center -mt-16 md:justify-end">
        <Image className="object-contain w-20 h-20 rounded-full"
          alt="Testimonial avatar"
          width={400}
          height={600}
          src="/icons/icon-256.png" />
      </div>
      <h1 className="mt-2 text-2xl font-semibold md:mt-0 md:text-3xl">{packageJson.productName}</h1>
      <h2 className="text-slate-400">v{packageJson.version}</h2>

      <p className="mt-2 text-slate-300 dark:text-gray-200">
        {packageJson.description}
      </p>

      <div className="details text-left">
        <h2 className="mt-2">Techstack used to build:</h2>
        <p>1. Electron.js To Create cross platform.</p>
        <p>2. Next.js To Create front-end UI.</p>
        <p>3. Prisma as ORM to transact with DB.</p>
        <p>4. SQlite for Database(can be used with others.)</p>
        <p>5. Various APIs to show or process the data.</p>
      </div>

      <div className="flex justify-end mt-4">
        <Link href={packageJson.homepage} className="text-xl hover:underline decoration-wavy  font-medium text-blue-500 dark:text-blue-300 hover:cursor-pointer" target="_blank">Learn More...</Link>
      </div>
    </div >
  );
}