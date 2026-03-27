import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Logo({ size, minSize }) {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.img
        className="mx-auto  sm:mx-0"
        src={logo}
        alt="Logo"
        style={{ width: size, minWidth: minSize }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        onClick={() => navigate("/")}
      />
    </AnimatePresence>
  );
}
/* morglia */
