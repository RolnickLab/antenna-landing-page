import { ReactNode } from "react";
import { List } from "./list";

interface CardProps {
  children?: ReactNode;
  image: {
    alt?: string;
    src: string;
  };
  listItems: string[];
  title: string;
}

export const Card = ({ children, image, listItems, title }: CardProps) => (
  <div className="flex flex-col bg-card rounded-xl border overflow-hidden">
    <div className="aspect-[4/3] overflow-hidden">
      <div className="w-full h-full hover:scale-110 transition ease-out max-lg:hover:scale-100">
        <img
          loading="lazy"
          alt={image.alt ?? ""}
          src={image.src}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="grow flex flex-col items-stretch justify-between gap-8 p-8 border-t max-lg:p-4">
      <div>
        <h2 className="text-xl font-medium leading-tight mb-4">{title}</h2>
        <div className="text-base">
          <List items={listItems} />
        </div>
      </div>
      {children}
    </div>
  </div>
);
