import { motion } from "framer-motion";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CoffeeOutlined } from "@ant-design/icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#fef6e4] px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-[#E74C3C] mb-8"
      >
        Cafe Hunter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg text-gray-700 max-w-2xl text-center mb-8 leading-relaxed"
      >
        探索台北最棒的咖啡廳！我們提供完整的咖啡廳資訊，包括營業時間、環境照片、
        評分評論，還可以依照您的喜好篩選，找到最適合的咖啡廳。加入會員還能自訂標籤、
        收藏喜愛的店家，打造專屬於您的咖啡地圖。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-12 text-[#E74C3C]"
      >
        <CoffeeOutlined style={{ fontSize: "128px" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-x-6"
      >
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/map")}
          className="bg-[#E74C3C] hover:bg-[#D44337] border-none h-12 px-8 text-lg"
        >
          開始探索
        </Button>
        <Button
          size="large"
          onClick={() => navigate("/member")}
          className="border-[#E74C3C] text-[#E74C3C] hover:text-[#D44337] hover:border-[#D44337] h-12 px-8 text-lg"
        >
          我有會員
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
