"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { MENU_ITEMS } from "./constants";
import { MenuItem } from "./menu-item";

export const Menu = () => {
  const isDesktop = useIsDesktop();

  if (isDesktop === undefined) {
    return null;
  }

  if (isDesktop) {
    return <DesktopMenu />;
  }

  return <MobileMenu />;
};

export const DesktopMenu = () => (
  <>
    <ul className="w-full flex items-center justify-center gap-12">
      {MENU_ITEMS.map((menuItem) => (
        <li key={menuItem.href}>
          <MenuItem
            label={menuItem.label}
            href={menuItem.href}
            external={menuItem.external}
          />
        </li>
      ))}
    </ul>
    <div className="absolute right-0">
      <ThemeToggle />
    </div>
  </>
);

export const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        aria-label="Menu"
        className="w-10 h-10 flex items-center justify-center"
      >
        <MenuIcon className="h-4 w-4" />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerClose className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center">
          <XIcon className="w-4 h-4" />
        </DrawerClose>
        <div className="p-8 space-y-12 overflow-hidden">
          <ul className="flex flex-col items-start gap-4">
            {MENU_ITEMS.map((menuItem) => (
              <li key={menuItem.href}>
                <MenuItem
                  label={menuItem.label}
                  href={menuItem.href}
                  external={menuItem.external}
                />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-sm font-medium uppercase text-muted-foreground">
              Theme preference
            </span>
            <ThemeToggle />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
