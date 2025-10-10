'use client';

import React from 'react';
import { FiCheckCircle, FiTerminal } from 'react-icons/fi';
import { CodeBlock } from './CodeBlock';

export function Prerequisites() {
  return (
    <section className="py-16 px-4 bg-blue-50 border-y border-blue-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-4 mb-8">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <FiTerminal className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Before You Start</h3>
            <p className="text-gray-600">
              Make sure you have Claude Code installed and running. All plugins require Claude Code CLI.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FiCheckCircle className="text-green-500" />
              Required
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Claude Code CLI installed</li>
              <li>• Active Claude subscription</li>
              <li>• Terminal/Command line access</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FiCheckCircle className="text-blue-500" />
              Recommended
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Git installed (for marketplace plugins)</li>
              <li>• Node.js/npm (for some plugins)</li>
              <li>• Familiarity with CLI commands</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="text-gray-400 text-sm mb-3">Quick check if Claude Code is installed:</p>
          <CodeBlock code="claude --version" />
        </div>
      </div>
    </section>
  );
}
