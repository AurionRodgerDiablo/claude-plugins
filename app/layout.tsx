import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Claude Code Plugin Directory - Discover & Install Plugins',
  description: 'The open community marketplace for Claude Code plugins and templates. Browse, install, and build extensions for Anthropic\'s AI coding assistant.',
  keywords: ['Claude Code plugins', 'Claude Plugin Directory', 'Claude marketplaces', 'Claude extensions', 'Anthropic Claude plugins', 'Claude developer tools', 'Claude integrations'],
  openGraph: {
    title: 'Claude Code Plugin Directory',
    description: 'Discover and share Claude Code plugins and marketplaces',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
