import React from 'react';

interface PluginFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOptions: { label: string; value: string }[];
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export const PluginFilters: React.FC<PluginFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  selectedSort,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
      <div className="flex items-center mb-4 md:mb-0">
        <label htmlFor="category" className="mr-2 text-gray-300">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-gray-800 text-gray-300 rounded p-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <label htmlFor="sort" className="mr-2 text-gray-300">
          Sort by:
        </label>
        <select
          id="sort"
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-gray-800 text-gray-300 rounded p-2"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};