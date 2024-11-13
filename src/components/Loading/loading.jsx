import { motion } from "framer-motion";
import { CoffeeOutlined } from "@ant-design/icons";

const Loading = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#34495E] flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        y: "-100%",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 3,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* 使用 flex container 包裝整個內容 */}
      <div className="flex flex-col items-center justify-center h-full">
        {/* 咖啡圖標載入動畫 */}
        <div className="flex space-x-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            >
              <CoffeeOutlined className="text-4xl text-[#E74C3C]" />
            </motion.div>
          ))}
        </div>

        {/* 標題 */}
        <motion.h1
          className="text-5xl font-bold text-[#E74C3C] mt-12"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 12,
            mass: 0.8,
            bounce: 0.4,
          }}
        >
          Cafe Hunter
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Loading;
