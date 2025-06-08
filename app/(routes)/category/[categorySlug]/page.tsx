"use client"
import { useParams } from "next/navigation"
import { Separator } from "@/components/ui/separator";
import FilterControlsCategory from "./filter-controls-category";
import { ResponseType } from "@/types/response";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/products";
import { useState } from "react";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";

export default function Page(){
    const  params  = useParams()
    const categorySlug = params.categorySlug
    const { result , loading }: ResponseType= useGetCategoryProduct(categorySlug)
    const [FilterOrigin, setFilterOrigin] = useState('')
    console.log(result)
    const filteredProducts: ProductType[] = Array.isArray(result)
      ? result.filter((product: ProductType) =>
        FilterOrigin === '' ? true : product.origin === FilterOrigin
          ):[];
    return(
      <div className="max-w-6xl py-4 mx:auto sm:py-16 sm:px-24">
          {!loading && result.map((product: ProductType) => {
            <div className="text-3xl font-medium">
              {product.category.categoryName}</div>
          })}
        <Separator/>
        <div className="sm:flex sm:justify-between">
            <FilterControlsCategory setFilterOrigin={setFilterOrigin} />
            <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
              {loading && (
                <SkeletonSchema grid={3}/>
              )}
              {!loading && filteredProducts.length > 0 && (
              filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
              ))
              )}
              {!loading  && filteredProducts.length === 0 && (
                <p>No hay productos con este filtro</p>
              )}
            </div>
        </div>
      </div>
    )
}