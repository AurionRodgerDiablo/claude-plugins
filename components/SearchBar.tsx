'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search with keywords"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 pl-14 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 transition-all"
        />
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
      </div>
    </div>
  );
}
