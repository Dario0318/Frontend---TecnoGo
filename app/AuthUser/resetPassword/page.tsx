import { ResetPasswordForm } from "./components/resetPasswordForm"

type Props = {
  searchParams?: { code?: string }
}

export default function ResetPasswordPage({ searchParams }: Props) {
  const code = searchParams?.code ?? ""
  return <ResetPasswordForm code={code} />
}
