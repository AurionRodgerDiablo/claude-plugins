import React from 'react';
import { Plugin } from '@/types/plugin';
import { PluginCard } from './PluginCard';

interface PluginGridProps {
  title: string;
  plugins: Plugin[];
  showViewAll?: boolean;
}

export function PluginGrid({ title, plugins, showViewAll = true }: PluginGridProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        {showViewAll && (
          <button className="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1 transition-colors">
            View All →
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {plugins.map((plugin) => (
          <PluginCard key={plugin.id} plugin={plugin} />
        ))}
      </div>
    </div>
  );
}
