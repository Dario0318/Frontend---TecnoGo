"use client"

import { useSearchParams } from "next/navigation"
import { ResetPasswordForm } from "./components/resetPasswordForm"

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const code = searchParams.get("code") ?? ""

  return <ResetPasswordForm code={code} />
}
