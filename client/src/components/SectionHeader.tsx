import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, x: centered ? 0 : -20, y: centered ? 20 : 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
          {title}
        </span>
        <span className="text-primary">.</span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        className={`h-1 w-24 bg-primary mt-6 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
