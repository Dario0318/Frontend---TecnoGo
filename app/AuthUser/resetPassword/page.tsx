import { ResetPasswordForm } from "./components/resetPasswordForm"

type Props = {
  searchParams: {
    code?: string
  }
}

export default function ResetPasswordPage({ searchParams }: Props) {
  return <ResetPasswordForm code={searchParams.code || ""} />
}
