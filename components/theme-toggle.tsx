"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Theme } from "@/lib/theme/types";
import { useTheme } from "@/lib/theme/useTheme";
import { MoonStarIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

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

export default ThemeToggle;
