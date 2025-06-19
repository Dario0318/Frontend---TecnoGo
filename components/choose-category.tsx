"use client"
import React from 'react'
import { useGetCategories } from '@/api/getProducts'
import { ResponseType } from '@/types/response'
import { CategoryType } from '@/types/category'  
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from './ui/card'
import SkeletonSchema from './skeleton-schema'
import Autoplay from "embla-carousel-autoplay"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories() 
    const router = useRouter()
    
    return (
        <section className="py-12 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Explora nuestras categorías
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Descubre productos perfectamente organizados para ti
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <Carousel 
                        plugins={[
                            Autoplay({ 
                                delay: 3500,
                                stopOnInteraction: false 
                            })
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true
                        }}
                    >
                        <CarouselContent className="-ml-1">
                            {loading ? (
                                <SkeletonSchema grid={3} />
                            ) : (
                                result.map((category: CategoryType) => {
                                    const imageUrl = category.mainmedia ? 
                                        `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainmedia.url}` : 
                                        "/category-fallback.jpg"
                                    
                                    return (
                                        <CarouselItem 
                                            key={category.id}
                                            className="pl-1 basis-1/2 sm:basis-1/3 lg:basis-1/4"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <Card 
                                                    className="overflow-hidden border border-gray-200 shadow-sm dark:border-gray-700 group hover:shadow-md transition-shadow"
                                                    onClick={() => router.push(`category/${category.slug}`)}
                                                >
                                                    <CardContent className="relative aspect-square p-0">
                                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
                                                        <Image
                                                            src={imageUrl}
                                                            alt={category.categoryName}
                                                            fill
                                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                            priority={false}
                                                        />
                                                        <div className="absolute bottom-0 left-0 z-20 w-full p-4">
                                                            <h3 className="text-xl font-bold text-white">
                                                                {category.categoryName}
                                                            </h3>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        </CarouselItem>
                                    )
                                })
                            )}
                        </CarouselContent>
                        
                        {/* Navigation arrows - neutral style */}
                        <CarouselPrevious className="left-2 hidden sm:flex bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-sm" />
                        <CarouselNext className="right-2 hidden sm:flex bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-sm" />
                    </Carousel>
                </div>

                {/* View all button - neutral style */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => router.push('/categories')}
                        className="px-6 py-3 text-sm font-medium transition-colors rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-300 shadow-sm hover:shadow-md"
                    >
                        Ver todas las categorías
                    </button>
                </div>
            </div>
        </section>
    ) 
} 

export default ChooseCategory