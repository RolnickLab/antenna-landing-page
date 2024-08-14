import { useMemo } from "react";
import data from "./deployments.json";

const DEV_DEPLOYMENTS = [157];

export const useDeployments = () => {
  const deployments = useMemo(
    () =>
      data.results.filter(
        (deployment) =>
          deployment.project &&
          deployment.latitude &&
          deployment.longitude &&
          deployment.captures_count > 10 &&
          !DEV_DEPLOYMENTS.includes(deployment.id)
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
