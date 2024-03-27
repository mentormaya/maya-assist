import MainFooter from "@/components/footer/main";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <div className="text-center items-center justify-between p-2 mb-6">
        {children}
      </div>
      <MainFooter />
    </div>
  );
}
