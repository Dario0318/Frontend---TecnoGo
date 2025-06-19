import React from 'react';
import Link from "next/link";
import { buttonVariants } from './ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const BannerDiscount = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600/10 via-emerald-600/5 to-emerald-800/10 dark:from-emerald-400/20 dark:via-emerald-400/10 dark:to-emerald-600/20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-emerald-600/20 dark:bg-emerald-400/20"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-emerald-800/20 dark:bg-emerald-600/20"></div>
      </div>

      <div className="container relative px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Discount badge */}
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-emerald-600 text-white animate-pulse dark:bg-emerald-400 dark:text-gray-900">
            <span>Oferta limitada</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>

          {/* Headings */}
          <h2 className="text-3xl font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl text-emerald-600 dark:text-emerald-400">
            <span className="block">Hasta 25% de descuento</span>
          </h2>
          <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
            <span className="block">-20% al gastar 500 soles</span>
            <span className="block mt-1 text-sm font-normal text-gray-700 dark:text-gray-300">Válido hasta el 31 de diciembre</span>
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-3 mt-8 sm:flex-row sm:gap-4">
            <Link 
              href="/products" 
              className={`${buttonVariants({ size: "lg" })} group px-8 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:text-gray-900`}
            >
              Comprar ahora
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/promotions" 
              className={`${buttonVariants({ variant: "outline", size: "lg" })} group px-8 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400/10`}
            >
              Más información
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Additional info */}
          <p className="mt-6 text-sm text-gray-700 dark:text-gray-300">
            * Aplican términos y condiciones. Descuentos no acumulables con otras promociones.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BannerDiscount;