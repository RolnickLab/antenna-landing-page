import { Menu } from "@/components/menu";
import content from "@/lib/content.json";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import LogoLight from "../public/images/antenna-light.svg";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: content.title,
  description: content.subTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <body>
        <header className="h-14 px-4 sticky top-0 z-10 bg-muted/95 border-b overflow-hidden">
          <nav className="flex items-center justify-between max-w-screen-lg h-full mx-auto relative">
            <div className="absolute left-0 max-lg:static">
              <Link href="/">
                <Logo id="logo" className="w-10 h-10 color-primary" />
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
