# Deployment Guide

## Option 1: GitHub + Cloudflare Pages (Recommended)

### Step 1: Push to GitHub
```bash
cd aitools-blog
git add .
git commit -m "Initial AI Tools Review blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aitools-blog.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to https://dash.cloudflare.com
2. Navigate to Pages → Create project
3. Select "Connect to Git"
4. Authorize GitHub
5. Select your repo (aitools-blog)
6. Configure:
   - **Production branch**: main
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. Click "Save and Deploy"

### Step 3: Get Your URL
After deployment, you'll get a `.pages.dev` URL like:
`https://aitools-blog.pages.dev`

---

## Option 2: Manual Deployment (No GitHub)

### Step 1: Install Wrangler
```bash
npm install -g wrangler
```

### Step 2: Authenticate
```bash
wrangler login
```
This opens browser for OAuth login.

### Step 3: Deploy
```bash
wrangler pages project create aitools-blog
wrangler pages deploy dist
```

---

## Option 3: GitHub Pages (Alternative)

Uses `.github.io` instead of `.pages.dev`

### Step 1: Update Config
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  // ... rest of config
});
```

### Step 2: Push to GitHub
Repo name must be `YOUR_USERNAME.github.io`

---

## Post-Deployment Checklist

- [ ] Connect to Google Search Console
- [ ] Submit sitemap: `/sitemap-index.xml`
- [ ] Verify ads.txt in dashboard
- [ ] Add Umami analytics script
- [ ] Test all pages load correctly

---

## Troubleshooting

### Build Fails
- Check Node.js version: `node -v` (need 18+)
- Run locally first: `npm run build`

### 404 on pages
- Check `dist/` folder has all HTML files
- Verify `_redirects` file if using SPA mode

### Images not loading
- Ensure paths start with `/images/`
- Check file exists in `public/images/`

### Custom Domain
Go to: Cloudflare Dashboard → Pages → Settings → Custom Domains