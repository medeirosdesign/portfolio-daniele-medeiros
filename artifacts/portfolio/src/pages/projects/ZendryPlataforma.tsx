import Layout from "@/components/layout/Layout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

import zendryHero from "@/assets/zendry-hero.png";
import zendryPlat1 from "@/assets/zendry-plat-1.png";
import zendryPlat2 from "@/assets/zendry-plat-2.png";
import zendryPlat3 from "@/assets/zendry-plat-3.png";
import zendryPlat4 from "@/assets/zendry-plat-4.png";
import zendryPlat5 from "@/assets/zendry-plat-5.png";

export default function ZendryPlataforma() {
  return (
    <Layout>
      <article>
        <CaseStudyHero
          tags={["Pagamentos", "Pix", "Fintech", "Product Design"]}
          title="Zendry | Plataforma Financeira"
          subtitle="Redesenho e evolução de uma plataforma financeira digital, incluindo Pix, onboarding, integrações, relatórios gerenciais e gestão operacional."
          role="Product Designer"
          period="2017 — 2019"
          company="Zendry"
          disciplines="UX/UI, Product Design, Prototipação"
        />

        <div className="w-full">
          <img
            src={zendryHero}
            alt="Tela inicial da plataforma Zendry"
            className="w-full h-auto"
          />
        </div>

        <CaseStudySection label="01 — CONTEXTO">
          <p>
            A Zendry era uma plataforma financeira digital focada em pagamentos,
            transferências, gestão operacional e serviços financeiros para empresas.
            Com a evolução do produto, surgiram novas necessidades relacionadas a Pix,
            onboarding, dashboards e organização da experiência entre dispositivos.
          </p>
        </CaseStudySection>

        <CaseStudySection label="02 — DESAFIO">
          <p className="font-serif text-3xl text-foreground mb-8">
            Como evoluir a plataforma incorporando novos serviços financeiros sem
            aumentar a complexidade da navegação e mantendo uma experiência consistente
            entre desktop e mobile?
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 — MEU PAPEL">
          <p>
            Atuei como Product Designer desenhando fluxos, telas e jornadas para
            diferentes módulos da plataforma, incluindo autenticação, onboarding,
            Pix, transferências, relatórios e gestão financeira.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 — PROCESSO">
          <p>
            O trabalho envolveu entendimento das necessidades de negócio,
            estruturação dos fluxos, revisão da arquitetura da informação,
            criação de wireframes, prototipação em alta fidelidade e refinamento
            contínuo junto aos times de produto e desenvolvimento.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 — SOLUÇÃO">
          <p>
            Foi criada uma experiência mais consistente para operações financeiras,
            com foco em clareza das informações, redução de atritos em tarefas críticas
            e escalabilidade da interface para acomodar novos produtos e funcionalidades.
          </p>
        </CaseStudySection>

        <Gallery
          images={[
            {
              src: zendryPlat1,
              alt: "Visão geral da plataforma Zendry"
            },
            {
              src: zendryPlat2,
              alt: "Fluxos e jornadas da experiência do usuário"
            },
            {
              src: zendryPlat3,
              alt: "Dashboard e relatórios financeiros"
            },
            {
              src: zendryPlat4,
              alt: "Tela desktop de login e autenticação"
            },
            {
              src: zendryPlat5,
              alt: "Fluxo mobile de pagamentos e Pix"
            }
          ]}
        />

        <CaseStudySection label="06 — RESULTADOS">
          <p>
            A evolução da plataforma permitiu ampliar a oferta de serviços financeiros
            mantendo consistência visual, melhor organização das informações e uma
            experiência mais intuitiva para usuários em diferentes contextos de uso.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 — APRENDIZADOS">
          <p>
            Produtos financeiros exigem equilíbrio entre simplicidade e segurança.
            A cada nova funcionalidade adicionada, a clareza da informação e a
            consistência da experiência tornam-se fatores decisivos para a confiança
            dos usuários.
          </p>
        </CaseStudySection>

        <CaseStudyNav
          prev={{ title: "Zendry Cripto", href: "/projetos/zendry-cripto" }}
          next={{ title: "Sol Agora", href: "/projetos/sol-agora" }}
        />
      </article>
    </Layout>
  );
}