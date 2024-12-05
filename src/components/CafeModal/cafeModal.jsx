import { motion } from "framer-motion";
import { Tag } from "antd";

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
        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 咖啡廳名稱 */}
        <h2 className="text-2xl font-bold mb-4">{cafe.name}</h2>

        {/* 標籤區域 */}
        <div className="flex gap-2 mb-4">
          <Tag color="blue">{cafe.district}</Tag>
          <Tag color="green">{cafe.mrt}站</Tag>
        </div>

        {/* 簡介 */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">簡介</h3>
          <p className="text-gray-600">{cafe.description}</p>
        </div>

        {/* 營業時間 */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">營業時間</h3>
          <p className="text-gray-600">{cafe.businessHours}</p>
        </div>

        {/* 地址 */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">地址</h3>
          <p className="text-gray-600">{cafe.address}</p>
        </div>

        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-lg mt-4"
        >
          關閉
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CafeModal;
