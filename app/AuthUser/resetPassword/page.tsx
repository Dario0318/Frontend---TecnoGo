import { ResetPasswordForm } from "./components/resetPasswordForm"

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const code = typeof searchParams.code === "string" ? searchParams.code : ""
  return <ResetPasswordForm code={code} />
}