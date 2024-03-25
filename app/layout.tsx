import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = process.env.npm_package_productName || "MaYa Assist";
const APP_VERSION = process.env.npm_package_version;

export const metadata: Metadata = {
  title: { template: `%s | ${APP_NAME} v${APP_VERSION}`, default: `${APP_NAME} v${APP_VERSION}` },
  description: "A Personal Assistant Utility App to help speed up the daily tasks with additional note taking and personal time managment features.",
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
        )}>{children}</body>
    </html>
  );
}
