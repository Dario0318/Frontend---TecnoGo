"use client"
import { useGetProductField } from '@/api/getProductField'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import React, { useState } from 'react'

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void
  className?: string
}

const FilterOrigin = ({ setFilterOrigin, className }: FiltersOriginProps) => {
  const { loading, result } = useGetProductField()
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className={`space-y-3 ${className}`}>
      <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-emerald-600 transition-colors">
        <span>Origen</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </CollapsibleTrigger>

      <CollapsibleContent>
        {loading && result == null ? (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        ) : (
          <RadioGroup
            onValueChange={(value) => setFilterOrigin(value)}
            className="space-y-2 pt-2"
          >
            {result?.data?.schema?.attributes?.origin?.enum?.map((origin: string) => (
              <div key={origin} className="flex items-center space-x-2">
                <RadioGroupItem value={origin} id={origin} />
                <Label htmlFor={origin}>{origin}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default FilterOrigin
