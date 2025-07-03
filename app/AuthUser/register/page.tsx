/* eslint-disable @next/next/no-img-element */
"use client"
import { LoginForm } from "@/app/AuthUser/register/components/registerForm"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function Page() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Contenedor principal */}
      <div className="container mx-auto flex min-h-screen flex-col p-6 md:p-12">
        {/* Encabezado con navegación */}
        <div className="flex items-center justify-between">
          <Link 
            href="/AuthUser/login" 
            className="flex items-center gap-2 group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              Volver atras
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

        {/* Contenido centrado */}
        <div className="flex flex-1 items-center justify-center py-8">
          <div className="w-full max-w-md">
            {/* Logo y título */}
            <div className="mb-8 flex flex-col items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-emerald-600 text-white dark:bg-emerald-400 dark:text-gray-900 flex size-10 items-center justify-center rounded-md shadow-sm">
                  <img 
                    className="size-6" 
                    src="/favicon.ico" 
                    alt="Logo TecnoGo" 
                  />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tecno<span className="text-emerald-600 dark:text-emerald-400">Go</span>
                </h1>
              </Link>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Únete a nuestra comunidad
              </h2>
            </div>

            {/* Formulario de registro */}
            <LoginForm />

            {/* Enlace a políticas */}
            <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
              Al registrarte, aceptas nuestros{' '}
              <Link href="/terms" className="hover:underline text-emerald-600 dark:text-emerald-400">
                Términos de servicio
              </Link>{' '}
              y{' '}
              <Link href="/privacy" className="hover:underline text-emerald-600 dark:text-emerald-400">
                Política de privacidad
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}