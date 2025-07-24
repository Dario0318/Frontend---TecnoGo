import { ProductType } from "@/types/products"
import { create } from 'zustand'
import { persist , createJSONStorage } from 'zustand/middleware'
import  { toast } from "sonner"

interface CartItem extends ProductType {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}


const playSound = (src: string) => {
  const audio = new Audio(src)
  audio.play().catch((e) => {
    console.warn("No se pudo reproducir el sonido:", e)
  })
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === data.id);

        if (existingItem) {
          // Si ya existe, aumenta la cantidad
          set({
            items: currentItems.map(item =>
              item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          });
          toast.success("Cantidad aumentada en el carrito");
          playSound("/sounds/success.mp3");
        } else {
          // Si no existe, lo agrega con quantity 1
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success("Producto añadido al carrito");
          playSound("/sounds/success.mp3");
        }
      },

      increaseQuantity: (id: number) => {
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        });
      },

      decreaseQuantity: (id: number) => {
        const currentItems = get().items;
        const item = currentItems.find(i => i.id === id);
        if (!item) return;

        if (item.quantity === 1) {
          // Si llega a 0, lo elimina
          set({ items: currentItems.filter(i => i.id !== id) });
          toast("Producto eliminado del carrito");
          playSound("/sounds/cancell.mp3");
        } else {
          set({
            items: currentItems.map(i =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
          });
        }
      },

      removeItem: (id: number) => {
        set({ items: get().items.filter(item => item.id !== id) });
        toast("Producto eliminado del carrito");
        playSound("/sounds/cancell.mp3");
      },

      removeAll: () => set({ items: [] })
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
