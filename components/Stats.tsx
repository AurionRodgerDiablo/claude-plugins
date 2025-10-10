'use client';

import React from 'react';

const stats = [
  {
    number: '50+',
    label: 'Available Plugins',
  },
  {
    number: '10K+',
    label: 'Installations',
  },
  {
    number: '100+',
    label: 'Contributors',
  },
  {
    number: 'Open',
    label: 'Source',
  },
];

export function Stats() {
  return (
    <section className="py-16 px-4 bg-primary-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
