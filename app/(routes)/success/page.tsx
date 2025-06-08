"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PageSucces = () => {
    const router = useRouter()
  return (
    <div className='max-w-5xl p-4 mx-auto sm_py-16 sm:px-24'>
        <div className='flex flex-col-reverse gap-2 sm:flex-row'>
            <div className='flex justify-center md:min-w-[400px]'>
                <Image src="/success.jpg"  alt="Success" width={250} height={400} className='rounded-lg'/>
            </div>
            <div>
                <h1>Gracias por tu compra</h1>
                <p className='my-3'>texto agregar</p>
                <p className='my-3'>texto agregar</p>
                <p className='my-3'>texto agregar</p>
                <Button className= "cursor-pointer"
                onClick={() => router.push("/")}>Volver a la tienda</Button>
            </div>
        </div>
    </div>
  )
}

export default PageSucces