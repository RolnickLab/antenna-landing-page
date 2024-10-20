import {
  DATA_PLATFORM_URL,
  FAQ_URL,
  HIDE_DEMO,
  WAITLIST_URL,
} from "@/lib/constants";

export const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Sign up", href: WAITLIST_URL },
  { label: "FAQ", href: FAQ_URL },
  ...(HIDE_DEMO
    ? []
    : [
        {
          label: "Antenna Demo",
          href: DATA_PLATFORM_URL,
          external: true,
        },
      ]),
];
