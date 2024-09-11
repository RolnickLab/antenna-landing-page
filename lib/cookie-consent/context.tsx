"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { COOKIE_CONSENT_STORAGE_KEY, DEFAULT_SETTINGS } from "./constants";
import {
  CookieConsent,
  CookieConsentContextValues,
  CookieSettings,
} from "./types";

export const CookieConsentContext = createContext<CookieConsentContextValues>({
  settings: DEFAULT_SETTINGS,
  setSettings: () => {},
});

export const CookieConsentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [consent, setConsent] = useState<CookieConsent>({
    settings: DEFAULT_SETTINGS,
  });

  useEffect(() => {
    const storedPreferences = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    try {
      if (storedPreferences) {
        setConsent(JSON.parse(storedPreferences) as CookieConsent);
      }
    } catch {
      localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    }
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        accepted: consent.accepted,
        settings: consent.settings,
        setSettings: (settings: CookieSettings) => {
          const consent = {
            accepted: new Date().toISOString(),
            settings,
          };
          localStorage.setItem(
            COOKIE_CONSENT_STORAGE_KEY,
            JSON.stringify(consent)
          );
          setConsent(consent);
        },
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
