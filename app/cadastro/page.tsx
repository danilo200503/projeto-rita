import type { Metadata } from "next"
import { AuthLayout } from "@/components/auth/auth-layout"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Cadastre-se | Brasil Empreendedor",
  description: "Crie sua conta gratuita no programa Brasil Empreendedor.",
}

export default function CadastroPage() {
  return (
    <AuthLayout
      imageAlt="Empreendedora brasileira em seu negócio"
      badge="Cadastro gratuito"
      highlight="Mais de 1 milhão de brasileiros já transformaram suas ideias em negócios. Junte-se a eles."
    >
      <RegisterForm />
    </AuthLayout>
  )
}
