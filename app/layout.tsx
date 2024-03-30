import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/Theme";
import { packageJson } from "@/lib/package";
import { Toaster } from "@/components/ui/toaster";

const font = Nunito({
  subsets: ["latin"],
  weight: ["600", "900"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${packageJson.productName} v${packageJson.version}`,
    default: `${packageJson.productName} v${packageJson.version}`,
  },
  description: `${packageJson.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          "bg-background",
          // "bg-gradient-to-r from-violet-200 to-pink-200",
          // "bg-gradient-to-r from-neutral-300 to-stone-400",
          // "dark:bg-gradient-to-r from-stone-500 to-stone-700",
          font.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-w-screen min-h-screen">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
