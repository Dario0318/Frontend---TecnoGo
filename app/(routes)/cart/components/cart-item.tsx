"use client"
import { useCart } from '@/hooks/use-cart'
import { ProductType } from '@/types/products'
import { formatPrice } from "@/lib/formatPrice"
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import ItemTasteOrigin from '@/components/Shared/item-taste-origin'
import ProductImageMiniature from '@/components/Shared/product-image-miniature'

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props 
    const { removeItem } = useCart()
  return (
    <li className='flex  py-6 border-b'>
        <ProductImageMiniature slug={product.slug} url={product.images[0].url}/>
        <div className='flex justify-between flex-1 px-6'>
            <div>
                <h2 className='text-lg font-bold'>{product.productName}</h2>
                <p className='font-bold'>{formatPrice(product.price)}</p>
                <ItemTasteOrigin taste={product.taste} origin={product.origin}/>
                </div>
                <div>
                    <Button
                    className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}
                    >
                        <X size={20} onClick={() => removeItem(product.id)}/>
                    </Button>
            </div>
        </div>
    </li>
  )
}

export default CartItem