import React from 'react';
import { PluginGrid } from '../components/marketplace/PluginGrid';
import { PluginFilters } from '../components/marketplace/PluginFilters';
import { PluginSearch } from '../components/marketplace/PluginSearch';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-4xl font-bold mb-6">Marketplace de Plugins</h1>
        <PluginSearch />
        <PluginFilters />
        <PluginGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Page;