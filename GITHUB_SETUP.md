# GitHub Deployment Guide

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `aitools-blog`
3. Description: "AI Tools Reviews - Daily reviews on the latest AI tools"
4. Select: **Public**
5. Click: **Create repository** (leave all options unchecked)

---

## Step 2: Push Code to GitHub

Open terminal/command prompt in project folder:

```bash
cd D:\open code\aitools-blog

git remote add origin https://github.com/YOUR_USERNAME/aitools-blog.git

git branch -M main

git push -u origin main
```

*(Replace YOUR_USERNAME with your actual GitHub username)*

---

## Step 3: Connect to Cloudflare Pages

1. Go to: https://dash.cloudflare.com
2. Login to your account
3. Click **Pages** in left sidebar
4. Click **Create project**
5. Select **Connect to Git**
6. Authorize GitHub if prompted
7. Select repository: `aitools-blog`
8. Configure:

| Setting | Value |
|---------|-------|
| Production branch | main |
| Build command | `npm run build` |
| Build output directory | `dist` |

9. Click **Save and Deploy**

---

## Step 4: Get Your URL

After deployment completes (1-2 minutes), you'll see:

```
https://aitools-blog.pages.dev
```

That's your live site!

---

## Step 5: Verify in Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `https://aitools-blog.pages.dev`
3. Verify via DNS or HTML file upload
4. Submit sitemap: `https://aitools-blog.pages.dev/sitemap-index.xml`

---

## For Future Updates

Every time you add new posts:

```bash
git add .
git commit -m "Added new review: [Tool Name]"
git push origin main
```

Cloudflare auto-deploys on push!

---

## Troubleshooting

### "git remote add" fails?
→ Remove existing remote first:
```bash
git remote remove origin
```

### Wrangler not working?
→ Install: `npm install -g wrangler`
→ Login: `wrangler login`

### Need custom domain later?
→ Cloudflare Pages → Settings → Custom Domains
