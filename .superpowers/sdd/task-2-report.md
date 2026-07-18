# Task 2 Report: Import and register the Zend Engine article

## Status

Completed and committed.

## Source-to-destination image mappings

| Source archive | Source image | Destination |
| --- | --- | --- |
| `zend-engine-bengali.zip` | `image.png` | `public/blogs/zend-engine/bn-cover.png` |
| `zend-engine-bengali.zip` | `image 1.png` | `public/blogs/zend-engine/bn-creators.png` |
| `zend-engine-bengali.zip` | `image 2.png` | `public/blogs/zend-engine/bn-execution-flow.png` |
| `zend-engine-english.zip` | `image.png` | `public/blogs/zend-engine/en-cover.png` |
| `zend-engine-english.zip` | `zend-engine-creators.png` | `public/blogs/zend-engine/en-creators.png` |
| `zend-engine-english.zip` | `zend-engine-execution-flow.png` | `public/blogs/zend-engine/en-execution-flow.png` |

## Files changed

- `public/blogs/manifest.json`
- `public/blogs/zend-engine/bn.md`
- `public/blogs/zend-engine/en.md`
- `public/blogs/zend-engine/bn-cover.png`
- `public/blogs/zend-engine/bn-creators.png`
- `public/blogs/zend-engine/bn-execution-flow.png`
- `public/blogs/zend-engine/en-cover.png`
- `public/blogs/zend-engine/en-creators.png`
- `public/blogs/zend-engine/en-execution-flow.png`

## Verification

Commands run:

```sh
node -e 'JSON.parse(require("node:fs").readFileSync("public/blogs/manifest.json", "utf8")); console.log("manifest valid")'
test -s public/blogs/zend-engine/bn.md
test -s public/blogs/zend-engine/en.md
find public/blogs/zend-engine -type f | sort
npm run build
git diff --check -- public/blogs/manifest.json public/blogs/zend-engine
```

Exact output:

```text
manifest valid
public/blogs/zend-engine/bn-cover.png
public/blogs/zend-engine/bn-creators.png
public/blogs/zend-engine/bn-execution-flow.png
public/blogs/zend-engine/bn.md
public/blogs/zend-engine/en-cover.png
public/blogs/zend-engine/en-creators.png
public/blogs/zend-engine/en-execution-flow.png
public/blogs/zend-engine/en.md
npm notice run portfolio@2.0.1 build
npm notice run vite build
vite v8.1.5 building client environment for production...
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
dist/assets/hishabi-rfRLEAnY.png            2,578.15 kB
dist/assets/limadi-DAoBv3k4.png             4,013.77 kB
dist/assets/BlogPost-C8LL_u4z.css               1.06 kB │ gzip:   0.44 kB
dist/assets/index-Bv-Yg2yd.css                 81.75 kB │ gzip:  13.90 kB
dist/assets/Arafat_Kamal_CV-k6ds4sMa.js         0.06 kB │ gzip:   0.08 kB
dist/assets/bi-Bn1inQdz.js                      3.87 kB │ gzip:   1.66 kB
dist/assets/Projects-BXrE2YoH.js                4.85 kB │ gzip:   2.00 kB
dist/assets/Blog-CcI1EoxD.js                    5.07 kB │ gzip:   1.81 kB
dist/assets/si-BPURo52I.js                      7.95 kB │ gzip:   3.44 kB
dist/assets/Resume-BBynDa4X.js                 10.70 kB │ gzip:   3.64 kB
dist/assets/Home-CHklU8NR.js                   45.46 kB │ gzip:  14.11 kB
dist/assets/Particle-D-JfCFD8.js              166.10 kB │ gzip:  45.71 kB
dist/assets/About-CAdeuIUt.js                 171.76 kB │ gzip:  38.46 kB
dist/assets/index-CQkOrM-5.js                 264.70 kB │ gzip:  86.90 kB
dist/assets/BlogPost-C9j2reuD.js              325.01 kB │ gzip: 100.09 kB
✓ built in 550ms
```

Additional source-preservation check:

```text
Bengali article: only required image targets changed
English article: only required image targets changed
```

Each imported image was also compared to its archive source by SHA-256. All six hashes matched.

## Self-review

- The manifest is valid JSON and contains exactly the requested Zend Engine entry.
- The Bengali article is the manifest default and both translation file paths are exact.
- Both Markdown files preserve supplied prose, references, code, headings, and attribution; only the three required image targets per language changed.
- The six destination images exist, are nonempty PNG files, and match their supplied source images.
- No components, tests, configuration, plan/spec, or `package-lock.json` were modified.

## Commit

`5afa59cee0b73c3e48b653181928e470f56fcd67` — `feat(blog): add bilingual Zend Engine article`

## Concerns

None. The pre-existing `./Assets/pre.svg` Vite warning appeared during the successful build and is non-blocking as specified.
