"use client"

import { useState } from "react"
import { useForgotPassword } from "@/api/useForgetPassword"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const { submit, loading, error, success } = useForgotPassword()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submit(email)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="w-full max-w-md mx-auto p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">Recuperar Contraseña</h2>
          </div>

          <div className="grid gap-3">
            <label htmlFor="email" className="font-semibold grid  text-black dark:text-white">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border  p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-semibold dark:bg-white dark:text-black hover:opacity-90 transition p-2 rounded-xl"
          >
            {loading ? "Enviando..." : "Enviar enlace de recuperación"}
          </button>

          {error && (
            <p className="text-sm text-center text-red-300 font-medium">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-center text-green-300 font-medium">
              Correo enviado. Revisa tu bandeja de entrada.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
