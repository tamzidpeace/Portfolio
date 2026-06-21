export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  file: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
