import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyNavProps {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

export function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <nav className="border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {prev ? (
          <Link href={prev.href} className="group flex items-center gap-4 w-full md:w-auto text-left" data-testid="link-prev-project">
            <ArrowLeft className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Projeto Anterior</p>
              <p className="font-serif text-2xl group-hover:text-primary transition-colors">{prev.title}</p>
            </div>
          </Link>
        ) : <div className="w-full md:w-auto" />}

        {next ? (
          <Link href={next.href} className="group flex flex-row-reverse md:flex-row items-center gap-4 w-full md:w-auto text-right" data-testid="link-next-project">
            <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Próximo Projeto</p>
              <p className="font-serif text-2xl group-hover:text-primary transition-colors">{next.title}</p>
            </div>
          </Link>
        ) : <div className="w-full md:w-auto" />}
      </div>
    </nav>
  );
}
