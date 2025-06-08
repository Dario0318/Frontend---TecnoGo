import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"
import { ProductType } from "@/types/products"
import { toast } from "sonner"

interface useLovedProductsType {
    lovedItem: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<useLovedProductsType>((set,get) => ({
    lovedItem: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItem;
        const existingItem = currentLovedItems.find((item) => item.id == data.id)

        if(existingItem){
            return toast.dismiss("el producto ya existe en la lista")
        }
        set({
            lovedItem: [... get().lovedItem, data]
        })
        toast("producto añadido a la lista")
    },
    removeLovedItem: (id: number) => {
        set({lovedItem: [... get().lovedItem.filter((item) => item.id != id )]})
        toast("el producto se ha eliminado de la lista")
    }
}),{
    name: "loved-products-store",
    storage: createJSONStorage(() => localStorage)
}))