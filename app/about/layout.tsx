export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <h1 className="text-center">About</h1>
      <div>{children}</div>
    </main>
  );
}
