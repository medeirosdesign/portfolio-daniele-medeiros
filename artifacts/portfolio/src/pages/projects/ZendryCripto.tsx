import Layout from "@/components/layout/Layout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

import zendryCriptoHero from "@/assets/zendry-cripto-hero.png";
import zendryCripto1 from "@/assets/zendry-cripto-1.png";
import zendryCripto2 from "@/assets/zendry-cripto-2.png";
import zendryCripto3 from "@/assets/zendry-cripto-3.png";
import zendryCripto4 from "@/assets/zendry-cripto-4.png";
import zendryCripto5 from "@/assets/zendry-cripto-5.png";

export default function ZendryCripto() {
  return (
    <Layout>
      <article>
        <CaseStudyHero
          tags={["Cripto", "UX Financeiro", "Design System", "Product Design"]}
          title="Zendry | Criptoativos"
          subtitle="Redesenho da experiência de compra, venda, transferência e gestão de criptoativos, com foco em segurança, confiança e clareza para usuários iniciantes e avançados."
          role="Product Designer"
          period="2017 — 2019"
          company="Zendry"
          disciplines="UX/UI, Product Design, Prototipação, Design System"
        />

        <div className="w-full">
          <img
            src={zendryCriptoHero}
            alt="Dashboard da experiência de criptoativos Zendry"
            className="w-full h-auto"
          />
        </div>

        <CaseStudySection label="01 — CONTEXTO">
          <p>
            A Zendry precisava evoluir sua experiência de criptoativos dentro do
            ecossistema financeiro da plataforma, conectando jornadas de compra,
            venda, transferência e gestão de carteira em uma interface mais clara,
            segura e consistente.
          </p>
        </CaseStudySection>

        <CaseStudySection label="02 — DESAFIO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O desafio era simplificar uma jornada naturalmente técnica, reduzindo
            dúvidas e inseguranças do usuário em operações com criptoativos, sem
            comprometer a precisão das informações financeiras.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 — MEU PAPEL">
          <p>
            Atuei como Product Designer no redesenho das jornadas, estruturação dos
            fluxos, definição de telas, organização dos componentes e aplicação dos
            padrões visuais para garantir consistência com o restante da plataforma.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 — PROCESSO">
          <p>
            O processo incluiu análise da jornada atual, definição da jornada desejada,
            criação de wireframes, estudo de arquitetura da informação, refinamento de
            interface e aplicação de padrões do Design System para apoiar escalabilidade
            e consistência.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 — SOLUÇÃO">
          <p>
            A solução organizou os principais pontos da experiência de criptoativos:
            visão de carteira, acompanhamento de informações financeiras, fluxos de
            operação, mensagens de orientação, confirmações e telas com maior clareza
            para tomada de decisão.
          </p>
        </CaseStudySection>

        <Gallery
          images={[
            {
              src: zendryCripto1,
              alt: "Dashboard da carteira de criptoativos"
            },
            {
              src: zendryCripto2,
              alt: "Jornada atual da experiência de criptoativos"
            },
            {
              src: zendryCripto3,
              alt: "Jornada desejada da experiência de criptoativos"
            },
            {
              src: zendryCripto4,
              alt: "Ideação e wireframes da experiência de criptoativos"
            },
            {
              src: zendryCripto5,
              alt: "Design System aplicado ao produto de criptoativos"
            }
          ]}
        />

        <CaseStudySection label="06 — RESULTADOS">
          <p>
            O redesenho trouxe mais organização para a experiência, melhor separação
            das etapas da jornada e uma interface mais preparada para comunicar dados,
            ações e decisões financeiras de forma objetiva.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 — APRENDIZADOS">
          <p>
            Em produtos de cripto, confiança é construída nos detalhes: linguagem clara,
            confirmação de ações, hierarquia visual e consistência ajudam o usuário a
            tomar decisões com mais segurança.
          </p>
        </CaseStudySection>

        <CaseStudyNav
          prev={{ title: "TOTVS | Produtos Financeiros", href: "/projetos/totvs" }}
          next={{
            title: "Zendry | Plataforma Financeira",
            href: "/projetos/zendry-plataforma"
          }}
        />
      </article>
    </Layout>
  );
}
