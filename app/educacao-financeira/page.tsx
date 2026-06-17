import Image from "next/image"
import Link from "next/link"
import {
  PiggyBank,
  Calculator,
  TrendingUp,
  Wallet,
  Receipt,
  Target,
  ArrowRight,
  PlayCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Educação Financeira | Brasil Empreendedor",
  description:
    "Aprenda a organizar as finanças do seu negócio: fluxo de caixa, precificação, controle de gastos e planejamento de crescimento.",
}

const modules = [
  {
    icon: Wallet,
    title: "Controle do fluxo de caixa",
    description:
      "Entenda quanto entra e quanto sai do seu negócio para nunca ser pego de surpresa.",
    lessons: "6 aulas",
  },
  {
    icon: Calculator,
    title: "Como precificar seus produtos",
    description:
      "Calcule custos, margem de lucro e defina preços justos que mantêm seu negócio saudável.",
    lessons: "5 aulas",
  },
  {
    icon: Receipt,
    title: "Separar finanças pessoais",
    description:
      "Aprenda por que e como separar o dinheiro da empresa do seu dinheiro pessoal.",
    lessons: "4 aulas",
  },
  {
    icon: PiggyBank,
    title: "Reserva e capital de giro",
    description:
      "Crie uma reserva de emergência e mantenha capital para o dia a dia do negócio.",
    lessons: "5 aulas",
  },
  {
    icon: TrendingUp,
    title: "Crédito consciente",
    description:
      "Saiba quando e como usar crédito para crescer sem comprometer o seu caixa.",
    lessons: "4 aulas",
  },
  {
    icon: Target,
    title: "Planejamento de metas",
    description:
      "Defina objetivos financeiros realistas e acompanhe o crescimento do seu negócio.",
    lessons: "5 aulas",
  },
]

const tips = [
  {
    number: "01",
    title: "Registre todas as movimentações",
    text: "Anote cada venda e cada gasto, por menor que seja. O controle começa pela informação.",
  },
  {
    number: "02",
    title: "Defina um pró-labore",
    text: "Estabeleça um salário fixo para você e evite retirar dinheiro do caixa sem planejamento.",
  },
  {
    number: "03",
    title: "Reserve para impostos",
    text: "Separe uma parte do faturamento todo mês para não ter sustos com tributos.",
  },
  {
    number: "04",
    title: "Reinvista com estratégia",
    text: "Direcione parte do lucro para o que realmente faz o negócio crescer.",
  },
]

const faqs = [
  {
    q: "Preciso pagar para acessar os cursos?",
    a: "Não. Toda a trilha de educação financeira do Brasil Empreendedor é 100% gratuita e pública.",
  },
  {
    q: "Preciso ter um negócio aberto para participar?",
    a: "Não. O programa atende tanto quem já empreende quanto quem ainda está planejando começar.",
  },
  {
    q: "Recebo certificado ao final dos módulos?",
    a: "Sim. Ao concluir cada trilha você recebe um certificado digital reconhecido pelo programa.",
  },
  {
    q: "As aulas são online ou presenciais?",
    a: "As trilhas são online e no seu ritmo, mas também oferecemos oficinas presenciais em diversos municípios.",
  },
]

export default function EducacaoFinanceiraPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          badge="Educação Financeira"
          title="Domine as finanças do seu negócio"
          description="Conteúdo gratuito e prático para você organizar o dinheiro, tomar decisões melhores e fazer o seu negócio crescer com segurança."
        />

        {/* Módulos */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                Trilhas de aprendizado
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Comece pelo módulo que mais precisa. Cada trilha tem aulas
                curtas, exemplos reais e exercícios práticos.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <Card key={m.title} className="border-border bg-card transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                        <m.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{m.lessons}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{m.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                    <Link
                      href="/cadastro"
                      className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Acessar trilha
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Destaque com imagem */}
        <section className="bg-secondary py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <Image
                src="/educacao-financeira.png"
                alt="Organização das finanças de um pequeno negócio"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Dicas práticas para o dia a dia
              </h2>
              <ul className="flex flex-col gap-6">
                {tips.map((tip) => (
                  <li key={tip.number} className="flex gap-4">
                    <span className="font-heading text-2xl font-bold text-primary">{tip.number}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{tip.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href="/cadastro" />}
                nativeButton={false}
                size="lg"
                className="w-fit font-semibold"
              >
                <PlayCircle className="h-4 w-4" />
                Começar a aprender
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas frequentes
            </h2>
            <Accordion className="mt-10 w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
