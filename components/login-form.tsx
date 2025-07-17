"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLogin } from "@/hooks/useLogin" // Importa el hook aquí
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthButton } from "./auth-button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading, error } = useLogin()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await login(email, password)
    if (result) {
      router.push("/") // Redirige a la página principal
    }
  }

  return (
    <form 
      className={cn("flex flex-col gap-6 w-full", className)} 
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Inicia sesión en tu cuenta</h1>
        <p className="text-muted-foreground text-sm">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link href="/AuthUser/forgotPassword" className="ml-auto text-sm text-emerald-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input id="remember-me" type="checkbox" className="h-4 w-4" />
          <Label htmlFor="remember-me" className="text-sm">Recordar mi cuenta</Label>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Iniciando..." : "Iniciar sesión"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 dark:bg-gray-900 text-gray-500">O continúa con</span>
          </div>
        </div>

        <AuthButton />
      </div>

      <div className="text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/AuthUser/register" className="text-emerald-600 hover:underline">
          Regístrate
        </Link>
      </div>
    </form>
  )
}
