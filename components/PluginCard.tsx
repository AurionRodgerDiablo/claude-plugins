'use client';

import React from 'react';
import { FiStar } from 'react-icons/fi';
import { Plugin } from '@/types/plugin';
import { TrustBadge } from '@/components/TrustBadge';

interface PluginCardProps {
  plugin: Plugin;
  onClick?: () => void;
}

export function PluginCard({ plugin, onClick }: PluginCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {plugin.icon ? (
            <div className="text-4xl">{plugin.icon}</div>
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <span className="text-xl font-bold">🔌</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-500 transition-colors">
              {plugin.name}
            </h3>
            <button className="text-gray-400 hover:text-yellow-500 transition-colors flex-shrink-0">
              <FiStar className="text-xl" />
            </button>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {plugin.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {plugin.sponsored && (
              <span className="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded">
                Sponsor
              </span>
            )}
            {plugin.official && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                Official
              </span>
            )}
            
          </div>
          <TrustBadge verified={plugin.verified} />
        </div>
      </div>
    </div>
  );
}
