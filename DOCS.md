# 📘 CONTRIBUTING GUIDE: How to Add Resources to DevResource Hub

A complete guide for maintaining and expanding your resource library over time.

---

## 📑 Table of Contents

1. [Quick Start](#quick-start)
2. [Understanding the Data Structure](#understanding-the-data-structure)
3. [Adding a Single Resource](#adding-a-single-resource)
4. [Adding a New Category](#adding-a-new-category)
5. [How to Categorize Resources](#how-to-categorize-resources)
6. [Field Reference](#field-reference)
7. [Naming Conventions](#naming-conventions)
8. [Quality Checklist](#quality-checklist)
9. [Common Mistakes to Avoid](#common-mistakes-to-avoid)
10. [Testing Your Changes](#testing-your-changes)
11. [Category Decision Tree](#category-decision-tree)
12. [Versioning & Changelog](#versioning--changelog)

---

## 🚀 Quick Start

**Everything lives in one file:** `data/resources.js`

You will **never** need to edit `index.html`, `styles.css`, or `script.js` to add resources. The UI renders automatically from the data.

**Three-step workflow:**

1. Open `data/resources.js`
2. Find the correct category (or create one)
3. Add your resource object to that category's `resources` array
4. Save, refresh, verify

That's it.

---

## 🧱 Understanding the Data Structure

The entire library is a single array called `RESOURCE_DATA`. Each item in that array is a **category object**. Each category contains a `resources` array of **resource objects**.

```
RESOURCE_DATA (array)
│
├── Category object
│   ├── id       (unique string, used for anchor links)
│   ├── title    (display name)
│   ├── emoji    (single emoji icon)
│   ├── desc     (one-line description)
│   └── resources (array)
│       ├── Resource object
│       │   ├── title
│       │   ├── desc
│       │   ├── link
│       │   ├── level
│       │   ├── code    (optional)
│       │   └── tags    (optional)
│       │
│       └── Resource object ...
│
├── Category object ...
```

---

## ➕ Adding a Single Resource

### Step 1: Find the right category

Locate the category object in `data/resources.js`. For example, to add a new VS Code extension, search for:

```js
{
  id: 'vscode-ext',
  title: 'VS Code Extensions',
  ...
}
```

### Step 2: Add to the `resources` array

Add your resource object at the end of that category's `resources` array (before the closing `]`):

```js
resources: [
  { title: 'Existing Resource', desc: '...', link: '...', level: 'free' },
  
  // 👇 Add your new resource here
  { 
    title: 'Your New Extension', 
    desc: 'What it does in one sentence.', 
    link: 'https://marketplace.visualstudio.com/items?itemName=your-extension-id', 
    level: 'free', 
    tags: ['tag1', 'tag2'] 
  }
]
```

### Step 3: Save and verify

Refresh the page. Your resource should appear in that category, and the count badge should increment by one.

---

## 🗂️ Adding a New Category

Only create a new category when resources genuinely **don't fit** any existing category. If in doubt, use an existing category.

### Step 1: Append a new category object

Add at the end of the `RESOURCE_DATA` array (before the closing `];`):

```js
{
  id: 'your-category-id',        // lowercase, hyphens, unique
  title: 'Your Category Title',  // Title Case
  emoji: '🎯',                   // single emoji
  desc: 'One-line description of what this category contains.',
  resources: [
    { 
      title: 'First Resource', 
      desc: 'Description.', 
      link: 'https://example.com', 
      level: 'free' 
    }
  ]
}
```

### Step 2: Choose an `id` carefully

The `id` becomes the anchor link (`#cat-your-category-id`). It must be:

- **lowercase**
- **hyphen-separated**
- **unique** (no duplicate ids)
- **descriptive** (not `cat1`, `cat2`)

Good ids: `vscode-ext`, `dsa-visualizers`, `free-ai-apis`  
Bad ids: `Category1`, `new_cat`, `misc`

### Step 3: Pick a single emoji

Use one emoji that represents the category. Avoid multi-emoji strings. Good options are in the existing categories — stay consistent in visual weight.

---

## 🧭 How to Categorize Resources

This is the most important skill for maintaining the library. Use this decision process.

### The 5-Question Decision Flow

Ask these questions **in order** until one gives a clear answer:

**Question 1: Is this a tool you install or a platform you visit?**

- **Install** → VS Code Extensions, Chrome Extensions, Mobile Coding Apps
- **Visit** → Continue to Q2

**Question 2: Is it primarily about learning or about building?**

- **Learning** (courses, tutorials, docs, videos) → Learning Platforms, YouTube Courses, Free AI & Coding Courses, Meta Certifications, Programmer Videos
- **Building** (tools, libraries, APIs) → Continue to Q3
- **Career** (jobs, interviews, resumes) → Job Platforms, Interview Preparation, Resume Templates

**Question 3: What domain does it serve?**

| Domain | Category |
|--------|----------|
| Visual design / colors / CSS styling | Design & UI Tools |
| Motion / animation / scrolling | Animation & Effects |
| Pre-built UI widgets | UI Components & Libraries |
| Code from GitHub | GitHub Repositories |
| Open-source apps you run yourself | Open-Source Power Tools |
| Data / algorithms / DSA | DSA & Algorithm Visualizers |
| HTTP data sources | Free APIs (General) |
| AI / LLM / ML APIs | Free AI APIs or AI APIs to Get Hired |
| AI models / agents / generators | AI Models & Tools |
| Deployment / hosting | Hosting & Deployment |
| Utilities / converters / cheat sheets | Developer Tools & Utilities |
| Emails from your app | Free Email Services |
| Google-built AI tools | Google AI Tools |

**Question 4: Is it free, freemium, or paid?**

- Free → `level: 'free'`
- Paid / freemium with paid tier → `level: 'paid'`
- If it has a discount code → add `code: 'XXXXX'`

**Question 5: Does an existing category already cover this well enough?**

If yes → **use it**. Only create a new category if you have at least **3 resources** that clearly don't belong anywhere else.

### Categorization Rules

| Rule | Why |
|------|-----|
| **One resource = one category** | Don't duplicate. If a resource could fit two, pick the primary use case. |
| **Learning ≠ Building** | A video about React goes in "YouTube Courses", not "UI Components". |
| **Free ≠ Paid** | Don't mix free and paid in the same "official" naming, but `level` handles this per-resource. |
| **Specific beats general** | "Free AI APIs" beats "APIs" for AI-specific endpoints. |
| **Don't split prematurely** | If a new category has fewer than 3 resources, fold it into an existing one. |
| **Keep categories under ~30 resources** | If a category grows beyond 30, consider splitting it by sub-theme. |

---

## 📋 Field Reference

Every resource object supports these fields:

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `title` | ✅ Yes | string | Display name | `'VisuAlgo'` |
| `desc` | ✅ Yes | string | One-sentence description | `'Animated algorithm visualizer.'` |
| `link` | ✅ Yes | string | Full URL, must include `https://` | `'https://visualgo.net/en'` |
| `level` | ✅ Yes | string | One of: `free`, `paid`, `beginner`, `intermediate`, `advanced` | `'free'` |
| `code` | ❌ No | string | Discount or invite code | `'CWR30'` |
| `tags` | ❌ No | string[] | 1–3 short tags | `['algorithms', 'visual']` |

### Choosing `level`

| Value | Use when |
|-------|----------|
| `'free'` | Completely free, no paywall |
| `'paid'` | Requires payment or has a paid-only tier |
| `'beginner'` | Explicitly beginner-friendly (only if site labels it so) |
| `'intermediate'` | Mid-level content |
| `'advanced'` | Advanced / expert-level |

**Rule of thumb:** If unsure, use `'free'` or `'paid'`. Only use `beginner/intermediate/advanced` when the resource itself clearly targets that level.

### Choosing `tags`

- **1–3 tags maximum** (UI only shows 3)
- **lowercase**
- **short** (single words or two-word phrases)
- Tags are used for search, so use words users would search for

Good tags: `'react'`, `'css'`, `'interview'`, `'free'`, `'api'`  
Bad tags: `'This is a great resource'`, `'ReactJS Library'`, `'FREE'`

---

## ✏️ Naming Conventions

### `title`

- Use the **official name** of the resource
- Preserve brand capitalization (`GitHub`, `freeCodeCamp`, `YouTube`)
- Don't add descriptors ("Awesome React Tool" → just "React" or the actual name)
- Max ~40 characters

### `desc`

- **One sentence**, max ~120 characters
- Start with a verb or noun phrase (no "This is...")
- Focus on **what it does**, not why it's great
- No marketing language ("revolutionary", "best ever")

| Good | Bad |
|------|-----|
| `'Animated algorithm visualizer.'` | `'This is an amazing tool that helps you visualize algorithms beautifully!'` |
| `'12,000 emails/month free.'` | `'The best free email service available!'` |
| `'18,000+ real interview questions.'` | `'HUGE database of interview questions that you MUST try!'` |

### `link`

- Always include protocol (`https://` or `http://`)
- Use canonical URL (not tracking links, not shortened links unless unavoidable)
- Avoid affiliate links
- If a discount code is included in the URL, keep it as-is but also set `code`

---

## ✅ Quality Checklist

Before adding a resource, verify all of these:

- [ ] The link works (open in a fresh tab)
- [ ] The link is HTTPS (or explicitly HTTP for legacy sites)
- [ ] The resource is still active (not discontinued)
- [ ] The description is accurate as of today
- [ ] The `level` is correct (free vs paid)
- [ ] The `id` of any new category is unique
- [ ] The `tags` array has 1–3 lowercase tags
- [ ] The resource fits the category it's in
- [ ] There's no duplicate of the same resource in the same category
- [ ] The category's `emoji` is a single emoji
- [ ] Comma after every object except the last in the array
- [ ] The file still parses (open in browser, no console errors)

---

## ⚠️ Common Mistakes to Avoid

### 1. Missing comma between objects

```js
// ❌ WRONG — syntax error
resources: [
  { title: 'A', ... }
  { title: 'B', ... }
]

// ✅ CORRECT
resources: [
  { title: 'A', ... },
  { title: 'B', ... }
]
```

### 2. Trailing comma issues

```js
// ⚠️ Legal in modern JS, but avoid for consistency
resources: [
  { title: 'A', ... },
  { title: 'B', ... },  // ← remove this comma
]
```

### 3. Unescaped quotes in strings

```js
// ❌ WRONG
desc: 'It's the best tool.'

// ✅ CORRECT
desc: "It's the best tool.",
// or
desc: 'It is the best tool.'
```

### 4. Duplicate category `id`

```js
// ❌ WRONG — two categories with same id
{ id: 'ai-tools', ... }
{ id: 'ai-tools', ... }

// ✅ CORRECT
{ id: 'ai-tools', ... }
{ id: 'ai-tools-extra', ... }
```

### 5. Duplicate resource in same category

Before adding, use `Ctrl+F` (Cmd+F) in `resources.js` and search the resource's title or link. If found, don't duplicate.

### 6. Wrong `level`

```js
// ❌ WRONG — Coursera courses are free to audit but paid for certificates
{ title: 'Meta Full Stack', level: 'free' }  // misleading

// ✅ CORRECT
{ title: 'Meta Full Stack', level: 'paid' }  // if certificate requires payment
```

### 7. Multi-emoji category icons

```js
// ❌ WRONG
emoji: '🔥🎓📚'

// ✅ CORRECT
emoji: '🎓'
```

### 8. Uppercase tags

```js
// ❌ WRONG
tags: ['React', 'CSS', 'Free']

// ✅ CORRECT
tags: ['react', 'css', 'free']
```

---

## 🧪 Testing Your Changes

### Local test

1. Open `index.html` directly in your browser (double-click)
2. Open the browser console (`F12` → Console)
3. If you see any **red errors**, you have a syntax error — check the last object you added

### Visual test checklist

- [ ] New resource appears in its category
- [ ] Category count badge incremented
- [ ] Total resource count in hero matches
- [ ] Search finds the new resource (search its title)
- [ ] Filter chips work with the new resource (try "Free" filter)
- [ ] The card's "Visit →" link opens the right URL
- [ ] Mobile view (resize window) still works

### Deploy test

After pushing to GitHub and Vercel redeploys:

1. Visit your live URL
2. Hard refresh (`Ctrl+Shift+R`)
3. Verify the new resource appears live
4. Verify the search finds it live

---

## 🌳 Category Decision Tree

Use this flowchart when unsure where a resource belongs.

```
What is the resource?
│
├─ A course / video tutorial
│   ├─ On YouTube → "YouTube Courses (Tech)"
│   ├─ On Coursera / Udemy / etc → "Free AI & Coding Courses" (or "Meta Certifications" if Meta)
│   └─ A single video on mindset / soft skills → "Soft Skills Videos"
│
├─ A platform to practice coding
│   └─ "Learning Platforms"
│
├─ A code repository
│   └─ "GitHub Repositories"
│
├─ An open-source app you self-host
│   └─ "Open-Source Power Tools"
│
├─ A tool you install (VS Code / Chrome)
│   ├─ VS Code extension → "VS Code Extensions"
│   ├─ Chrome extension → "Chrome Extensions for Developers"
│   └─ Mobile app → "Mobile Coding Apps"
│
├─ An API
│   ├─ General data (news, weather, countries) → "Free APIs (General)"
│   ├─ AI / LLM / ML API → "Free AI APIs" or "AI APIs to Get Hired"
│   └─ Email API → "Free Email Services"
│
├─ A design or visual tool
│   ├─ Colors / gradients / palettes → "Design & UI Tools"
│   ├─ Animation / motion / scroll → "Animation & Effects"
│   └─ Pre-built widget / component → "UI Components & Libraries"
│
├─ A utility tool
│   ├─ Converter / formatter / cheat sheet → "Developer Tools & Utilities"
│   └─ Cron / automation → "Developer Tools & Utilities"
│
├─ An AI model or agent
│   └─ "AI Models & Tools" (or "Google AI Tools" if Google)
│
├─ A DSA / algorithm resource
│   └─ "DSA & Algorithm Visualizers"
│
├─ A job board / career resource
│   ├─ Job board → "Job Platforms"
│   ├─ Virtual internship → "Free Virtual Internships"
│   ├─ Resume template → "Resume Templates"
│   ├─ Interview prep → "Interview Preparation"
│   └─ Resume prompt doc → "Resume & Interview Prompts"
│
├─ A certification / certificate
│   └─ "Free Certificates" or "Meta Certifications"
│
├─ A paid course / bundle
│   └─ "Paid Courses (With Discounts)"
│
├─ An event / program / incubator
│   └─ "Free Online Events & Programs"
│
├─ A hosting / deploy platform
│   └─ "Hosting & Deployment"
│
├─ A full-stack project with source code
│   └─ "Full Stack Projects (Source Code)"
│
├─ A game to learn coding
│   └─ "Coding Games"
│
├─ A curated document / guide / list
│   └─ "Curated Learning Documents"
│
└─ Doesn't fit anywhere → Ask: could 3 similar resources form a new category?
    ├─ Yes → Create new category (see "Adding a New Category")
    └─ No → Add to "Additional Resources"
```

---

## 📅 Versioning & Changelog

As the library grows, keep a changelog of what you add, remove, or change. This is useful if you ever share the repo or return to it after months.

### Recommended changelog format

Create a `CHANGELOG.md` in the project root:

```markdown
# Changelog

## [1.1.0] - 2026-11-09
### Added
- 3 new AI APIs in "Free AI APIs" (Mistral, Together AI, Fireworks AI)
- New category: "Web3 & Blockchain Resources" (5 resources)
- 2 new VS Code extensions

### Changed
- Updated broken link for "Heroku" (now pointing to heroku.com)
- Moved "Tripo AI" from "AI Tools" to "AI Models & Tools"

### Removed
- "Course X" (discontinued by provider)

## [1.0.0] - 2026-11-09
### Initial release
- 340 resources across 35 categories
```

### Update the version in the footer

In `index.html`, find:

```html
<p class="footer-mono">v1.0 · Last updated: 2026</p>
```

Update to match your changelog.

### Semantic versioning for a resource library

| Version bump | When |
|--------------|------|
| **Patch** (1.0.**1**) | Adding 1–5 resources, fixing broken links |
| **Minor** (1.**1**.0) | Adding 5+ resources, adding a new category |
| **Major** (**2**.0.0) | Restructuring categories, redesigning the UI |

---

## 🧹 Maintenance Routine (Recommended Quarterly)

Every 3 months, do a maintenance pass:

1. **Link check** — Open `resources.js`, search for `http`, and spot-check 20 random links
2. **Remove dead links** — If a resource is discontinued, remove it (note in changelog)
3. **Update `level`** — If a free tier changed to paid, update `level: 'paid'`
4. **Refresh discount codes** — Verify codes still work (especially `CWR30`, `ANKIT25`, `X7K2M9P4R1NQ`, `TLDM0Y`)
5. **Split oversized categories** — Any category with >30 resources should be considered for splitting
6. **Merge undersized categories** — Any category with <3 resources should be folded into a related one
7. **Bump version** — Update changelog and footer

---

## 📊 Example: Full Add Resource Walkthrough

**Scenario:** You want to add "Mistral AI" (a free AI API) and "Svelte" (a frontend framework).

### 1. Mistral AI → Free AI APIs

Categorize: It's an AI API → "Free AI APIs"

Find the category in `data/resources.js`:

```js
{
  id: 'ai-apis',
  title: 'Free AI APIs',
  emoji: '🤖',
  desc: 'Add AI to your projects without spending a fortune.',
  resources: [
    { title: 'Google Gemini API', ... },
    ...
    { title: 'Cerebras', ... },
    
    // 👇 Add here
    { 
      title: 'Mistral AI', 
      desc: 'Open-weight and commercial LLM APIs.', 
      link: 'https://mistral.ai', 
      level: 'free', 
      tags: ['llm', 'mistral'] 
    }
  ]
}
```

### 2. Svelte → UI Components & Libraries

Categorize: It's a frontend framework → closest existing category is "UI Components & Libraries" (or create "Frontend Frameworks" if you plan to add 3+).

For now, add to "UI Components & Libraries":

```js
{
  id: 'ui-libs',
  ...
  resources: [
    { title: 'Splide', ... },
    ...
    { title: 'Packerly', ... },
    
    // 👇 Add here
    { 
      title: 'Svelte', 
      desc: 'Cybernetically enhanced web apps — compiles to tiny JS.', 
      link: 'https://svelte.dev', 
      level: 'free', 
      tags: ['framework', 'frontend'] 
    }
  ]
}
```

### 3. Verify

Refresh the page. Both resources appear. Search for "Mistral" and "Svelte" — both should be found. Filters work. Deploy.

### 4. Update changelog

```markdown
## [1.0.1] - 2026-11-09
### Added
- Mistral AI (Free AI APIs)
- Svelte (UI Components & Libraries)
```

---

## 🎯 Summary: The Golden Rules

1. **One file to edit:** `data/resources.js` — nothing else
2. **One resource, one home:** Don't duplicate across categories
3. **Learning vs building:** Know the difference, categorize accordingly
4. **3-resource minimum:** Don't create a new category with fewer than 3 resources
5. **Free vs paid:** Be honest with `level`
6. **Tags:** 1–3, lowercase, searchable
7. **Test before deploy:** Refresh locally, check console
8. **Changelog:** Note every change, bump version

---

*Keep this guide next to your repo. Every future addition should follow these rules.*