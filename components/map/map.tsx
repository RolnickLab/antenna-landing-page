"use client";

import * as L from "leaflet";
import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  ATTRIBUTION,
  DEFAULT_ZOOM,
  MAX_BOUNDS,
  MIN_ZOOM,
  TILE_LAYER_URL,
} from "./constants";

interface MapProps {
  height: number;
  markers: {
    position: L.LatLng;
    popupContent?: {
      title: string;
      text: string;
    };
  }[];
}

export const Map = ({ height, markers }: MapProps) => {
  const bounds = useMemo(() => {
    const _bounds = new L.LatLngBounds([]);
    markers.forEach((marker) => _bounds.extend(marker.position));

    return _bounds;
  }, [markers]);

  return (
    <MapContainer
      className="z-0"
      center={bounds.getCenter()}
      maxBounds={MAX_BOUNDS}
      minZoom={MIN_ZOOM}
      style={{
        height: `${height}px`,
      }}
      zoom={DEFAULT_ZOOM}
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
