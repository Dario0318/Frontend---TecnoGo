"use client"
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProductProps {
    images: {
        id: number,
        url: string
    }[]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    return (
        <div className="relative pt-5">
            {/* Contenedor principal con layout flex para alinear horizontalmente */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Miniaturas laterales (solo en desktop) */}
                <div className="hidden sm:flex flex-col gap-2 w-20">
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            className="relative aspect-square overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 hover:ring-2 hover:ring-emerald-500 transition-all"
                            onClick={() => scrollTo(index)}
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt={`Miniatura ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>

                {/* Carrusel principal */}
                <div className="flex-1">
                    <Carousel
                        plugins={[Autoplay({ delay: 3000 })]}
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true
                        }}
                        className="w-full overflow-hidden"
                        ref={emblaRef}
                    >
                        <CarouselContent>
                            {images.map((image) => (
                                <CarouselItem key={image.id}>
                                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                            alt="Imagen del producto"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
                                            priority={true}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        
                        {/* Navigation Arrows */}
                        <CarouselPrevious className="left-2 hidden sm:flex bg-white/80 hover:bg-white text-gray-800 border-gray-300 shadow-sm" />
                        <CarouselNext className="right-2 hidden sm:flex bg-white/80 hover:bg-white text-gray-800 border-gray-300 shadow-sm" />
                    </Carousel>

                    {/* Miniaturas inferiores (solo en móvil) */}
                    <div className="mt-4 grid grid-cols-4 gap-2 sm:hidden">
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                className="relative aspect-square overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800"
                                onClick={() => scrollTo(index)}
                            >
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt={`Miniatura ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 25vw, 10vw"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselProduct