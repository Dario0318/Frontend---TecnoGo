"use client"
import { useGetCategories } from "@/api/getProducts"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { CategoryType } from "@/types/category"
import { ResponseType } from "@/types/response"
import { SlashIcon } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/navigation"

export default function Page(){
    const {result , loading } = useGetCategories() as ResponseType
    const router = useRouter()
    if (loading || !result) return null 
    return(
        <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6" >
        <BreadcrumbList>
        <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="/">Inicio</Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="/categoryPage">Categorias</Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>    
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
                Categorias
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {result.map((category : CategoryType) => {
    const imageUrl = category.mainmedia ? `${category.mainmedia.url}` : "/category-fallback.jpg"
    return (
      <Card 
        className="cursor-pointer overflow-hidden border border-gray-200 shadow-sm dark:border-gray-700 group hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
        onClick={() => router.push(`category/${category.slug}`)}
        key={category.slug}
      >
        <CardContent className="relative aspect-square p-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
          <Image
            src={imageUrl}
            alt={category.categoryName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />
          <div className="absolute bottom-0 left-0 z-20 w-full p-4">
            <h3 className="text-xl font-bold text-white">
              {category.categoryName}
            </h3>
          </div>
        </CardContent>
      </Card>
    )
  })}
</div>

        </div>
        </div>
        </section>
    )
}