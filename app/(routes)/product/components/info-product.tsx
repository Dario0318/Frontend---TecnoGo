"use client"
import { ProductType } from '@/types/products'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/formatPrice'
import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useCart } from '@/hooks/use-cart'
import { useLovedProducts } from '@/hooks/use-loved-products'
import ItemTasteOrigin from '@/components/Shared/item-taste-origin'

export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const { addItem } = useCart()
    const { lovedItem, addLovedItem } = useLovedProducts()

    const isLoved = lovedItem.some(item => item.id === product.id)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.productName}
                </h1>
                <div className='flex items-center justify-between flex-wrap gap-2'>
                <ItemTasteOrigin taste={product.Disponibilidad} origin={product.origin} />
                  {product.isOffered && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                  En oferta
                 </span>
                 )}
                 </div>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Description */}
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Descripción</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {product.description || "Este producto no tiene descripción disponible."}
                </p>
            </div>

            <Separator className="bg-gray-200 dark:bg-gray-700" />

            {/* Price */}
            <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Precio</h3>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {formatPrice(product.price)}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4">
                <Button 
                    onClick={() => addItem(product)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                    size="lg"
                >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Añadir al carrito
                </Button>
                
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12"
                    onClick={() => addLovedItem(product)}
                >
                    <Heart 
                        className={`w-6 h-6 ${isLoved ? 'fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400' : ''}`}
                        strokeWidth={1.5}
                    />
                </Button>
            </div>

            {/* Additional Info (optional) */}
            <div className="pt-6 text-sm text-gray-500 dark:text-gray-400">
                <p>Envío gratuito en pedidos superiores a $50</p>
                <p>Devoluciones fáciles dentro de los 30 días</p>
            </div>
        </div>
    )
}

export default InfoProduct