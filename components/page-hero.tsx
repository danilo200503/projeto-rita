export function PageHero({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {badge}
        </span>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </section>
  )
}
