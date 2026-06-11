import { motion } from "framer-motion";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import solAgoraHero from "@/assets/sol-agora-hero.png";
import b3Hero from "@/assets/b3-hero.png";
import zendryHero from "@/assets/zendry-hero.png";
import zendryCriptoHero from "@/assets/zendry-cripto-hero.png";
import totvsHero from "@/assets/portal-ia-1.png";

const projects = [
  {
    id: "totvs",
    title: "TOTVS | Produtos Financeiros",
    tags: ["Produtos Financeiros", "B2B", "Design System", "Product Design"],
    description:
      "Evolução de produtos financeiros corporativos, incluindo análise de crédito, meios de pagamento, automações e Design Systems, conectando necessidades de negócio, tecnologia e experiência do usuário.",
    image: totvsHero,
    link: "/projetos/totvs",
    index: "01",
  },

  {
    id: "b3",
    title: "B3 | SINACOR",
    tags: ["Mercado de Capitais", "Sistemas Financeiros", "Product Design"],
    description:
      "Modernização de sistemas utilizados por operadores do mercado de capitais, simplificando fluxos críticos e aumentando a eficiência operacional.",
    image: b3Hero,
    link: "/projetos/b3",
    index: "02",
  },

  {
    id: "zendry-plataforma",
    title: "Zendry | Plataforma Financeira",
    tags: ["Pagamentos", "Pix", "Fintech", "Product Design"],
    description:
      "Redesenho e evolução de uma plataforma financeira digital, incluindo Pix, onboarding, integrações, relatórios gerenciais e gestão operacional.",
    image: zendryHero,
    link: "/projetos/zendry-plataforma",
    index: "03",
  },
  
  {
    id: "zendry-cripto",
    title: "Zendry | Criptoativos",
    tags: ["Cripto", "UX Financeiro", "Design System", "Product Design"],
    description:
      "Redesenho da experiência de compra, venda, transferência e gestão de criptoativos, com foco em segurança, confiança e clareza para usuários iniciantes e avançados.",
    image: zendryCriptoHero,
    link: "/projetos/zendry-cripto",
    index: "04",
  },

  {
    id: "sol-agora",
    title: "Sol Agora",
    tags: ["Fintech", "Discovery", "UX Research", "Product Design"],
    description:
      "Criação da experiência digital para financiamento de energia solar, conduzindo pesquisas, discovery, prototipação e validação de soluções para clientes e parceiros.",
    image: solAgoraHero,
    link: "/projetos/sol-agora",
    index: "05",
  },
];

export default function AllProjects() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-32 pb-12 md:pt-48 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Portfólio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-8">
            Projetos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Produtos financeiros, plataformas SaaS B2B e soluções orientadas por IA. Atuação em Product Discovery, UX Research, Design Systems e evolução contínua de produtos digitais complexos.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 pb-32 max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-0"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="group border-t border-border last:border-b"
              data-testid={`card-project-${project.id}`}
            >
              <Link
                href={project.link}
                className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 md:py-12 items-start"
              >
                {/* Thumbnail */}
                <div className="w-full md:w-44 shrink-0 overflow-hidden rounded-md bg-muted" style={{ aspectRatio: "4/3" }}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">IA</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-muted-foreground font-mono block mb-3">{project.index}</span>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center self-center text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}
