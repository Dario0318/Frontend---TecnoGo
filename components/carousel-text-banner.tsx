"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Truck, Crown, ShieldCheck, RefreshCw } from "lucide-react";

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío Express 24/48h",
        description: "Para clientes VIP",
        link: "#",
        icon: <Truck className="w-5 h-5" />
    },
    {
        id: 2,
        title: "Programa VIP",
        description: "Beneficios exclusivos",
        link: "#",
        icon: <Crown className="w-5 h-5" />
    },
    {
        id: 3,
        title: "Garantía Extendida",
        description: "En todos los productos",
        link: "#",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        id: 4,
        title: "Devoluciones Fáciles",
        description: "30 días sin preguntas",
        link: "#",
        icon: <RefreshCw className="w-5 h-5" />
    }
];

const CarouselTextBanner = () => {
  const router = useRouter();
  
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3">
        <Carousel 
            className="w-full mx-auto px-4" 
            plugins={[Autoplay({delay: 3500})]}
            opts={{
                loop: true,
                dragFree: true
            }}
        >
            <CarouselContent>
                {dataCarouselTop.map(({id, title, link, description, icon}) => (
                    <CarouselItem 
                        key={id} 
                        onClick={() => router.push(link)} 
                        className="cursor-pointer basis-1/2 sm:basis-1/4 px-2"
                    >
                        <Card className="shadow-none border-none bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-lg">
                            <CardContent className="flex flex-col items-center justify-center p-3 text-center space-y-2">
                                <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground">
                                    {icon}
                                </div>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-300">
                                    {description}
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </div>
  );
};

export default CarouselTextBanner;