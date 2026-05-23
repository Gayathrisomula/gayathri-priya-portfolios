import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}




