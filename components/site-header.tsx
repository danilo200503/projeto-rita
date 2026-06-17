"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Início" },
  { href: "/educacao-financeira", label: "Educação Financeira" },
  { href: "/sobre", label: "Sobre o Projeto" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      {/* faixa tricolor sutil */}
      <div className="flex h-1 w-full">
        <span className="flex-1 bg-brasil-green" />
        <span className="flex-1 bg-brasil-yellow" />
        <span className="flex-1 bg-brasil-blue" />
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Brasil Empreendedor - Página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            render={<Link href="/login" />}
            nativeButton={false}
            variant="ghost"
            className="text-sm"
          >
            Entrar
          </Button>
          <Button
            render={<Link href="/cadastro" />}
            nativeButton={false}
            className="text-sm font-semibold"
          >
            Cadastre-se
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <Button
                render={<Link href="/login" />}
                nativeButton={false}
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Entrar
              </Button>
              <Button
                render={<Link href="/cadastro" />}
                nativeButton={false}
                className="font-semibold"
                onClick={() => setOpen(false)}
              >
                Cadastre-se
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
