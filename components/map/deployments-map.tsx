"use client";

import { useDeployments } from "@/lib/useDeployments";
import * as L from "leaflet";
import { useMemo } from "react";
import { Map } from "./map";

interface DeploymentsMapProps {
  height: number;
}

export const DeploymentsMap = ({ height }: DeploymentsMapProps) => {
  const { deployments } = useDeployments();

  const markers = useMemo(
    () =>
      deployments.map((deployment) => {
        const position = new L.LatLng(
          deployment.latitude,
          deployment.longitude
        );
        const popupContent = {
          title: deployment.name,
          text: `by ${deployment.project?.name as string}`,
        };

        return {
          position,
          popupContent,
        };
      }),
    [deployments]
  );

  return <Map height={height} markers={markers} />;
};
