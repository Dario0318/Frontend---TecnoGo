import React from 'react'
import FilterOrigin from '../components/filter-origin';
type FiltersControlsCategoryProps = {
  setFilterOrigin : ( origin : string ) => void 
}

const FilterControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterOrigin } = props 
  return (
    <div className='sm:w-[350px] sm:mt-5 p-6'>
      <FilterOrigin setFilterOrigin = { setFilterOrigin }/>
    </div>
  )
}

export default FilterControlsCategory;
