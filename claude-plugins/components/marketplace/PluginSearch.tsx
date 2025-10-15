import React, { useState } from 'react';

interface PluginSearchProps {
  onSearch: (query: string) => void;
}

export function PluginSearch({ onSearch }: PluginSearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher des plugins..."
        className="border border-gray-300 rounded-lg p-2 w-full"
        aria-label="Rechercher des plugins"
      />
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
        aria-label="Lancer la recherche"
      >
        Rechercher
      </button>
    </form>
  );
}