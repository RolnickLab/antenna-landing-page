"use client";

import { MAX_MD_QUERY, useMediaQuery } from "@/lib/useMediaQuery";
import * as L from "leaflet";
import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  ATTRIBUTION,
  DEFAULT_ZOOM,
  MAX_BOUNDS,
  TILE_LAYER_URL,
} from "./constants";

interface MapProps {
  height: {
    desktop: number;
    mobile: number;
  };
  markers: {
    position: L.LatLng;
    popupContent?: {
      title: string;
      text: string;
    };
  }[];
}

export const Map = ({ height, markers }: MapProps) => {
  const isMediumScreen = useMediaQuery(MAX_MD_QUERY);

  const bounds = useMemo(() => {
    const _bounds = new L.LatLngBounds([]);
    markers.forEach((marker) => _bounds.extend(marker.position));

    return _bounds;
  }, [markers]);

  return (
    <MapContainer
      key={isMediumScreen ? "desktop-map" : "mobile-map"}
      boxZoom={false}
      className="z-0"
      center={bounds.getCenter()}
      doubleClickZoom={false}
      keyboard={false}
      maxBounds={MAX_BOUNDS}
      scrollWheelZoom={false}
      style={{ height: `${isDesktop ? height.desktop : height.mobile}px` }}
      touchZoom={false}
      zoom={isDesktop ? DEFAULT_ZOOM.desktop : DEFAULT_ZOOM.mobile}
      zoomControl={false}
    >
      <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER_URL} />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          {marker.popupContent ? (
            <Popup>
              <p style={{ textAlign: "center", margin: 0 }}>
                <strong>{marker.popupContent.title}</strong>
                <br />
                {marker.popupContent.text}
              </p>
            </Popup>
          ) : null}
        </Marker>
      ))}
    </MapContainer>
  );
};
