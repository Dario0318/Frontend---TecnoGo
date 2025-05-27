import React from 'react'
import Link  from "next/link";
import { buttonVariants } from './ui/button';

const BannerProduct = () => {
    return (
    <>
    <div className="mt-4 text-center">
        <p>Sumergete en esta experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Al alcance de tus manos</h4>
        <p className="my-2 text-lg">No dejes de comprar</p>
        <Link href="#" className={buttonVariants()}>Comprar</Link>
    </div>
    <div className="h-[350px] bg-cover lg:h-[500px] bg-[url('/sliderImage.jpg')] bg-center mt-5"/>
    </>
    );
}

export default BannerProduct;