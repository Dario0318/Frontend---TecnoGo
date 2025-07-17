"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useResetPassword } from "@/api/useResetPassword"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const code = searchParams.get("code") ?? ""
  const router = useRouter()

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
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cambiar contraseña
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Ingresa tu nueva contraseña para continuar
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                Nueva contraseña
              </Label>
              <Input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Mínimo 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                Confirmar contraseña
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Repite tu nueva contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400 text-center">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-green-600 dark:text-green-500 text-center">
                Contraseña cambiada correctamente.
              </p>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? "Guardando..." : (
                <>
                  Guardar contraseña <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}