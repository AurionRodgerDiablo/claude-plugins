'use client';

import React from 'react';
import { CodeBlock } from './CodeBlock';
import { FiCheckCircle } from 'react-icons/fi';

const plugins = [
  {
    name: 'AI PR Reviewer',
    description: 'Automated pull-request insights and summaries',
  },
  {
    name: 'Docs Writer',
    description: 'Generate technical docs in seconds',
  },
  {
    name: 'Testing Suite',
    description: 'Claude-assisted test generation',
  },
  {
    name: 'Security Pro',
    description: 'Detect vulnerabilities before deployment',
  },
];

export function GettingStarted() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started Guide</h2>
          <p className="text-lg text-gray-600">
            Get up and running with Claude Code Plugins in just 3 simple steps
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="border-l-4 border-primary-500 pl-6">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="text-primary-500">Step 1:</span> Add the Directory Marketplace
            </h3>
            <p className="text-gray-600 mb-4">
              Add our open marketplace to Claude Code:
            </p>
            <CodeBlock code="/plugin marketplace add https://github.com/claude-community/plugin-directory" />
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-primary-500 pl-6">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="text-primary-500">Step 2:</span> Browse and Install Plugins
            </h3>
            <p className="text-gray-600 mb-4">
              Search or explore featured Claude Code Plugins like:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {plugins.map((plugin, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <FiCheckCircle className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{plugin.name}</p>
                    <p className="text-sm text-gray-600">{plugin.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-4">Install any plugin instantly:</p>
            <CodeBlock code="/plugin install ai-pr-review@claude-community/plugin-directory" />
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-primary-500 pl-6">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="text-primary-500">Step 3:</span> Start Coding with Claude
            </h3>
            <p className="text-gray-600">
              Claude Code Plugins integrate directly into your workflow. You can run commands, generate
              tests, analyze diffs, or even connect to your CI/CD pipeline — all powered by Claude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
