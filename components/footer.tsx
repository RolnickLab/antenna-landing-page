"use client";

import { CONTACT_MAIL, GITHUB_URL } from "@/lib/constants";
import { useTheme } from "@/lib/theme/useTheme";
import { GithubIcon, MailIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="p-4 bg-muted border-t">
      <div className="max-w-screen-lg flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            className={buttonVariants({ size: "icon", variant: "accent" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_MAIL}`}
            className={buttonVariants({ size: "icon", variant: "accent" })}
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
