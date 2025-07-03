/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (identifier: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error?.message || "Error al iniciar sesión")
      }

      // Guardamos el JWT y user info en localStorage
      localStorage.setItem("jwt", data.jwt)
      localStorage.setItem("user", JSON.stringify(data.user))

      return data // opcional, puedes devolver user y jwt
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}
