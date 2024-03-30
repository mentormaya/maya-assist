import AboutFooter from "@/app/(secondaryLayout)/_components/_sections/footer";

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="container mb-6 flex items-center justify-between p-2">
        {children}
      </div>
      <AboutFooter />
    </div>
  );
}
