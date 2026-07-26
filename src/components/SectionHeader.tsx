interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, description, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
