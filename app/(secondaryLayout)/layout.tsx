import AboutFooter from "@/components/footer/about";

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="container flex items-center justify-between p-2 mb-6">
        {children}
      </div>
      <AboutFooter />
    </div>
  );
}
