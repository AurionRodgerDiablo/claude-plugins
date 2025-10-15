'use client';

import { useState, useEffect } from 'react';
import { Plugin } from '@/types/plugin';
import { PluginModal } from '@/components/PluginModal';
import { fetchPlugins } from '@/lib/plugins-api';
import { FiSearch, FiStar, FiDownload } from 'react-icons/fi';
import { Hero } from '@/components/Hero';
import { FilterTabs } from '@/components/FilterTabs';
import { PluginGrid } from '@/components/PluginGrid';
import { FAQ } from '@/components/FAQ';
import { Header } from '@/components/Header';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { GettingStarted } from '@/components/GettingStarted';
import { Prerequisites } from '@/components/Prerequisites';

export default function Home() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadPlugins = async () => {
      try {
        console.log('Loading plugins...');
        const data = await fetchPlugins();
        console.log('Plugins loaded:', data);
        setPlugins(data);
      } catch (err) {
        console.error('Error loading plugins:', err);
        setError('Impossible de charger les plugins');
      } finally {
        setLoading(false);
      }
    };
    loadPlugins();
  }, []);

  const filteredPlugins = plugins.filter(plugin =>
    plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plugin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plugin.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">Chargement des plugins...</div>
          <div className="text-gray-500 text-sm">Vérifiez la console pour plus d'infos</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main>
        <Hero />


        {/* Main Plugin Directory Section */}
        <div className="max-w-7xl mx-auto mb-8 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Browse Claude Code Plugins
          </h2>
          {/* <FilterTabs /> */}
        </div>

        <div className="max-w-7xl mx-auto">
          <PluginGrid title="All Plugins" plugins={plugins} showViewAll={false} />
        </div>
        <Prerequisites />

        {/* Educational/Marketing Sections Below */}
        <Features />

        <HowItWorks />

        <GettingStarted />

        <FAQ />
      </main>

      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-2">
            Claude Plugin Directory - A community-driven marketplace for Claude Code plugins
          </p>
          <p className="text-sm">
            Built with ❤️ by the community • Not affiliated with Anthropic
          </p>
        </div>
      </footer>
    </div>
  );
}
