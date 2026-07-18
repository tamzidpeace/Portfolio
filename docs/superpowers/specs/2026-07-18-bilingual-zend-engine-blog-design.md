# Spec: Bilingual Zend Engine Blog Post

## Objective

Publish a new Zend Engine article in the existing portfolio blog. Readers visit a single post URL and see the Bengali version by default. An in-page language switch lets them view the English translation without navigation or persisted preferences.

Success means the new article fits the current blog experience, displays its matching images in both languages, and leaves existing single-language posts unchanged.

## Tech Stack

- React 19 and TypeScript
- React Router DOM 7
- `react-markdown` with `remark-gfm` and `rehype-highlight`
- Vite static assets served from `public/`
- Jest and React Testing Library

## Commands

```sh
npm run dev
npm test
npm run build
```

## Project Structure

```text
public/blogs/
  manifest.json                    # Post metadata and language variants
  zend-engine/
    bn.md                          # Bengali article, the default variant
    en.md                          # English article
    ...                            # Article image assets
src/types/blog.ts                  # Typed post and translation metadata
src/components/Blog/BlogPost.tsx   # Fetches and switches the active variant
src/components/Blog/*.test.tsx     # Blog behavior tests
```

## Design

### Content model

The new manifest entry will retain the existing common post fields (`slug`, tags, date, reading time) and provide language variants for Bengali (`bn`) and English (`en`). Each variant has its own title, excerpt, and Markdown file path.

The post will use one stable route:

```text
/blogs/what-is-the-zend-engine
```

The Bengali variant is the default on every page load. Language selection is held only in component state and is never written to local storage, the URL, or a cookie.

Existing manifest entries remain valid and are treated as single-language posts. They do not display a language switch.

### Page behavior

`BlogPost` determines whether the selected post has translation variants. For a bilingual post, it initially loads `bn`, renders a compact accessible Bengali/English segmented control above the article, and fetches the selected variant's Markdown when changed.

The visible title, excerpt-derived metadata where applicable, body, and images all change together. The rendered article sets `lang="bn"` or `lang="en"` to reflect the active content. Loading and error states follow the current post-loading pattern. A rapid language change must not allow an older fetch to overwrite the latest selection.

The archive content will be copied into `public/blogs/zend-engine/`. Markdown image links will be rewritten to simple local paths so Vite deploys every referenced image with the post.

### UI and accessibility

- Bengali is visibly active by default.
- The language control uses real buttons with clear labels, an exposed selected state, and keyboard operation.
- It follows the existing liquid-glass visual system and works in light and dark themes.
- The control is not rendered for a post with no translations.

## Code Style

Use typed interfaces and narrow language unions rather than untyped object lookups.

```ts
type BlogLanguage = "bn" | "en";

interface BlogTranslation {
  title: string;
  excerpt: string;
  file: string;
}
```

Keep fetching and cancellation in `BlogPost`; keep Markdown rendering in `BlogMarkdown`. Do not add a new dependency or global state for a per-page, non-persistent selection.

## Testing Strategy

Add or extend React Testing Library tests to verify:

1. The Zend Engine page initially requests and renders Bengali content.
2. Selecting English requests and renders English content.
3. The language control is absent for the existing PHP history post.
4. Existing loading and not-found behavior continues to work.

Run `npm test` and `npm run build` after implementation.

## Boundaries

- Always: preserve the existing blog route and visual system; default to Bengali; use only the supplied article files and image assets; run tests and a production build.
- Ask first: adding dependencies, changing the URL scheme, persisting language preferences, or altering unrelated SEO/deployment work.
- Never: overwrite the user’s existing `package-lock.json` change, replace the existing article, add separate language URLs, or store a reader preference.

## Success Criteria

- A new Zend Engine post appears in the blog list.
- Opening its one URL renders Bengali by default.
- The Bengali/English control switches the full article content and its local images without a route change.
- Reloading returns the article to Bengali.
- Existing single-language posts still render normally and expose no language control.
- Tests and the production build pass.

## Open Questions

None. The implementation uses the supplied Bengali and English archives as the authoritative article content and image source.
