import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  delay?: number;
}

export function NeonCard({ children, variant = "primary", className = "", delay = 0 }: NeonCardProps) {
  const borderColor = {
    primary: "group-hover:border-primary/50",
    secondary: "group-hover:border-secondary/50",
    accent: "group-hover:border-accent/50",
  }[variant];

  const shadowColor = {
    primary: "group-hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
    secondary: "group-hover:shadow-[0_0_20px_rgba(255,0,255,0.15)]",
    accent: "group-hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]",
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`
        group relative p-6 bg-card border border-white/5 
        transition-all duration-300 ${borderColor} ${shadowColor}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className={`
        absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      `} />
    </motion.div>
  );
}
