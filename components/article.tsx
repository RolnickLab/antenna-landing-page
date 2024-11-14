import { ExternalLinkIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

interface ArticleProps {
  description: string;
  image: string;
  link: {
    href: string;
    label: string;
  };
  title: string;
}

export const Article = ({ description, link, image, title }: ArticleProps) => (
  <div className="grid grid-cols-2 bg-muted rounded-xl border overflow-hidden max-md:grid-cols-1">
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover max-md:aspect-[16/9]"
    />
    <div className="p-8 text-left">
      <h2 className="text-xl font-medium leading-tight mb-4">{title}</h2>
      <p className="text-base mb-8">{description}</p>
      <a
        href={link.href}
        className={buttonVariants({ variant: "outline" })}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
        <ExternalLinkIcon className="h-4 w-4 ml-2" />
      </a>
    </div>
  </div>
);
