import React from 'react';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="text-center py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Find Awesome <span className="text-primary-500">Claude Code</span> Plugins and Marketplaces
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
        Claude Plugin Directory is a community-driven hub with <span className="font-semibold text-primary-500">50+</span> plugins collected.
      </p>
      <p className="text-md md:text-lg text-gray-500 dark:text-gray-500 mb-8">
        Browse, install, and build extensions for Anthropic's AI coding assistant.
      </p>
      <SearchBar />
    </div>
  );
}
