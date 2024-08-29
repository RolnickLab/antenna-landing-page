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
  title: "Antenna - The Insect Data Platform",
  description: "AI-Enabled Detection And Classification Of Insects At Scale",
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
        <header className="py-2 bg-muted/95 sticky top-0 z-10 overflow-hidden border-b max-lg:px-2">
          <nav className="flex items-center justify-between max-w-screen-lg h-full mx-auto relative">
            <div className="z-10">
              <Link href="/">
                <img
                  id="logo"
                  alt="AMI logo"
                  src="/logo.png"
                  className="w-10"
                />
              </Link>
            </div>
            <div className="absolute flex align-center justify-center w-full h-full z-0">
              <Menu />
            </div>
            <div className="z-10">
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main>
          <div className="max-lg:hidden">{children}</div>
          <div className="px-12 py-24 hidden max-lg:block">
            <h1 className="text-2xl font-medium text-center">
              Small screen version is under construction.
            </h1>
          </div>
        </main>
      </body>
    </html>
  );
}
