import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full max-w-md", className)} {...props}>
      <Card className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Crea tu cuenta
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Completa el formulario para registrarte en TecnoGo
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form className="space-y-6">
            {/* Campo del nombre */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                Ingrese su nombre
              </Label>
              <Input
                id="nameUser"
                type="text"
                placeholder="Mi-nombre"
                required
                className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
              />
            </div>
            {/* Campo de Email */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Campo de Contraseña */}
            <div className="space-y-3">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                Contraseña
              </Label>
              <Input 
                id="password" 
                type="password" 
                required 
                placeholder="Mínimo 8 caracteres"
                className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Confirmar Contraseña */}
            <div className="space-y-3">
              <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                Confirmar Contraseña
              </Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                required 
                placeholder="Repite tu contraseña"
                className="focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Botón de Registro */}
            <Button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:text-gray-900"
            >
              Registrarse
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Enlace a Login */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              ¿Ya tienes una cuenta?{" "}
              <Link 
                href="/AuthUser/login" 
                className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
              >
                Inicia sesión
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}