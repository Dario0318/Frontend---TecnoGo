"use client"
import { useLovedProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "@/app/(routes)/loved-products/components/loved-item-product"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LovedProductsPage() {
    const { lovedItem } = useLovedProducts()

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
                {/* Header con contador */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-emerald-600 dark:text-emerald-400" />
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Mis Favoritos
                        </h1>
                    </div>
                    <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {lovedItem.length} items
                    </span>
                </div>

                {/* Contenido principal */}
                {lovedItem.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Heart className="w-12 h-12 mb-4 text-gray-300 dark:text-gray-600" strokeWidth={1} />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            No tienes favoritos aún
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Guarda tus productos favoritos para encontrarlos fácilmente
                        </p>
                        <Link href="/products">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                                Explorar productos
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {lovedItem.map((item) => (
                                <LovedItemProduct key={item.id} product={item} />
                            ))}
                        </ul>
                        
                        {/* Footer con botón de continuar */}
                        <div className="mt-8 flex justify-center">
                            <Link href="/">
                                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/30">
                                    Ver más productos
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}