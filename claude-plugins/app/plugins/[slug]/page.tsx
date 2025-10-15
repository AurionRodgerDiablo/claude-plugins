import React from 'react';
import { useRouter } from 'next/router';
import PluginDetails from '@/components/marketplace/PluginDetails';
import { Plugin } from '@/types/plugin';
import { getPluginBySlug } from '@/lib/plugins';

const PluginPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const plugin: Plugin | null = slug ? getPluginBySlug(slug as string) : null;

  if (!plugin) {
    return <div>Plugin not found</div>;
  }

  return (
    <div>
      <PluginDetails plugin={plugin} />
    </div>
  );
};

export default PluginPage;