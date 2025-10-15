import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Claude Plugins. All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="hover:text-white">About</a>
          <span className="mx-2">|</span>
          <a href="/contact" className="hover:text-white">Contact</a>
          <span className="mx-2">|</span>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}