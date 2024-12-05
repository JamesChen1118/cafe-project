import { motion } from "framer-motion";
import { Tag } from "antd";

const CafeModal = ({ cafe, isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-lg p-6 w-[90vw] max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{cafe.name}</h2>

        <div className="flex gap-2 mb-4">
          <Tag color="blue">{cafe.district}</Tag>
          <Tag color="green">{cafe.mrt}站</Tag>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">簡介</h3>
          <p className="text-gray-600">{cafe.description}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">營業時間</h3>
          <p className="text-gray-600">{cafe.businessHours}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">地址</h3>
          <p className="text-gray-600">{cafe.address}</p>
        </div>

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
