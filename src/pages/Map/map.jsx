import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
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
import Supercluster from "supercluster";

const cafeIcon = L.divIcon({
  className: "custom-cafe-marker",
  html: `<div class="marker-container">
    <svg 
      viewBox="0 0 1024 1024" 
      width="24" 
      height="24" 
      fill="#E74C3C"
    >
      <path d="M275 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm613 144H768c0-39.8-32.2-72-72-72H200c-39.8 0-72 32.2-72 72v248c0 3.4.2 6.7.7 9.9-.5 7-.7 14-.7 21.1 0 176.7 143.3 320 320 320 160.1 0 292.7-117.5 316.3-271H888c39.8 0 72-32.2 72-72V497c0-39.8-32.2-72-72-72zM696 681h-1.1c.7 7.6 1.1 15.2 1.1 23 0 137-111 248-248 248S200 841 200 704c0-7.8.4-15.4 1.1-23H200V425h496v256zm192-8H776V497h112v176zM613 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm-170 0c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36z" />
    </svg>
  </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const ClusterLayer = ({ cafes, openModal }) => {
  const [clusters, setClusters] = useState([]);
  const map = useMap();

  useEffect(() => {
    const supercluster = new Supercluster({
      radius: 80,
      maxZoom: 16,
      minZoom: 0,
      minPoints: 2,
      nodeSize: 64,
    });

    const points = cafes.map((cafe, index) => ({
      type: "Feature",
      properties: {
        cluster: false,
        cafeId: index,
        cafe: cafe,
      },
      geometry: {
        type: "Point",
        coordinates: [
          cafe.location.coordinates[0],
          cafe.location.coordinates[1],
        ],
      },
    }));

    supercluster.load(points);

    const updateClusters = () => {
      const bounds = map.getBounds();
      const bbox = [
        bounds.getWest(),
        bounds.getSouth(),
        bounds.getEast(),
        bounds.getNorth(),
      ];
      const zoom = Math.floor(map.getZoom());
      const clusters = supercluster.getClusters(bbox, zoom);
      setClusters(clusters);
    };

    map.on("moveend", updateClusters);
    updateClusters();

    return () => {
      map.off("moveend", updateClusters);
    };
  }, [cafes, map]);

  return clusters.map((cluster) => {
    const [longitude, latitude] = cluster.geometry.coordinates;
    const { cluster: isCluster, point_count: pointCount } = cluster.properties;

    if (isCluster) {
      const size =
        pointCount < 10 ? 64 : pointCount < 25 ? 72 : pointCount < 50 ? 80 : 88;

      return (
        <Marker
          key={`cluster-${cluster.id}`}
          position={[latitude, longitude]}
          icon={L.divIcon({
            className: "cluster-icon",
            html: `
              <div class="cluster-icon-inner" style="width: ${size}px; height: ${size}px;">
                <div class="cluster-icon-text">${pointCount}</div>
              </div>
            `,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
          })}
          eventHandlers={{
            click: () => {
              const expansionZoom = Math.min(
                supercluster.getClusterExpansionZoom(cluster.id),
                maxZoom
              );
              map.setView([latitude, longitude], expansionZoom, {
                animate: true,
              });
            },
          }}
        />
      );
    } else {
      const cafe = cafes[cluster.properties.cafeId];
      return (
        <Marker
          key={`cafe-${cluster.properties.cafeId}`}
          position={[latitude, longitude]}
          icon={cafeIcon}
          eventHandlers={{
            click: () => openModal(cafe),
          }}
        />
      );
    }
  });
};

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
          <ClusterLayer cafes={cafes} openModal={openModal} />
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
