import { ProductType } from '@/types/products'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/formatPrice'
import { Heart } from 'lucide-react'
import React from 'react'
import { useCart } from '@/hooks/use-cart'
import { useLovedProducts } from '@/hooks/use-loved-products'
import ItemTasteOrigin from '@/components/Shared/item-taste-origin'

export type InfoProductProps = {
    product : ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const { addItem } = useCart()
    const { addLovedItem } = useLovedProducts()
  return (
    <div className='px-6'>
        <div className='justify-between mb-3 sm:flex'>
            <h1 className='text-2xl'>{product.productName}</h1>
            <ItemTasteOrigin taste={product.taste} origin={product.origin}/>
        </div>
        <Separator className='my-4'/>
        <p>{product.description}</p>
        <Separator className='my-4'/>
        <p className='my-4 text-2xl'>{formatPrice(product.price)}</p>
        <div className='flex  items-center gap-5'>
            <Button className='w-full' onClick={() => addItem(product)}>Comprar</Button>
            <div className='px-1'>
            <Heart width={30}
             strokeWidth="1"
             className='cursor-pointer hover:fill-black hover-dark:fill-white gap-5'
            onClick={() => addLovedItem(product)} />
            </div>
        </div>
    </div>
  )
}

export default InfoProduct;