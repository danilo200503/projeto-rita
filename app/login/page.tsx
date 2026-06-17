import type { Metadata } from "next"
import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Entrar | Brasil Empreendedor",
  description: "Acesse sua conta no programa Brasil Empreendedor.",
}

export default function LoginPage() {
  return (
    <AuthLayout
      imageAlt="Empreendedora brasileira em seu negócio"
      badge="Acesso seguro"
      highlight="Sua jornada empreendedora continua aqui. Acesse cursos, mentorias e benefícios."
    >
      <LoginForm />
    </AuthLayout>
  )
}
