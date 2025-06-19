"use client"
import { useGetProductField } from '@/api/getProductField';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void
  className?: string
}

const FilterOrigin = (props: FiltersOriginProps) => {
    const { setFilterOrigin, className } = props
    const { loading, result } = useGetProductField()
    
    return (
        <div className={`space-y-3 ${className}`}>
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200">
                Origen
            </h4>
            
            {loading && result == null && (
                <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded-full" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    ))}
                </div>
            )}
            
            <RadioGroup 
                onValueChange={(value) => setFilterOrigin(value)}
                className="space-y-2"
            >
                {result?.data?.schema?.attributes?.origin?.enum?.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem 
                            value={origin} 
                            id={origin}
                            className="text-emerald-600 border-gray-300 dark:border-gray-600 focus:ring-emerald-500"
                        />
                        <Label 
                            htmlFor={origin}
                            className="text-sm font-normal text-gray-700 dark:text-gray-300 cursor-pointer"
                        >
                            {origin}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterOrigin