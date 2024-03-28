import { packageJson } from "@/lib/package"
import Image from "next/image"

const Sidebar = () => {
  return (
    <aside className="w-[300px] flex flex-col p-2 divide-y">
      <section className="flex items-center justify-evenly py-2 mb-2">
        <Image src="/icons/icon-256.png" alt="Brand Logo" width={48} height={48} />
        <div className="flex flex-col">
          <h1 className="font-bold">{packageJson.productName}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">version: {packageJson.version}</p>
        </div>
      </section>
      <div className="mb-6 divide-y overflow-y-auto">
        <section className="my-4 p-2">
          <h1>Menus and List</h1>
        </section>
        <section className="my-4 p-2">
          <h1>Links</h1>
        </section>
      </div>
    </aside>
  )
}

export default Sidebar