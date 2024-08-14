/* eslint-disable @next/next/no-img-element */

import { Menu } from "@/components/menu";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Link from "next/link";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "AMI Data Platform",
  description: "AI-enabled detection and classification of insects at scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/logo.png" />
      <body>
        <header className="py-2 bg-muted sticky top-0 z-10 overflow-hidden border-b">
          <nav className="flex items-center justify-between max-w-screen-lg h-full mx-auto">
            <Link href="/">
              <img id="logo" alt="AMI logo" src="/logo.png" className="w-10" />
            </Link>
            <Menu />
            <ThemeToggle />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
