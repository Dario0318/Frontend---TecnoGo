"use client"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const SkeletonProduct = () => {
  return (
    <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center space-x-2 mb-6">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <Skeleton className="h-4 w-16" />
            {i < 2 && <Skeleton className="h-4 w-4 rounded-full" />}
          </React.Fragment>
        ))}
      </div>

      {/* Product Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery Skeleton */}
        <div className="space-y-4 lg:sticky lg:top-8">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-md" />
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-6 lg:px-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>

          <div className="flex items-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-5 w-20 rounded-full" />
            ))}
          </div>

          <Skeleton className="h-10 w-1/3" />

          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="pt-4">
            <Skeleton className="h-12 w-full" />
          </div>

          <div className="flex space-x-4 pt-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonProduct