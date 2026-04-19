# AI Tools Blog - Specification Document

## Project Overview

- **Project Name**: AI Tools Review Blog
- **Type**: Static SEO-focused blog website
- **Core Functionality**: Daily reviews and articles on AI tools with SEO optimization, schema markup, and ad monetization
- **Target Users**: People searching for AI tool reviews, pricing, and comparisons on Google

---

## Technical Stack

| Component | Choice |
|-----------|--------|
| SSG | Astro 5 |
| Hosting | Cloudflare Pages (`.pages.dev` subdomain) |
| Styling | Tailwind CSS |
| CMS | Decap CMS (GitHub-based, free) |
| Analytics | Umami Cloud (Free tier) |
| Ad Network | Adsterra / Monetag |

---

## Site Structure

```
/
├── src/
│   ├── components/
│   │   ├── Navigation.astro       # Header with nav links
│   │   ├── Footer.astro         # Site footer
│   │   ├── AdUnits.astro       # Adsterra ad placements
│   │   ├── ToolPricingTable.astro  # Pricing comparison
│   │   ├── FeatureList.astro    # Features grid
│   │   ├── ImageWithMeta.astro  # SEO images
│   │   ├── ProsCons.astro     # Pros/cons boxes
│   │   ├── AffiliateLink.astro  # CTA buttons
│   │   └── TableOfContents.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Common layout with SEO
│   │   └── BlogPost.astro     # Article template
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── blog/
│   │   │   └── [slug].astro  # Blog post pages
│   │   ├── category/
│   │   │   └── [category].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── sitemap.xml.ts
│   ├── content/
│   │   └── blog/             # Markdown blog posts
│   ├── config/
│   │   └── siteConfig.ts   # Site configuration
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   ├── ads.txt
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── wrangler.jsonc
```

---

## UI/UX Design

### Color Palette
- **Primary**: `#0f172a` (slate-900, dark background)
- **Secondary**: `#f8fafc` (slate-50, light text)
- **Accent**: `#3b82f6` (blue-500, links/CTAs)
- **Success**: `#22c55e` (green-500, pros)
- **Error**: `#ef4444` (red-500, cons)
- **Card Background**: `#1e293b` (slate-800)

### Typography
- **Headings**: Inter (sans-serif, bold)
- **Body**: Inter (sans-serif, regular)
- **Code/Technical**: JetBrains Mono

### Layout
- **Max Content Width**: 768px for articles, 1280px for homepage
- **Responsive Breakpoints**: 640px (mobile), 768px (tablet), 1024px (desktop)
- **Spacing**: 16px base unit, multiples of 4px

### Components
1. **Navigation**: Sticky header, logo left, nav links right, mobile hamburger
2. **Hero Section**: Large heading, subtitle, featured tool card
3. **Article Card**: Image, title, excerpt, date, category tag
4. **Pricing Table**: Price, features, CTA button
5. **Feature Grid**: Icon + text layout
6. **Pros/Cons Boxes**: Colored borders, bullet lists
7. **Sidebar**: Table of contents, related posts
8. **Footer**: Links, social, copyright

---

## SEO Requirements

### Meta Tags (BaseLayout)
- [ ] Title (dynamic per page)
- [ ] Description (dynamic per page)
- [ ] Canonical URL
- [ ] OpenGraph (og:title, og:description, og:image, og:type, og:url)
- [ ] Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Schema.org JSON-LD

### Structured Data (BlogPost)
- [ ] Article schema (headline, image, datePublished, dateModified, author)
- [ ] BreadcrumbList
- [ ] WebSite with SearchAction
- [ ] FAQ schema where applicable

### Technical SEO
- [ ] XML sitemap (auto-generated)
- [ ] robots.txt
- [ ] Core Web Vitals optimized
- [ ] Semantic HTML
- [ ] Image alt text
- [ ] Lazy loading images

---

## Pages

### 1. Homepage (`/`)
- Hero section with site tagline
- Latest 6 blog posts
- Featured categories
- Newsletter signup placeholder
- Ad placements

### 2. Blog Post (`/blog/[slug]`)
- Title, date, category
- Table of contents (sticky sidebar)
- Content with H2/H3 headings
- Pricing table section (if tool review)
- Features section
- Pros/cons section
- Screenshots gallery
- Related posts
- Ad placements throughout

### 3. Category Page (`/category/[category]`)
- Filtered posts by category
- Category description
- Pagination

### 4. About Page (`/about`)
- Site description
- Author info
- E-E-A-T content

### 5. Contact Page (`/contact`)
- Contact information
- Placeholder for form

---

## Ad Placements

### Adsterra Integration
- **Pop-under**: Body tag (1 per 24h)
- **Push Notifications**: Service worker
- **Social Bar**: Fixed bottom
- **Banners**: In-article (300x250, 728x90)
- **ads.txt**: In public folder

---

## Content Structure (Blog Posts)

```markdown
---
title: "Tool Name - Full Review 2026"
description: "Meta description (150-160 chars)"
pubDate: "2026-04-18"
category: "ai-chatbots"
image: "/images/tool-name-review.jpg"
imageAlt: "Tool name interface screenshot"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Tool Name - Full Review 2026

## Overview
[Intro paragraph with tool description]

## Pricing
[Pricing table component]

## Features
[Features grid component]

## Pros & Cons
[Pros/cons component]

## Screenshots
[Image gallery]

## Conclusion
[Final verdict]
```

---

## Acceptance Criteria

1. [ ] Site builds without errors
2. [ ] Deployed to Cloudflare Pages
3. [ ] Homepage loads with latest posts
4. [ ] Blog posts render with full SEO meta
5. [ ] JSON-LD validates in Google Rich Results Test
6. [ ] Sitemap works
7. [ ] Responsive on mobile/tablet/desktop
8. [ ] Lighthouse performance score ≥ 90
9. [ ] Ad units placeholders ready for Adsterra code

---

## Phase 1 Deliverables

1. Astro project with Tailwind configured
2. BaseLayout with complete SEO meta
3. BlogPost layout with schema
4. 5 blog post templates ready for content
5. Ad unit components
6. Homepage with latest posts
7. Category and archive pages
8. Sitemap and robots.txt
9. Cloudflare Pages deployment