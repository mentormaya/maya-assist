import MainFooter from "@/components/footer/main";
import Image from "next/image";

import { packageJson } from "@/lib/package";
import Sidebar from "@/components/sections/sidebar";
import Heading from "@/components/sections/heading";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between h-screen overflow-hidden">
      <div className="flex-grow flex items-stretch justify-between divide-x h-full">
        <Sidebar />
        <div className="w-full divide-y flex flex-col mb-1 px-1">
          <Heading />
          <div className="flex flex-col items-center justify-between p-4 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
