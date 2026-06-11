import { motion } from "framer-motion";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import totvsHero from "@/assets/totvs-hero.png";
import b3Hero from "@/assets/b3-hero.png";
import zendryHero from "@/assets/zendry-hero.png";

const specialisms = [
  "Produtos Financeiros",
  "SaaS B2B",
  "Design Systems",
  "UX Research",
  "Product Discovery",
];

const projects = [
  {
    id: "totvs",
    title: "TOTVS",
    description:
      "Design de soluções corporativas complexas para produtos financeiros, com foco em fluxos críticos, jornadas internas, regras de negócio e Design Systems.",
    image: totvsHero,
    link: "/projetos/totvs",
  },
  {
    id: "b3",
    title: "B3 / SINACOR",
    description:
      "Modernização de sistemas financeiros para operadores do mercado de capitais, conectando processos legados, arquitetura da informação e experiência operacional.",
    image: b3Hero,
    link: "/projetos/b3",
  },
  {
    id: "zendry-plataforma",
    title: "Zendry | Plataforma Financeira",
    description:
      "Evolução de produtos financeiros digitais, incluindo Pix, onboarding, relatórios gerenciais e integrações.",
    image: zendryHero,
    link: "/projetos/zendry-plataforma",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
          {/* Left: headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-w-0"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
              Daniele Medeiros — Product Designer Sênior
            </p>
            <h1 className="font-serif text-[48px] md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground leading-[1.05] mb-10">
              Transformando produtos complexos em experiências intuitivas.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
              Atuo desde a descoberta de oportunidades até a validação de soluções transformando desafios complexos em experiências que os usuários realmente entendem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                data-testid="link-all-projects"
              >
                Ver Projetos
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground border-b border-muted-foreground/20 pb-1 hover:text-foreground hover:border-foreground/40 transition-colors"
                data-testid="link-contact"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>

          {/* Right: specialisms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="shrink-0 mt-16 md:mt-4 md:w-56 lg:w-64"
          >
            <div className="border-t border-border pt-8">
              <ul className="space-y-3">
                {specialisms.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Selected Work */}
      <section id="projetos" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline justify-between mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Trabalho Selecionado</h2>
          <Link
            href="/projetos"
            className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/20 hover:border-foreground/40 pb-0.5"
            data-testid="link-all-projects-header"
          >
            Todos os projetos
          </Link>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`group flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
              data-testid={`card-project-${project.id}`}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-lg bg-muted aspect-[4/3] md:aspect-[16/10] relative">
                <Link href={project.link} className="absolute inset-0 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col items-start">
                <span className="text-sm text-muted-foreground mb-4 font-mono">
                  0{index + 1} — PROJETO
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                  data-testid={`link-project-${project.id}`}
                >
                  Ver estudo de caso
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-foreground/40 px-8 py-4"
            data-testid="link-all-projects-footer"
          >
            Ver Todos os Projetos
          </Link>
        </motion.div>
      </section>

      {/* Approach strip */}
      <div className="border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-20 md:py-28"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Abordagem
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              Design não é sobre entregar telas é sobre tomar decisões com intencionalidade. Cada projeto começa com as perguntas certas e termina com impacto real.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
