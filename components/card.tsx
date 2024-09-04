import { ReactNode } from "react";
import { ImagePlaceholder } from "./image-placeholder";
import { List } from "./list";

interface CardProps {
  children: ReactNode;
  listItems: string[];
  title: string;
}

export const Card = ({ children, listItems, title }: CardProps) => (
  <div className="flex flex-col bg-card rounded-xl border overflow-hidden group">
    <div className="aspect-[4/3] overflow-hidden">
      <div className="w-full h-full group-hover:scale-125 ease-in-out duration-200">
        <ImagePlaceholder />
      </div>
    </div>
    <div className="grow flex flex-col items-stretch justify-between gap-8 p-8 max-lg:p-4">
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
