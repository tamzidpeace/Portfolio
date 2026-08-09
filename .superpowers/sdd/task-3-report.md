# Task 3 Report: Bilingual Zend Engine language switch

## Files changed

- `src/components/Blog/BlogPost.tsx`
- `src/components/Blog/BlogPost.test.tsx`

## TDD evidence

Added the bilingual manifest fixture, Bengali/English Markdown responses, and behavior tests before changing `BlogPost.tsx`.

Initial focused test run (RED):

```text
FAIL src/components/Blog/BlogPost.test.tsx
● defaults a bilingual post to Bengali
Unable to find an accessible element with the role "button" and name "বাংলা"

● switches a bilingual post to English
Unable to find an accessible element with the role "button" and name "English"

Test Suites: 1 failed, 1 total
Tests:       2 failed, 3 passed, 5 total
```

## Implementation

- Added Bengali as a local, non-persistent default language.
- Split manifest lookup and Markdown loading into separate effects.
- Added independent cancellation guards to the content effect, including its success and `finally` paths, to prevent stale Markdown responses from overwriting the current selection.
- Added real Bengali/English buttons with `type="button"` and `aria-pressed` state.
- Switched title, file, rendered Markdown, and article `lang` from the selected translation.
- Kept legacy posts on their existing single-file behavior with no language controls.

## Verification

Focused test:

```text
npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
```

Full test suite:

```text
npm test -- --runInBand
Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
```

Production build:

```text
npm run build
vite v8.1.5 building client environment for production...
./Assets/pre.svg referenced in ./Assets/pre.svg didn't resolve at build time, it will remain unchanged to be resolved at runtime
✓ built in 606ms
```

`git diff --check` completed with no output.

## Self-review

- Confirmed the only committed production changes are within the two scoped Task 3 files.
- Confirmed Bengali is selected every initial load and selection is not persisted.
- Confirmed the controls are omitted for legacy posts.
- Confirmed old content fetches are cancelled on a language change and cannot update `content` or `loading` after cancellation.
- Reused existing rounded glass/button utility styling; no stylesheet or dependency was added.

## Commit

`d0e16d7 feat(blog): switch Zend Engine article language`

## Concerns

- The build retains the known, pre-existing `./Assets/pre.svg` resolution warning permitted by the task brief.
- `package-lock.json` and the `.superpowers/sdd`/plan files remain uncommitted user-orchestration work and were not included in this task commit.

## Final-review fixes

Implemented the binding final-review brief:

- Replaced all six Zend Engine Markdown image URLs with their absolute `/blogs/zend-engine/...` public paths.
- Made the active language control visually distinct with a filled purple background and purple border, while retaining the glass treatment for the inactive control.
- Added `role="group"` and `aria-label="Article language"` to the language-control wrapper.
- Extended Bengali and English rendering tests to assert each rendered Markdown image uses its exact absolute asset path.

## Final verification

```text
$ npm test -- --runInBand src/components/Blog/BlogPost.test.tsx
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total

$ npm test -- --runInBand
Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total

$ npm run build
vite v8.1.5 building client environment for production...
./Assets/pre.svg referenced in ./Assets/pre.svg didn't resolve at build time, it will remain unchanged to be resolved at runtime
✓ 1236 modules transformed.
✓ built in 619ms

$ git diff --check
(no output; passed)
```

## Final self-review

- Confirmed the final commit contains only the four files permitted by the final-review scope.
- Confirmed every article image URL is absolute and matches the deployed public asset location.
- Confirmed the selected control retains `type="button"` and `aria-pressed`, has an explicit active visual state, and the selector is an accessible named group.
- Confirmed focused tests, the full suite, production build, and whitespace check all pass.

## Final-review commit

`0d4b440 fix(blog): resolve bilingual article assets`
