import { GraduationCap, HandCoins, Users, LineChart, FileText, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: GraduationCap,
    title: "Capacitação gratuita",
    description:
      "Cursos online e presenciais sobre gestão, vendas, marketing e formalização do seu negócio.",
  },
  {
    icon: HandCoins,
    title: "Acesso a crédito",
    description:
      "Linhas de microcrédito com juros reduzidos e condições especiais para microempreendedores.",
  },
  {
    icon: Users,
    title: "Mentoria especializada",
    description:
      "Acompanhamento individual com consultores experientes para tirar sua ideia do papel.",
  },
  {
    icon: LineChart,
    title: "Educação financeira",
    description:
      "Aprenda a controlar o fluxo de caixa, precificar produtos e planejar o crescimento.",
  },
  {
    icon: FileText,
    title: "Formalização facilitada",
    description:
      "Apoio completo para abrir seu CNPJ como MEI e regularizar a sua atividade.",
  },
  {
    icon: ShieldCheck,
    title: "Rede de apoio",
    description:
      "Conecte-se a outros empreendedores e a parceiros públicos e privados em todo o país.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24" id="beneficios">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Benefícios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Tudo o que você precisa para empreender
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Reunimos em um só lugar os recursos, o conhecimento e o apoio
            financeiro para transformar seu sonho em um negócio sustentável.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-border bg-card transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
