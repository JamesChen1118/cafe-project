import { useState } from "react";
import { CoffeeOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Dropdown, Button, Space } from "antd";
import LoginModal from "@/components/Login/index";
import RegisterModal from "@/components/Register/index";
import Swal from "sweetalert2";
import axios from "axios";

const { Search } = Input;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMapPage = location.pathname === "/map";
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const onLoginFinish = async (values) => {
    console.log("登入資訊:", values);
    try {
      const response = await axios.post("/api/users/login", values);
      console.log("登入成功", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/member");
    } catch (error) {
      console.error(
        "登入失敗",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios.post("/api/users/register", values);
      Swal.fire({
        title: "註冊成功",
        icon: "success",
        confirmButtonText: "確定",
      });
      setIsRegisterModalOpen(false);
      setIsLoginModalOpen(true);
    } catch (error) {
      Swal.fire({
        title: "註冊失敗",
        text: error.response?.data?.message || "註冊失敗",
        icon: "error",
        confirmButtonText: "確定",
      });
    }
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleRegisterCancel = () => {
    setIsRegisterModalOpen(false);
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

      <LoginModal
        isOpen={isLoginModalOpen}
        onCancel={handleLoginCancel}
        onFinish={onLoginFinish}
        showRegisterModal={showRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onCancel={handleRegisterCancel}
        onFinish={handleRegister}
        showLoginModal={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </>
  );
};

export default Header;
