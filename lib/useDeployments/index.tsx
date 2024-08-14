import { useMemo } from "react";
import data from "./deployments.json";

export const useDeployments = () => {
  const deployments = useMemo(
    () =>
      data.results.filter(
        (deployment) =>
          deployment.project &&
          deployment.latitude &&
          deployment.longitude &&
          deployment.captures_count > 10
      ),
    []
  );

  const numDeployments = deployments.length;

  const numCaptures = deployments.reduce(
    (accumulator, currentValue) => accumulator + currentValue.captures_count,
    0
  );

  const numSessions = deployments.reduce(
    (accumulator, currentValue) => accumulator + currentValue.events_count,
    0
  );

  const numOccurrences = deployments.reduce(
    (accumulator, currentValue) => accumulator + currentValue.occurrences_count,
    0
  );

  return {
    deployments,
    numDeployments,
    numSessions,
    numCaptures,
    numOccurrences,
  };
};
