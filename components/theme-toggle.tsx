"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Theme, useTheme } from "@/lib/useTheme";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("class", theme);
  }, [theme]);

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value: Theme) => setTheme(value)}
    >
      <ToggleGroupItem value="light" aria-label="Toggle light mode">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark mode">
        <MoonStarIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
