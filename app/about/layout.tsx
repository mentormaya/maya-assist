export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-slate-300">
      <div>{children}</div>
    </main>
  );
}
