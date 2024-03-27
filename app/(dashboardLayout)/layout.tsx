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
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex items-start justify-between divide-x">
        <Sidebar />
        <div className="w-full divide-y">
          <Heading />
          {children}
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
