# Bilingual Zend Engine Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied Zend Engine article as one blog post that opens in Bengali and switches to English in place.

**Architecture:** Keep the existing `/blogs/:slug` route and Markdown rendering. Extend the manifest type with an optional `translations` map; the existing root `title`, `excerpt`, and `file` fields remain the default Bengali/listing values, which keeps every existing post backward-compatible. `BlogPost` reads the selected translation in local state and fetches only that Markdown file.

**Tech Stack:** React 19, TypeScript, React Router DOM 7, Vite public assets, React Markdown, Jest, React Testing Library.

## Global Constraints

- The single URL is `/blogs/what-is-the-zend-engine`; do not add language-specific routes or query parameters.
- Bengali (`bn`) is selected on every initial page load; do not write the selection to local storage, a cookie, or the URL.
- Add no dependencies and no global state.
- Preserve existing single-language manifest entries and hide the language control for them.
- Use only the supplied source archives at `/Users/arafat/Downloads/docs/zend-engine-bengali.zip` and `/Users/arafat/Downloads/docs/zend-engine-english.zip`.
- Do not modify the user-owned `package-lock.json` change.
- Complete `npm test` and `npm run build` before final handoff.

---

## File Structure

| Path | Responsibility |
| --- | --- |
| `src/types/blog.ts` | Defines the `bn`/`en` language union and optional translation metadata while retaining the legacy post shape. |
| `public/blogs/manifest.json` | Lists the default Bengali card metadata and the two article variants. |
| `public/blogs/zend-engine/bn.md` | Bengali Zend Engine article with local image links. |
| `public/blogs/zend-engine/en.md` | English Zend Engine article with local image links. |
| `public/blogs/zend-engine/*.png` | The six supplied article images, named by language and purpose. |
| `src/components/Blog/BlogPost.tsx` | Resolves the active language, fetches its Markdown, and renders the accessible switch. |
| `src/components/Blog/BlogPost.test.tsx` | Proves default Bengali, in-place English switching, and existing-post compatibility. |

## Task 1: Define the optional translation contract

**Files:**
- Modify: `src/types/blog.ts`
- Modify: `src/components/Blog/BlogPost.test.tsx`

**Interfaces:**
- Produces `BlogLanguage = "bn" | "en"`.
- Produces `BlogTranslation` with `title`, `excerpt`, and `file` strings.
- Produces optional `BlogPostMeta.translations?: Partial<Record<BlogLanguage, BlogTranslation>>`.
- Existing consumers continue to read `BlogPostMeta.title`, `excerpt`, and `file`.

- [ ] **Step 1: Add the minimal type definitions**

  Add the definitions before `BlogPostMeta` and the optional property inside it:

  ```ts
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
  ```

- [ ] **Step 2: Run the focused test suite**

  Run:

  ```sh
  npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
  ```

  Expected: all existing post tests pass; the optional type addition does not change legacy post behavior.

- [ ] **Step 3: Commit the contract change**

  ```sh
  git add src/types/blog.ts src/components/Blog/BlogPost.test.tsx
  git commit -m "feat(blog): define translation metadata"
  ```

## Task 2: Import and register the supplied article content

**Files:**
- Create: `public/blogs/zend-engine/bn.md`
- Create: `public/blogs/zend-engine/en.md`
- Create: `public/blogs/zend-engine/bn-cover.png`
- Create: `public/blogs/zend-engine/bn-creators.png`
- Create: `public/blogs/zend-engine/bn-execution-flow.png`
- Create: `public/blogs/zend-engine/en-cover.png`
- Create: `public/blogs/zend-engine/en-creators.png`
- Create: `public/blogs/zend-engine/en-execution-flow.png`
- Modify: `public/blogs/manifest.json`

**Interfaces:**
- Consumes the `BlogPostMeta.translations` contract from Task 1.
- Produces public files available at `/blogs/zend-engine/<filename>`.
- Produces a manifest entry with slug `what-is-the-zend-engine` and default Bengali card metadata.

- [ ] **Step 1: Copy the archives into a temporary directory and unpack their inner archives**

  Run these commands from the repository root:

  ```sh
  tmpdir=$(mktemp -d)
  unzip -q /Users/arafat/Downloads/docs/zend-engine-bengali.zip -d "$tmpdir/bn-outer"
  unzip -q /Users/arafat/Downloads/docs/zend-engine-english.zip -d "$tmpdir/en-outer"
  unzip -q "$tmpdir/bn-outer"/*.zip -d "$tmpdir/bn"
  unzip -q "$tmpdir/en-outer"/*.zip -d "$tmpdir/en"
  ```

  Expected source locations:

  ```text
  $tmpdir/bn/Private & Shared/Zend Engine কী PHP কোড আসলে কীভাবে চলে 3a020a8786058023a1fedbc5726f6c9e.md
  $tmpdir/en/Private & Shared/What Is the Zend Engine How PHP Code Actually Runs 3a020a8786058090b22fe9df97aa219c.md
  ```

- [ ] **Step 2: Create normalized public assets and Markdown files**

  Create `public/blogs/zend-engine/`. Copy the Bengali source Markdown to `bn.md` and English source Markdown to `en.md` without changing their prose, references, code blocks, headings, or image attribution.

  Copy the images with these exact source-to-destination mappings:

  ```text
  Bengali image.png       -> bn-cover.png
  Bengali image 1.png     -> bn-creators.png
  Bengali image 2.png     -> bn-execution-flow.png
  English image.png       -> en-cover.png
  English zend-engine-creators.png -> en-creators.png
  English zend-engine-execution-flow.png -> en-execution-flow.png
  ```

  In `bn.md`, replace the three encoded source-image paths with `bn-cover.png`, `bn-creators.png`, and `bn-execution-flow.png` in source order. In `en.md`, replace its three encoded source-image paths with `en-cover.png`, `en-creators.png`, and `en-execution-flow.png` in source order. Relative image links keep the Markdown portable under `/blogs/zend-engine/`.

- [ ] **Step 3: Add the manifest entry**

  Append this object to `public/blogs/manifest.json`:

  ```json
  {
    "slug": "what-is-the-zend-engine",
    "title": "Zend Engine কী: PHP কোড আসলে কীভাবে চলে?",
    "date": "2026-07-18",
    "excerpt": "Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।",
    "tags": ["php", "zend-engine", "internals"],
    "file": "/blogs/zend-engine/bn.md",
    "readingTime": "7 min",
    "translations": {
      "bn": {
        "title": "Zend Engine কী: PHP কোড আসলে কীভাবে চলে?",
        "excerpt": "Zend Engine কীভাবে PHP কোডকে token, AST ও opcode হয়ে execute করে তা জানুন।",
        "file": "/blogs/zend-engine/bn.md"
      },
      "en": {
        "title": "What Is the Zend Engine? How PHP Code Actually Runs",
        "excerpt": "Learn how the Zend Engine turns PHP code into tokens, an AST, opcodes, and output.",
        "file": "/blogs/zend-engine/en.md"
      }
    }
  }
  ```

- [ ] **Step 4: Verify the static content is complete and valid JSON**

  Run:

  ```sh
  node -e 'JSON.parse(require("node:fs").readFileSync("public/blogs/manifest.json", "utf8")); console.log("manifest valid")'
  test -s public/blogs/zend-engine/bn.md
  test -s public/blogs/zend-engine/en.md
  find public/blogs/zend-engine -type f | sort
  ```

  Expected: `manifest valid`, both Markdown files are nonempty, and all six named PNG files are listed.

- [ ] **Step 5: Commit the content import**

  ```sh
  git add public/blogs/manifest.json public/blogs/zend-engine
  git commit -m "feat(blog): add bilingual Zend Engine article"
  ```

## Task 3: Add in-page language selection and prove the behavior

**Files:**
- Modify: `src/components/Blog/BlogPost.tsx`
- Modify: `src/components/Blog/BlogPost.test.tsx`

**Interfaces:**
- Consumes `BlogPostMeta.translations`, `BlogLanguage`, and the public Markdown paths from Tasks 1–2.
- Produces two buttons named `বাংলা` and `English` only when `translations` is present.
- Produces an `article` element with `lang="bn"` or `lang="en"` for bilingual content.

- [ ] **Step 1: Write the remaining failing behavior tests**

  Add this manifest item to `BlogPost.test.tsx`, then update the fetch mock so `/blogs/manifest.json` returns `[...manifest, bilingualPost]`, `/blogs/zend-engine/bn.md` returns `# বাংলা Zend Engine`, and `/blogs/zend-engine/en.md` returns `# English Zend Engine`:

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

  Add these tests:

  ```ts
  test("switches a bilingual post to English without changing routes", async () => {
    // Render /blogs/what-is-the-zend-engine and wait for the Bengali heading.
    // Click the button named "English".
    // Expect the English heading, English fetch path, and article lang="en".
  });

  test("does not show a language switch for a single-language post", async () => {
    // Render /blogs/welcome-to-my-blog.
    // Wait for its existing title.
    // Expect queryByRole("button", { name: "English" }) to be null.
  });
  ```

- [ ] **Step 2: Run the focused tests to verify they fail**

  Run:

  ```sh
  npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
  ```

  Expected: the new switching and absence assertions fail because the current component always fetches `meta.file` and has no language control.

- [ ] **Step 3: Implement local language resolution in `BlogPost`**

  Import `BlogLanguage` and add these declarations near `MANIFEST_URL`:

  ```ts
  const DEFAULT_LANGUAGE: BlogLanguage = "bn";

  function getTranslation(meta: BlogPostMeta, language: BlogLanguage) {
    return meta.translations?.[language];
  }
  ```

  Store `language` with `useState<BlogLanguage>(DEFAULT_LANGUAGE)`. When a manifest post is found, reset it with `setLanguage(DEFAULT_LANGUAGE)`. Fetch `getTranslation(found, DEFAULT_LANGUAGE)?.file ?? found.file` for the initial request. On a language-button click, set the selected language and refetch `getTranslation(meta, language)?.file ?? meta.file`; retain the current cancellation guard so a stale fetch cannot update the page.

  For rendering, derive:

  ```ts
  const activeTranslation = meta ? getTranslation(meta, language) : undefined;
  const activeTitle = activeTranslation?.title ?? meta?.title;
  const isBilingual = Boolean(meta?.translations?.bn && meta?.translations?.en);
  ```

  Render the language selector only when `isBilingual` is true. Use real `<button type="button">` elements. For the active button, set `aria-pressed={language === "bn"}` or `aria-pressed={language === "en"}` and use the existing rounded glass/button utility classes. Put `lang={isBilingual ? language : undefined}` on the `<article>` and render `activeTitle` in the H1.

- [ ] **Step 4: Run the focused behavior suite**

  Run:

  ```sh
  npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
  ```

  Expected: all post tests pass, including Bengali-by-default, English switching, not-found, and no control for the legacy post.

- [ ] **Step 5: Run regression checks**

  Run:

  ```sh
  npm test -- --runInBand
  npm run build
  ```

  Expected: Jest exits 0 and Vite emits the production `dist/` bundle without TypeScript or asset-resolution errors.

- [ ] **Step 6: Commit the UI and tests**

  ```sh
  git add src/components/Blog/BlogPost.tsx src/components/Blog/BlogPost.test.tsx
  git commit -m "feat(blog): switch Zend Engine article language"
  ```

## Final Verification

- [ ] Run `git status --short` and confirm that no file outside this plan’s scope changed; `package-lock.json` may remain modified because it predates this work.
- [ ] Start the site with `npm run dev`, open `/blogs/what-is-the-zend-engine`, and verify Bengali appears first.
- [ ] Select English, verify title/body/images change in place, then refresh and verify Bengali is restored.
- [ ] Open `/blogs/brief-history-of-php` and verify it still renders normally with no language switch.
