import { Suspense } from "react"
import { ResetPasswordForm } from "./components/resetPasswordForm"

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}
