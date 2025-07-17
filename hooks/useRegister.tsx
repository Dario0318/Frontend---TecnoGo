/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error?.message || "Error al registrar")
      }

      localStorage.setItem("jwt", data.jwt)
      localStorage.setItem("user", JSON.stringify(data.user))

      return data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { register, loading, error }
}
