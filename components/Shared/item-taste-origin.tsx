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
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {taste}
                </span>
            )}
            {origin && (
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    {origin}
                </span>
            )}
        </div>
    )
}

export default ItemTasteOrigin