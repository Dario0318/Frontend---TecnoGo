/* eslint-disable @next/next/no-img-element */
"use client" 
import React from 'react'
import Link from 'next/link' 
import { useGetCategories } from '@/api/getProducts'
import { ResponseType } from '@/.next/types/response'
import { CategoryType } from '@/.next/types/category'  

const ChooseCategory = () => {
    const { result, loading }: ResponseType= useGetCategories() 
    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoría favorita</h3>
            <div className='grid gap-5 sm:grid-cols-3'>
            {!loading && result.map((category: CategoryType) => {
            const mainmedia = category.mainmedia?.data?.find(img => img?.url);
            const imageUrl = mainmedia ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${mainmedia.url}` : "/fallback-category.jpg";
            return (
            <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
            >
            {category.mainmedia?.data?.[0]?.url && (
                <img
                    src={imageUrl}
                    alt={category.categoryName}
                />
            )}
            <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg'>
                {category.categoryName}
            </p>
        </Link>
    )
})}

            </div>
        </div>
    ) 
} 

export default ChooseCategory
