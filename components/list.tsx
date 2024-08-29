import { PlayIcon } from "lucide-react";

interface ListProps {
  items: string[];
}

export const List = ({ items }: ListProps) => (
  <ul className="space-y-4 text-muted-foreground">
    {items.map((item, index) => (
      <li key={index} className="flex gap-2">
        <span className="shrink-0 w-7 h-7 flex items-center justify-center text-accent">
          <PlayIcon className="w-4 h-4" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
