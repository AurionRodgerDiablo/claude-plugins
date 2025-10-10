'use client';

import React, { useState } from 'react';
import { FiX, FiCopy, FiCheck, FiStar, FiDownload } from 'react-icons/fi';
import { Plugin } from '@/types/plugin';

interface PluginModalProps {
  plugin: Plugin;
  isOpen: boolean;
  onClose: () => void;
}

export function PluginModal({ plugin, isOpen, onClose }: PluginModalProps) {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const installCommand = plugin.installCommand ?? `/plugin install ${plugin.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-gray-900 rounded-2xl max-w-2xl w-full p-8 pointer-events-auto animate-flipIn shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
          >
            <FiX className="text-2xl" />
          </button>

          {/* Plugin info */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              {plugin.icon ? (
                <div className="text-5xl">{plugin.icon}</div>
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <span className="text-3xl font-bold">🔌</span>
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{plugin.name}</h2>
                <p className="text-gray-400">{plugin.description}</p>
              </div>
            </div>

            {/* Badges and stats */}
            <div className="flex items-center gap-4 flex-wrap mb-6">
              {plugin.official && (
                <span className="px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full">
                  Official
                </span>
              )}
              {plugin.sponsored && (
                <span className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-400 rounded-full">
                  Sponsored
                </span>
              )}
              {plugin.verified && (
                <span className="px-3 py-1 text-sm font-medium bg-green-500/20 text-green-400 rounded-full">
                  Verified
                </span>
              )}
              {typeof plugin.stars === 'number' && (
                <span className="text-gray-400 flex items-center gap-1">
                  <FiStar className="text-yellow-500" />
                  {plugin.stars}
                </span>
              )}
              {plugin.downloads && (
                <span className="text-gray-400 flex items-center gap-1">
                  <FiDownload />
                  {plugin.downloads >= 1000 ? `${(plugin.downloads / 1000).toFixed(1)}k` : plugin.downloads}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {plugin.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Installation Command */}
          <div>
            <h3 className="text-primary-500 font-semibold mb-3">Installation Command</h3>
            <div className="relative">
              <pre className="bg-black text-gray-100 px-6 py-4 rounded-lg overflow-x-auto border border-gray-800">
                <code className="text-sm font-mono">{installCommand}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-all"
              >
                {copied ? (
                  <FiCheck className="text-green-400" />
                ) : (
                  <FiCopy className="text-gray-400" />
                )}
              </button>
            </div>
            {plugin.author && (
              <p className="text-xs text-gray-500 mt-2">
                By {plugin.author}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
