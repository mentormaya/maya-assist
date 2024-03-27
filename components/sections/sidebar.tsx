import { packageJson } from "@/lib/package"
import Image from "next/image"

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-full flex flex-col py-4 px-8 divide-y">
      <section className="flex flex-1 items-center mb-2">
        <Image src="/icons/icon-256.png" alt="Brand Logo" width={36} height={36} />
        <div className="ml-2 flex flex-col">
          <h1 className="font-bold">{packageJson.productName}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">version: {packageJson.version}</p>
        </div>
      </section>
      <section className="my-4 p-2">
        <h1>Menus and List</h1>
      </section>
      <section className="my-4 p-2">
        <h1>Links</h1>
      </section>
    </aside>
  )
}

export default Sidebar