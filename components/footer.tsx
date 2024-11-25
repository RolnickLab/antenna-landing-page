"use client";

import { useTheme } from "@/lib/theme/useTheme";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="p-8 bg-muted border-t">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-sm font-medium uppercase text-muted-foreground">
          Hosted by
        </h1>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-16"
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
