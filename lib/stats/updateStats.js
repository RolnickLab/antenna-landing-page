import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const PAGE_SIZE = 100;
const DEPLOYMENTS_API_URL = `https://api.antenna.insectai.org/api/v2/deployments/?limit=${PAGE_SIZE}`;
const CAPTURE_LIMIT = 10;
const FILENAME = "stats.json";
const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

const fetchDeployments = async (url, results = []) => {
  console.log(`Fetching deployments from ${url}...`);
  const deploymentsRes = await fetch(url);

  if (!deploymentsRes.ok) {
    // Retry in case of error
    console.log("Error fetching deployments, trying again...");
    return await fetchDeployments(url, results);
  } else {
    const deployments = await deploymentsRes.json();
    const updatedResults = results.concat(deployments.results);

    // Loop through pages if any
    if (deployments.next) {
      return await fetchDeployments(deployments.next, updatedResults);
    } else {
      return updatedResults;
    }
  }
};

const updateStats = async () => {
  // Fetch deployments
  const results = await fetchDeployments(DEPLOYMENTS_API_URL);

  // Clean up data before saving
  const deployments = results
    .filter(
      (deployment) =>
        deployment.project &&
        deployment.latitude &&
        deployment.longitude &&
        deployment.captures_count > CAPTURE_LIMIT
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
  console.log(`Found ${deployments.length} deployments`);

  // Save data to file
  console.log("Saving stats...");
  const stats = {
    stats: {
      deployments_count: deployments.length,
      events_count: deployments.reduce(
        (accumulator, currentValue) => accumulator + currentValue.events_count,
        0
      ),
      captures_count: deployments.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.captures_count,
        0
      ),
      occurrences_count: deployments.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.occurrences_count,
        0
      ),
    },
    deployments,
  };
  fs.writeFile(path.join(DIRNAME, FILENAME), JSON.stringify(stats), (error) => {
    if (error) {
      console.error(error);
    }
  });
  console.log(`Stats saved to ${FILENAME}`);
};

// Run the script
updateStats();
