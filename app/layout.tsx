import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/Theme";
import { packageJson } from "@/lib/package";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${packageJson.productName} v${packageJson.version}`,
    default: `${packageJson.productName} v${packageJson.version}`
  },
  description: `${packageJson.description}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
