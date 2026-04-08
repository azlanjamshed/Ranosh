import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // 👈 apna logo ka path
const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Logo Animation */}
          <motion.img
            src={logo} // 👈 apna logo
            alt="Loading"
            className="w-20 h-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              },
              scale: {
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
