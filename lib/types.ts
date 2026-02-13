/**
 * Metadata for a project
 */
export interface ProjectMeta {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  date: string;
  coverUrl: string;
  demoUrl?: string; // Optional URL to test the application
}

/**
 * Complete project with metadata and content
 */
export interface Project {
  meta: ProjectMeta;
  content: string;
  coverUrl: string;
}
