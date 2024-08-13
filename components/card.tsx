import { CornerDownRightIcon, MousePointer2Icon, PlayIcon } from "lucide-react";
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
        <h2 className="text-2xl font-medium leading-tight mb-4">{title}</h2>
        <ul className="space-y-4 text-muted-foreground">
          {listItems.map((listItem, index) => (
            <li key={index} className="flex gap-2">
              <span className="shrink-0 w-7 h-7 flex items-center justify-center text-accent">
                <PlayIcon className="w-4 h-4" />
              </span>
              <span>{listItem}</span>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  </div>
);
