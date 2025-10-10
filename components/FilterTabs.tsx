'use client';

import React, { useState } from 'react';
import { FiTrendingUp, FiStar, FiClock, FiPackage, FiShoppingBag, FiCheckCircle } from 'react-icons/fi';
import { FilterType } from '@/types/plugin';

const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  { id: 'today', label: 'Today', icon: <FiTrendingUp /> },
  { id: 'featured', label: 'Featured', icon: <FiStar /> },
  { id: 'latest', label: 'Latest', icon: <FiClock /> },
  { id: 'plugins', label: 'Plugins', icon: <FiPackage /> },
  { id: 'marketplaces', label: 'Marketplaces', icon: <FiShoppingBag /> },
  { id: 'official', label: 'Official', icon: <FiCheckCircle /> },
];

interface FilterTabsProps {
  onFilterChange?: (filter: FilterType) => void;
}

export function FilterTabs({ onFilterChange }: FilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('today');

  const handleFilterClick = (filterId: FilterType) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-4 scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
            activeFilter === filter.id
              ? 'bg-primary-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.icon}
          <span className="font-medium">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
