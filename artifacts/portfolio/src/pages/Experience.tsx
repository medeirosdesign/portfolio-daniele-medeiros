import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Layout from "@/components/layout/Layout";

const experiences = [
  {
  company: "TOTVS",
  role: "Product Designer Sênior",
  period: "2025 — 2026",
  summary:
  "Atuação em produtos financeiros corporativos, com foco em crédito, meios de pagamento, automações e Design System. Trabalhei junto aos times de Produto, Tecnologia e Negócio para entender problemas, desenhar fluxos, validar soluções e apoiar decisões com dados, pesquisa e uso de IA no processo de design.",
  },
  {
  company: "Zendry",
  role: "Product Designer",
  period: "2024 — 2025",
  summary:
"Atuação em uma plataforma financeira digital, com projetos ligados a Pix, onboarding, integrações, relatórios, gestão financeira e criptoativos. Participei de pesquisas, fluxos, protótipos e validações para deixar a experiência mais clara e eficiente.",
  },
  {
  company: "Sol Agora",
  role: "Product Designer",
  period: "2024",
  summary:
"Criação da experiência digital para financiamento de energia solar. Atuei no entendimento da jornada, pesquisa com usuários, organização das informações, prototipação e validação com clientes, parceiros e áreas de negócio.",
  },
  {
  company: "B3 — Bolsa do Brasil",
  role: "Product Designer Sênior",
  period: "2019 — 2024",
  summary:
"Atuação em sistemas usados por operadores do mercado de capitais. Trabalhei na organização de fluxos financeiros complexos, pesquisa com usuários, arquitetura da informação, validação de hipóteses e melhoria da experiência em ambientes regulados.",
  },
  {
  company: "Auto Avaliar",
  role: "Diretora de Arte",
  period: "2018 — 2019",
  summary:
  "Atuação em iniciativas digitais com foco em experiência do usuário, conversão e melhoria de produtos. Trabalhei conectando Marketing, Produto e Tecnologia para apoiar decisões mais alinhadas aos objetivos do negócio.",
  },
  {
  company: "Diário de São Paulo & Editora Minuano",
  role: "Designer Digital & Front-end",
  period: "2008 — 2018",
  summary:
 "Atuação em portais de conteúdo, e-commerce e produtos digitais. Participei da criação de interfaces, organização de conteúdo, desenvolvimento front-end com HTML e CSS e melhorias baseadas em comportamento dos usuários, conversão e métricas.",
  },
  ];
  

export default function Experience() {
  return (
    <Layout>
      <section id="experiencia" className="container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            CARREIRA
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground">
            Experiência
            </h1>
            {/* CURRÍCULO PDF — substitua o href="#" pelo caminho do arquivo.
                Opção 1: arquivo local → coloque daniele-medeiros-cv.pdf em /public e use href="/daniele-medeiros-cv.pdf"
                Opção 2: link externo → use a URL do Google Drive ou Notion com download direto */}
            <a
              href="/Daniele-Medeiros-Product-Designer-Senior.pdf"
              className="inline-flex items-center gap-2 shrink-0 text-sm font-medium text-muted-foreground border border-border hover:text-foreground hover:border-foreground/40 transition-colors px-5 py-3"
              data-testid="button-download-cv"
              download
            >
              <Download size={15} />
              Download do Currículo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="space-y-0"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="border-t border-border py-10 last:border-b"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="w-full md:w-1/4 shrink-0 pt-1">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <div className="w-full md:w-3/4">
                  <h2 className="font-serif text-2xl text-foreground mb-1">{exp.role}</h2>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.summary}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}
