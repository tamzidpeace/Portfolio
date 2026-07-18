# Final Review Fix: Zend Engine Images and Active Language State

## Findings to fix

1. `public/blogs/zend-engine/bn.md` and `en.md` use relative image URLs. When rendered on `/blogs/what-is-the-zend-engine`, `bn-cover.png` resolves to `/blogs/bn-cover.png`, not the deployed asset path. Replace every article image URL with its exact absolute public path:

```text
/blogs/zend-engine/bn-cover.png
/blogs/zend-engine/bn-creators.png
/blogs/zend-engine/bn-execution-flow.png
/blogs/zend-engine/en-cover.png
/blogs/zend-engine/en-creators.png
/blogs/zend-engine/en-execution-flow.png
```

2. The currently selected language button must be visually distinguishable, not only exposed with `aria-pressed`. In `src/components/Blog/BlogPost.tsx`, conditionally apply a filled purple background/border/text treatment to the selected language button and retain a transparent glass style for the unselected button. Keep `aria-pressed` and `type="button"`. Add `role="group"` and `aria-label="Article language"` to the selector wrapper.

## Tests

Modify `src/components/Blog/BlogPost.test.tsx` to assert rendered Markdown image `src` values have the exact absolute public asset paths for Bengali after initial load and English after switching. Use accessible image alt text or the DOM image list; do not add dependencies.

## Scope

Modify only:

```text
public/blogs/zend-engine/bn.md
public/blogs/zend-engine/en.md
src/components/Blog/BlogPost.tsx
src/components/Blog/BlogPost.test.tsx
```

Do not change manifest, types, dependencies, test configuration, docs, or the existing `package-lock.json` modification.

## Verification

Run:

```sh
npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
npm test -- --runInBand
npm run build
```

Expected: focused and full tests pass; Vite builds. The pre-existing `./Assets/pre.svg` warning is permitted.

## Commit

```sh
git add public/blogs/zend-engine/bn.md public/blogs/zend-engine/en.md src/components/Blog/BlogPost.tsx src/components/Blog/BlogPost.test.tsx
git commit -m "fix(blog): resolve bilingual article assets"
```
