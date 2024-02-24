// Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Network } from "./api";

interface MapProps {
  networks: Network[];
}

const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
  },
];

const Map = ({ networks }: MapProps) => {
  const customIcon = new Icon({
    iconUrl: require("./assets/placeholder.png"),
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup chunkedLoading>
        {networks.map((network) => (
          <Marker
            position={[network.location.latitude, network.location.longitude]}
            icon={customIcon}
            key={network.id}
          >
            <Popup>{network.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
