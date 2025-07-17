/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

export function useResetPassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const resetPassword = async (code: string, password: string, passwordConfirmation: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code,
          password,
          passwordConfirmation
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error?.message || "Error al restablecer contraseña.")
      }

      setSuccess(true)
      return true
    } catch (err: any) {
      setError(err.message)
      return false
    } finally {
      setLoading(false)
    }
  }

  return { resetPassword, loading, error, success }
}
