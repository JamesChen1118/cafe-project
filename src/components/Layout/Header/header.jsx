import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 h-16 z-40 ${
          isScrolled ? "bg-white shadow-md" : "bg-[#34495E]"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CoffeeOutlined className="text-xl md:text-2xl text-[#E74C3C]" />
            <span className="text-[#E74C3C] text-lg md:text-xl font-bold ml-2">
              Cafe Hunter
            </span>
          </motion.div>

          {isMapPage && (
            <div className="flex-1 px-2 md:px-8 flex items-center justify-center">
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
            </div>
          )}

          <Dropdown menu={userMenu} placement="bottomRight">
            <Button
              type="text"
              icon={<UserOutlined />}
              className={`${
                isScrolled ? "text-gray-700" : "text-gray-300"
              } hover:text-[#E74C3C]`}
            >
              <span className="hidden sm:inline">會員中心</span>
            </Button>
          </Dropdown>
        </div>
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
