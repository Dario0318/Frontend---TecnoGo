"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./menu-list"
import ItemMenuMobile from "./item-menu-mobile"
import { ModeToggle } from "./toggle-theme"
import { useCart } from "@/hooks/use-cart"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { Badge } from "./ui/badge"

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const { lovedItem } = useLovedProducts()

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 
                        className="text-xl font-bold tracking-tight cursor-pointer sm:text-2xl text-gray-900 dark:text-white" 
                        onClick={() => router.push("/")}
                    >
                        Tecno<span className="text-emerald-600 dark:text-emerald-400">Go</span>
                    </h1>
                </div>

                {/* Desktop Menu - Centered */}
                <div className="hidden flex-1 mx-4 md:flex md:justify-center">
                    <MenuList />
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-3 sm:gap-5">
                    {/* Cart Icon */}
                    <div 
                        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer" 
                        onClick={() => router.push("/cart")}
                    >
                        {cart.items.length > 0 ? (
                            <>
                                <BaggageClaim className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                <Badge 
                                    variant="default" 
                                    className="absolute w-5 h-5 p-0 -top-1 -right-1 flex items-center justify-center bg-emerald-600 text-white"
                                >
                                    {cart.items.length}
                                </Badge>
                            </>
                        ) : (
                            <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        )}
                    </div>

                    {/* Wishlist Icon */}
                    <div 
                        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        onClick={() => router.push("/loved-products")}
                    >
                        <Heart className={`w-5 h-5 ${lovedItem.length > 0 ? 'fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300'}`} />
                        {lovedItem.length > 0 && (
                            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                        )}
                    </div>

                    {/* User Icon */}
                    <div 
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        onClick={() => router.push("/login")}
                    >
                        <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <ItemMenuMobile />
                    </div>

                    {/* Theme Toggle */}
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

