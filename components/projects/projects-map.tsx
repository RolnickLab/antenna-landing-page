"use client";

import { Map } from "@/components/map/map";
import * as L from "leaflet";
import { useMemo } from "react";
import { Project } from "./types";

interface ProjectsMapMapProps {
  height: {
    desktop: number;
    mobile: number;
  };
  projects: Project[];
}

const ProjectsMap = ({ height, projects }: ProjectsMapMapProps) => {
  const markers = useMemo(
    () =>
      projects
        .filter(({ location }) => location?.latitude && location.longitude)
        .map((project) => {
          const latitude = project.location?.latitude as number;
          const longitude = project.location?.longitude as number;
          const position = new L.LatLng(latitude, longitude);
          const popupContent = {
            title: project.name,
            text: `${project.deployments_count} station(s)`,
          };

          return {
            position,
            popupContent,
          };
        }),
    [projects],
  );

  return <Map height={height} markers={markers} />;
};

export default ProjectsMap;
