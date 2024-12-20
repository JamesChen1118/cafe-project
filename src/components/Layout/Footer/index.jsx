import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
        delay: 0.1,
      }}
      className="bg-[#34495E] text-[#E74C3C] py-6 mt-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center"
      >
        Copyright ©{new Date().getFullYear()} Cafe Hunter 版權所有
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
