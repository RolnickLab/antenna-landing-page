import { useStats } from "@/lib/stats/useStats";
import { Stats } from "./stats";

export const DeploymentsStats = () => {
  const { stats } = useStats();

  return (
    <Stats
      items={[
        {
          value: `${Math.round(stats.deployments_count / 100) * 100}`,
          unit: "Stations",
        },
        {
          value: `${Math.round(stats.captures_count / 1000000)}M`,
          unit: "Camera images",
        },
      ]}
    />
  );
};
