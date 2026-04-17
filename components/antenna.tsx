"use client";

import { useTheme } from "@/lib/theme/useTheme";
import { cn } from "@/lib/utils";

export const Antenna = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <img
      alt="Antenna"
      className={cn("h-8 mb-6 max-lg:mx-auto", className)}
      src={
        theme === "light"
          ? "/images/antenna-dark.png"
          : "/images/antenna-light.png"
      }
    />
  );
};
