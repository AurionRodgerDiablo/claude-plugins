'use client';

import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 px-6 py-4 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-all opacity-0 group-hover:opacity-100"
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-400" />}
      </button>
    </div>
  );
}
