import Layout from "@/components/layout/Layout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { Gallery } from "@/components/case-study/Gallery";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

import portalIa1 from "@/assets/portal-ia-1.png";
import portalIa2 from "@/assets/portal-ia-2.png";
import portalIa3 from "@/assets/portal-ia-3.png";
import portalIa4 from "@/assets/portal-ia-4.png";
import portalIa5 from "@/assets/portal-ia-5.png";

export default function Totvs() {
  return (
    <Layout>
      <article>
        <CaseStudyHero
          tags={["UX Research", "Arquitetura da Informação", "Design System", "UX Writing", "IA"]}
          title="TOTVS | Portal de Curadoria IA"
          subtitle="Criação de um portal para centralizar, revisar e organizar conteúdos utilizados por agentes virtuais e sistemas conversacionais com IA."
          role="Product Designer Sênior"
          period="2025 — 2026"
          company="TOTVS"
          disciplines="Discovery, UX Research, Arquitetura da Informação, Prototipação, Design System, Tokens e UX Writing"
        />

        <div className="w-full">
          <img
            src={portalIa1}
            alt="Interface principal do Portal de Curadoria IA"
            className="w-full h-auto"
          />
        </div>

        <CaseStudySection label="01 — CONTEXTO">
          <p className="font-serif text-3xl text-foreground mb-8">
            A TOTVS identificou a necessidade de estruturar e centralizar os conteúdos utilizados por agentes virtuais e sistemas conversacionais baseados em Inteligência Artificial.
          </p>
          <p>
            O processo era distribuído entre diferentes documentos, planilhas e fontes de informação, dificultando a governança dos conteúdos, a manutenção das informações e a evolução dos agentes.
          </p>
          <p>
            O desafio era criar uma experiência capaz de organizar o ciclo completo de curadoria, revisão e publicação desses conteúdos em uma única plataforma.
          </p>
        </CaseStudySection>

        <CaseStudySection label="02 — PROBLEMA">
          <p className="font-serif text-3xl text-foreground mb-8">
            Equipes que trabalham com agentes de IA enfrentam dificuldade para organizar, revisar e manter os conteúdos que alimentam esses sistemas.
          </p>
          <p>
            Sem uma interface adequada, esse trabalho era feito de forma descentralizada em planilhas, documentos e canais paralelos, gerando inconsistências, retrabalho e baixa rastreabilidade.
          </p>
          <p>
            Além disso, a ausência de um fluxo estruturado dificultava a revisão, aprovação e atualização contínua dos conteúdos utilizados pelos agentes.
          </p>
        </CaseStudySection>

        <CaseStudySection label="03 — MEU PAPEL">
          <p className="font-serif text-3xl text-foreground mb-8">
            Atuei desde a imersão e definição do problema até a estruturação da solução, prototipação e evolução dos padrões de interface.
          </p>
          <p>
            Minha atuação envolveu UX Research, arquitetura da informação, UX Writing, Product Design e apoio à evolução do Design System, incluindo componentes, estados, tokens e variáveis.
          </p>
          <p>
            Também participei da organização dos fluxos de curadoria, definição de jornadas, documentação das decisões e alinhamento com stakeholders internos.
          </p>
        </CaseStudySection>

        <CaseStudySection label="04 — PROCESSO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O processo começou pela imersão no cenário atual, entendendo como os conteúdos eram criados, revisados, aprovados e utilizados pelos agentes de IA.
          </p>
          <p>
            Foram mapeados stakeholders, ferramentas envolvidas, dores operacionais, fluxos AS-IS e oportunidades de melhoria para estruturar uma jornada mais clara e escalável.
          </p>
          <p>
            A partir dos aprendizados do Discovery, foram criados fluxos TO-BE, arquitetura da informação, wireframes e protótipos iterativos para validar a experiência proposta.
          </p>
        </CaseStudySection>

        <CaseStudySection label="05 — SOLUÇÃO">
          <p className="font-serif text-3xl text-foreground mb-8">
            A solução foi um portal centralizado para gestão, revisão e governança dos conteúdos utilizados por agentes conversacionais com IA.
          </p>
          <p>
            O portal organiza conteúdos por categoria, status e etapa de revisão, permitindo acompanhar o ciclo de curadoria de forma mais clara e controlada.
          </p>
          <p>
            Além da interface principal, foram definidos padrões de UX Writing, fluxos de aprovação, componentes reutilizáveis e variáveis alinhadas ao Design System.
          </p>
        </CaseStudySection>

        <Gallery
          images={[
            { src: portalIa2, alt: "Fluxo de curadoria e aprovação de conteúdos" },
            { src: portalIa3, alt: "Arquitetura da informação do portal" },
            { src: portalIa4, alt: "Mapeamento do processo atual e oportunidades" },
            { src: portalIa5, alt: "Componentes, estados e variáveis do Design System" }
          ]}
        />

        <CaseStudySection label="06 — RESULTADO">
          <p className="font-serif text-3xl text-foreground mb-8">
            O projeto centralizou o processo de curadoria em uma única plataforma, trazendo mais clareza, governança e consistência para os conteúdos utilizados pelos agentes de IA.
          </p>
          <p>
            A solução reduziu a dependência de documentos dispersos, facilitou a manutenção das informações e tornou o processo de revisão mais rastreável.
          </p>
          <p>
            Também contribuiu para a padronização da experiência, apoiando a evolução do produto com componentes e padrões reutilizáveis.
          </p>
        </CaseStudySection>

        <CaseStudySection label="07 — APRENDIZADOS">
          <p className="font-serif text-3xl text-foreground mb-8">
            Projetar produtos para IA exige olhar além da interface: a qualidade da experiência depende diretamente da estrutura, governança e clareza dos conteúdos.
          </p>
          <p>
            Pequenas decisões de arquitetura da informação e UX Writing impactam diretamente a consistência das respostas dos agentes e a confiança dos usuários no sistema.
          </p>
          <p>
            Esse projeto reforçou a importância de conectar Discovery, produto, tecnologia e Design System para transformar processos complexos em experiências mais simples e escaláveis.
          </p>
        </CaseStudySection>

        <CaseStudyNav
          next={{ title: "Zendry Cripto", href: "/projetos/zendry-cripto" }}
        />
      </article>
    </Layout>
  );
}
