"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CategoryType } from "@/types/category"
import { useGetCategories } from "@/api/getProducts"
import { ResponseType } from "@/types/response"

const MenuList = () => {
      const { result, loading } : ResponseType = useGetCategories() 
      if (loading || !result) return null
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Home Link */}
        <NavigationMenuItem>
          <NavigationMenuLink 
            href="/" 
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
            )}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Categories Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-1 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800">
            Categorías
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <ul className="grid w-[300px] gap-1 p-2 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                {result.map((category: CategoryType) => (
                <ListItem
                  key={category.slug}
                  title={category.categoryName}
                  href={`/category/${category.slug}`}
                />))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) 
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 dark:focus:bg-emerald-900/30",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MenuList