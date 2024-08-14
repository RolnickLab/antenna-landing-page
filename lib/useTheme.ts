import { useState } from "react";

const STORAGE_KEY = "theme-preference";

type Theme = "dark" | "light";

const getThemePreference = (): Theme => {
  const savedPreference = localStorage.getItem(STORAGE_KEY);

  if (savedPreference) {
    return savedPreference as Theme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setThemePreference = (theme: Theme) => {
  localStorage.setItem(STORAGE_KEY, theme);
};

export const useTheme = () => {
  const [theme, _setTheme] = useState<Theme>(getThemePreference());

  return {
    theme,
    setTheme: (theme: Theme) => {
      _setTheme(theme);
      setThemePreference(theme);
    },
  };
};
