import data from "./deployments.json";

const DRAFT_DEPLOYMENTS = [157]; // Exclude Anna's test deployment

export const cleanDeployments = () => {
  const deploymentsData = data.results
    .filter(
      (deployment) =>
        deployment.project &&
        deployment.latitude &&
        deployment.longitude &&
        deployment.captures_count > 10 &&
        !DRAFT_DEPLOYMENTS.includes(deployment.id)
    )
    .map((deployment) => ({
      id: deployment.id,
      name: deployment.name,
      project: {
        id: deployment.project?.id,
        name: deployment.project?.name,
      },
      latitude: deployment.latitude,
      longitude: deployment.longitude,
      captures_count: deployment.captures_count,
      events_count: deployment.events_count,
      occurrences_count: deployment.occurrences_count,
    }));

  return {
    stats: {
      deployments_count: deploymentsData.length,
      events_count: deploymentsData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.events_count,
        0
      ),
      captures_count: deploymentsData.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.captures_count,
        0
      ),
      occurrences_count: deploymentsData.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.occurrences_count,
        0
      ),
    },
    deployments_data: deploymentsData,
  };
};
