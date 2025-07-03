import { User, LogIn, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

const UserButton = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="bg-transparent flex items-center gap-2 px-1 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <User className="w-6 h-6 text-gray-700 dark:text-white" />
            <span className="text-sm font-medium text-gray-700 dark:text-white">Usuario</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex  rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 w-96">
              <NavigationMenuLink asChild className='flex items-center '>
                <Link
                  href="/AuthUser/login"
                  className={cn(
                    "flex items-center gap-3 w-full p-2 rounded-md text-sm",
                    "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600",
                    "dark:text-gray-300 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400",
                    "transition-colors"
                  )}
                >
                  <span className='flex sm-flex'>Iniciar sesión</span>
                  <LogIn className="w-4 h-4 flex" />
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/AuthUser/register"
                  className={cn(
                    "flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium",
                    "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600",
                    "dark:text-gray-300 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400",
                    "transition-colors outline-none"
                  )}
                >
                  <span>Registrarse</span>
                  <UserPlus className="w-4 h-4 flex-none" />
                </Link>
              </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default UserButton