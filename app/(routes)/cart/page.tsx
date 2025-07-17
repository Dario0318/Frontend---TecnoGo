"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import CartItem from "@/app/(routes)/cart/components/cart-item"
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "@/services/payment"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
    const { items, removeAll } = useCart()
    const totalPrice = items.reduce((total, product) => total + product.price, 0)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

    const handleCheckout = async () => { 
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                data: {
                    categoryid: "stripe",
                    products: items
                }
            });
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
            removeAll()
        } catch(error) {
            console.error("Checkout error:", error)
        }
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center mb-8">
                    <ShoppingCart className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" />
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Mi Carrito
                    </h1>
                    {items.length > 0 && (
                        <span className="ml-3 px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                            {items.length} {items.length === 1 ? 'item' : 'items'}
                        </span>
                    )}
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <ShoppingCart className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-600" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Tu carrito está vacío
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Agrega productos para continuar con tu compra
                        </p>
                        <Link href="/products">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600">
                                Explorar productos
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Lista de productos */}
                        <div className="lg:col-span-2">
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <CartItem key={item.id} product={item} />
                                ))}
                            </ul>
                        </div>

                        {/* Resumen del pedido */}
                        <div className="lg:sticky lg:top-8 h-fit">
                            <div className="p-6 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Resumen del pedido
                                </h2>
                                <Separator className="bg-gray-200 dark:bg-gray-700" />
                                
                                <div className="flex justify-between my-4 text-gray-900 dark:text-white">
                                    <p>Subtotal</p>
                                    <p>{formatPrice(totalPrice)}</p>
                                </div>
                                
                                <div className="flex justify-between my-4 text-gray-900 dark:text-white">
                                    <p>Envío</p>
                                    <p className="text-emerald-600 dark:text-emerald-400">Gratis</p>
                                </div>
                                
                                <Separator className="bg-gray-200 dark:bg-gray-700" />
                                
                                <div className="flex justify-between my-4 font-bold text-gray-900 dark:text-white">
                                    <p>Total</p>
                                    <p>{formatPrice(totalPrice)}</p>
                                </div>

                                <Button 
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 mt-4"
                                    onClick={handleCheckout}
                                >
                                    Proceder al pago
                                </Button>

                                <Link href="/products" className="block mt-3">
                                    <Button 
                                        variant="outline" 
                                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                                    >
                                        Seguir comprando
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}