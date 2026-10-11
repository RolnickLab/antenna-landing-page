import { cn } from "@/lib/utils";

export const Antenna = ({ className }: { className?: string }) => (
  <img
    alt="Antenna"
    className={cn("h-8 mb-6 max-lg:mx-auto", className)}
    src="/images/antenna.png"
  />
);
