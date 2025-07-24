"use client"
import { useParams } from "next/navigation"
import { ResponseType } from "@/types/response"
import { useGetProductBySlug } from "@/api/getProductBySlug"
import SkeletonProduct from "../components/skeletonProduct"
import CarouselProduct from "../components/carousel-product"
import InfoProduct from "../components/info-product"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { SlashIcon } from "lucide-react"
import  RelatedProducts  from "../components/related-products"

export default function ProductPage() {
  const params = useParams()
  const productSlug = params.productSlug as string
  const { result }: ResponseType = useGetProductBySlug(productSlug)

  if (result == null) {
    return <SkeletonProduct />
  }
  const product = result.find((item: { slug: string }) => item.slug === productSlug)

  if (!product) {
    return (
      <div className="container flex flex-col items-center justify-center py-12 text-center">
        <div className="p-4 mb-4 rounded-full bg-gray-100 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Producto no encontrado
        </h3>
        <Link 
          href="/products" 
          className="px-4 py-2 mt-4 text-sm font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        >
          Volver a productos
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb>
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
            <BreadcrumbLink >
            Productos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
          <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>{product.productName}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>

        {/* Product Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Carousel */}
          <div className="lg:sticky lg:top-8">
            <CarouselProduct images={product.images} />
          </div>

          {/* Product Info */}
          <div className="lg:px-8">
            <InfoProduct product={product} />
          </div>
        </div>

        {/* Related Products Section */}
        <div className="w-full mt-12">
          <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Productos relacionados
          </h3>
          <div className="grid grid-cols-1 gap-6">
          <RelatedProducts currentProductId={product.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}