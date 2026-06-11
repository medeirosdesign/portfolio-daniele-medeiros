import { motion } from "framer-motion";

interface CaseStudySectionProps {
  label?: string;
  title?: string;
  children: React.ReactNode;
  wide?: boolean;
}

export function CaseStudySection({ label, title, children, wide = false }: CaseStudySectionProps) {
  return (
    <section className={`container mx-auto px-6 py-14 md:py-20 ${wide ? "max-w-6xl" : "max-w-4xl"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        {label && (
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
            {label}
          </h2>
        )}
        {title && (
          <h3 className="text-3xl md:text-4xl font-serif text-foreground">
            {title}
          </h3>
        )}
        <div className="prose prose-invert prose-lg text-muted-foreground max-w-none">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
