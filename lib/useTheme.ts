import { useState } from "react";
import { useCookieConsent } from "./cookie-consent/useCookieConsent";

const STORAGE_KEY = "ami-theme-preference";

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
  const { accepted, settings } = useCookieConsent();
  const [theme, _setTheme] = useState<Theme>(getThemePreference());

  return {
    theme,
    setTheme: (theme: Theme) => {
      _setTheme(theme);
      if (accepted && settings.functionality) {
        setThemePreference(theme);
      }
    },
  };
};
