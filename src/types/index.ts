// Common types used across the application
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  url: string;
}

export type Theme = 'light' | 'dark';

export interface NavigationItem {
  label: string;
  path: string;
  icon: React.ComponentType;
}

// Utility types for component props
export type WithChildren<T = {}> = T & {
  children: React.ReactNode;
};

export type WithClassName<T = {}> = T & {
  className?: string;
};