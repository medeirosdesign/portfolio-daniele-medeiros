import Layout from "@/components/layout/Layout";

import slide01 from "@/assets/case/slide-01-capa.png";
import slide02 from "@/assets/case/slide-02-contexto.png";
import slide03 from "@/assets/case/slide-03-benchmark.png";
import slide04 from "@/assets/case/slide-04-problemas.png";
import slide05 from "@/assets/case/slide-05-priorizacao.png";
import slide06 from "@/assets/case/slide-06-objetivos.png";
import slide07 from "@/assets/case/slide-07-diretrizes.png";
import slide08 from "@/assets/case/slide-08-jornada.png";
import slide09 from "@/assets/case/slide-09-solucao.png";
import slide10 from "@/assets/case/slide-10-ia.png";
import slide11 from "@/assets/case/slide-11-resultado.png";
import slide12 from "@/assets/case/slide-12-final.png";

const slides = [
  {
    image: slide01,
    alt: "Capa do case Mercado Pago",
  },
  {
    image: slide02,
    alt: "Contexto do case Mercado Pago",
  },
  {
    image: slide03,
    alt: "Benchmark do case Mercado Pago",
  },
  {
    image: slide04,
    alt: "Problemas encontrados",
  },
  {
    image: slide05,
    alt: "Priorização dos problemas",
  },
  {
    image: slide06,
    alt: "Objetivos da solução",
  },
  {
    image: slide07,
    alt: "Diretrizes de design",
  },
  {
    image: slide08,
    alt: "Mapa da jornada atual",
  },
  {
    image: slide09,
    alt: "Solução proposta",
  },
  {
    image: slide10,
    alt: "Aplicação de IA",
  },
  {
    image: slide11,
    alt: "Resultado esperado",
  },
  {
    image: slide12,
    alt: "Slide final de agradecimento",
  },
];

export default function Case() {
  return (
    <Layout>
      <main className="bg-background">
        <section className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 md:mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              CASE STUDY
              </p>

              <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground mb-6">
                Mercado Pago — Cartão de crédito
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Estudo de melhoria da experiência de gerenciamento do cartão de crédito, com foco em clareza, centralização das informações e redução da navegação.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {slides.map((slide, index) => (
                <figure
                  key={index}
                  className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto block"
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