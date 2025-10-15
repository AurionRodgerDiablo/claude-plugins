import React from 'react';
import { Plugin } from '@/types/plugin';
import { FiDownload, FiStar } from 'react-icons/fi';

interface PluginCardProps {
  plugin: Plugin;
  onInstall: (plugin: Plugin) => void;
}

export function PluginCard({ plugin, onInstall }: PluginCardProps) {
  const installCommand = plugin.installCommand ?? `/plugin install ${plugin.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        {plugin.icon ? (
          <div className="text-5xl">{plugin.icon}</div>
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <span className="text-3xl font-bold">🔌</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{plugin.name}</h3>
          <p className="text-gray-400">{plugin.description}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-4">
        {plugin.official && (
          <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
            Official
          </span>
        )}
        {plugin.verified && (
          <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
            Verified
          </span>
        )}
        {typeof plugin.stars === 'number' && (
          <span className="text-gray-400 flex items-center gap-1">
            <FiStar className="text-yellow-500" />
            {plugin.stars}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => onInstall(plugin)}
          className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
          aria-label={`Install ${plugin.name}`}
        >
          <FiDownload className="mr-2" />
          Install
        </button>
      </div>
    </div>
  );
}