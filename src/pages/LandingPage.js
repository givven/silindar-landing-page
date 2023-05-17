import { motion } from "framer-motion";
// import "./styles.css";

export default function LandingPage() {
  return (
    <motion.div
      className="box"
      initial={{ opacity:0, scale: 0.5 }}
      animate={{ opacity:1, scale: 1, rotateZ: 360 }}
    />
  );
}