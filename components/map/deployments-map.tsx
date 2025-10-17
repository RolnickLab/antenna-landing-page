"use client";

import { useStats } from "@/lib/stats/useStats";
import * as L from "leaflet";
import { useMemo } from "react";
import { Map } from "./map";

interface DeploymentsMapProps {
  height: {
    desktop: number;
    mobile: number;
  };
}

const DeploymentsMap = ({ height }: DeploymentsMapProps) => {
  const { deployments } = useStats();

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

export default DeploymentsMap;
