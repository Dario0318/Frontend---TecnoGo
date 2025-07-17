"use client"
import { Suspense } from "react"
import { ForgotPasswordForm } from "./components/forgotPasswordForm"
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ForgetPasswordPage() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              Volver al inicio
            </span>
          </Link>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </div>

        <div className="w-full max-w-md">
          <ForgotPasswordForm />
        </div>
      </div>
    </Suspense>
  );
}
