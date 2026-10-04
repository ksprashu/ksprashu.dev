export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  category: 'GenAI' | 'AI Agents' | 'Cloud Architecture' | 'Other';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Brief excerpt or full content
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  metric?: string;
  iconName: string; // Name of Lucide icon
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}
