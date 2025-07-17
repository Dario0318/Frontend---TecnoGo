import React, { useState } from 'react';

interface FilterPriceProps {
  onPriceChange: (prices: { min: number; max: number }) => void;
}

const FilterPrice: React.FC<FilterPriceProps> = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    onPriceChange({ min: value, max: maxPrice });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    onPriceChange({ min: minPrice, max: value });
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-medium mb-1">Rango de precio</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={0}
          max={maxPrice}
          value={minPrice}
          onChange={handleMinChange}
          className="w-20 border px-2 py-1 rounded"
        />
        <span>-</span>
        <input
          type="number"
          min={minPrice}
          max={10000}
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-20 border px-2 py-1 rounded"
        />
      </div>
    </div>
  );
};

export default FilterPrice;
