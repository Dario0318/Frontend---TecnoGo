"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams } from "next/navigation"
import { Separator } from "@/components/ui/separator";
import FilterControlsCategory from "./filter-controls-category";
import { ResponseType } from "@/.next/types/response";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/.next/types/products";
import { useState } from "react";

export default function Page(){
    const  params  = useParams()
    const categorySlug = params.categorySlug as string
    const { result , loading }: ResponseType= useGetCategoryProduct(categorySlug)
    const [FilterOrigin, setFilterOrigin] = useState('')

    const filteredProducts = result != null && !loading &&(
      FilterOrigin === '' ? result : result.filter((product:ProductType) => product.origin === FilterOrigin)
    )
    console.log(filteredProducts)
    return(
      <div className="max-w-6xl py-4 mx:auto sm:py-16 sm:px-24">
        {result != null && !loading && (
            <h1 className="text-3xl font-medium">{result[0].categorySlug}</h1> //result[0].category.category
        )}
        <Separator/>
        <div className="sm:flex sm:justify-between">
            <FilterControlsCategory setFilterOrigin={setFilterOrigin} />
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
              {loading && (
                <SkeletonSchema grid={3}/>
              )}
              {filteredProducts !== null && !loading && (
                result.map((product:ProductType) => (
                  <ProductCard key={product.id} product={product}/>
                ))
              )}
              {filteredProducts !== null  &&  !loading  && filteredProducts.length === 0 && (
                <p>No hay productos con este filtro</p>
              )}
            </div>
        </div>
      </div>
    )
}