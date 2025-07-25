
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect,useState } from "react";

export function useGetProductBySlug(slug : string  | string []  ) {
     const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filter[slug][$eq]=${slug}&populate=*`
        const [result,setResult] = useState(null)
        const [loading,setLoading] = useState(true)
        const [error,setError] = useState('')
        
        useEffect(() => {
            (async() => {
                try{
                    const res = await fetch(url)
                    const json = await res.json()
                    setResult(json.data)
                    setLoading(false)
                } catch(error : any){
                    setError(error)
                    setLoading(false)
                }
            })()
        },[url])
        return { loading, result, error }
}