import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export const MAX_BOUNDS = new L.LatLngBounds([-90, -180], [90, 180]);

export const DEFAULT_ZOOM = {
  desktop: 2,
  mobile: 1,
};

export const MAX_ZOOM = 5;

export const MIN_ZOOM = 1;

export const TILE_LAYER_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const DefaultIcon = L.icon({
  iconAnchor: [27 / 2, 0],
  iconSize: [27, 32],
  iconUrl: "/images/pin.svg",
});

export const setup = () => {
  L.Marker.prototype.options.icon = DefaultIcon;
};
