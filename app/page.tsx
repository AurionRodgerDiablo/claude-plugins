import { Hero } from '@/components/Hero';
import { FilterTabs } from '@/components/FilterTabs';
import { PluginGrid } from '@/components/PluginGrid';
import { CodeBlock } from '@/components/CodeBlock';
import { FAQ } from '@/components/FAQ';
import { Header } from '@/components/Header';
import { plugins } from '@/lib/data';

export default function Home() {
  const featuredPlugins = plugins.filter((p) => p.featured);
  const codeToolsPlugins = plugins.filter((p) => p.category === 'code-tools');
  const aiMlPlugins = plugins.filter((p) => p.category === 'ai-ml');

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        <div className="max-w-7xl mx-auto mb-8">
          <FilterTabs />
        </div>

        <div className="max-w-7xl mx-auto">
          <PluginGrid title="Featured MCP Servers" plugins={featuredPlugins} />
          <PluginGrid title="Code Tools" plugins={codeToolsPlugins} />
          <PluginGrid title="AI & ML Tools" plugins={aiMlPlugins} />
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Quick Install</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              Install any plugin with a single command
            </p>
            <CodeBlock code="npx @claudeai/plugin-name" />
          </div>
        </div>

        <FAQ />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
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
