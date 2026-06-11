import Layout from "@/components/layout/Layout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

import solAgoraHero from "@/assets/sol-agora-hero.png";
import solAgora1 from "@/assets/sol-agora-1.png";
import solAgora2 from "@/assets/sol-agora-2.png";
import solAgora3 from "@/assets/sol-agora-3.png";
import solAgora4 from "@/assets/sol-agora-4.png";
import solAgora5 from "@/assets/sol-agora-5.png";
import solAgora6 from "@/assets/sol-agora-6.png";
import solAgora7 from "@/assets/sol-agora-7.png";
import solAgora8 from "@/assets/sol-agora-8.png";

export default function SolAgora() {
  return (
    <Layout>
      <article>
        <CaseStudyHero
          tags={["Fintech", "Discovery", "UX Research", "Product Design"]}
          title="Sol Agora"
          subtitle="Criação da experiência digital para financiamento de energia solar, conduzindo pesquisas, discovery, prototipação e validação de soluções para clientes e parceiros."
          role="Product Designer"
          period="2019 — 2021"
          company="Sol Agora"
          disciplines="Discovery, UX/UI, UX Research, Prototipação"
        />

        <div className="w-full">
          <img
            src={solAgoraHero}
            alt="Experiência digital Sol Agora"
            className="w-full h-auto"
          />
        </div>

        <CaseStudySection label="01 — CONTEXTO">
          <p>
            A Sol Agora atuava no financiamento de energia solar, conectando clientes,
            parceiros e soluções financeiras em uma jornada que envolvia simulação,
            análise, contratação e acompanhamento do processo.
          </p>
        </CaseStudySection>

        <CaseStudySection label="02 — DESAFIO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O desafio era tornar uma jornada financeira e técnica mais simples,
            transparente e confiável para clientes e parceiros, reduzindo dúvidas
            durante a simulação, aprovação e acompanhamento do financiamento.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 — MEU PAPEL">
          <p>
            Atuei como Product Designer em etapas de discovery, pesquisa, mapeamento
            de jornada, prototipação e validação, apoiando a criação de fluxos digitais
            para financiamento, gestão de propostas e acompanhamento operacional.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 — PROCESSO">
          <p>
            O processo envolveu entendimento das necessidades de clientes e parceiros,
            análise de fluxos existentes, organização de hipóteses, criação de wireframes,
            protótipos navegáveis e refinamento das interfaces junto aos times de produto
            e tecnologia.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 — SOLUÇÃO">
          <p>
            A solução estruturou uma experiência mais clara para simulação e gestão do
            financiamento solar, com telas de apoio à decisão, organização de propostas,
            acompanhamento de status e visualização de informações essenciais para o usuário.
          </p>
        </CaseStudySection>

        <Gallery
          images={[
            {
              src: solAgora1,
              alt: "Fluxo mobile de financiamento Sol Agora"
            },
            {
              src: solAgora2,
              alt: "Discovery e estruturação da jornada"
            },
            {
              src: solAgora3,
              alt: "Tela de listagem e gestão de propostas"
            },
            {
              src: solAgora4,
              alt: "Fluxo de etapas e aprovação"
            },
            {
              src: solAgora5,
              alt: "Pesquisa e mapeamento de experiência"
            },
            {
              src: solAgora6,
              alt: "Análise de jornada e pontos de decisão"
            },
            {
              src: solAgora7,
              alt: "Wireframes e alternativas de solução"
            },
            {
              src: solAgora8,
              alt: "Indicadores e dashboard de acompanhamento"
            }
          ]}
        />

        <CaseStudySection label="06 — RESULTADOS">
          <p>
            A experiência ajudou a organizar melhor a jornada de financiamento,
            tornando o processo mais compreensível para usuários e parceiros, além de
            criar uma base visual mais consistente para evolução do produto.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 — APRENDIZADOS">
          <p>
            Em produtos financeiros com alta complexidade operacional, a clareza da
            jornada é decisiva. Antes de avançar, o usuário precisa entender o que está
            acontecendo, qual etapa vem depois e quais informações são necessárias.
          </p>
        </CaseStudySection>

        <CaseStudyNav
          prev={{
            title: "Zendry | Plataforma Financeira",
            href: "/projetos/zendry-plataforma"
          }}
          next={{ title: "B3 | SINACOR", href: "/projetos/b3" }}
        />
      </article>
    </Layout>
  );
}