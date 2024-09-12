"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { useCookieConsent } from "../cookie-consent/useCookieConsent";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "./constants";
import { Theme, ThemeContextValues } from "./types";

export const ThemeContext = createContext<ThemeContextValues>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const { accepted, settings } = useCookieConsent();
  const [theme, _setTheme] = useState<Theme>();

  useEffect(() => {
    const loadThemePreference = (): Theme => {
      const savedPreference = localStorage.getItem(THEME_STORAGE_KEY);

      if (savedPreference) {
        return savedPreference as Theme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    _setTheme(loadThemePreference());
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("class", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme ?? DEFAULT_THEME,
        setTheme: (theme: Theme) => {
          _setTheme(theme);

          if (accepted && settings.functionality) {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
          }
        },
      }}
    >
      {theme ? children : null}
    </ThemeContext.Provider>
  );
};
