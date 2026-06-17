import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
            Programa Nacional do Governo Federal
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Transforme sua ideia em um negócio de verdade
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            O Brasil Empreendedor capacita, financia e acompanha você em cada
            etapa da jornada. Educação financeira, mentoria gratuita e acesso a
            crédito para quem quer empreender.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/cadastro" />}
              nativeButton={false}
              size="lg"
              className="font-semibold"
            >
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/sobre" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              Conhecer o programa
            </Button>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="font-heading text-2xl font-bold text-foreground">1,2 mi</dt>
              <dd className="text-xs text-muted-foreground">Empreendedores apoiados</dd>
            </div>
            <div>
              <dt className="font-heading text-2xl font-bold text-foreground">100%</dt>
              <dd className="text-xs text-muted-foreground">Gratuito e público</dd>
            </div>
            <div>
              <dt className="font-heading text-2xl font-bold text-foreground">5.570</dt>
              <dd className="text-xs text-muted-foreground">Municípios atendidos</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/hero-empreendedores.png"
              alt="Empreendedores brasileiros em seus negócios"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border bg-card p-4 shadow-md sm:block">
            <p className="font-heading text-xl font-bold text-foreground">+R$ 8 bi</p>
            <p className="text-xs text-muted-foreground">em crédito liberado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
