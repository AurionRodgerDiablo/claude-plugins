import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'default' | 'official' | 'sponsored' | 'verified';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'default' }) => {
  const colorClasses = {
    default: 'bg-gray-800 text-gray-300',
    official: 'bg-blue-500/20 text-blue-400',
    sponsored: 'bg-primary-500/20 text-primary-400',
    verified: 'bg-green-500/20 text-green-400',
  };

  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${colorClasses[color]}`}>
      {text}
    </span>
  );
};

export default Badge;