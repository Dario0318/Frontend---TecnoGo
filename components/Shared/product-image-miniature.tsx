"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

interface ProductImageMiniatureProps {
    slug: string
    url: string
    className?: string
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const { slug, url, className } = props
    const router = useRouter()

    return (
        <div 
            onClick={() => router.push(`/product/${slug}`)} 
            className={cn(
                'relative aspect-square cursor-pointer overflow-hidden rounded-md bg-gray-100 transition-all hover:ring-2 hover:ring-emerald-500 dark:bg-gray-800',
                className
            )}
        >
            <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                alt={`Imagen del producto ${slug}`}
                fill
                className="object-cover p-1"
                sizes="(max-width: 640px) 100px, 150px"
                quality={80}
            />
        </div>
    )
}

export default ProductImageMiniature