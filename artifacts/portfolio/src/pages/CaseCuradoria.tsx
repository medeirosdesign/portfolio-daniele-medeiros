import Layout from "@/components/layout/Layout";

import slide01 from "@/assets/curadoria/curadoria-01-capa.png";
import slide02 from "@/assets/curadoria/curadoria-02-visao-geral.png";
import slide03 from "@/assets/curadoria/curadoria-03-contexto.png";
import slide04 from "@/assets/curadoria/curadoria-04-dores.png";
import slide05 from "@/assets/curadoria/curadoria-05-objetivos.png";
import slide06 from "@/assets/curadoria/curadoria-06-meu-papel.png";
import slide07 from "@/assets/curadoria/curadoria-07-discovery.png";
import slide08 from "@/assets/curadoria/curadoria-08-operacao.png";
import slide09 from "@/assets/curadoria/curadoria-09-insights.png";
import slide10 from "@/assets/curadoria/curadoria-10-as-is.png";
import slide11 from "@/assets/curadoria/curadoria-11-to-be.png";
import slide12 from "@/assets/curadoria/curadoria-12-ideacao.png";
import slide13 from "@/assets/curadoria/curadoria-13-mvp.png";
import slide14 from "@/assets/curadoria/curadoria-14-telas.png";
import slide15 from "@/assets/curadoria/curadoria-15-resultados.png";
import slide16 from "@/assets/curadoria/curadoria-16-final.png";

const slides = [
  {
    image: slide01,
    alt: "Capa do case Portal de Curadoria",
  },
  {
    image: slide02,
    alt: "Visão geral do projeto Portal de Curadoria",
  },
  {
    image: slide03,
    alt: "Contexto do Portal de Curadoria",
  },
  {
    image: slide04,
    alt: "Principais dores encontradas",
  },
  {
    image: slide05,
    alt: "Objetivos do projeto",
  },
  {
    image: slide06,
    alt: "Papel da Product Designer no projeto",
  },
  {
    image: slide07,
    alt: "Processo de Discovery e priorização",
  },
  {
    image: slide08,
    alt: "Entendimento da operação de curadoria",
  },
  {
    image: slide09,
    alt: "Principais insights do Discovery",
  },
  {
    image: slide10,
    alt: "Mapeamento do processo atual AS IS",
  },
  {
    image: slide11,
    alt: "Novo fluxo proposto TO BE",
  },
  {
    image: slide12,
    alt: "Processo de ideação",
  },
  {
    image: slide13,
    alt: "Funcionalidades priorizadas para o MVP",
  },
  {
    image: slide14,
    alt: "Telas desenvolvidas para o Portal de Curadoria",
  },
  {
    image: slide15,
    alt: "Resultados e aprendizados do projeto",
  },
  {
    image: slide16,
    alt: "Encerramento do case Portal de Curadoria",
  },
];

export default function CaseCuradoria() {
  return (
    <Layout>
      <main className="bg-background">
        <section className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                CASE STUDY
              </p>

              <h1 className="mb-6 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
                Portal de Curadoria
              </h1>

              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Redesenho de um processo complexo de curadoria para criar uma
                experiência mais eficiente, organizada e padronizada para os
                especialistas responsáveis pelos conteúdos do chatbot.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {slides.map((slide, index) => (
                <figure
                  key={slide.alt}
                  className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="block h-auto w-full"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}