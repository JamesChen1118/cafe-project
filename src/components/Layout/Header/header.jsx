import { useState } from "react";
import {
  CoffeeOutlined,
  SearchOutlined,
  UserOutlined,
  LockOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { Input, Dropdown, Button, Space, Menu, Modal, Form } from "antd";
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
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // 簡化的滾動監聽
  scrollY.onChange((latest) => {
    // 如果滾動超過 100px 就隱藏，否則顯示
    if (latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const onLoginFinish = (values) => {
    console.log("登入資訊:", values);
    // 這裡之後可以加入與後端的整合
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false); // 關閉登入 Modal
  };

  const handleRegisterCancel = () => {
    setIsRegisterModalOpen(false);
  };

  const onRegisterFinish = (values) => {
    console.log("註冊資訊:", values);
    // 這裡之後可以加入與後端的整合
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // 修改用戶選單配置
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
        animate={{
          y: isVisible ? 0 : -100,
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-[#34495E] h-16 flex items-center px-4 md:px-12 shadow-lg"
      >
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CoffeeOutlined className="text-xl md:text-2xl text-[#E74C3C]" />
          <span className="text-[#E74C3C] text-lg md:text-xl font-bold ml-2 hidden sm:inline">
            Cafe Hunter
          </span>
        </motion.div>

        {/* 搜尋區域 - 只在地圖頁面顯示 */}
        {isMapPage ? (
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
        ) : (
          // 非地圖頁面時的空白區域
          <div className="flex-1" />
        )}

        {/* 會員中心 */}
        <Dropdown menu={userMenu} placement="bottomRight">
          <Button
            type="text"
            icon={<UserOutlined />}
            className="text-gray-300 hover:text-[#E74C3C]"
          >
            <span className="hidden sm:inline">會員中心</span>
          </Button>
        </Dropdown>
      </motion.header>

      {/* 佔位元素 */}
      <div className="h-16"></div>

      {/* FilterSidebar 只在地圖頁面時渲染 */}
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
