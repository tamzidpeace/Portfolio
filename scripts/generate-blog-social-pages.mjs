import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const SITE_URL = "https://arafatpeace.xyz";
const DEFAULT_IMAGE = `${SITE_URL}/blogs/zend-engine/bn-cover.png`;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(url) {
  if (!url) return DEFAULT_IMAGE;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function replaceTitle(html, title) {
  return html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`);
}

function replaceMeta(html, key, value, content) {
  const escapedContent = escapeHtml(content);
  const pattern = new RegExp(`<meta\\s+[^>]*${key}=["']${value}["'][^>]*>`, "i");
  const tag = `<meta ${key}="${value}" content="${escapedContent}">`;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `  ${tag}\n</head>`);
}

function setCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}">`;
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `  ${tag}\n</head>`);
}

function buildBlogHtml(baseHtml, post) {
  const defaultTranslation = post.translations?.bn ?? post;
  const title = `${defaultTranslation.title} | Arafat`;
  const description = defaultTranslation.excerpt ?? post.excerpt;
  const image = absoluteUrl(defaultTranslation.thumbnail ?? post.thumbnail);
  const url = `${SITE_URL}/blogs/${post.slug}`;

  let html = baseHtml.replace('<html lang="en">', '<html lang="bn">');
  html = replaceTitle(html, title);
  html = setCanonical(html, url);

  html = replaceMeta(html, "name", "description", description);
  html = replaceMeta(html, "itemprop", "name", title);
  html = replaceMeta(html, "itemprop", "description", description);
  html = replaceMeta(html, "itemprop", "image", image);

  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:type", "article");
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", description);
  html = replaceMeta(html, "property", "og:image", image);

  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", description);
  html = replaceMeta(html, "name", "twitter:image", image);

  return html;
}

const baseHtml = await readFile(path.join(DIST_DIR, "index.html"), "utf8");
const manifest = JSON.parse(await readFile(path.join(DIST_DIR, "blogs", "manifest.json"), "utf8"));

await Promise.all(
  manifest.map(async (post) => {
    const routeDir = path.join(DIST_DIR, "blogs", post.slug);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, "index.html"), buildBlogHtml(baseHtml, post));
  })
);
