"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Loader2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Mockup visual: simula o cadastro
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          Crie sua conta
        </h1>
        <p className="text-sm text-muted-foreground">
          Cadastro gratuito. Comece a empreender com o apoio do Governo Federal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" type="text" placeholder="Maria da Silva" required autoComplete="name" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" type="text" placeholder="000.000.000-00" required inputMode="numeric" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Celular</Label>
            <Input id="phone" type="tel" placeholder="(00) 00000-0000" required autoComplete="tel" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required autoComplete="email" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha segura"
              required
              autoComplete="new-password"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
          <button
            type="button"
            role="checkbox"
            aria-checked={accepted}
            onClick={() => setAccepted((v) => !v)}
            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${
              accepted ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background"
            }`}
          >
            {accepted && <Check className="h-3.5 w-3.5" />}
          </button>
          <span>
            Li e concordo com os{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
              Termos de Uso
            </Link>{" "}
            e a{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
              Política de Privacidade
            </Link>
            .
          </span>
        </label>

        <Button type="submit" size="lg" className="font-semibold" disabled={loading || !accepted}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Criar conta gratuita
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Já tem uma conta?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Entrar
        </Link>
      </p>
    </div>
  )
}
