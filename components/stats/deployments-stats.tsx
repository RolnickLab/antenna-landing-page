import { useDeployments } from "@/lib/useDeployments";
import { Stats } from "./stats";

export const DeploymentsStats = () => {
  const { numDeployments, numSessions, numCaptures, numOccurrences } =
    useDeployments();

  return (
    <Stats
      items={[
        { value: `${numDeployments.toLocaleString()}`, unit: "Deployments" },
        { value: `${numSessions.toLocaleString()}`, unit: "Sessions" },
        { value: `${numCaptures.toLocaleString()}`, unit: "Captures" },
        { value: `${numOccurrences.toLocaleString()}`, unit: "Occurrences" },
      ]}
    />
  );
};
