"use client"
import { useParams } from "next/navigation"
import { Separator } from "@/components/ui/separator";
import FilterControlsCategory from "./filter-controls-category";
import { ResponseType } from "@/types/response";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/products";
import { useState } from "react";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { SlashIcon } from "lucide-react";

export default function CategoryPage() {
    const params = useParams()
    const categorySlug = params.categorySlug
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState('')

    const filteredProducts: ProductType[] = Array.isArray(result)
        ? result.filter((product: ProductType) =>
            filterOrigin === '' ? true : product.origin === filterOrigin
        ) : [];

    return (
        <section className="py-8 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <Breadcrumb className="mb-6">
                <BreadcrumbList>
                <BreadcrumbItem>
                        <BreadcrumbLink  asChild>
                        <Link href="/">Inicio</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator >
                    <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                        <Link href="/categories">Categorias</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                    <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            {!loading && result[0]?.category?.categoryName}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>

                {/* Category Header */}
                <div className="mb-8">
                    {!loading && result.length > 0 && (
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                {result[0].category.categoryName}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                {result.length} productos disponibles
                            </p>
                        </div>
                    )}
                    <Separator className="my-6" />
                </div>

                {/* Main Content */}
                <div className="lg:flex lg:gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <FilterControlsCategory 
                            setFilterOrigin={setFilterOrigin} 
                        />
                    </div>

                    {/* Products Grid */}
                    <div className="lg:w-3/4">
                        {loading ? (
                            <SkeletonSchema grid={3} />
                        ) : (
                            <>
                                {filteredProducts.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                        {filteredProducts.map((product: ProductType) => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
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
                                            No se encontraron productos
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Intenta con otros filtros o vuelve más tarde
                                        </p>
                                        <button
                                            onClick={() => setFilterOrigin('')}
                                            className="mt-4 px-4 py-2 text-sm font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                                        >
                                            Limpiar filtros
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}