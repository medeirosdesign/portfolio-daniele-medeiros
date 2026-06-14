import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import designerImage from "@/assets/daniele-profile.png";

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
              Sou Product Designer Sênior com mais de 15 anos de experiência criando produtos digitais para fintechs, plataformas B2B e sistemas corporativos.
              </p>
              <p>
              Já atuei em empresas como B3, TOTVS, Zendry e Sol Agora, participando de projetos ligados a produtos financeiros, meios de pagamento, sistemas internos, crédito, Pix, onboarding, relatórios e Design Systems.
              </p>
              <p>
              Trabalho de ponta a ponta: entendo o problema, organizo fluxos e jornadas, desenho protótipos, valido hipóteses e acompanho a entrega junto com Produto, Tecnologia e Negócio.
              </p>
              <p>
              Gosto de atuar em produtos complexos, onde o desafio é transformar informação, regra de negócio e restrições técnicas em experiências mais simples, claras e fáceis de usar.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="font-serif text-3xl mb-6 text-foreground">Ferramentas & Habilidades</h2>
              <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-foreground mb-4 uppercase tracking-wider text-sm">
                  Design e pesquisa
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
                Produto
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
                Colaboração
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
              alt="Retrato de Daniele Medeiros" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
