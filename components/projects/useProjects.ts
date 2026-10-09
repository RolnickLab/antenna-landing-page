import { useEffect, useState } from "react";
import { Project } from "./types";

const PROJECTS_API_URL =
  "/api/v2/projects/?limit=300&offset=0&with_counts=true&with_location=true";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(PROJECTS_API_URL);

        if (!res.ok) {
          throw new Error();
        }

        const data: { results: Project[] } = await res.json();
        setProjects(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error : new Error());
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
};
