"use client"
import { Menu } from "lucide-react";
import { Popover,PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ItemMenuMobile = () => {
  const { result } : ResponseType= useGetCategories()
  if (!result) return null 
  return (
    <Popover >
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800 mx-3">
          {result.map((category : CategoryType) => (
            <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            className="cursor-pointer flex my-2 mx-1">{category.categoryName}</Link>
          ))}
        </PopoverContent>
    </Popover>
  )
}

export default ItemMenuMobile;