/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useLovedProducts } from "@/hooks/use-loved-products"
import  LovedItemProduct  from "@/app/(routes)/loved-products/components/loved-item-product"

export default function page(){
    const { lovedItem } = useLovedProducts()
    return(
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">Favoritos</h1>
            <div>
                <div>
                    {lovedItem.length == 0 && (
                        <p>No hay productos en esta seccion</p>
                    )}
                    <ul>
                        {lovedItem.map((item) => (
                            <LovedItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}