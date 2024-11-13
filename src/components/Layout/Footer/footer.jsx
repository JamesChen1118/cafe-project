import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#34495E] text-[#E74C3C] py-6 mt-auto"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
        className="text-center"
      >
        Copyright ©{new Date().getFullYear()} Cafe Hunter 版權所有
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
