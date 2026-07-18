# Task 1: Define the optional translation contract

## Requirements

Modify only `src/types/blog.ts` unless a test change is genuinely required to preserve existing behavior.

Add these exported declarations before `BlogPostMeta`:

```ts
export type BlogLanguage = "bn" | "en";

export interface BlogTranslation {
  title: string;
  excerpt: string;
  file: string;
}
```

Add this optional property to `BlogPostMeta`:

```ts
translations?: Partial<Record<BlogLanguage, BlogTranslation>>;
```

Keep every existing field unchanged. Do not alter product behavior, public content, the feature plan/spec, Jest configuration, or the existing user-owned `package-lock.json` modification.

## Verification

Run:

```sh
npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
```

Expected: all existing post tests pass.

Commit only the task files with:

```sh
git add src/types/blog.ts
git commit -m "feat(blog): define translation metadata"
```
