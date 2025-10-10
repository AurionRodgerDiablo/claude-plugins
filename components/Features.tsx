import React from 'react';
import { FiBrain, FiZap, FiPackage, FiUsers, FiTool, FiGlobe } from 'react-icons/fi';

const features = [
  {
    icon: <FiBrain className="text-3xl" />,
    title: 'AI-Powered Development',
    description:
      'Integrate Claude\'s reasoning directly into your dev workflow — from code review to documentation generation.',
  },
  {
    icon: <FiZap className="text-3xl" />,
    title: 'One-Command Setup',
    description:
      'Install any plugin instantly using a simple /plugin command — no complex configs or dependencies.',
  },
  {
    icon: <FiPackage className="text-3xl" />,
    title: 'Modular & Customizable',
    description:
      'Pick only the Claude Code Plugins that fit your project: testing, security, docs, deployment, or AI helpers.',
  },
  {
    icon: <FiUsers className="text-3xl" />,
    title: 'Boost Team Productivity',
    description:
      'Standardize workflows with shared marketplaces — ensure every teammate uses the same trusted toolset.',
  },
  {
    icon: <FiTool className="text-3xl" />,
    title: 'Developer-Friendly Design',
    description:
      'Built for speed and simplicity. Each plugin is open, transparent, and hosted on Git platforms like GitHub or GitLab.',
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: 'Open & Community-Driven',
    description:
      'Anyone can publish a plugin marketplace, making Claude Code Plugins the most flexible AI-driven ecosystem for developers.',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Use Claude Code Plugins
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Claude Code Plugins unlock the full potential of Anthropic's AI coding assistant by letting you
            extend, automate, and personalize your workflow. Build faster, review smarter, and stay
            consistent across projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-lg"
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary-500">
            TL;DR: Claude Code Plugins transform Claude from a code assistant into a full-fledged
            development platform.
          </p>
        </div>
      </div>
    </section>
  );
}
