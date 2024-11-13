import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-center py-6 bg-[#34495E] text-[#E74C3C]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Copyright ©{new Date().getFullYear()} Cafe Hunter 版權所有
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
