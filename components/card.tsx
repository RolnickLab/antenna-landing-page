import { ReactNode } from "react";
import { ImagePlaceholder } from "./image-placeholder";
import { List } from "./list";

interface CardProps {
  children: ReactNode;
  listItems: string[];
  title: string;
}

export const Card = ({ children, listItems, title }: CardProps) => (
  <div className="flex flex-col bg-card rounded-xl border overflow-hidden">
    <div className="h-[240px]">
      <ImagePlaceholder />
    </div>
    <div className="grow flex flex-col items-start justify-between gap-8 p-8">
      <div>
        <h2 className="text-2xl font-medium leading-tight mb-4">{title}</h2>
        <List items={listItems} />
      </div>
      {children}
    </div>
  </div>
);
