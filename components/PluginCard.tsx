'use client';

import React from 'react';
import { FiStar } from 'react-icons/fi';
import { Plugin } from '@/types/plugin';

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all cursor-pointer group">
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{plugin.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-primary-500 transition-colors">
              {plugin.name}
            </h3>
            <button className="text-gray-400 hover:text-yellow-500 transition-colors flex-shrink-0">
              <FiStar className="text-xl" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {plugin.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {plugin.sponsored && (
              <span className="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded">
                Sponsor
              </span>
            )}
            {plugin.official && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                Official
              </span>
            )}
            <span className="text-xs text-gray-500 dark:text-gray-500">
              {plugin.stars} ⭐
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
