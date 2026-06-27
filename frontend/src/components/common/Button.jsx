import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      type={type}
      onClick={onClick}
      className={`w-full rounded-2xl bg-purple-600 py-3 font-semibold text-white shadow-lg shadow-purple-600/30 transition-colors hover:bg-purple-700 ${className}`}
    >
      {children}
    </motion.button>
  );
}