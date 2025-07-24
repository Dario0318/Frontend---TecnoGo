"use client"
import React from 'react'
import { ProductType } from '@/types/products';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import IconButton from '@/components/icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from "@/hooks/use-cart";

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;
    const router = useRouter();
    const { addItem } = useCart();
    
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md dark:border-gray-700">
            <Link href={`/product/${product.slug}`} className="block">
                {/* Badges */}
                <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-2">
                    {product.Disponibilidad && (
                        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white dark:bg-emerald-700">
                            {product.Disponibilidad}
                        </span>
                    )}
                    {product.origin && (
                        <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white dark:bg-gray-700">
                            {product.origin}
                        </span>
                    )}
                </div>
                {product.isOffered && (
                 <div className="absolute right-3 top-3 z-10">
                    <span className="rounded-md bg-red-600/90 px-2 py-1 text-xs font-semibold text-white shadow-md">
                          En oferta
                    </span>
                 </div>
                )}

                {/* Image Carousel */}
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.isArray(product.images) && product.images.map((image) => (
                            <CarouselItem key={image.id}>
                                <div className="relative aspect-square">
                                    <Image
                                        src={`${image.url}`}
                                        alt={product.productName}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Product Info */}
                <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {product.productName}
                    </h3>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {formatPrice(product.price)}
                    </p>
                </div>
            </Link>

            {/* Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity group-hover:opacity-100 group-hover:bg-black/20">
                <IconButton 
                    onclick={() => 
                         router.push(`/product/${product.slug}`)
                    }
                    icon={<Expand size={20} className="text-white" />}
                    className="bg-white/80 hover:bg-white text-gray-800"
                />
                <IconButton 
                    onclick={() => addItem(product)}
                    icon={<ShoppingCart size={20} className="text-white" />}
                    className="bg-white/80 hover:bg-white text-gray-800"
                />
            </div>
        </div>
    );
};

export default ProductCard;