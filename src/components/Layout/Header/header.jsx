import { useState } from "react";
import {
  CoffeeOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Dropdown, Button, Space } from "antd";
import FilterSidebar from "@/components/FilterSidebar/filterSidebar";
import LoginModal from "@/components/Login/login";
import RegisterModal from "@/components/Register/register";

const { Search } = Input;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMapPage = location.pathname === "/map";
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

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

  const userMenu = {
    items: [
      {
        key: "login",
        label: "登入",
        onClick: showLoginModal,
      },
      {
        key: "register",
        label: "註冊",
        onClick: showRegisterModal,
      },
      {
        key: "logout",
        label: "登出",
        danger: true,
        onClick: () => {
          console.log("登出");
        },
      },
    ],
  };

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.5,
          delay: 0.1,
        }}
        className="fixed top-0 left-0 right-0 h-16 z-40 bg-[#34495E] shadow-lg"
      >
        <motion.div
          className="container mx-auto px-4 h-full flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <CoffeeOutlined className="text-xl md:text-2xl text-[#E74C3C]" />
            <span className="text-[#E74C3C] text-lg md:text-xl font-bold ml-2">
              Cafe Hunter
            </span>
          </motion.div>

          {isMapPage && (
            <motion.div
              className="flex-1 px-2 md:px-8 flex items-center justify-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Space className="w-full max-w-[600px]">
                <Search
                  placeholder="搜尋咖啡廳..."
                  onSearch={(value) => console.log("搜尋:", value)}
                  className="w-full md:w-96"
                  size="large"
                />
                <Button
                  icon={<SearchOutlined />}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="min-w-[60px]"
                >
                  <span className="hidden sm:inline">篩選</span>
                </Button>
              </Space>
            </motion.div>
          )}

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Dropdown menu={userMenu} placement="bottomRight">
              <Button
                type="text"
                icon={<UserOutlined className="text-[#E74C3C]" />}
                className="hover:opacity-80"
              >
                <span className="hidden sm:inline text-[#E74C3C]">
                  會員中心
                </span>
              </Button>
            </Dropdown>
          </motion.div>
        </motion.div>
      </motion.header>

      <div className="h-16" />

      {isMapPage && (
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      )}

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

export default Header;
