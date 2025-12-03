import { FilterBtn } from '@components';
import { useEffect, useRef, useState } from 'react';

const ProductsFilter = ({ filters, setParams }) => {
  const [sortFilterOpen, setSortFilterOpen] = useState(false);
  const [selectedSortFilter, setSelectedSortFilter] = useState(filters.sort);

  const dropdownRef = useRef(null);

  const handleSortSelect = (filterValue) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('sort', filterValue);
    newParams.set('page', 1);

    setParams(newParams);
  };

  const sortFilter = [
    {
      title: 'Featured',
      filter: 'featured',
    },
    {
      title: 'Best Selling',
      filter: 'best-selling',
    },
    {
      title: 'Alphabetically, A-Z',
      filter: 'title-ascending',
    },
    {
      title: 'Alphabetically, Z-A',
      filter: 'title-descending',
    },
    {
      title: 'Price, Low To High',
      filter: 'price-ascending',
    },
    {
      title: 'Price, High To Low',
      filter: 'price-descending',
    },
    {
      title: 'Date, Old To New',
      filter: 'created-ascending',
    },
    {
      title: 'Date, New To Old',
      filter: 'created-descending',
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-between z-10">
      <FilterBtn />
      <div className="relative" ref={dropdownRef}>
        <FilterBtn
          text={sortFilter.find((fil) => fil.filter === selectedSortFilter).title}
          onClick={() => {
            setSortFilterOpen(!sortFilterOpen);
          }}
        />
        {sortFilterOpen && (
          <div className="absolute right-0 top-18 w-44 bg-(--color-surface-300) border border-gray-400">
            {sortFilter.map((filter, i) => (
              <div
                className={`${filter.filter === selectedSortFilter ? 'bg-gray-300' : 'bg-(--color-surface-300)'} p-2 cursor-pointer hover:bg-gray-200`}
                onClick={() => {
                  setSelectedSortFilter(filter.filter);
                  setSortFilterOpen(false);
                  handleSortSelect(filter.filter);
                }}
                key={i}
              >
                {filter.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsFilter;
