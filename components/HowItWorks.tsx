import React from 'react';
import { CodeBlock } from './CodeBlock';

const steps = [
  {
    number: '1',
    title: 'Add a Marketplace',
    description: 'Tell Claude Code where to find community or private plugins.',
    code: '/plugin marketplace add https://github.com/yourname/claude-plugins',
  },
  {
    number: '2',
    title: 'Install a Plugin',
    description:
      'Each plugin brings new abilities — automation, analysis, or integrations — right inside your Claude Code session.',
    code: '/plugin install pr-review@anthropics/claude-code',
  },
  {
    number: '3',
    title: 'Use & Customize',
    description:
      'Once installed, you can call the plugin\'s commands or let Claude trigger them contextually. Combine multiple plugins to build your ideal workflow.',
    code: null,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Claude Code Plugins follow a simple but powerful idea — connect lightweight, modular add-ons
            directly into your Claude Code workspace.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                {step.code && <CodeBlock code={step.code} />}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No restarts. No extensions to manage. Just{' '}
            <span className="font-semibold text-primary-500">Claude Code Plugins</span> working
            seamlessly in your editor.
          </p>
        </div>
      </div>
    </section>
  );
}
