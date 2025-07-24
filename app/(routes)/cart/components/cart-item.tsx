"use client"
import { ProductType } from "@/types/products"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { Trash2 } from "lucide-react"

type CartItemProps = {
  product: ProductType & { quantity?: number }
}

export default function CartItem({ product }: CartItemProps) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart()

  return (
    <li className="flex items-center justify-between border rounded-lg p-4 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <Image
          src={product.images[0].url}
          alt={product.productName}
          width={80}
          height={80}
          className="rounded object-cover"
        />
        <div>
          <h3 className="text-md font-medium text-gray-900 dark:text-white">{product.productName}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-2 mt-2">
            <Button variant="outline" size="icon" onClick={() => decreaseQuantity(product.id)}>
              -
            </Button>
            <span className="w-6 text-center text-sm text-gray-800 dark:text-white">
              {product.quantity || 1}
            </span>
            <Button variant="outline" size="icon" onClick={() => increaseQuantity(product.id)}>
              +
            </Button>
          </div>
        </div>
      </div>
      <Button variant="ghost" onClick={() => removeItem(product.id)}>
        <Trash2 className="w-5 h-5 text-red-500" />
      </Button>
    </li>
  )
}
