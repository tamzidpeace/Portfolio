export type BlogLanguage = "bn" | "en";

export interface BlogTranslation {
  title: string;
  excerpt: string;
  file: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  file: string;
  readingTime: string;
  translations?: Partial<Record<BlogLanguage, BlogTranslation>>;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
