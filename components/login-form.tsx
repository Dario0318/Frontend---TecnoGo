import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthButton } from "./auth-button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form 
      className={cn("flex flex-col gap-6 w-full", className)} 
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Inicia sesión en tu cuenta
        </h1>
        <p className="text-muted-foreground text-sm">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid gap-6">
        {/* Email Field */}
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
            Correo electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Password Field */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
              Contraseña
            </Label>
            <Link
              href="/forgot-password"
              className="ml-auto text-sm text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 underline-offset-4 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800 dark:focus:ring-emerald-400"
          />
          <Label htmlFor="remember-me" className="text-sm text-gray-700 dark:text-gray-300">
            Recordar mi cuenta
          </Label>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:text-gray-900"
        >
          Iniciar sesión
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
              O continúa con
            </span>
          </div>
        </div>

        {/* Social Auth Buttons */}
        <AuthButton />
      </div>

      {/* Sign Up Link */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        ¿No tienes una cuenta?{" "}
        <Link
          href="/register"
          className="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 underline-offset-4 hover:underline"
        >
          Regístrate
        </Link>
      </div>
    </form>
  )
}