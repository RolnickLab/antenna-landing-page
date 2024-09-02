import { Menu } from "@/components/menu";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <link rel="icon" type="image/png" href="/images/logo.png" />
      <body>
        <header className="h-14 bg-muted/95 sticky top-0 z-10 overflow-hidden border-b max-lg:px-4">
          <nav className="flex items-center justify-between max-w-screen-lg h-full mx-auto relative">
            <div className="absolute left-0 max-lg:static">
              <Link href="/">
                <img
                  id="logo"
                  alt="AMI logo"
                  src="/images/logo.png"
                  className="w-10 h-10"
                />
              </Link>
            </div>
            <Menu />
          </nav>
        </header>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
