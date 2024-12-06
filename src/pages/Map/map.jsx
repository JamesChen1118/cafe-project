import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import CafeModal from "@/components/CafeModal/cafeModal";
import cafes from "../../../server/data/cafes.js";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import { AnimatePresence } from "framer-motion";
import "@/pages/Map/map.css";

const greenIcon = L.icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);

  const openModal = (cafe) => {
    setSelectedCafe(cafe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCafe(null);
  };

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      <div className="absolute inset-0">
        <MapContainer
          className="w-full h-full"
          center={[25.0478, 121.5171]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ filter: isModalOpen ? "brightness(0.7)" : "none" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {cafes.map((cafe, index) => (
            <Marker
              key={index}
              position={[
                cafe.location.coordinates[1],
                cafe.location.coordinates[0],
              ]}
              icon={greenIcon}
              eventHandlers={{
                click: () => openModal(cafe),
              }}
            ></Marker>
          ))}
        </MapContainer>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCafe && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <CafeModal
                cafe={selectedCafe}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Map;
