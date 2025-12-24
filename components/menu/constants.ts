import { CONTACT_URL, DEMO_URL, FAQ_URL } from "@/lib/constants";

export const MENU_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Demo",
    href: DEMO_URL,
    external: true,
  },
  { label: "Get in touch", href: CONTACT_URL },
  { label: "FAQ", href: FAQ_URL },
];
