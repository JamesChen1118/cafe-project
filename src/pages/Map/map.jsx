import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CafeModal from "@/components/CafeModal/cafeModal";
import cafes from "../../../server/data/cafes.js";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import { AnimatePresence } from "framer-motion";

// 修正 Marker 圖示的問題
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
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
    <div className="h-[130vh] w-full relative">
      <MapContainer
        className="h-full w-full"
        center={[25.0478, 121.5171]}
        zoom={15}
        scrollWheelZoom={false}
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
            eventHandlers={{
              click: () => openModal(cafe),
            }}
          />
        ))}
      </MapContainer>

      <AnimatePresence>
        {isModalOpen && selectedCafe && (
          <CafeModal
            cafe={selectedCafe}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Map;
