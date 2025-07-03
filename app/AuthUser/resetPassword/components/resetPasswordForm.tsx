"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useResetPassword } from "@/api/useResetPassword"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const code = searchParams.get("code") // Token de la URL
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { resetPassword, loading, error, success } = useResetPassword()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!code) return alert("Token no encontrado en la URL")
    if (password !== confirmPassword) return alert("Las contraseñas no coinciden")

    const ok = await resetPassword(code, password, confirmPassword)
    if (ok) setTimeout(() => router.push("/AuthUser/login"), 2000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Cambiar contraseña
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Escribe tu nueva contraseña para continuar
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="password">Nueva contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                placeholder="Repite tu nueva contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            {success && <p className="text-sm text-green-600 text-center">Contraseña cambiada correctamente.</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Guardando..." : "Guardar contraseña"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
