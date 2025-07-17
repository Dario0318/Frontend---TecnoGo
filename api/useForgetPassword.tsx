/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useForgotPassword.tsx
import { useState } from "react"
import { forgotPassword } from "@/api/forgotPassword"

export function useForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (email: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await forgotPassword(email)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}
