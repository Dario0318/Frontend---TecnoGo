"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import  Autoplay from "embla-carousel-autoplay";
export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio 24/48 h",
        description: "cliente vip",
        link: "#",
    },
    {
        id: 2,
        title: "envio 24/48 h",
        description: "cliente vip",
        link: "#",
    },
        {
        id: 3,
        title: "envio 24/48 h",
        description: "cliente vip",
        link: "#",
    },
        {
        id: 4,
        title: "envio 24/48 h",
        description: "cliente vip",
        link: "#",
    }
]
const CarouselTextBanner = () => {
  const router = useRouter()
  return (
    <div className="bg-gray-20 dark:bg-primary">
        <Carousel className="w-full max-w-4xl mx-auto" 
        plugins={[Autoplay({delay:3000})]}>
        <CarouselContent>
        {dataCarouselTop.map(({id,title,link,description}) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                <div>
                    <Card className=" shadow-none border-none bg-transparent">
                        <CardContent className="flex flex-col justify-center p-1 items-center text-center">
                            <p className="sm-text-lg text text-wrap dark:text-secondary font-bold">{title}</p>
                            <p className="text-xs sm:text-sm text text-wrap dark:text-secondary">{description}</p>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        ))}
        </CarouselContent>
        </Carousel>
    </div>
  )
}

export default CarouselTextBanner;