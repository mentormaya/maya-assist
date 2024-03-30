import { packageJson } from "@/lib/package";
import Image from "next/image";
import SideBarMenu from "./sidebar-menus";
import SideBarLinks from "./sidebar-links";

const Sidebar = () => {
  return (
    <aside className="flex w-[300px] flex-col divide-y p-2">
      <section className="mb-2 flex items-center justify-evenly py-2">
        <Image
          src="/icons/icon-256.png"
          alt="Brand Logo"
          width={48}
          height={48}
        />
        <div className="ml-[-1.2rem] flex flex-col">
          <h1 className="font-bold">{packageJson.productName}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            version: {packageJson.version}
          </p>
        </div>
      </section>
      <div className="flex flex-col h-full mb-6 divide-y overflow-y-auto">
        <SideBarMenu />
        <SideBarLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
