"use client"
import FilterOrigin from '../components/filter-origin';
import { ChevronDown } from 'lucide-react';
import React from 'react'
import FilterPrice from '../components/filter-price'
import FilterDisponibilidad from '../components/filter-disponibilidad';

type FiltersControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void
  currentFilter?: string
  setPriceRange: (min: number, max: number) => void
  setFilterDisponibilidad: (Disponibilidad: string) => void 
}

const FilterControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterOrigin, currentFilter,setPriceRange , setFilterDisponibilidad} = props 
  
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
          <ChevronDown className="w-5 h-5 mr-2 text-emerald-600" />
          Filtros
        </h3>
          <FilterPrice onPriceChange={({ min, max }) => {
           setPriceRange(min, max)
         }} />
        <FilterOrigin 
          setFilterOrigin={setFilterOrigin}
        />
        <FilterDisponibilidad setFilterDisponibilidad={setFilterDisponibilidad}/>
        
        {/* Additional filters can be added here */}
        {currentFilter && (
          <button
            onClick={() => {setFilterOrigin('');setFilterDisponibilidad('');setPriceRange(0,0)}}
            className="w-full text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 text-left"
          >
            Limpiar filtros
          </button> 
        )}
      </div>
    </div>
  )
}

export default FilterControlsCategory