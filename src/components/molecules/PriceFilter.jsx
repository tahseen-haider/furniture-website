import { useState, useEffect } from 'react';
import { Expandable } from '@components';
import { rebounce } from '@utils';

const PriceFilter = ({ filters, setParams }) => {
  const [min, setMin] = useState(filters?.price_min || '');
  const [max, setMax] = useState(filters?.price_max || '');

  const updateParams = rebounce((minVal, maxVal) => {
    const params = new URLSearchParams(window.location.search);

    if (minVal) {
      params.set('price_min', minVal);
    } else {
      params.delete('price_min');
    }

    if (maxVal) {
      params.set('price_max', maxVal);
    } else {
      params.delete('price_max');
    }

    params.set('page', 1);
    setParams(params);
  }, 800);

  useEffect(() => {
    updateParams(min, max);
  }, [min, max]);

  return (
    <Expandable title="Price">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1 font-medium">From</label>
            <input
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="border border-gray-400 h-11 px-2 py-1 w-full focus:border-black hover:border-black outline-none"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm mb-1 font-medium">To</label>
            <input
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="border border-gray-400 h-11 px-2 py-1 w-full focus:border-black hover:border-black outline-none"
            />
          </div>
        </div>
      </div>
    </Expandable>
  );
};

export default PriceFilter;
