"use client";

import { useIsDesktop } from "@/lib/useIsDesktop";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  external?: boolean;
  label: string;
}

export const MenuItem = ({ external, href, label }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isDesktop = useIsDesktop();

  if (external) {
    return (
      <a
        href={href}
        className="flex items-center justify-center gap-2 text-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{label}</span>
        <ExternalLinkIcon className="w-4 h-4 shrink-0" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 text-foreground max-lg:relative"
    >
      <span>{label}</span>
      {external && <ExternalLinkIcon className="w-4 h-4" />}
      {isActive && (isDesktop ? <DesktopMarker /> : <MobileMarker />)}
    </Link>
  );
};

const MobileMarker = () => (
  <div
    className="w-[12px] h-[12px] bg-primary rounded-full absolute top-[50%] left-[-6px]"
    style={{ transform: "translate(-32px, -6px)" }}
  />
);

const DesktopMarker = () => (
  <div
    className="w-[12px] h-[12px] bg-primary rounded-full absolute bottom-0"
    style={{ transform: "translateY(6px)" }}
  />
);
