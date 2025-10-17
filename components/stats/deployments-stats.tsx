import { useStats } from "@/lib/stats/useStats";
import { Stats } from "./stats";

export const DeploymentsStats = () => {
  const { stats } = useStats();

  return (
    <Stats
      items={[
        {
          value: `${stats.deployments_count.toLocaleString()}`,
          unit: "Stations",
        },
        {
          value: `${stats.captures_count.toLocaleString()}`,
          unit: "Camera images",
        },
      ]}
    />
  );
};
