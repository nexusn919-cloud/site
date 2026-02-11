import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const GlassSection = ({ children, delay = 0, className = "" }: GlassSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`glass-card-strong rounded-2xl p-8 md:p-10 ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassSection;
