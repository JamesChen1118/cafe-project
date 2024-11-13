import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "@/components/Loading/loading";

const Map = () => {
  const [mapPadding, setMapPadding] = useState({ left: 0 });
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sidebar = document.querySelector(".fixed.left-0.top-0");
    if (sidebar) {
      setMapPadding({ left: 320 });
    } else {
      setMapPadding({ left: 0 });
    }
  }, [location]);

  // 模擬地圖載入
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Loading
        onAnimationComplete={() => setIsLoading(false)}
        text="Cafe Hunter"
      />
    );
  }

  return (
    <div className="h-[130vh] w-full relative">
      <motion.div
        className="h-full w-full bg-gray-100"
        animate={{
          marginLeft: mapPadding.left,
          width: `calc(100% - ${mapPadding.left}px)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        地圖將顯示在這裡
      </motion.div>
    </div>
  );
};

export default Map;
