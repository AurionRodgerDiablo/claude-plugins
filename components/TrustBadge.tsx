import React from 'react';
import { FiShield, FiDownload } from 'react-icons/fi';

interface TrustBadgeProps {
  downloads?: number;
  verified?: boolean;
}

export function TrustBadge({ downloads, verified }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3 mt-2">
      {verified && (
        <div className="flex items-center gap-1 text-xs text-green-600">
          <FiShield className="text-sm" />
          <span>Verified</span>
        </div>
      )}
      {downloads && (
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiDownload className="text-sm" />
          <span>{downloads >= 1000 ? `${(downloads / 1000).toFixed(1)}k` : downloads} downloads</span>
        </div>
      )}
    </div>
  );
}
