# Zend Engine কী: PHP কোড আসলে কীভাবে চলে?

![image.png](/blogs/zend-engine/bn-cover.png)

ধরুন, আপনি একটি ছোট PHP file লিখলেন।

```
echo "Hello, World!";
```

তারপর browser refresh করলেন, আর সঙ্গে সঙ্গে screen-এ result চলে এলো। দেখতে খুব স্বাভাবিক লাগে। কিন্তু এই কয়েক লাইনের code কীভাবে browser পর্যন্ত পৌঁছাল? কে `$variable`, `function`, `if` বা loop-এর অর্থ বুঝল? কে ঠিক করল কোন কাজ আগে হবে, আর কোনটা পরে?

এই অদৃশ্য কাজগুলোর পেছনেই আছে **Zend Engine** — PHP-এর সেই অংশ, যা আপনার লেখা code-কে বুঝে, চালানোর উপযোগী করে, এবং শেষ পর্যন্ত execute করে।

## এক বাক্যে Zend Engine

**Zend Engine হলো PHP-এর core execution engine**। আপনার লেখা PHP code পড়া, তার গঠন বোঝা, চালানোর উপযোগী instruction তৈরি করা এবং শেষে তা execute করার মূল কাজটি Zend Engine করে।

সহজভাবে বললে, `.php` file নিজে নিজে চলে না। Zend Engine সেটিকে ধাপে ধাপে এমন একটি রূপে নেয়, যা PHP runtime কার্যকরভাবে চালাতে পারে।

**Zend** নামটি এসেছে **Zeev Suraski** ও **Andi Gutmans**-এর নামের সংমিশ্রণ থেকে: Zeev-এর **“Ze”** এবং Andi-এর **“nd”**। তাঁরা PHP-এর early development এবং Zend Engine তৈরিতে গুরুত্বপূর্ণ ভূমিকা রেখেছিলেন।

![image.png](/blogs/zend-engine/bn-creators.png)

*Zeev Suraski (left) and Andi Gutmans (right), associated with the creation of the Zend Engine.*

## PHP আর Zend Engine কি একই জিনিস?

না। Zend Engine হলো PHP-এর সবচেয়ে গুরুত্বপূর্ণ অংশ, কিন্তু পুরো PHP নয়।

```
PHP
├── Zend Engine       → code parse, compile ও execute করে
├── SAPI layer        → web server, CLI ইত্যাদির সঙ্গে যোগাযোগ করে
└── Extensions        → PDO, cURL, mbstring, GD-এর মতো অতিরিক্ত সুবিধা দেয়
```

এখানে Zend Engine-কে PHP-এর মস্তিষ্ক ভাবতে পারেন। কিন্তু database connection, image processing বা HTTP client-এর মতো কাজগুলো সাধারণত বিভিন্ন extension সামলায়।

## Zend Engine ভেতরে কী করে?

একটি PHP script চালানোর সময় Zend Engine সাধারণত চারটি মূল ধাপ পার করে। নিচের diagram-এ সেই process এক নজরে দেখা যাক:

![image.png](/blogs/zend-engine/bn-execution-flow.png)

### ধাপ ১: Lexing বা Tokenizing

শুরুতে PHP code হলো plain text। Zend Lexer এই text-কে ছোট ছোট অর্থপূর্ণ অংশে ভাগ করে, যেগুলোকে **token** বলা হয়।

ধরা যাক:

```
$total = 5;
```

Engine এটিকে মোটামুটি এভাবে চিনতে পারে:

```
[variable: $total] [operator: =] [number: 5] [semicolon: ;]
```

অর্থাৎ lexer এখনো code চালাচ্ছে না; এটি শুধু code-এর শব্দ ও symbol গুলো শনাক্ত করছে।

### ধাপ ২: Parsing এবং AST তৈরি

এরপর parser tokenগুলো দেখে বোঝে, এগুলো একসঙ্গে কী অর্থ তৈরি করছে।

উদাহরণ হিসেবে, parser বুঝতে পারে:

- এটি একটি variable assignment কি না
- কোথায় একটি `if` block শুরু ও শেষ হচ্ছে
- কোন function-এ argument পাঠানো হচ্ছে
- কোন expression আগে evaluate হবে

এই বোঝাপড়ার জন্য engine একটি **AST (Abstract Syntax Tree)** তৈরি করে। AST হলো code-এর কাঠামোগত মানচিত্রের মতো।

PHP 7 থেকে AST compiler-কে আরও পরিষ্কার ও কার্যকরভাবে code analyse করতে সাহায্য করে।

### ধাপ ৩: Compilation থেকে Opcode

AST থেকে Zend Engine তৈরি করে **opcode** বা operation code।

Opcode হলো Zend VM-এর জন্য তৈরি low-level instruction। উদাহরণস্বরূপ, একটি সাধারণ assignment বা function call ভেঙে একাধিক opcode হতে পারে।

এখানে একটি গুরুত্বপূর্ণ বিষয় পরিষ্কার রাখা ভালো: PHP-কে শুধু “interpreted language” বলা পুরোপুরি সঠিক নয়। সাধারণভাবে PHP source code আগে opcode-এ compile হয়, তারপর Zend VM সেই opcode execute করে।

### ধাপ ৪: Zend VM দিয়ে Execution

সবশেষে **Zend VM (Virtual Machine)** opcodeগুলো একে একে চালায়।

কোনো opcode হয়তো একটি variable-এ value রাখবে, কোনোটি function call করবে, আবার কোনোটি condition যাচাই করে execution-এর পরের ধাপ ঠিক করবে। এই execution-এর ফলেই browser-এ HTML, API থেকে JSON, কিংবা terminal-এ output দেখা যায়।

সংক্ষেপে পুরো যাত্রা এমন:

```
PHP code → Tokens → AST → Opcodes → Zend VM → Output
```

## OPcache কেন এত গুরুত্বপূর্ণ?

এখন একটি বাস্তব সমস্যা ভাবুন। প্রতিটি request-এ যদি একই PHP file আবার lex, parse এবং compile করতে হয়, তাহলে অপ্রয়োজনীয় CPU ও resource খরচ হবে।

**OPcache** এই কাজটি কমায়।

এটি compiled opcode shared memory-তে cache করে রাখে। ফলে একই file আবার চালানোর সময় PHP অনেক ক্ষেত্রে শুরু থেকে compilation ধাপগুলো না করে cached opcode ব্যবহার করতে পারে।

```
প্রথম request:
Code → Tokens → AST → Opcodes → Execute

পরের request:
Cached Opcodes → Execute
```

এই কারণে production environment-এ OPcache সাধারণত অপরিহার্য। বিশেষ করে বড় application-এ এটি request-এর CPU overhead কমাতে এবং response time উন্নত করতে সাহায্য করে।

তবে মনে রাখবেন, OPcache PHP opcode cache করে। এটি framework-এর config cache, route cache বা application data cache-এর বিকল্প নয়; এগুলো আলাদা স্তরের optimisation।

## JIT: PHP 8-এ যুক্ত হওয়া একটি optimisation

PHP 8.0-তে Zend Engine-এর সঙ্গে **JIT (Just-In-Time) compiler** যুক্ত হয়।

স্বাভাবিকভাবে Zend VM opcode interpret করে চালায়। JIT নির্দিষ্ট কিছু hot code path runtime-এ native machine code-এ রূপান্তর করতে পারে। এতে VM-এর interpretation overhead কিছু ক্ষেত্রে কমে যায়।

তবে JIT সব ধরনের PHP application-এ সমান উপকারী নয়।

JIT সাধারণত বেশি কাজে আসে যখন কাজটি CPU-intensive হয়, যেমন:

- জটিল গণিত বা scientific calculation
- image বা signal processing
- দীর্ঘ-running computation
- data processing-এর কিছু বিশেষ workload

কিন্তু সাধারণ web application-এ bottleneck প্রায়ই database query, network call, file I/O বা external service হয়। এসব ক্ষেত্রে JIT চালু করলেই দৃশ্যমান performance gain পাওয়া যাবে, এমন নিশ্চয়তা নেই।

তাই JIT নিয়ে সঠিক নিয়ম হলো: **enable করার আগে নিজের workload-এ benchmark করুন।**

## Zend Engine-এর ক্ষমতা বোঝার কিছু উদাহরণ

Zend Engine শুধু code চালায় না; runtime-এ code-এর state এবং বিভিন্ন metadata-ও পরিচালনা করে। PHP-এর বেশ কয়েকটি শক্তিশালী feature এই ক্ষমতার ওপর নির্ভর করে।

- **Generators (`yield`)**: execution মাঝপথে থামিয়ে পরে একই অবস্থান থেকে আবার চালিয়ে যেতে পারে।
- **Fibers**: execution context pause ও resume করার সুবিধা দেয়, যা কিছু advanced asynchronous pattern-এর ভিত্তি।
- **Reflection**: runtime-এ class, method, property এবং function সম্পর্কে তথ্য পড়তে দেয়।

এই featureগুলো আলাদা মনে হলেও, এদের পেছনে রয়েছে Zend Engine-এর runtime state ও internal metadata পরিচালনার ক্ষমতা।

## Zend Engine বুঝলে PHP-কে নতুনভাবে দেখা যায়

**Zend Engine হলো PHP-এর core execution engine।** এটি আপনার PHP code-কে token, AST এবং opcode-এ রূপান্তর করে; এরপর Zend VM দিয়ে সেই opcode execute করে।

OPcache compiled opcode cache করে PHP application-এর অপ্রয়োজনীয় compilation work কমায়। আর JIT বিশেষ CPU-intensive workload-এ native machine code তৈরি করে অতিরিক্ত performance দিতে পারে।

PHP ভালোভাবে বুঝতে হলে শুধু syntax জানলেই হয় না। Zend Engine কীভাবে code চালায়, সেটি জানলে performance, debugging এবং runtime behaviour নিয়ে সিদ্ধান্ত নেওয়াও অনেক সহজ হয়ে যায়।

---

*Image attribution: Photos of Zeev Suraski by TheMissileSilo and Andi Gutmans by Jim Winstead. Cropped and combined. Licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).*

## References & Sources

- [PHP Manual: OPcache](https://www.php.net/manual/en/book.opcache.php)
- [PHP RFC: Abstract Syntax Tree](https://wiki.php.net/rfc/abstract_syntax_tree)
- [PHP RFC: JIT](https://wiki.php.net/rfc/jit)
- [PHP Manual: Fibers](https://www.php.net/manual/en/language.fibers.php)
- [PHP Manual: Generators](https://www.php.net/manual/en/language.generators.overview.php)
- [PHP Manual: Reflection](https://www.php.net/reflection)
