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

// 設定 marker 圖示
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [map, setMap] = useState(null);

  const openModal = (cafe) => {
    setSelectedCafe(cafe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCafe(null);
  };

  // 當地圖載入完成時
  const onMapLoad = (map) => {
    setMap(map);

    // 創建 MarkerClusterGroup
    const markers = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 60,
      iconCreateFunction: function (cluster) {
        const count = cluster.getChildCount();
        let size = "small";

        if (count > 50) size = "large";
        else if (count > 10) size = "medium";

        return L.divIcon({
          html: `<div><span>${count}</span></div>`,
          className: `marker-cluster marker-cluster-${size}`,
          iconSize: L.point(40, 40),
        });
      },
      // 優化效能的選項
      removeOutsideVisibleBounds: true,
      animate: true,
      spiderfyOnMaxZoom: true,
      chunkInterval: 200,
      chunkDelay: 50,
    });

    // 添加所有標記到群集
    cafes.forEach((cafe) => {
      const marker = L.marker([
        cafe.location.coordinates[1],
        cafe.location.coordinates[0],
      ]);
      marker.on("click", () => openModal(cafe));
      markers.addLayer(marker);
    });

    map.addLayer(markers);
  };

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      <div className="absolute inset-0">
        <MapContainer
          className="w-full h-full"
          center={[25.0478, 121.5171]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ filter: isModalOpen ? "brightness(0.7)" : "none" }}
          whenCreated={onMapLoad}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
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
