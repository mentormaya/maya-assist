import AboutFooter from "@/components/footer/about";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <main className="text-center items-center justify-between p-2 mb-6">
        {children}
      </main>
      <AboutFooter />
    </div>
  );
}
