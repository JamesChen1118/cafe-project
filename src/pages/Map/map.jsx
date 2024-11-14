import { useState, useEffect } from "react";
import Loading from "@/components/Loading/loading";

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading-map");
    } else {
      document.body.classList.remove("loading-map");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading-map");
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <Loading
        onAnimationComplete={() => setIsLoading(false)}
        text="載入地圖中..."
      />
    );
  }

  return (
    <div className="h-[130vh] w-full relative">
      <div className="h-full w-full bg-gray-100">地圖將顯示在這裡</div>
    </div>
  );
};

export default Map;
