"use client"
import { useCart } from '@/hooks/use-cart'
import { ProductType } from '@/types/products'
import { formatPrice } from "@/lib/formatPrice"
import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import ItemTasteOrigin from '@/components/Shared/item-taste-origin'
import ProductImageMiniature from '@/components/Shared/product-image-miniature'
import Link from 'next/link'

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props 
    const { removeItem } = useCart()

    return (
        <li className='group flex flex-col border-b border-gray-200 py-4 transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 sm:flex-row sm:items-center sm:py-6'>
            {/* Product Image */}
            <div className='flex-shrink-0 sm:w-32'>
                <Link href={`/product/${product.slug}`}>
                    <ProductImageMiniature 
                        slug={product.slug} 
                        url={product.images[0].url}
                        className="h-24 w-24 sm:h-32 sm:w-32"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className='flex flex-1 flex-col justify-between pt-4 sm:flex-row sm:px-6 sm:pt-0'>
                <div className='space-y-1'>
                    <Link href={`/product/${product.slug}`}>
                        <h2 className='text-lg font-semibold text-gray-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400'>
                            {product.productName}
                        </h2>
                    </Link>
                    
                    <p className='text-lg font-bold text-emerald-600 dark:text-emerald-400'>
                        {formatPrice(product.price)}
                    </p>
                    
                    <ItemTasteOrigin 
                        taste={product.taste} 
                        origin={product.origin}
                        className="mt-1"
                    />
                </div>

                {/* Remove Button */}
                <div className='mt-4 sm:mt-0'>
                    <Button 
                        onClick={() => removeItem(product.id)}
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:bg-gray-100 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-700"
                        aria-label="Eliminar producto"
                    >
                        <X size={18} />
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default CartItem