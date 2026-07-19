const BLOG_CONTENT_VERSION = "2026-07-18-zend-engine";

export function getVersionedBlogAssetUrl(url: string): string {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${BLOG_CONTENT_VERSION}`;
}
