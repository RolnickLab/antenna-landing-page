import { useContext } from "react";
import { CookieConsentContext } from "./context";

export const useCookieConsent = () => useContext(CookieConsentContext);
