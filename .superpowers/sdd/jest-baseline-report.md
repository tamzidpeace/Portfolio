# Jest Baseline Report

## Scope

Restored the existing Jest test environment without modifying production or blog-feature code. The setup now supports the project's TypeScript test files, Vite `@/` imports, jsdom fetch calls, CSS imports, and ESM Markdown dependencies.

## Root causes

- `jest.config.js` referenced `src/setupTests.jsx`, but the repository contains `src/setupTests.ts`; Jest also had no TypeScript transform preset.
- Jest did not mirror Vite's `@` path alias.
- jsdom does not provide `global.fetch`, while the existing blog tests spy on it.
- `react-markdown` is ESM-only and was excluded from Jest transformation. Its syntax-highlighting plugin additionally fails under Babel's CommonJS interop, so it is replaced with an identity plugin in unit tests; Markdown parsing remains real.
- Existing tests expected unique text where the current UI deliberately renders repeated text or splits text around inline Markdown code.

## Changes

- Added `@babel/preset-typescript` and enabled `.ts`/`.tsx` Babel transforms.
- Corrected the Jest setup-file path and mapped the Vite `@/` alias.
- Added default fetch and automatic DOM cleanup in the Jest setup file.
- Transformed dependencies required by the ESM Markdown renderer and mocked only `rehype-highlight` as an identity plugin for unit tests.
- Fixed CSS module-mapper precedence and prevented the particles mock from forwarding its non-DOM `init` callback.
- Updated only stale test queries to use semantic/repeat-safe assertions.

## Verification

### `npm test -- --runInBand`

```text
npm notice run portfolio@2.0.1 test
npm notice run jest --runInBand

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.789 s, estimated 10 s
Ran all test suites.
```

### `npm run build`

```text
npm notice run portfolio@2.0.1 build
npm notice run vite build
vite v8.1.5 building client environment for production...
transforming...
./Assets/pre.svg referenced in ./Assets/pre.svg didn't resolve at build time, it will remain unchanged to be resolved at runtime
✓ 1236 modules transformed.
rendering chunks...
computing gzip size...
dist/assets/manifest-DNT_3uC9.json              0.30 kB │ gzip:   0.21 kB
dist/index.html                                 1.90 kB │ gzip:   0.67 kB
dist/assets/favicon-6zFksU0X.png                2.98 kB
dist/assets/avatar-CQXdYeLd.png                10.31 kB
dist/assets/home-bg-BWAaxgdt.jpg               32.17 kB
dist/assets/home-main-BJ2-oFit.png             82.35 kB
dist/assets/about-FEa5sPAK.png                107.46 kB
dist/assets/Arafat_Kamal_CV-D8LNqhDD.pdf      124.93 kB
dist/assets/ibm1-B34CJk0g.png                 481.38 kB
dist/assets/unimass_portfolio-amYcK-Z2.png    947.27 kB
dist/assets/ebox-live-DmEAOMRl.png          1,116.16 kB
dist/assets/jibonsheba-C7ZY6a6y.png         1,158.73 kB
dist/assets/maway-BF06G294.png              1,846.46 kB
dist/assets/hishabi-rfRLEAnY.png             2,578.15 kB
dist/assets/limadi-DAoBv3k4.png             4,013.77 kB
dist/assets/BlogPost-C8LL_u4z.css               1.06 kB │ gzip:   0.44 kB
dist/assets/index-DbrW3Fx1.css                 81.70 kB │ gzip:  13.89 kB
dist/assets/Arafat_Kamal_CV-k6ds4sMa.js         0.06 kB │ gzip:   0.08 kB
dist/assets/bi-DO5Rwm5g.js                      3.87 kB │ gzip:   1.66 kB
dist/assets/Projects-CMsABhMD.js                4.85 kB │ gzip:   1.99 kB
dist/assets/Blog-DIxqSMl7.js                    5.07 kB │ gzip:   1.81 kB
dist/assets/si-DmBRXLfc.js                      7.95 kB │ gzip:   3.44 kB
dist/assets/Resume-BlahgnqA.js                 10.70 kB │ gzip:   3.64 kB
dist/assets/Home-BTGjhd7u.js                   45.46 kB │ gzip:  14.11 kB
dist/assets/Particle-BFEBo47V.js              166.10 kB │ gzip:  45.71 kB
dist/assets/About-DjR_CPsO.js                 171.76 kB │ gzip:  38.46 kB
dist/assets/index-0t-gT1Gy.js                 264.70 kB │ gzip:  86.91 kB
dist/assets/BlogPost-BO_h1ko8.js              325.01 kB │ gzip: 100.09 kB

✓ built in 435ms
```

## Concern

The build still emits the pre-existing unresolved `./Assets/pre.svg` warning. It does not fail the build and is outside this test-environment scope.
