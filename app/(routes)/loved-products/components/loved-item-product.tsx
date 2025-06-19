"use client"
import { useCart } from '@/hooks/use-cart'
import { ProductType } from '@/types/products'
import { formatPrice } from '@/lib/formatPrice'
import { useLovedProducts } from '@/hooks/use-loved-products'
import { Button } from '@/components/ui/button'
import { X, ShoppingCart } from 'lucide-react'
import React from 'react'
import ItemTasteOrigin from '@/components/Shared/item-taste-origin'
import ProductImageMiniature from '@/components/Shared/product-image-miniature'
import Link from 'next/link'

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md dark:border-gray-700 sm:flex-row'>
            {/* Product Image */}
            <Link href={`/product/${product.slug}`} className="block sm:w-1/3">
                <ProductImageMiniature 
                    slug={product.slug} 
                    url={product.images[0].url}
                    className="aspect-square w-full"
                />
            </Link>

            {/* Product Info */}
            <div className='flex flex-1 flex-col justify-between p-4 sm:p-6'>
                <div className='space-y-2'>
                    <Link href={`/product/${product.slug}`}>
                        <h2 className='text-lg font-bold text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400'>
                            {product.productName}
                        </h2>
                    </Link>
                    
                    <p className='text-xl font-bold text-emerald-600 dark:text-emerald-400'>
                        {formatPrice(product.price)}
                    </p>
                    
                    <ItemTasteOrigin 
                        origin={product.origin} 
                        taste={product.taste}
                        className="text-sm"
                    />
                </div>

                {/* Actions */}
                <div className='mt-4 flex items-center justify-between'>
                    <Button 
                        onClick={addToCheckout}
                        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                        size="sm"
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Añadir al carrito
                    </Button>

                    <Button 
                        onClick={() => removeLovedItem(product.id)}
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:bg-gray-100 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                        <X size={18} />
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default LovedItemProduct