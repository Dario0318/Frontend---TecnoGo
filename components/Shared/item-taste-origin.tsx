import React from 'react'
import { cn } from '@/lib/utils'

interface ItemTasteOriginType {
    taste: string
    origin: string
    className?: string
}

const ItemTasteOrigin = (props: ItemTasteOriginType) => {
    const { taste, origin, className } = props
    
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {taste && (
                <span className="inline-flex items-center rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-emerald-700">
                    {taste}
                </span>
            )}
            {origin && (
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-gray-800 text-xs font-medium text-white dark:bg-gray-700">
                    {origin}
                </span>
            )}
        </div>
    )
}

export default ItemTasteOrigin