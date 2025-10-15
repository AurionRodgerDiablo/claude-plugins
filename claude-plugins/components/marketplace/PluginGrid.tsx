import React from 'react';
import { Plugin } from '@/types/plugin';
import PluginCard from './PluginCard';

interface PluginGridProps {
  plugins: Plugin[];
}

export function PluginGrid({ plugins }: PluginGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plugins.map((plugin) => (
        <PluginCard key={plugin.id} plugin={plugin} />
      ))}
    </div>
  );
}