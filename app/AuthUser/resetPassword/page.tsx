import { ResetPasswordForm } from "./components/resetPasswordForm"

export default function ResetPasswordPage({ searchParams }: { searchParams: { code?: string } }) {
  return <ResetPasswordForm code={searchParams.code || ""} />
}
