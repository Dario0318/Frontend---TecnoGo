import { ProductType } from "@/types/products"
import { create } from 'zustand'
import { persist , createJSONStorage } from 'zustand/middleware'
import  { toast } from "sonner"

interface CartStore {
    items: ProductType[]
    addItem: (data:ProductType) => void
    removeItem:  (id:number) => void 
    removeAll : () => void
}

const playSound = (src: string) => {
  const audio = new Audio(src)
  audio.play().catch((e) => {
    console.warn("No se pudo reproducir el sonido:", e)
  })
}

export const useCart =create(persist<CartStore>((set,get) => ({ 
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id == data.id)
        const playSound = (src: string) => {
        const audio = new Audio(src)
        audio.play()
        }

        if(existingItem){
            return (toast.error("El producto ya existe en el carrito") ,
            playSound("/sounds/error.mp3")
        )
        } 
        
        set ({
            items: [... get().items, data]
        })
        toast ("producto añadido al carrito ")
        playSound("/sounds/success.mp3")
    },
    removeItem:  (id: number ) => {
        set ({items: [... get().items.filter((item) => item.id != id )]})
        toast ("Producto eliminado del carrito")
        playSound("/sounds/cancell.mp3")
    },
    removeAll: () => set({ items : []})
}), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
})) 