import MainFooter from "@/app/(dashboardLayout)/_components/_sections/footer";

import Sidebar from "@/app/(dashboardLayout)/_components/_sections/sidebar";
import Heading from "@/app/(dashboardLayout)/_components/_sections/heading";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col justify-between overflow-hidden">
      <div className="flex h-full flex-grow items-stretch justify-between divide-x">
        <Sidebar />
        <div className="mb-1 flex w-full flex-col divide-y px-1">
          <Heading />
          <div className="flex flex-col content-center justify-between overflow-y-auto p-2">
            {children}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
