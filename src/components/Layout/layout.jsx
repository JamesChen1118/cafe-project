import React from "react";
import {
  LaptopOutlined,
  UserOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const { Header, Content, Footer, Sider } = Layout;

const items1 = [
  {
    key: "home",
    label: "首頁",
  },
  {
    key: "map",
    label: "地圖",
  },
  {
    key: "member",
    label: "會員中心",
  },
  {
    key: "login",
    label: "登入",
  },
];

const items2 = [
  {
    key: "sub1",
    icon: React.createElement(UserOutlined),
    label: "會員功能",
    children: [
      {
        key: "1",
        label: "個人資料",
      },
      {
        key: "2",
        label: "我的收藏",
      },
    ],
  },
  {
    key: "sub2",
    icon: React.createElement(LaptopOutlined),
    label: "咖啡地圖",
    children: [
      {
        key: "5",
        label: "搜尋咖啡廳",
      },
      {
        key: "6",
        label: "附近咖啡廳",
      },
    ],
  },
];

const MainLayout = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen flex flex-col">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fef6e4",
          }}
        >
          <motion.div
            className="flex items-center cursor-pointer mr-8"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CoffeeOutlined className="text-2xl text-primary" />
            <motion.span
              className="text-dark text-xl font-bold ml-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Cafe Hunter
            </motion.span>
          </motion.div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            items={items1}
            onClick={({ key }) => navigate(`/${key === "home" ? "" : key}`)}
            style={{
              flex: 1,
              minWidth: 0,
              background: "#fef6e4",
              borderBottom: "none",
            }}
            className="custom-menu [&_.ant-menu-item]:menu-item [&_.ant-menu-item-selected]:menu-item-selected"
          />
        </Header>
      </motion.div>
      <Content className="flex-1 px-12 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Layout
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                  borderTopLeftRadius: borderRadiusLG,
                  borderBottomLeftRadius: borderRadiusLG,
                }}
                width={250}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                    borderRight: 0,
                  }}
                  items={items2}
                />
              </Sider>
            </motion.div>
            <Content
              style={{
                padding: "24px",
                minHeight: 280,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </Content>
          </Layout>
        </motion.div>
      </Content>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Footer className="text-center flex-shrink-0">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </motion.div>
    </Layout>
  );
};

export default MainLayout;
