"use client"
import { Menu } from "lucide-react";
import { Popover,PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";


const ItemMenuMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/categories/cocina" className="block">cocina</Link>
            <Link href="/categories/sala" className="block">sala</Link>
            <Link href="/categories/cocina" className="block">Climatizacion</Link>
            <Link href="/categories/sala" className="block">Refrigeradoras</Link>
        </PopoverContent>
    </Popover>
  )
}

export default ItemMenuMobile;