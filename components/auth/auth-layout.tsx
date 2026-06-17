import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"

export function AuthLayout({
  children,
  imageAlt,
  badge,
  highlight,
}: {
  children: React.ReactNode
  imageAlt: string
  badge: string
  highlight: string
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* coluna do formulário */}
      <div className="flex flex-col px-4 py-8 sm:px-8">
        <Link href="/" aria-label="Voltar para a página inicial" className="w-fit">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Ambiente oficial do Governo Federal — seus dados estão protegidos.
        </p>
      </div>

      {/* coluna da imagem */}
      <div className="relative hidden lg:block">
        <Image
          src="/auth-empreendedora.png"
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute left-0 top-0 flex h-1.5 w-full">
          <span className="flex-1 bg-brasil-green" />
          <span className="flex-1 bg-brasil-yellow" />
          <span className="flex-1 bg-brasil-blue" />
        </div>
        <div className="absolute bottom-10 left-10 right-10">
          <span className="inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
            {badge}
          </span>
          <p className="mt-4 max-w-md font-heading text-2xl font-bold leading-snug text-background text-balance">
            {highlight}
          </p>
        </div>
      </div>
    </div>
  )
}
