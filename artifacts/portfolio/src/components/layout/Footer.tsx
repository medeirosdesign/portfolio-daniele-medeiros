import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-14 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-serif text-2xl tracking-tight hover:opacity-70 transition-opacity">
            Daniele Medeiros
          </Link>
          <p className="text-sm text-muted-foreground">Product Designer Sênior</p>
          <p className="text-sm text-muted-foreground">São Paulo — SP</p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            © {new Date().getFullYear()} Daniele Medeiros
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-1">Contato</p>
          <a
            href="mailto:medeirosdesign@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            medeirosdesign@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-behance"
          >
            Behance
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 mb-1">Navegação</p>
          <Link href="/projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projetos</Link>
          <Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
          <Link href="/experiencia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experiência</Link>
          <Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
