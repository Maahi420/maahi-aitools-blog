# AI Tools Review Blog - Project Guide

## Quick Start

### Development
```bash
cd aitools-blog
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navigation.astro
│   ├── Footer.astro
│   ├── AdUnits.astro
│   ├── ToolPricingTable.astro
│   ├── FeatureList.astro
│   ├── ProsCons.astro
│   └── ImageWithMeta.astro
├── layouts/       # Page layouts
│   ├── BaseLayout.astro
│   └── BlogPost.astro
├── pages/         # Routes
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── category/
│   │   └── [category].astro
│   ├── about.astro
│   ├── contact.astro
│   └── rss.xml.ts
├── config/        # Data & config
│   ├── siteConfig.ts
│   └── posts.ts
└── styles/
    └── global.css
```

---

## Adding New Blog Posts

Edit `src/config/posts.ts`:

```typescript
export const posts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    description: "Meta description (150-160 chars)",
    pubDate: new Date("2026-04-19"),
    category: "ai-chatbots",  // or ai-writing, ai-image, ai-video, ai-productivity
    image: "/images/your-image.jpg",
    imageAlt: "Image description",
    author: "AI Tools Review",
    tags: ["tag1", "tag2"],
    draft: false,
    content: `## Your Content Here

Write in Markdown format...`
  }
];
```

---

## Adding Images

1. Put images in `public/images/`
2. Reference as `/images/filename.jpg`

---

## SEO Features Built-in

- [x] Meta tags (title, description)
- [x] OpenGraph + Twitter Cards
- [x] JSON-LD Schema for articles
- [x] XML Sitemap
- [x] robots.txt
- [x] RSS Feed
- [x] Canonical URLs

---

## Ad Integration

Edit `src/components/AdUnits.astro` and replace placeholders with:
- Adsterra code, or
- Monetag code

Update `public/ads.txt` with your publisher ID.

---

## Analytics

Add Umami to `src/layouts/BaseLayout.astro`:

```html
<script defer src="https://umami.is/script.js" data-website-id="YOUR_UMAMI_ID"></script>
```

---

## Deployment

See `DEPLOY.md` for full instructions.

### Quick Deploy to Cloudflare Pages:
1. Push to GitHub
2. Go to dash.cloudflare.com → Pages
3. Connect GitHub repo
4. Build command: `npm run build`
5. Output: `dist`
