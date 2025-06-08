"use client"
import { useCart } from '@/hooks/use-cart';
import { ProductType } from '@/types/products';
import { formatPrice } from '@/lib/formatPrice';
import { useLovedProducts } from '@/hooks/use-loved-products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React from 'react'
import  ItemTasteOrigin from '@/components/Shared/item-taste-origin';
import ProductImageMiniature from '@/components/Shared/product-image-miniature';

interface LovedItemProductProps {
    product:ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const { removeLovedItem } = useLovedProducts() 
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

  return (
    <li className='flex p-6 border-b'>
        <ProductImageMiniature slug={product.slug} url={product.images[0].url}/>
        <div className='flex justify-between flex-1 px-6'>
                <div>
                    <h2 className='text-lg font-bold'>{product.productName}</h2>
                    <p className='font-bold'>{formatPrice(product.price)}</p>
                    <ItemTasteOrigin origin={product.origin} taste={product.taste}/>
                    <Button className='mt-5 rounded-full' onClick={addToCheckout}>
                        Añadir al carrito
                    </Button>
                </div>
                <div>
                    <Button className={cn("rounded-full flex items-center justify-center border: shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeLovedItem(product.id)}/>
                    </Button>
                </div>
        </div>
    </li>
  );
}

export default LovedItemProduct