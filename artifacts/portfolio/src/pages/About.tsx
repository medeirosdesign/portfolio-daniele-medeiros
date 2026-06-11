import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import designerImage from "@/assets/designer-portrait.png";

export default function About() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-8">
              Sobre Mim
            </h1>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
              Sou Product Designer Sênior com mais de 15 anos de experiência na criação e evolução de produtos digitais, atuando desde a descoberta de oportunidades até a validação de soluções em ambientes financeiros, SaaS B2B e sistemas corporativos complexos.
              </p>
              <p>
              Ao longo da minha trajetória, participei da construção e evolução de produtos em empresas como B3, TOTVS, Zendry e Sol Agora, colaborando diretamente com times de Produto, Tecnologia e Negócio para transformar desafios complexos em experiências simples, eficientes e orientadas a resultados.
              </p>
              <p>
              Minha atuação combina Product Discovery, UX Research, arquitetura da informação, jornadas do usuário, Design Systems, prototipação e testes de usabilidade. Tenho experiência conduzindo entrevistas, workshops, validação de hipóteses e iniciativas de melhoria contínua baseadas em dados e comportamento dos usuários.
              </p>
              <p>
              Acredito que o design vai muito além da interface. Meu papel é conectar necessidades dos usuários, objetivos de negócio e viabilidade técnica para criar produtos que gerem valor real para as pessoas e para as empresas.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="font-serif text-3xl mb-6 text-foreground">Ferramentas & Habilidades</h2>
              <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-foreground mb-4 uppercase tracking-wider text-sm">
                  Design
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Figma / FigJam</li>
                  <li>Design Systems</li>
                  <li>UX Research</li>
                  <li>Arquitetura da Informação</li>
                  <li>Wireframes</li>
                  <li>Prototipação</li>
                  <li>Testes de Usabilidade</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4 uppercase tracking-wider text-sm">
                  Product Design
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Product Discovery</li>
                  <li>Jornada do Usuário</li>
                  <li>Validação de Hipóteses</li>
                  <li>Priorização</li>
                  <li>Estratégia de Produto</li>
                  <li>Métricas de Produto</li>
                  <li>Roadmaps</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4 uppercase tracking-wider text-sm">
                  Negócio
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Workshops</li>
                  <li>Stakeholders</li>
                  <li>Times Multidisciplinares</li>
                  <li>Metodologias Ágeis</li>
                  <li>Design Thinking</li>
                  <li>Produtos Financeiros</li>
                  <li>SaaS B2B</li>
                </ul>
              </div>
            </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 rounded-lg overflow-hidden relative aspect-[3/4] bg-muted"
          >
            <img 
              src={designerImage} 
              alt="Retrato do Designer" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
