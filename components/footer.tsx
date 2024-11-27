"use client";

import { useTheme } from "@/lib/theme/useTheme";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="p-4 bg-muted border-t">
      <div className="max-w-screen-lg flex items-center justify-center gap-4 mx-auto">
        <span className="text-sm text-muted-foreground">Hosted by</span>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[100px]"
            src={
              theme === "light"
                ? "/images/logo-netlify-dark.png"
                : "/images/logo-netlify-light.png"
            }
            alt="Netlify"
          />
        </a>
      </div>
    </footer>
  );
};
