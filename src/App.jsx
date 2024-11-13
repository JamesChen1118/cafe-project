import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading/loading";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // 立即顯示主內容
      setShowContent(true);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading onAnimationComplete={() => setIsLoading(false)} />}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3, // 加快淡入速度
            }}
            className="min-h-screen"
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
