'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    id: 1,
    question: 'What is Claude Plugin Directory?',
    answer:
      'Claude Plugin Directory is a community-driven platform that collects and organizes Claude Code plugins and marketplaces. It helps developers discover, install, and share extensions for Claude Code.',
  },
  {
    id: 2,
    question: 'How do I install a plugin?',
    answer:
      'Installing a plugin is simple! Just copy the install command shown on the plugin card and run it in your terminal. Most plugins use npm/npx for easy installation.',
  },
  {
    id: 3,
    question: 'How can I submit my plugin?',
    answer:
      'You can submit your plugin by creating a new issue on our GitHub repository. Provide details about your plugin including its name, description, features, and installation command.',
  },
  {
    id: 4,
    question: 'What are Claude Code marketplaces?',
    answer:
      'Claude Code marketplaces are collections of tools, templates, and integrations that extend Claude Code functionality. They can include MCP servers, custom commands, and development utilities.',
  },
  {
    id: 5,
    question: 'Is this official?',
    answer:
      'This is a community-driven directory. While some plugins are marked as "Official" and maintained by Anthropic, most plugins are created by the community.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Frequently Asked Questions about MCP Server
      </p>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-medium text-left flex items-center gap-3">
                <span className="text-gray-400 font-mono">{faq.id}</span>
                {faq.question}
              </span>
              <FiChevronDown
                className={`text-xl transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openId === faq.id && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
