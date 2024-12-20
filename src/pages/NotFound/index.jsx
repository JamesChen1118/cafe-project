import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6e4] p-4">
      <motion.div
        animate={{
          y: [-5, 5, -5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-[#E74C3C] text-8xl mb-8"
      >
        <CoffeeOutlined />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-[#E74C3C] mb-4"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! 回到上一頁吧~
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          type="primary"
          size="large"
          icon={<CoffeeOutlined />}
          onClick={() => navigate("/")}
          className="bg-[#E74C3C] hover:bg-[#D44337] border-none h-12 px-8 text-lg"
        >
          返回首頁
        </Button>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute bottom-20 -z-10 w-64 h-64 rounded-full bg-[#E74C3C]"
        style={{
          filter: "blur(40px)",
        }}
      />
    </div>
  );
};

export default NotFound;
