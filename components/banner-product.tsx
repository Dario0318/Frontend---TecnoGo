import React from 'react'
import Link from "next/link";
import { buttonVariants } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';

const BannerProduct = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="h-[400px] bg-cover lg:h-[600px] bg-[url('/sliderImage.jpg')] bg-center bg-no-repeat w-full" />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            </div>

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 h-[400px] lg:h-[600px] flex flex-col items-center justify-center text-center">
                {/* Tagline */}
                <p className="text-lg font-medium text-white/90 mb-2 animate-fade-in">
                    Sumérgete en esta experiencia única
                </p>

                {/* Main heading */}
                <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
                    Tecnología <span className="text-primary">al alcance</span> de tus manos
                </h1>

                {/* Subheading */}
                <p className="my-4 text-xl text-white/80 max-w-2xl mx-auto animate-fade-in delay-100">
                    Descubre los mejores productos al mejor precio
                </p>

                {/* CTA Button with icon */}
                <div className="mt-6 animate-fade-in delay-200">
                    <Link 
                        href="/products" 
                        className={`${buttonVariants({ variant: "default", size: "lg" })} group`}
                    >
                        Explorar productos
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Optional: Add rating or trust indicators */}
                <div className="mt-8 flex items-center gap-2 text-white/80 text-sm animate-fade-in delay-300">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <span>+10,000 clientes satisfechos</span>
                </div>
            </div>
        </section>
    );
}

export default BannerProduct;