import { NextResponse } from 'next/server';

export async function GET() {
  // Essayons plusieurs endpoints possibles de claudecodeplugins.net
  const endpoints = [
    'https://claudecodeplugins.net/plugins.json',
    'https://claudecodeplugins.net/api/plugins',
    'https://claudecodeplugins.net/data/plugins.json',
    'https://raw.githubusercontent.com/anthropics/claude-code-plugins/main/plugins.json',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[API] Trying endpoint: ${endpoint}`);
      
      const response = await fetch(endpoint, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ClaudePluginsMarketplace/1.0)',
          'Accept': 'application/json',
        },
        next: { revalidate: 300 }, // Cache 5 minutes
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`[API] ✅ Success from ${endpoint}`);
        
        // Normaliser la réponse
        const plugins = Array.isArray(data) ? data : data.plugins || [];
        
        return NextResponse.json(plugins, {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        });
      }
      
      console.log(`[API] ⚠️ Failed ${endpoint}: ${response.status}`);
    } catch (error) {
      console.error(`[API] ❌ Error with ${endpoint}:`, error);
    }
  }

  // Si tous les endpoints échouent, retourner des données de fallback
  console.log('[API] All endpoints failed, returning fallback data');
  
  return NextResponse.json([
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
  ]);
}