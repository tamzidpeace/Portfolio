# Task 2: Import and register the supplied Zend Engine article

## Requirements

Create these files beneath `public/blogs/zend-engine/`:

```text
bn.md
en.md
bn-cover.png
bn-creators.png
bn-execution-flow.png
en-cover.png
en-creators.png
en-execution-flow.png
```

Use only these source archives:

```text
/Users/arafat/Downloads/docs/zend-engine-bengali.zip
/Users/arafat/Downloads/docs/zend-engine-english.zip
```

Each contains one nested `ExportBlock-*.zip`. Their Markdown sources are:

```text
Private & Shared/Zend Engine কী PHP কোড আসলে কীভাবে চলে 3a020a8786058023a1fedbc5726f6c9e.md
Private & Shared/What Is the Zend Engine How PHP Code Actually Runs 3a020a8786058090b22fe9df97aa219c.md
```

Copy both articles without changing prose, references, code, headings, or attribution. Rewrite their image links to these exact relative names, in source order:

```text
Bengali image.png -> bn-cover.png
Bengali image 1.png -> bn-creators.png
Bengali image 2.png -> bn-execution-flow.png
English image.png -> en-cover.png
English zend-engine-creators.png -> en-creators.png
English zend-engine-execution-flow.png -> en-execution-flow.png
```

Append this one object to the valid JSON array in `public/blogs/manifest.json`:

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

Do not modify product components, test/config files, the feature plan/spec, or the user-owned `package-lock.json` change.

## Verification

Run:

```sh
node -e 'JSON.parse(require("node:fs").readFileSync("public/blogs/manifest.json", "utf8")); console.log("manifest valid")'
test -s public/blogs/zend-engine/bn.md
test -s public/blogs/zend-engine/en.md
find public/blogs/zend-engine -type f | sort
npm run build
```

Expected: `manifest valid`; both Markdown files are nonempty; all six named PNG files are listed; Vite build exits 0. The existing `./Assets/pre.svg` warning is pre-existing and non-blocking.

## Commit

```sh
git add public/blogs/manifest.json public/blogs/zend-engine
git commit -m "feat(blog): add bilingual Zend Engine article"
```
