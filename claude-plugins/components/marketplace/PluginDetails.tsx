import React from 'react';
import { Plugin } from '@/types/plugin';

interface PluginDetailsProps {
  plugin: Plugin;
}

export function PluginDetails({ plugin }: PluginDetailsProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-2">{plugin.name}</h2>
      <p className="text-gray-400 mb-4">{plugin.description}</p>
      {plugin.author && (
        <p className="text-sm text-gray-500 mb-4">By {plugin.author}</p>
      )}
      <h3 className="text-primary-500 font-semibold mb-2">Usage Instructions</h3>
      <pre className="bg-black text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-800">
        <code className="text-sm font-mono">{plugin.usageInstructions}</code>
      </pre>
      {plugin.reviews && plugin.reviews.length > 0 && (
        <div className="mt-4">
          <h3 className="text-primary-500 font-semibold mb-2">Reviews</h3>
          <ul className="list-disc list-inside text-gray-300">
            {plugin.reviews.map((review, index) => (
              <li key={index} className="mb-2">
                <strong>{review.author}:</strong> {review.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}