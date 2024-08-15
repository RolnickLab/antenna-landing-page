import { useDeployments } from "@/lib/useDeployments";
import { Stats } from "./stats";

export const DeploymentsStats = () => {
  const { stats } = useDeployments();

  return (
    <Stats
      items={[
        {
          value: `${stats.deployments_count.toLocaleString()}`,
          unit: "Deployments",
        },
        { value: `${stats.events_count.toLocaleString()}`, unit: "Sessions" },
        { value: `${stats.captures_count.toLocaleString()}`, unit: "Captures" },
        {
          value: `${stats.occurrences_count.toLocaleString()}`,
          unit: "Occurrences",
        },
      ]}
    />
  );
};
