import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  listItems: string[];
  title: string;
}

export const Card = ({ children, listItems, title }: CardProps) => (
  <div className="flex flex-col bg-card rounded-xl border overflow-hidden">
    <div className="h-[240px]">{/* TODO: Add image */}</div>
    <div className="grow flex flex-col items-start justify-between gap-8 p-8">
      <div>
        <h2 className="text-xl font-medium leading-tight mb-4">{title}</h2>
        <ul className="space-y-4 text-muted-foreground">
          {listItems.map((listItem, index) => (
            <li key={index}>
              {index + 1}. {listItem}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  </div>
);
