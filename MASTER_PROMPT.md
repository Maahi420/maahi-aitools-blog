# Master Prompt: AI Tool Review Article Generator

Use this prompt in Claude (claude.ai) to generate SEO-optimized blog articles for your AI Tools Review blog.

---

## Your Blog Context

- **Site Name**: AI Tools Review
- **URL**: https://aitools.pages.dev
- **Purpose**: Daily reviews and comparisons on AI tools to rank on Google
- **Author**: AI Tools Review

---

## Article Structure Requirements

Every article MUST include these sections:

### 1. Frontmatter (at the top)
```
---
title: "[Tool Name] Review [Year] - [Catchy Subtitle]"
description: "[ compelling 150-160 char meta description with target keyword]"
pubDate: "YYYY-MM-DD"
category: "[ai-chatbots | ai-writing | ai-image | ai-video | ai-productivity]"
image: "/images/[tool-slug-review].jpg"
imageAlt: "[Description of the tool interface]"
author: "AI Tools Review"
tags: ["[tool-name]", "[category-keyword]", "[other-relevant-tags]"]
---
```

### 2. Content Sections (in order)

#### Overview (H2)
- 2-3 paragraph introduction
- What the tool does
- Who it's best for
- Key highlight

#### Pricing (H2)
- Use pricing tiers table format
- Include: Free, Paid (Plus/Premium), Team/Enterprise
- Features per tier clearly listed

#### Features (H2)
- List 4-6 key features with descriptions
- Use bullet points or numbered list

#### Pros & Cons (H2)
- At least 4-5 pros
- At least 3-4 cons
- Be honest and balanced

#### Screenshots (H2)
- Placeholder for tool interface images
- Image should show main functionality

#### Conclusion (H2)
- Final verdict (score out of 5)
- Who should buy/subscribe
- Alternative suggestions

---

## SEO Requirements

### Keywords Strategy
1. Include primary keyword in:
   - Title (H1)
   - First paragraph (first 100 words)
   - At least one H2 heading
   - Meta description
   - Image alt text

2. Include secondary keywords naturally throughout

3.LSI keywords for credibility:
   - "alternative to [competitor]"
   - "vs [competitor]"
   - "features"
   - "pricing"
   - "review"

### Image SEO
- Filename: `[tool-name]-[feature]-2026.jpg`
- Alt text: Descriptive with keyword
- Place in: `/public/images/`
- Include width/height attributes

### Schema Markup
- Article schema for reviews
- Product schema for pricing
- ReviewRating schema for scores

---

## Formatting Guidelines

- Headings: H2 for main sections, H3 for subsections
- Use bold for emphasis on key terms
- Use bullet points for lists
- Keep paragraphs short (2-3 sentences max)
- Include numbers/stats where possible

---

## Example Article

```markdown
---
title: "Claude AI Review 2026 - Best GPT-4 Alternative?"
description: "In-depth Claude AI review with pricing, features, and comparison. Is it the best ChatGPT alternative for your needs? Find out in our complete guide."
pubDate: "2026-04-18"
category: "ai-chatbots"
image: "/images/claude-ai-review.jpg"
imageAlt: "Claude AI chat interface showing conversation"
author: "AI Tools Review"
tags: ["claude", "anthropic", "ai-chatbot", "chatgpt-alternative"]
---

## Overview

Claude AI, developed by Anthropic, is a cutting-edge AI assistant designed for thoughtful, nuanced conversations...

## Pricing

Claude offers three tiers: Free (limited), Pro ($20/month), and Team ($25/user/month).

## Features

- Large context window (200K tokens)
- Enhanced reasoning capabilities
- Strong constitutional AI safety
- Image analysis
- Code writing assistance

## Pros & Cons

**Pros:**
- Excellent reasoning
- Large context window
- Strong safety measures
- Fast responses

**Cons:**
- No image generation
- Limited free tier
- No web browsing in free tier

## Conclusion

Claude AI is an excellent choice for users who prioritize thoughtful responses over speed. Rating: 4.5/5
```

---

## Tools to Research for Reviews

### AI Chatbots
- ChatGPT, Claude, Gemini, Grok, Mistral, Llama

### AI Writing
- Jasper, Copy.ai, Writesonic, Rytr, Anyword

### AI Image
- Midjourney, DALL-E, Stable Diffusion, Leonardo, Flux

### AI Video
- Runway, Pika, Synthesia, HeyGen, CapCut

### AI Productivity
- Notion AI, Otter.ai, Descript, Gamma, Beautiful.ai

---

## Tips for Better Rankings

1. **Publish regularly** - Daily if possible, weekly minimum
2. **Be first** - Review new tools within days of launch
3. **Be thorough** - Longer, detailed reviews rank better
4. **Include comparisons** - "Tool A vs Tool B" articles
5. **Add images** - Screenshots, pricing tables, feature comparisons
6. **Internal linking** - Link related articles
7. **E-E-A-T** - Show expertise with real usage examples

---

## How to Use This Prompt

1. Copy the section you need
2. Paste into claude.ai
3. Provide tool information you gathered
4. Ask Claude to generate the article
5. Edit and publish to your blog