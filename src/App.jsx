import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";
import Loading from "@/components/Loading/index.jsx";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {showContent && (
        <div style={{ opacity: isLoading ? 0 : 1 }}>
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
};

export default App;
