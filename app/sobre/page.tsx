import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Sobre o Projeto | Brasil Empreendedor",
  description:
    "Conheça a missão, a visão e os valores do Brasil Empreendedor, programa de Rita Carolina para o fomento ao empreendedorismo.",
}

const stats = [
  { value: "2019", label: "Ano de criação" },
  { value: "1,2 mi", label: "Pessoas atendidas" },
  { value: "R$ 8 bi", label: "Crédito liberado" },
  { value: "5.570", label: "Municípios" },
]

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Democratizar o acesso ao conhecimento, ao crédito e às ferramentas necessárias para que qualquer brasileiro possa empreender com segurança.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser o principal programa de fomento ao empreendedorismo do país, reduzindo desigualdades e gerando renda em todas as regiões.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Inclusão, transparência, educação de qualidade e compromisso com o desenvolvimento sustentável do Brasil.",
  },
]

const timeline = [
  {
    year: "2019",
    title: "Lançamento do programa",
    text: "Início das primeiras trilhas de capacitação em parceria com estados e municípios.",
  },
  {
    year: "2021",
    title: "Expansão do microcrédito",
    text: "Criação de linhas de crédito com juros reduzidos para microempreendedores individuais.",
  },
  {
    year: "2023",
    title: "Plataforma digital",
    text: "Lançamento do portal online com cursos gratuitos e mentoria à distância para todo o país.",
  },
  {
    year: "2025",
    title: "1 milhão de atendidos",
    text: "Programa ultrapassa a marca de 1 milhão de empreendedores apoiados em todo o território nacional.",
  },
]

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          badge="Sobre o Projeto"
          title="Empreendedorismo como motor de desenvolvimento"
          description="O Brasil Empreendedor é uma iniciativa de Rita Carolina que une educação, crédito e mentoria para fortalecer pequenos negócios e gerar oportunidades em todo o país."
        />

        {/* Estatísticas */}
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                Uma rede de apoio para quem quer crescer
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Acreditamos que empreender transforma vidas e comunidades. Por
                isso, conectamos cidadãos a oportunidades reais: do primeiro
                curso de gestão até a liberação de crédito para expandir o
                negócio.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Trabalhamos em parceria com estados, municípios, instituições
                financeiras e organizações da sociedade civil para levar o
                programa a todos os cantos do Brasil — com atenção especial a
                quem mais precisa.
              </p>
              <Button
                render={<Link href="/cadastro" />}
                nativeButton={false}
                size="lg"
                className="w-fit font-semibold"
              >
                Fazer parte
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <Image
                src="/sobre-projeto.png"
                alt="Oficina de capacitação com empreendedores brasileiros"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        
        <section className="bg-secondary py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <Card key={p.title} className="border-border bg-card">
                  <CardContent className="flex flex-col gap-4 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossa trajetória
            </h2>
            <ol className="mt-12 flex flex-col gap-8">
              {timeline.map((item) => (
                <li key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                      {item.year}
                    </span>
                    <span className="mt-2 w-px flex-1 bg-border" />
                  </div>
                  <div className="pb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
