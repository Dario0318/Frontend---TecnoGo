/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductType } from '@/.next/types/products';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import IconButton from '@/components/icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props:ProductCardProps) => {
    const { product } = props 
  return (
    <Link href={`/product/${product.slug}`}
    className='relative p-2 transition-all duration-100 rounded-lg hover:scale-105'>
        <div className='absolute flex items-center justify-between gap-9 px-2 z-[1] top'>
            <p className='px-2 py-1 text-xs text-white bg-black 
            rounded-full dark:bg-white dark:text-black w-fit'>{product.taste}</p>
             <p className='px-2 py-1 text-xs text-white bg-yellow-900 
             rounded-full dark:bg-white dark:text-black w-fit'>{product.origin}</p>
        </div>
        <Carousel
        opts={{
            align: "start"
        }}
        className='w-full max-w-sm'
        >
            <CarouselContent>
                {Array.isArray(product.images) && product.images.map((images) =>(
                    <CarouselItem key={images.id} className='group'>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.url}`}
                        alt="Image"
                        className='rounded-xl'
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                                <IconButton onclick={() => console.log("buena idea")}
                                    icon={<Expand size={20}/>}
                                    className="text-gray-600"
                                />
                                <IconButton onclick={() => console.log ("Add Item")}
                                    icon={<ShoppingCart size={20}/>}
                                    className="text-gray-600"
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <p className='text-2xl text-center'>{product.productName}</p>
        <p className='font-bold text-center'>{formatPrice(product.price)}</p>
    </Link>
  )
}

export default ProductCard;