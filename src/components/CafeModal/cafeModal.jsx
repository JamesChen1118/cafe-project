import { motion } from "framer-motion";
import { Tag, Card, Descriptions, Divider, Typography } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CafeModal = ({ cafe, isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="w-[90vw] max-w-md m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Card
          className="shadow-xl"
          headStyle={{
            background: "#34495E",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            padding: "16px",
          }}
          bodyStyle={{
            background: "#f8f9fa",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            padding: "20px",
          }}
          title={
            <div className="flex items-center justify-between">
              <div className="w-8" />
              <Title
                level={4}
                className="!text-[#E74C3C] !mb-0 flex-1 text-center"
              >
                {cafe.name}
              </Title>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-8 flex justify-end"
              >
                <div
                  className="text-[#E74C3C] text-lg cursor-pointer p-1.5 font-bold"
                  onClick={onClose}
                  style={{
                    transition: "all 0.3s ease",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  ✕
                </div>
              </motion.div>
            </div>
          }
        >
          <div className="space-y-4">
            {/* 標籤區域 */}
            <div className="flex gap-2">
              <Tag color="#E74C3C" icon={<EnvironmentOutlined />}>
                {cafe.district}
              </Tag>
              <Tag color="#34495E">{cafe.mrt}站</Tag>
            </div>

            <Divider className="my-3 border-gray-300" />

            {/* 詳細資訊 */}
            <Descriptions
              column={1}
              className="w-full"
              labelStyle={{
                color: "#34495E",
                fontWeight: "bold",
                background: "#ffffff",
                padding: "12px 16px",
                borderRadius: "6px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                width: "140px",
                minHeight: "48px",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
              contentStyle={{
                background: "#ffffff",
                padding: "12px 16px",
                borderRadius: "6px",
                flex: 1,
                minHeight: "48px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Descriptions.Item
                label={
                  <span className="flex items-center whitespace-nowrap">
                    <InfoCircleOutlined className="mr-2" />
                    簡介
                  </span>
                }
              >
                <Paragraph className="text-gray-600 mb-0">
                  {cafe.description}
                </Paragraph>
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <span className="flex items-center whitespace-nowrap">
                    <ClockCircleOutlined className="mr-2" />
                    營業時間
                  </span>
                }
              >
                <Paragraph className="text-gray-600">
                  {cafe.businessHours}
                </Paragraph>
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <span className="flex items-center whitespace-nowrap">
                    <EnvironmentOutlined className="mr-2" />
                    地址
                  </span>
                }
              >
                <Paragraph
                  className="text-gray-600"
                  copyable={{
                    text: cafe.address,
                    tooltips: ["複製地址", "已製！"],
                  }}
                >
                  {cafe.address}
                </Paragraph>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CafeModal;
