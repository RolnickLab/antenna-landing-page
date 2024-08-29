import { useDeployments } from "@/lib/useDeployments";
import { Stats } from "./stats";

export const DeploymentsStats = () => {
  const { stats } = useDeployments();

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
