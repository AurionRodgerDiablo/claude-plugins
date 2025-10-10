import React from 'react'
import { FiGithub, FiUpload } from 'react-icons/fi'
import icon from '@/public/icon.png'
export function Header() {
    return (
        <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">

                    <img src={icon.src} alt="Claude Plugins" className="w-10 h-10" />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">Claude Plugins</span>
                        <span className="text-xs text-gray-500">Plugin Directory</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors flex items-center gap-2">
                        <FiUpload />
                        Submit
                    </button>
                    <a
                        href="https://github.com/suio03/claude-plugins"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors flex items-center gap-2"
                    >
                        <FiGithub />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </div>
            </div>
        </header>
    )
}
