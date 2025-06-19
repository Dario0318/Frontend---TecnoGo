"use client"
import { ResponseType } from "@/types/response";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/products";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProducts();
    const router = useRouter();
    const { addItem } = useCart();

    return (
        <section className="py-12 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Productos Destacados
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Descubre nuestras selecciones especiales
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <Carousel
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
                                result?.map((product: ProductType) => {
                                    const image = product.images?.find(img => img?.url);
                                    const imageUrl = image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}` : "/fallback.jpg";
                                    
                                    return (
                                        <CarouselItem key={product.id} className="pl-1 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                                            <Card className="overflow-hidden border border-gray-200 shadow-sm dark:border-gray-700 group hover:shadow-md transition-shadow">
                                                <CardContent className="relative aspect-square p-0">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={product.productName}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                                                        <IconButton
                                                            onclick={() => router.push(`product/${product.slug}`)}
                                                            icon={<Expand size={20} className="text-white" />}
                                                            className="bg-white/80 hover:bg-white text-gray-800"
                                                        />
                                                        <IconButton
                                                            onclick={() => addItem(product)}
                                                            icon={<ShoppingCart size={20} className="text-white" />}
                                                            className="bg-white/80 hover:bg-white text-gray-800"
                                                        />
                                                    </div>
                                                </CardContent>
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                                                            {product.productName}
                                                        </h3>
                                                    </div>
                                                    <div className="flex gap-2 mt-3">
                                                        {product.taste && (
                                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                                                {product.taste}
                                                            </span>
                                                        )}
                                                        {product.origin && (
                                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                                                {product.origin}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Card>
                                        </CarouselItem>
                                    );
                                })
                            )}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 hidden sm:flex bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-sm" />
                        <CarouselNext className="right-2 hidden sm:flex bg-white hover:bg-gray-50 text-gray-800 border-gray-300 shadow-sm" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;