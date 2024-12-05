import { RouterProvider } from "react-router-dom";
import router from "./router";
import Loading from "@/components/Loading/loading";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模擬載入時間
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading-map");
    } else {
      document.body.classList.remove("loading-map");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
