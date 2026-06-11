import Layout from "@/components/layout/Layout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

import b3Hero from "@/assets/b3-hero.png";
import b31 from "@/assets/b3-1.jpg";
import b32 from "@/assets/b3-2.jpg";
import b33 from "@/assets/b3-3.jpg";
import b34 from "@/assets/b3-4.jpg";
import b35 from "@/assets/b3-5.jpg";

export default function B3() {
  return (
    <Layout>
      <article>
        <CaseStudyHero
          tags={["Mercado de Capitais", "Produtos Financeiros", "B2B", "Product Design", "UX Research"]}
          title="B3 | SINACOR"
          subtitle="Modernização de sistemas financeiros utilizados por corretoras e profissionais do mercado de capitais."
          role="Product Designer"
          period="2021 — 2022"
          company="B3 — Bolsa do Brasil"
          disciplines="Discovery, UX Research, Arquitetura da Informação, Prototipação e Design System"
        />

        <div className="w-full">
          <img src={b3Hero} alt="Interface de produto financeiro B3 SINACOR" className="w-full h-auto" />
        </div>

        <CaseStudySection label="01 — CONTEXTO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O SINACOR é uma plataforma utilizada por corretoras e profissionais do mercado financeiro para apoiar operações críticas do mercado de capitais.
          </p>
          <p>
            Em um ambiente com alto volume de dados, regras de negócio complexas e forte exigência operacional, a experiência precisava apoiar usuários que tomam decisões rápidas e lidam com fluxos sensíveis no dia a dia.
          </p>
          <p>
            O projeto envolveu a modernização de sistemas financeiros e a evolução da experiência em produtos B2B utilizados por diferentes perfis de usuários.
          </p>
        </CaseStudySection>

        <CaseStudySection label="02 — PROBLEMA">
          <p className="font-serif text-3xl text-foreground mb-8">
            Usuários dependiam de sistemas legados, fluxos densos e interfaces fragmentadas para executar tarefas financeiras críticas.
          </p>
          <p>
            A complexidade das jornadas dificultava a localização de informações, aumentava o esforço cognitivo e exigia maior familiaridade técnica para concluir operações com segurança.
          </p>
          <p>
            O desafio era simplificar fluxos sem perder profundidade, respeitando regras de negócio, requisitos regulatórios e limitações técnicas do ecossistema.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 — MEU PAPEL">
          <p className="font-serif text-3xl text-foreground mb-8">
            Atuei na evolução da experiência de produtos financeiros, conectando necessidades dos usuários, objetivos de negócio e viabilidade técnica.
          </p>
          <p>
            Minha atuação envolveu Discovery, entrevistas com usuários, análise de comportamento, mapeamento de jornadas, identificação de gargalos, definição de fluxos e prototipação de soluções.
          </p>
          <p>
            Trabalhei próxima aos times de Produto e Tecnologia para transformar processos complexos em experiências mais claras, consistentes e eficientes.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 — PROCESSO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O processo partiu do entendimento das jornadas existentes e dos principais pontos de fricção enfrentados pelos usuários.
          </p>
          <p>
            Foram realizados mapeamentos de fluxos críticos, análise de telas legadas, levantamento de hipóteses, entrevistas com usuários e alinhamentos constantes com stakeholders de negócio e tecnologia.
          </p>
          <p>
            A partir dos aprendizados, foram estruturadas propostas de melhoria, wireframes, protótipos e definições de interface com foco em clareza, eficiência operacional e redução de ambiguidades.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 — SOLUÇÃO">
          <p className="font-serif text-3xl text-foreground mb-8">
            A solução focou na simplificação de fluxos financeiros e na organização visual de informações críticas para apoiar a tomada de decisão.
          </p>
          <p>
            Foram propostas interfaces com melhor hierarquia visual, agrupamento de informações, padronização de componentes e interações mais claras para usuários que operam em contextos de alta complexidade.
          </p>
          <p>
            O trabalho também contribuiu para a evolução de padrões de experiência e consistência entre produtos internos.
          </p>
        </CaseStudySection>

        <Gallery
          images={[
            { src: b31, alt: "Mapeamento de fluxos e jornadas financeiras" },
            { src: b32, alt: "Interface de sistema financeiro com alta densidade de dados" },
            { src: b33, alt: "Componentes e padrões de interface para produto financeiro" },
          ]}
        />

        <CaseStudySection label="06 — RESULTADO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O projeto contribuiu para tornar fluxos financeiros mais claros, reduzindo atritos em jornadas críticas utilizadas por corretoras e profissionais do mercado.
          </p>
          <p>
            As melhorias apoiaram a modernização da experiência, a organização de informações complexas e a padronização de decisões de interface em produtos financeiros B2B.
          </p>
          <p>
            A experiência fortaleceu minha atuação em produtos de alta complexidade, com múltiplas regras de negócio, dependências técnicas e forte impacto operacional.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 — APRENDIZADOS">
          <p className="font-serif text-3xl text-foreground mb-8">
            Em produtos financeiros complexos, simplificar não significa remover informação — significa organizar melhor o contexto para apoiar decisões seguras.
          </p>
          <p>
            Esse projeto reforçou a importância de equilibrar pesquisa, dados, regras de negócio, tecnologia e experiência do usuário para evoluir sistemas críticos com responsabilidade.
          </p>
          <p>
            Também consolidou minha visão sobre Product Design em ambientes regulados, onde cada decisão de interface precisa considerar impacto operacional, clareza e confiança.
          </p>
        </CaseStudySection>

        <CaseStudyNav
          prev={{ title: "TOTVS | Portal de Curadoria IA", href: "/projetos/totvs" }}
          next={{
            title: "Zendry | Plataforma Financeira",
            href: "/projetos/zendry-plataforma"
          }}
        />
      </article>
    </Layout>
  );
}
