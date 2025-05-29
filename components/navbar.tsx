"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemMenuMobile from "./item-menu-mobile";
import { ModeToggle } from "./toggle-theme";
import NavigationBar  from "./navigationBar";
const Navbar = () => {
    const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1 className="text-3xl" onClick={() => router.push("/")}>Tecno
        <span className="font-bold">Go</span>
        </h1>
        <div className="item-center justify-between hidden sm:flex ">
            <NavigationBar />
            <MenuList/>
        </div>
        <div className="flex sm:hidden">
            <ItemMenuMobile/>
        </div>
        <div className="flex item-center justify-between gap-2 sm:gap-7">
            <ShoppingCart strokeWidth="1" className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground" 
            onClick={() => router.push("/cart")}/>
            <Heart strokeWidth="1" className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground " 
            onClick={() => router.push("/loved-products")}/>
            <User strokeWidth="1" className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground"/>
            <ModeToggle />
        </div>
    </div>
  )
}


export default Navbar;