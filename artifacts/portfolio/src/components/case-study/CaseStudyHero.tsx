import { motion } from "framer-motion";

interface CaseStudyHeroProps {
  tags: string[];
  title: string;
  subtitle: string;
  role: string;
  period: string;
  company: string;
  disciplines: string;
}

export function CaseStudyHero({ tags, title, subtitle, role, period, company, disciplines }: CaseStudyHeroProps) {
  return (
    <section className="container mx-auto px-6 pt-32 pb-16 md:pt-48 md:pb-24 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-wrap gap-4 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-sm font-medium px-3 py-1 bg-muted text-muted-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-8">
          {title}
        </h1>
        <p className="text-2xl text-muted-foreground leading-relaxed mb-16">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Papel</h3>
            <p className="text-foreground">{role}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Período</h3>
            <p className="text-foreground">{period}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Empresa</h3>
            <p className="text-foreground">{company}</p>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Disciplinas</h3>
            <p className="text-foreground">{disciplines}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
