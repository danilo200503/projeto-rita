import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-background pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary px-6 py-14 text-center sm:px-12">
          <div className="absolute left-0 top-0 flex h-1.5 w-full">
            <span className="flex-1 bg-brasil-green" />
            <span className="flex-1 bg-brasil-yellow" />
            <span className="flex-1 bg-brasil-blue" />
          </div>
          
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 text-pretty">
            Junte-se a mais de 1 milhão de brasileiros que já estão construindo
            seus negócios com o apoio do Brasil Empreendedor.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              render={<Link href="/cadastro" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              Criar minha conta
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/educacao-financeira" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Ver educação financeira
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
