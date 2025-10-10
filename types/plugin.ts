export interface Plugin {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'code-tools' | 'database' | 'utilities' | 'ai-ml' | 'templates';
  featured: boolean;
  sponsored: boolean;
  official: boolean;
  verified?: boolean;
  installCommand: string;
  stars: number;
  downloads?: number;
  author: string;
  tags: string[];
}

export type FilterType = 'today' | 'featured' | 'latest' | 'plugins' | 'marketplaces' | 'official';
