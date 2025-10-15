import { Plugin } from '@/types/plugin';

export async function fetchPlugins(): Promise<Plugin[]> {
  try {
    // Utiliser notre API route Next.js qui contourne le CORS
    const response = await fetch('/api/plugins', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ Fetched ${data.length} plugins from API`);
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('❌ Error fetching plugins:', error);
    
    // Fallback local si l'API échoue
    return [
      {
        id: 'web-search',
        name: 'Web Search',
        description: 'Search the web in real-time and get up-to-date information',
        icon: '🔍',
        tags: ['search', 'web', 'information'],
        category: 'utilities',
        author: 'Anthropic',
        official: true,
        verified: true,
        sponsored: false,
        stars: 1250,
        downloads: 15000,
        installCommand: '/plugin install web-search'
      },
      {
        id: 'code-analyzer',
        name: 'Code Analyzer',
        description: 'Analyze code quality, detect bugs, and suggest improvements',
        icon: '🔬',
        tags: ['code', 'analysis', 'debugging'],
        category: 'code-tools',
        author: 'DevTools Team',
        official: false,
        verified: true,
        sponsored: false,
        stars: 890,
        downloads: 8500
      },
      {
        id: 'database-helper',
        name: 'Database Helper',
        description: 'Generate SQL queries, design schemas, and optimize databases',
        icon: '🗄️',
        tags: ['database', 'sql', 'optimization'],
        category: 'database',
        author: 'DataPro',
        official: false,
        verified: true,
        sponsored: true,
        stars: 670,
        downloads: 5200
      },
      {
        id: 'ai-image-gen',
        name: 'AI Image Generator',
        description: 'Generate images using AI based on text descriptions',
        icon: '🎨',
        tags: ['ai', 'image', 'generation', 'creative'],
        category: 'ai-ml',
        author: 'CreativeAI',
        official: false,
        verified: true,
        sponsored: false,
        stars: 2100,
        downloads: 12000
      },
      {
        id: 'code-templates',
        name: 'Code Templates',
        description: 'Access thousands of code templates for various frameworks',
        icon: '📋',
        tags: ['templates', 'boilerplate', 'code'],
        category: 'templates',
        author: 'CodeLibrary',
        official: false,
        verified: false,
        sponsored: false,
        stars: 450,
        downloads: 3200
      },
      {
        id: 'api-tester',
        name: 'API Tester',
        description: 'Test and debug REST APIs directly from Claude',
        icon: '⚡',
        tags: ['api', 'testing', 'rest'],
        category: 'utilities',
        author: 'APITools',
        official: false,
        verified: true,
        sponsored: false,
        stars: 780,
        downloads: 6100
      },
      {
        id: 'markdown-preview',
        name: 'Markdown Preview',
        description: 'Live preview of markdown with syntax highlighting',
        icon: '📝',
        tags: ['markdown', 'preview', 'documentation'],
        category: 'utilities',
        author: 'DocTools',
        official: false,
        verified: false,
        sponsored: false,
        stars: 320,
        downloads: 2800
      },
      {
        id: 'git-helper',
        name: 'Git Helper',
        description: 'Generate commit messages, review PRs, and manage repositories',
        icon: '🔀',
        tags: ['git', 'version-control', 'github'],
        category: 'code-tools',
        author: 'GitPro',
        official: false,
        verified: true,
        sponsored: false,
        stars: 1540,
        downloads: 9800
      },
      {
        id: 'data-visualizer',
        name: 'Data Visualizer',
        description: 'Create charts and graphs from your data',
        icon: '📊',
        tags: ['data', 'visualization', 'charts'],
        category: 'utilities',
        author: 'DataViz',
        official: false,
        verified: false,
        sponsored: true,
        stars: 560,
        downloads: 4300
      },
    ];
  }
}

export async function fetchPluginById(id: string): Promise<Plugin | null> {
  try {
    const plugins = await fetchPlugins();
    return plugins.find(p => p.id === id) || null;
  } catch (error) {
    console.error('Error fetching plugin:', error);
    return null;
  }
}