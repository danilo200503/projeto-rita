import { UserPlus, BookOpen, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Cadastre-se gratuitamente",
    description:
      "Crie sua conta em poucos minutos e conte um pouco sobre a sua ideia ou negócio atual.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Faça as trilhas de capacitação",
    description:
      "Acesse cursos de educação financeira, gestão e vendas no seu próprio ritmo.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Acesse benefícios e cresça",
    description:
      "Solicite crédito, receba mentoria e formalize o seu negócio com o apoio do programa.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Como funciona
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Três passos para começar
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-3xl font-bold text-border">{s.step}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
