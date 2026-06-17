import Link from "next/link"
import { Logo } from "@/components/logo"

const footerNav = [
  {
    title: "Programa",
    links: [
      { href: "/", label: "Início" },
      { href: "/sobre", label: "Sobre o Projeto" },
      { href: "/educacao-financeira", label: "Educação Financeira" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { href: "/cadastro", label: "Criar conta" },
      { href: "/login", label: "Entrar" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { href: "/sobre", label: "Transparência" },
      { href: "/sobre", label: "Perguntas frequentes" },
      { href: "/sobre", label: "Fale conosco" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Iniciativa do Governo Federal para formar e apoiar a nova geração
              de empreendedores brasileiros.
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} "Este projeto é um protótipo acadêmico desenvolvido para fins educacionais e de extensão universitária. Não possui vínculo oficial com o Governo Federal ou qualquer órgão público. Todas as informações, usuários e dados apresentados são fictícios e utilizados apenas para demonstração."
          </p>
          <div className="flex h-1.5 w-24 overflow-hidden rounded-full">
            <span className="flex-1 bg-brasil-green" />
            <span className="flex-1 bg-brasil-yellow" />
            <span className="flex-1 bg-brasil-blue" />
          </div>
        </div>
      </div>
    </footer>
  )
}
