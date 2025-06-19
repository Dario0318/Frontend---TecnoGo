"use client"
/* eslint-disable @next/next/no-img-element */
import { LoginForm } from "@/components/login-form";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-gray-50 dark:bg-gray-900">
      {/* Columna izquierda - Formulario (más compacta) */}
      <div className="flex flex-col p-4 md:p-8 relative">
        {/* Encabezado con navegación */}
        <div className="flex items-center justify-between mb-2">
          <Link 
            href="/" 
            className="flex items-center gap-2 group transition-colors"
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

        {/* Logo y título */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <Link href="/" className="flex items-center gap-2 mb-2">
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
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Bienvenido de vuelta
          </h2>
        </div>

        {/* Contenedor del formulario */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <LoginForm />
          </div>
        </div>

        {/* Enlace a políticas */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          Al iniciar sesión, aceptas nuestros{' '}
          <Link href="/terms" className="hover:underline text-emerald-600 dark:text-emerald-400">
            Términos de servicio
          </Link>{' '}
          y{' '}
          <Link href="/privacy" className="hover:underline text-emerald-600 dark:text-emerald-400">
            Política de privacidad
          </Link>
        </p>
      </div>

      {/* Columna derecha - Imagen (sin scroll) */}
      <div className="relative hidden lg:block bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
          alt="Tecnología moderna"
          className="absolute inset-0 h-full w-full object-cover opacity-90 dark:opacity-70 mix-blend-multiply dark:mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              Descubre lo último en tecnología con TecnoGo. Donde la innovación se encuentra con la calidad.
            </p>
            <footer className="text-sm text-emerald-200 dark:text-emerald-300">
              — Equipo TecnoGo
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}