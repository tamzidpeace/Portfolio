PHP's story is fascinating because it didn't start as a designed programming language. It began as a personal convenience tool and, somewhat accidentally, grew into one of the most widely deployed languages in computing history. As of early 2026, around 72% of all websites whose server-side language is known still run on PHP — a remarkable legacy for something that began as a few scripts tracking visits to one man's online résumé.

### The Origin: PHP/FI (1994–1995)

In 1994, a Danish-Canadian programmer named **Rasmus Lerdorf** wrote a set of Common Gateway Interface (CGI) scripts in C to track visitors to his online résumé. He called this collection **"Personal Home Page Tools"** — abbreviated **PHP**.

He released these tools publicly in June 1995. The crucial point is that PHP was **never designed as a programming language** in the academic sense. It was a practical tool that gained features as Lerdorf needed them.

He soon combined these tools with his **Form Interpreter (FI)** to create **PHP/FI**. This version could embed code directly inside HTML, interact with databases, and build simple dynamic web applications. The defining characteristic was born here: PHP was **HTML-embedded** and **server-side**, designed to make the web dynamic with minimal ceremony. You could drop a snippet of logic right into a web page, and that low barrier to entry is arguably the biggest reason PHP spread as it did.

### PHP 3 (1997–1998)

As the language grew, two developers, Zeev Suraski and Andi Gutmans, redesigned PHP's parser and introduced **PHP 3** in 1998.

Major changes:

- More extensible architecture
- Support for multiple databases
- Better support for protocols and APIs

At this point, PHP's meaning changed from **"Personal Home Page"** to the recursive acronym **"PHP: Hypertext Preprocessor"**.

### 1999–2000 — PHP 4 and Zend Engine

Zeev Suraski and Andi Gutmans developed the **Zend Engine**, which became the core runtime engine of PHP. The name Zend is a combination of their forenames, Zeev and Andi.

The Zend Engine is a compiler and runtime environment for the PHP scripting language. It consists of the Zend Virtual Machine, which comprises the Zend Compiler and the Zend Executor, which compile and execute PHP code.

**PHP 4** was released in 2000 with:

- Improved performance
- Better scalability
- Support for more complex web applications

They later founded Zend Technologies to continue commercial development and support around PHP.

### PHP 5 — Object Orientation Grows Up (2004)

PHP 5, released on July 13, 2004, ran on the **Zend Engine 2** and represented a major maturation. Its headline feature was a **proper object-oriented programming model**. Earlier versions had only superficial OOP support; PHP 5 introduced:

- Real classes with visibility modifiers (public, private, protected)
- Interfaces and abstract classes
- Exceptions and structured error handling
- Magic methods (`__construct`, `__get`, `__set`, etc.)
- The improved MySQLi and PDO (PHP Data Objects, in PHP 5.1) database extensions
- Standardized XML handling on top of the underlying `libxml2` library

Later in the 5.x line, PHP 5.3 added **namespaces** and **closures** — not strictly object-oriented features, but essential building blocks for the frameworks that followed.

This OOP foundation is what made modern PHP frameworks possible. **Symfony** and later **Laravel** could only exist because PHP 5 provided the language with an object model, interfaces, and (later) the features needed to build sophisticated abstractions like dependency injection containers.

### PHP 6 — The Version That Never Shipped

Here's one of the more interesting chapters. PHP 6 was never released. A planned Unicode-native rewrite of PHP was abandoned, and development jumped from PHP 5.x directly to PHP 7.0.

The goal of PHP 6 was ambitious: to bake **native Unicode support** into the core of the language. But the implementation proved complex, performance suffered, and developer burnout set in. The project stalled for years and was eventually scrapped. Many features developed for it were back-ported into PHP 5.3 and 5.4. To avoid confusion with the failed project — books and articles had already referenced "PHP 6" — the team skipped the number and went straight to 7.

### PHP 7 — The Performance Revolution (2015)

By 2014, PHP faced severe competition from faster runtimes like Node.js and Facebook's HHVM (HipHop Virtual Machine). PHP 7 responded by overhauling the engine internals, delivering major performance gains and formalizing a stricter type system.

PHP 7, released on December 3, 2015, was a watershed moment. Built on a refactored engine from the **PHP Next Generation (phpng)** initiative, it delivered roughly twice the performance of PHP 5.6 while using significantly less memory. For a language powering a huge fraction of the web, this was a major practical win. Sites became faster and cheaper to run overnight.

PHP 7 also added serious type-system features:

- **Scalar type declarations** (`int`, `string`, `float`, `bool` on parameters)
- **Return type declarations**
- The **null coalescing operator** (`??`)
- The **spaceship operator** (`<=>`) for comparison
- Anonymous classes

This release marked PHP's deliberate shift toward a more **type-safe, performance-conscious** language, shedding much of its old "loose and messy" reputation. Support for the PHP 7 line ended on November 28, 2022.

### PHP 8 — The Modern Era (2020–Present)

PHP 8.0, released in November 2020, pushed the language firmly into modern territory. Its standout addition was the **JIT (Just-In-Time) compiler**, along with a wave of features that made the language more expressive and safer:

- **Union types**
- **Named arguments**
- **Attributes** (native annotations, read via `ReflectionAttribute`)
- **Constructor property promotion** (a huge boilerplate reduction)
- **Match expressions**
- The **nullsafe operator** (`?->`)
- **Enums** (added in 8.1)
- **Fibers** (added in 8.1)
- **Read-only properties and classes**

The 8.x line has been a steady cadence of refinement. Each annual release tightened the type system and improved the developer experience.

---

## PHP Timeline Summary

| Year | Version | Major Milestone |
| --- | --- | --- |
| 1994 | PHP created | Personal Home Page Tools by Rasmus Lerdorf |
| 1995 | PHP/FI | First public release |
| 1998 | PHP 3 | Rewritten parser, became PHP: Hypertext Preprocessor |
| 2000 | PHP 4 | Zend Engine, better performance |
| 2004 | PHP 5 | Modern OOP, exceptions, PDO |
| 2015 | PHP 7 | Huge speed improvement, scalar/return types |
| 2020 | PHP 8 | JIT, attributes, union types, modern syntax |
| 2020s | PHP 8.x | Enums, readonly, advanced type system |

---

### Where PHP Stands Today (2026)

Here's the current state of the language:

The latest stable PHP version in 2026 is PHP 8.5. It was released in November 2025 and is the recommended version for new projects. PHP 8.5 introduces major new syntax and features, including the **pipe operator** (`|>`) and a new **URI extension**. Other notable additions include the **Clone With** feature, which allows cloning an object while modifying selected properties in a single expression, and the `#[\NoDiscard]` attribute, which emits warnings when important return values are ignored.

Looking just ahead: PHP 8.6 is the active development branch, expected to be released toward the end of 2026.

### Is PHP dying?

Honestly, the "PHP is dying" debate is almost a yearly ritual now. People have predicted its death for over a decade, but it keeps not happening.

**PHP is shrinking in *mindshare*, not deployment.** It's no longer the trendy choice for greenfield startups; attention has shifted to JavaScript/TypeScript, Go, Python, and Rust. Junior devs hear less buzz and assume it's fading. But mindshare and market share are different. The installed base — WordPress alone, plus Laravel, Symfony, and millions of business apps — is enormous and sticky.

**The language got genuinely good.** The "PHP is messy" reputation is stuck in the PHP 5 era. Modern PHP 8.x — typed properties, enums, JIT, attributes, readonly, fibers — is a serious, performant, type-safe language. The thing people mock mostly doesn't exist anymore.

**"Dying" usually means "I personally moved on."** A lot of the debate is developers projecting their own stack preferences onto the industry.

Languages with this much production footprint don't die. They fade over very long timescales — and PHP isn't even fading yet.