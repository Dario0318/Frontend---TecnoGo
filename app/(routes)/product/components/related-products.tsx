"use client";
import { ResponseType } from "@/types/response";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SkeletonSchema from "@/components/skeleton-schema";
import { ProductType } from "@/types/products";
import { Card, CardContent } from "@/components/ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconButton from "@/components/icon-button";

interface RelatedProductsProps {
  currentProductId: string;
}

const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  // Filtrar el producto actual
  const filteredProducts = result?.filter((product: ProductType) => product.id !== Number(currentProductId)).slice(0, 4) || [];

  return (
    <section className="py-6 bg-white dark:bg-gray-900">
      <div className="w-full px-0 mx-0">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 w-full">
              {loading ? (
                <SkeletonSchema grid={4} />
              ) : (
                filteredProducts.map((product: ProductType) => {
                  const image = product.images?.[0]?.url || "/fallback.jpg";

                  return (
                    <CarouselItem key={product.id} className="pl-1 basis-full sm:basis-full md:basis-full lg:basis-1/4">
                      <Card className={cn(
                        "overflow-hidden border shadow-sm group hover:shadow-md transition-shadow",
                        product.isOffered ? "border-red-500 dark:border-red-400" : "border-gray-200 dark:border-gray-700"
                      )}>
                        <CardContent className="relative aspect-square p-0">
                          {product.isOffered && (
                            <span className="absolute top-2 right-2 z-10 px-2 py-1 text-xs font-semibold rounded-full bg-red-600 text-white shadow">
                              En oferta
                            </span>
                          )}
                          <Image
                            src={image}
                            alt={product.productName}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                            <IconButton
                              onclick={() => router.push(`/product/${product.slug}`)}
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

                          <div className="flex flex-col gap-2 mt-3">
                            <div className="flex gap-2 flex-wrap">
                              {product.Disponibilidad && (
                                <span className="px-2 py-1 font-medium rounded-full bg-emerald-600 text-xs text-white dark:bg-emerald-700">
                                  {product.Disponibilidad}
                                </span>
                              )}
                              {product.origin && (
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-white dark:bg-gray-700">
                                  {product.origin}
                                </span>
                              )}
                            </div>
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
};

export default RelatedProducts;
