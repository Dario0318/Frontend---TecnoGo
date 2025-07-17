"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useRegister } from "@/hooks/useRegister"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  const { register, loading, error } = useRegister()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    const result = await register(name, email, password)
    if (result) {
      router.push("/")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full max-w-md mx-auto p-6 backdrop-blur-md bg-white/5 dark:bg-white/10 border border-white/10 rounded-2xl shadow-lg flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Crea tu cuenta</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Regístrate en TecnoGo</p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="nameUser">Nombre</Label>
          <Input
            id="nameUser"
            type="text"
            placeholder="Mi-nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            placeholder="Mínimo 8 caracteres"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Repite tu contraseña"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registrando..." : (
            <>
              Registrarse <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 text-center">
            {error}
          </p>
        )}

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/AuthUser/login"
            className="text-emerald-600 hover:underline"
          >
            Inicia sesión
          </Link>
        </div>
      </div>
    </form>
  )
}
