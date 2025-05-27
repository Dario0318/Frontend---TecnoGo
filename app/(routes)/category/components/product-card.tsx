/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductType } from '@/.next/types/products';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import IconButton from '@/components/icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
// import { useRouter } from 'next/navigation';

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props:ProductCardProps) => {
    const { product } = props 
   // const router = useRouter
  return (
    <Link href={`/product/${product.slug}`}
    className='relative p-2 transition-all duration-100 rounded-lg hover:shadow-md'>
        <div className='absolute flex items-center justify-between gap-3 px-2 z-[1] top'>
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
                {product.images.data.map((image) => (
                    <CarouselItem key={image.id} className='group'>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                        alt="Image"
                        className='rounded-xl'
                        />
                        <div className='absolute w-full px-6 transition duration-200 opacity-0 
                        group-hover:opacity bottom-5'>
                            <IconButton onclick={() => console.log("product")} // router.push(`/product/${product.slug}`)
                            icon={<Expand size={20} className='text-gray-600'/>}
                            />       
                            <IconButton onclick={() => console.log(("product"))} 
                            icon={<ShoppingCart size={20} className='text-gray-600'/>}
                            />            
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