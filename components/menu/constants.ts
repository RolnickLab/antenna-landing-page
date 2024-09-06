import { DATA_PLATFORM_URL, FAQ_URL, WAITLIST_URL } from "@/lib/constants";

export const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Join the waitlist", href: WAITLIST_URL },
  { label: "FAQ", href: FAQ_URL },
  {
    label: "Antenna Platform Demo",
    href: DATA_PLATFORM_URL,
    external: true,
  },
];
