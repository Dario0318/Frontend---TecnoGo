/* eslint-disable @next/next/no-img-element */
"use client"
import { ResponseType } from "@/types/response";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/products";
import {Card, CardContent} from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation"; 
import IconButton from "./icon-button"; 
import { useCart } from "@/hooks/use-cart";

const FeaturedProducts = () => {
    const { loading,result }:ResponseType = useGetFeaturedProducts()
   const router = useRouter() 
   const { addItem } = useCart()
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 text-3xl sm:pb-8">Productos Descatados</h3>
        <Carousel>
            <CarouselContent className="-ml-2 md:-ml-4 ">
                {loading && (
                    <SkeletonSchema grid={3}/>
                )}
         {result !== null && (result.map((product: ProductType) => {
        const image = product.images?.find(img => img?.url);
        const imageUrl = image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}` : "/fallback.jpg";
    return (
        <CarouselItem key={product.id} className="basis-1/2  lg:basis-1/3 group">
            <div className="p-1">
                <Card className="py-4 border border-gray-200 hover:shadow-md max-width">
                    <CardContent className="relative flex items-center justify-center px-6 py-2 max-width">
                        <img src={imageUrl}
                        alt="Featured Product"
                        className='rounded-xl'
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                                <IconButton onclick={() => router.push(`product/${product.slug}`)}
                                    icon={<Expand size={20}/>}
                                    className="text-gray-600"
                                />
                                <IconButton onclick={() => addItem(product)}
                                    icon={<ShoppingCart size={20}/>}
                                    className="text-gray-600"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{product.productName}</h3>
                        <div className="flex items-center justify-between">
                            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.taste}</p>
                            <p className="px-2 py-1 text-white bg-blue-900 rounded-full">{product.origin}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </CarouselItem>
    );
}))}
                
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="hidden sm:flex"/>
        </Carousel>
    </div> 
  ) 
}

export default FeaturedProducts;