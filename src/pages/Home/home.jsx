import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [mapPadding, setMapPadding] = useState({ left: 0 });
  const location = useLocation();

  useEffect(() => {
    const sidebar = document.querySelector(".fixed.left-0.top-0");
    if (sidebar) {
      setMapPadding({ left: 320 });
    } else {
      setMapPadding({ left: 0 });
    }
  }, [location]);

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

export default Home;
