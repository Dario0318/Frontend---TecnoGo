import { ResetPasswordForm } from "./components/resetPasswordForm"

// 👇 Este es el tipo correcto según Next.js 14+
type Props = {
  searchParams: { code?: string }
}

export default function ResetPasswordPage({ searchParams }: Props) {
  return <ResetPasswordForm code={searchParams.code || ""} />
}
