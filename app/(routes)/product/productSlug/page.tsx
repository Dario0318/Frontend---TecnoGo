import { useParams } from "next/navigation"
import { ResponseType } from "@/.next/types/response";
import { useGetProductBySlug } from "@/api/getProductBySlug";
import SkeletonProduct from "./components/skeletonProduct";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page (){
    const params = useParams()
    const productSlug  = params.productSlug as string;
    const { result } : ResponseType= useGetProductBySlug(productSlug)
    if(result == null){
       return <SkeletonProduct />
    }
    console.log(result)
    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images = {result[0].attributes.images} /> 
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={result[0]}/>
                </div>
            </div>
        </div>
    )
}