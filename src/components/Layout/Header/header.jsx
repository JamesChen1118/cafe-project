import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#E74C3C]">
          Cafe Hunter
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/map"
                className="text-gray-700 hover:text-[#E74C3C] transition-colors"
              >
                地圖
              </Link>
            </li>
            <li>
              <Link
                to="/member"
                className="text-gray-700 hover:text-[#E74C3C] transition-colors"
              >
                會員中心
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
