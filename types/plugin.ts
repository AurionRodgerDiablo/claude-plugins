export interface Plugin {
  id: string;
  name: string;
  description: string;
  icon?: string; // Optional - will use default if not provided
  category: 'code-tools' | 'database' | 'utilities' | 'ai-ml' | 'templates';
  // Optional/marketing fields
  featured?: boolean;
  sponsored?: boolean;
  official?: boolean;
  verified?: boolean;
  // Install command may be provided; otherwise computed from the name
  installCommand?: string;
  tags: string[];
  // Additional optional metadata
  stars?: number;
  downloads?: number;
  author?: string;
}

export type FilterType = 'today' | 'featured' | 'latest' | 'plugins' | 'marketplaces' | 'official';
