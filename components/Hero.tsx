import React from 'react';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="text-center py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Find Awesome <span className="text-primary-500">Claude Code Plugins </span> and Marketplaces
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
        Community marketplace with <span className="font-semibold text-primary-500">50+</span> plugins and extensions
      </p>
      <SearchBar />
    </div>
  );
}
