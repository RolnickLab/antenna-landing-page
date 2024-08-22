"use client";

import { DATA_PLATFORM_REPO_URL, FAQ_URL, WAITLIST_URL } from "@/lib/constants";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => (
  <ul className="flex items-center justify-center gap-12 max-lg:hidden">
    <li>
      <MenuItem label="Home" href="/" />
    </li>
    <li>
      <MenuItem label="Join waitlist" href={WAITLIST_URL} />
    </li>
    <li>
      <MenuItem label="FAQ" href={FAQ_URL} />
    </li>
    <li>
      <MenuItem
        label="AMI Data Platform"
        href={DATA_PLATFORM_REPO_URL}
        external
      />
    </li>
  </ul>
);

const MenuItem = ({
  external,
  href,
  label,
}: {
  href: string;
  external?: boolean;
  label: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 text-foreground"
    >
      <span>{label}</span>
      {external && <ExternalLinkIcon className="w-4 h-4" />}
      {isActive && (
        <div
          className="w-[12px] h-[12px] bg-primary rounded-full absolute bottom-0"
          style={{ transform: "translateY(14px)" }}
        />
      )}
    </Link>
  );
};
