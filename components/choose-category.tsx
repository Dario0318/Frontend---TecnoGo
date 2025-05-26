/* eslint-disable @next/next/no-img-element */
"use client" 
import React from 'react'
import { useGetCategories } from '@/api/getProducts'
import { ResponseType } from '@/.next/types/response'
import { CategoryType } from '@/.next/types/category'  
import { Carousel , CarouselContent , CarouselItem, CarouselNext , CarouselPrevious  } from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import  SkeletonSchema  from './skeleton-schema'
import  Autoplay from "embla-carousel-autoplay";
import { useRouter } from 'next/navigation'

const ChooseCategory = () => {
    const { result, loading }: ResponseType= useGetCategories() 
    const router = useRouter()
    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoría favorita</h3>
<Carousel plugins={[Autoplay({delay:5000})]}>
    <CarouselContent className="-ml-2 md:-ml-4">
                        {loading && (
                            <SkeletonSchema grid={3}/>
                        )}
         {!loading && result.map((category: CategoryType) => {
            const imageUrl = category.mainmedia ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainmedia.url}` : "fallback.jpg";
            return ( 
            <CarouselItem key={category.id}
            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                <div className="p-1">
                    <Card className="cursor-pointer py-4 border border-gray-200 shadow-lg max-width hover:scale-85 transition-transform rounded-xl">
                        <CardContent className=" relative flex h-70 overflow-hidden items-center justify-center max-width" 
                        onClick={() => router.push(`category/${category.slug}`)}>
                <img
                    src={imageUrl}
                    alt={category.categoryName}
                    className="object-cover w-full h-full rounded-lg"
                />
            
            <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 
            bg-black/30 dark:text-white backdrop-blur-lg'>
                {category.categoryName}
            </p>
                        </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ) })}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext className="hidden sm:flex"/>
</Carousel>
            </div>
    ) 
} 

export default ChooseCategory
