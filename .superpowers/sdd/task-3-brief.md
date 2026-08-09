# Task 3: Add in-page language selection and prove the behavior

## Files

- Modify `src/components/Blog/BlogPost.tsx`.
- Modify `src/components/Blog/BlogPost.test.tsx`.

Do not modify public content, manifest, types, dependencies, Jest/Babel configuration, the feature plan/spec, or the user-owned `package-lock.json` change.

## Required behavior

- `/blogs/what-is-the-zend-engine` uses its existing single route.
- Bengali is selected on every initial page load. Do not use local storage, cookies, query parameters, or global state.
- A bilingual post renders real `button` controls named `বাংলা` and `English`, with `aria-pressed` identifying the active language.
- Clicking English changes the page title and Markdown body to English without a route change, fetches `/blogs/zend-engine/en.md`, and makes the rendered `<article>` have `lang="en"`.
- Bengali fetches `/blogs/zend-engine/bn.md` and its article has `lang="bn"`.
- Selecting a language must not let an earlier, slower content fetch replace the most recently selected content.
- A legacy post with no `translations` displays normally and has no Bengali/English controls.
- Preserve current loading, error, not-found, dates, tags, back links, and Markdown rendering behavior.

## Implementation contract

Import `BlogLanguage` with `BlogPostMeta` and declare:

```ts
const DEFAULT_LANGUAGE: BlogLanguage = "bn";

function getTranslation(meta: BlogPostMeta, language: BlogLanguage) {
  return meta.translations?.[language];
}
```

Keep manifest lookup in one `useEffect` keyed only by `slug`. When a found post is bilingual or legacy, set `meta`, clear content/error, and call `setLanguage(DEFAULT_LANGUAGE)`. Preserve the existing cancellation flag for this manifest request.

Fetch Markdown in a second `useEffect` keyed by `[meta, language]`. Resolve:

```ts
const file = getTranslation(meta, language)?.file ?? meta.file;
```

That content effect must have its own cancellation flag and ignore stale completion in both success and `finally` paths. It sets `loading` while fetching and uses the existing error message pattern if the response is not OK.

For rendering, derive:

```ts
const activeTranslation = meta ? getTranslation(meta, language) : undefined;
const activeTitle = activeTranslation?.title ?? meta?.title;
const isBilingual = Boolean(meta?.translations?.bn && meta?.translations?.en);
```

Render the selector only when `isBilingual`. Use `type="button"`, click handlers that set the narrow `BlogLanguage` value, and `aria-pressed`. Reuse the project’s existing rounded glass/button utility styling; do not add a stylesheet or dependency. Render `activeTitle` in the existing H1 and `lang={isBilingual ? language : undefined}` on the existing `<article>`.

## Tests

Extend the current test fixture with this exact bilingual item:

```ts
const bilingualPost = {
  slug: "what-is-the-zend-engine",
  title: "Zend Engine কী: PHP কোড আসলে কীভাবে চলে?",
  date: "2026-07-18",
  excerpt: "Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।",
  tags: ["php", "zend-engine", "internals"],
  file: "/blogs/zend-engine/bn.md",
  readingTime: "7 min",
  translations: {
    bn: {
      title: "Zend Engine কী: PHP কোড আসলে কীভাবে চলে?",
      excerpt: "Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।",
      file: "/blogs/zend-engine/bn.md",
    },
    en: {
      title: "What Is the Zend Engine? How PHP Code Actually Runs",
      excerpt: "Learn how the Zend Engine turns PHP code into tokens, an AST, opcodes, and output.",
      file: "/blogs/zend-engine/en.md",
    },
  },
};
```

Make the manifest mock return the existing post and this bilingual item. Make the Markdown mock return `# বাংলা Zend Engine` for the Bengali path and `# English Zend Engine` for the English path.

Add all of these assertions:

1. Render `/blogs/what-is-the-zend-engine`; wait for the Bengali body heading; assert the Bengali button is pressed, English is not, the article has `lang="bn"`, and fetch received `/blogs/zend-engine/bn.md`.
2. Click the button named `English`; wait for the English body heading; assert the English button is pressed, the article has `lang="en"`, and fetch received `/blogs/zend-engine/en.md`.
3. Render the existing `/blogs/welcome-to-my-blog`; assert no button named `English` and no button named `বাংলা` exists.

Use `fireEvent` from `@testing-library/react` if needed; do not add test dependencies. Retain the existing render and not-found tests.

## Verification

Run in this order:

```sh
npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
npm test -- --runInBand
npm run build
```

Expected: focused blog-post tests pass, then all tests pass, then Vite exits 0. The known `./Assets/pre.svg` warning is allowed because it predates this task.

## Commit

```sh
git add src/components/Blog/BlogPost.tsx src/components/Blog/BlogPost.test.tsx
git commit -m "feat(blog): switch Zend Engine article language"
```
