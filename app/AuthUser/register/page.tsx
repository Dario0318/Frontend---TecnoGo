"use client"
import { Suspense } from "react"
import { RegisterForm} from "./components/registerForm"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft } from "lucide-react"
import { useTheme } from "next-themes";

export default function RegisterPage() {
      const { theme, setTheme } = useTheme();

      const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      };
  return (
 <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
      <div className="grid min-h-screen  bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col p-4 md:p-8 relative">
        <div className="flex items-center justify-between pl-6 gap-10 mb-1">
          <Link 
            href="/" 
            className="flex items-center gap-2 group transition-colors "
          >
            <ArrowLeft className="w-5 h-2 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              Volver al inicio
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300"></span>
            <Switch 
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
            />
          </div>
        </div>
      <RegisterForm />
      </div>
      </div>
    </Suspense>
  )
}
