import { motion, AnimatePresence } from "framer-motion";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CoffeeOutlined } from "@ant-design/icons";
import LoginModal from "@/components/Login/login";
import RegisterModal from "@/components/Register/register";
import { useState } from "react";
import Loading from "@/components/Loading/loading";

const Home = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const onLoginFinish = (values) => {
    console.log("登入資訊:", values);
    navigate("/member");
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleRegisterCancel = () => {
    setIsRegisterModalOpen(false);
  };

  const onRegisterFinish = (values) => {
    console.log("註冊資訊:", values);
    navigate("/member");
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleNavigateToMap = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/map");
    }, 3000);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#fef6e4] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#E74C3C] mb-4 md:mb-8 text-center"
        >
          Cafe Hunter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg text-gray-700 max-w-sm md:max-w-2xl text-center mb-6 md:mb-8 leading-relaxed px-4"
        >
          探索台北最棒的咖啡廳！我們提供完整的咖啡廳資訊，包括營業時間、環境照片、
          評分評論，還可以依照您的喜好篩選，找到最適合的咖啡廳。加入會員還能自訂標籤、
          收藏喜愛的店家，打造專屬於您的咖啡地圖。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 md:mb-12 text-[#E74C3C]"
        >
          <CoffeeOutlined
            style={{ fontSize: "96px" }}
            className="md:text-[128px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            type="primary"
            size="large"
            onClick={handleNavigateToMap}
            className="bg-[#E74C3C] hover:bg-[#D44337] border-none h-12 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto"
          >
            開始探索
          </Button>
          <Button
            size="large"
            onClick={showLoginModal}
            className="border-[#E74C3C] text-[#E74C3C] hover:text-[#D44337] hover:border-[#D44337] h-12 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto"
          >
            我有會員
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isNavigating && (
          <Loading
            onComplete={() => {
              setIsNavigating(false);
            }}
          />
        )}
      </AnimatePresence>

      <LoginModal
        isOpen={isLoginModalOpen}
        onCancel={handleLoginCancel}
        onFinish={onLoginFinish}
        showRegisterModal={showRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onCancel={handleRegisterCancel}
        onFinish={onRegisterFinish}
        showLoginModal={switchToLogin}
      />
    </>
  );
};

export default Home;
