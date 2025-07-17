/* eslint-disable @typescript-eslint/no-explicit-any */
export async function forgotPassword(email: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.error?.message || "Error al enviar email de recuperación")
    }

    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}
