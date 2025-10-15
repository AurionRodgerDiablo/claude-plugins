export interface Plugin {
  id: string;
  name: string;
  description: string;
  author?: string;
  icon?: JSX.Element;
  installCommand?: string;
  official?: boolean;
  sponsored?: boolean;
  verified?: boolean;
  stars?: number;
  downloads?: number;
  tags: string[];
}