interface StatsProps {
  items: { value: string; unit: string }[];
}

export const Stats = ({ items }: StatsProps) => (
  <div className="flex items-center justify-center gap-24 max-md:gap-8">
    {items.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <span className="text-6xl mb-2 max-md:text-4xl">{item.value}</span>
        <span className="text-sm font-medium uppercase text-muted-foreground">
          {item.unit}
        </span>
      </div>
    ))}
  </div>
);
