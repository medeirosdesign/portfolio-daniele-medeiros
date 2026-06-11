interface BeforeAfterProps {
  beforeSrc: string;
  beforeAlt?: string;
  afterSrc: string;
  afterAlt?: string;
}

export function BeforeAfter({ beforeSrc, beforeAlt = "Antes", afterSrc, afterAlt = "Depois" }: BeforeAfterProps) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 w-full space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center">{beforeAlt}</p>
          <img src={beforeSrc} alt={beforeAlt} className="w-full rounded-xl shadow-lg border border-border" />
        </div>
        <div className="hidden md:block w-px bg-border h-64 self-center"></div>
        <div className="flex-1 w-full space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center">{afterAlt}</p>
          <img src={afterSrc} alt={afterAlt} className="w-full rounded-xl shadow-lg border border-border" />
        </div>
      </div>
    </section>
  );
}
