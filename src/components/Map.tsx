// Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Network } from "../api";

interface MapProps {
  networks: Network[];
}

const Map = ({ networks }: MapProps) => {
  const lisbonLocation: LatLngTuple = [38.736946, -9.142685];
  const customIcon = new Icon({
    iconUrl: require("../assets/placeholder.png"),
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={lisbonLocation} zoom={13}>
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
