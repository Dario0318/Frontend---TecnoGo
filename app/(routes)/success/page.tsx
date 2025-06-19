"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CheckCircle } from 'lucide-react'

const PageSuccess = () => {
    const router = useRouter()
    
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
            <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
                    {/* Imagen */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square dark:bg-white rounded-full">
                            <Image 
                                src="https://illustrations.popsy.co/amber/success.svg"
                                alt="Compra exitosa" 
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start">
                            <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                        </div>
                        
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
                            ¡Gracias por tu compra!
                        </h1>
                        
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                            <p>Tu pedido ha sido procesado con éxito.</p>
                            <p>Recibirás un correo de confirmación con los detalles de tu compra.</p>
                            <p>El envío de tu producto será procesado en las próximas 24 horas.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button 
                                onClick={() => router.push("/orders")}
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                            >
                                Ver mis pedidos
                            </Button>
                            
                            <Button 
                                onClick={() => router.push("/")}
                                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                            >
                                Volver a la tienda
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageSuccess