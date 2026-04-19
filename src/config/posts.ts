export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  category: string;
  image?: string;
  imageAlt?: string;
  author: string;
  tags: string[];
  content: string;
  draft: boolean;
  rating?: number;
  pricing?: string;
  bestFor?: string;
  verdict?: string;
  featured?: boolean;
  pros?: string[];
  cons?: string[];
  features?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "chatgpt-4o-review",
    title: "ChatGPT-4o Review 2026 - The Ultimate AI Chatbot",
    description: "An in-depth review of ChatGPT-4o, OpenAI's latest model with advanced reasoning and multimodal capabilities.",
    pubDate: new Date("2026-04-18"),
    updatedDate: new Date("2026-04-19"),
    category: "ai-chatbots",
    image: "/images/chatgpt-4o-review.jpg",
    imageAlt: "ChatGPT-4o interface showing conversation",
    author: "AI Tools Hub",
    tags: ["chatgpt", "openai", "ai-chatbot", "gpt-4"],
    draft: false,
    rating: 4.8,
    pricing: "Free / $20/mo",
    bestFor: "General AI Chat",
    verdict: "Best Overall AI Chatbot",
    featured: true,
    pros: ["Best-in-class reasoning", "Seamless multimodal", "Fast responses", "Regular updates"],
    cons: ["Free tier rate limits", "Can hallucinate"],
    features: ["Voice conversations", "Image analysis", "Code interpreter", "Web search", "Memory", "Canvas mode"],
    content: `
## Overview

ChatGPT-4o (the "o" stands for "omni") is OpenAI's latest flagship model, designed to handle text, voice, images, and video seamlessly.

### Key Features

- **Multimodal Input/Output**: Process text, voice, images, and video
- **Enhanced Reasoning**: Better logical thinking and problem-solving
- **Real-time Voice**: Natural conversational AI without lags
- **Vision Capabilities**: Analyze and discuss images in real-time

## Pricing

ChatGPT-4o offers a generous free tier with excellent features. The Plus subscription at $20/month provides unlimited access.

## Pros & Cons

**Pros:**
- Best-in-class reasoning capabilities
- Seamless multimodal support
- Fast response times
- Regular model improvements
- Clean, intuitive interface

**Cons:**
- Free tier has rate limits
- Voice mode not available on web
- Can hallucinate on niche topics
`
  },
  {
    slug: "claude-3-5-sonnet-review",
    title: "Claude 3.5 Sonnet Review - Best for Long Context",
    description: "Anthropic's Claude 3.5 Sonnet delivers exceptional long context handling and coding capabilities.",
    pubDate: new Date("2026-04-17"),
    category: "ai-chatbots",
    image: "/images/claude-review.jpg",
    imageAlt: "Claude AI interface",
    author: "AI Tools Hub",
    tags: ["claude", "anthropic", "ai-chatbot"],
    draft: false,
    rating: 4.7,
    pricing: "Free / $20/mo",
    bestFor: "Long Context Tasks",
    verdict: "Best for Long Context",
    featured: true,
    pros: ["200K context window", "Excellent coding", "Helpful and honest", "Clean output"],
    cons: ["No image generation", "Smaller knowledge base"],
    features: ["200K context", "Computer use", "Art Sonnets", "Claude Code"],
    content: `
## Overview

Claude 3.5 Sonnet is Anthropic's mid-tier model that balances capability with affordability.

### Key Features

- **200K Context**: Work with massive documents
- **Computer Use**: Autonomous computer control
- **Art Sonnets**: Image generation
- **Claude Code**: Coding assistant

## Pricing

Free tier available with generous limits. Pro at $20/month for unlimited access.
`
  },
  {
    slug: "gemini-2-0-review",
    title: "Google Gemini 2.0 Review - Advanced Multimodal AI",
    description: "Google's Gemini 2.0 brings native multimodal AI with native image and video generation.",
    pubDate: new Date("2026-04-16"),
    category: "ai-chatbots",
    image: "/images/gemini-review.jpg",
    imageAlt: "Google Gemini interface",
    author: "AI Tools Hub",
    tags: ["gemini", "google", "ai-chatbot"],
    draft: false,
    rating: 4.5,
    pricing: "Free / $20/mo",
    bestFor: "Multimodal Tasks",
    verdict: "Best Multimodal AI",
    pros: ["Native multimodal", "1M context", "Google integration", "Strong free tier"],
    cons: ["Less creative", "Inconsistent quality"],
    features: ["Native multimodal", "1M context", "Deep Search", "Veo integration"],
    content: `
## Overview

Gemini 2.0 is Google's most advanced AI model with native multimodal capabilities.

### Key Features

- **Native Multimodal**: Seamless text, image, video
- **1M Token Context**: Handle huge documents
- **Deep Search**: Advanced web research
- **Veo Integration**: Video generation
`
  },
  {
    slug: "midjourney-v7-review",
    title: "Midjourney V7 Review - AI Image Generation",
    description: "The latest Midjourney V7 delivers stunning, photorealistic images with improved coherence.",
    pubDate: new Date("2026-04-15"),
    category: "ai-image",
    image: "/images/midjourney-review.jpg",
    imageAlt: "Midjourney generated images",
    author: "AI Tools Hub",
    tags: ["midjourney", "ai-image", "image-generation"],
    draft: false,
    rating: 4.6,
    pricing: "$10/mo",
    bestFor: "Artistic Images",
    verdict: "Best for Artistic Images",
    featured: true,
    pros: ["Stunning visuals", "Best artistic style", "Consistent quality", "Active community"],
    cons: ["Paid only", "Learning curve", "No built-in upscaler"],
    features: ["Style tuning", "Character consistency", "Image prompts", "Personalization"],
    content: `
## Overview

Midjourney V7 is the latest version of the beloved AI image generator.

### Key Features

- **Style Tuning**: Fine-tune artistic style
- **Character Consistency**: Maintain character across images
- **Image Prompts**: Use images as references
- **Personalization**: Learn your preferences
`
  },
  {
    slug: "jasper-ai-review",
    title: "Jasper AI Review - Best for Marketing Content",
    description: "Jasper AI is a powerful writing assistant optimized for marketing and business content.",
    pubDate: new Date("2026-04-14"),
    category: "ai-writing",
    image: "/images/jasper-review.jpg",
    imageAlt: "Jasper AI interface",
    author: "AI Tools Hub",
    tags: ["jasper", "ai-writing", "content-generation"],
    draft: false,
    rating: 4.3,
    pricing: "$49/mo",
    bestFor: "Marketing Teams",
    verdict: "Best for Marketing Teams",
    pros: ["Marketing templates", "Team collaboration", "Brand voice", "Surfer SEO"],
    cons: ["Expensive", "Occasional hallucinations", "Limited creativity"],
    features: ["50+ templates", "Brand voice", "SEO integration", "Team seats"],
    content: `
## Overview

Jasper AI is an AI writing assistant designed specifically for marketing teams.

### Key Features

- **50+ Templates**: Ads, emails, blog posts
- **Brand Voice**: Maintain consistency
- **Surfer SEO**: Integrated SEO optimization
- **Team Seats**: Collaborate with your team
`
  },
  {
    slug: "runway-gen-3-review",
    title: "Runway Gen-3 Review - AI Video Generation",
    description: "Runway Gen-3 Alpha creates high-quality videos from text prompts.",
    pubDate: new Date("2026-04-13"),
    category: "ai-video",
    image: "/images/runway-review.jpg",
    imageAlt: "Runway video interface",
    author: "AI Tools Hub",
    tags: ["runway", "ai-video", "video-generation"],
    draft: false,
    rating: 4.4,
    pricing: "$15/mo",
    bestFor: "Video Creators",
    verdict: "Best for Video Creation",
    pros: ["High-quality output", "Multiple styles", "Camera controls", "Team features"],
    cons: ["Credits system", "Processing time", "Limited duration"],
    features: ["Text-to-video", "Image-to-video", "Motion brush", "Director mode"],
    content: `
## Overview

Runway Gen-3 Alpha is the latest AI video generation model from Runway.

### Key Features

- **Text-to-Video**: Create videos from prompts
- **Image-to-Video**: Animate static images
- **Motion Brush**: Add motion to specific areas
- **Director Mode**: Control camera movements
`
  }
];

export function getPosts() {
  return posts.filter(p => !p.draft);
}

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug && !p.draft);
}

export function getPostsByCategory(category: string) {
  return posts.filter(p => p.category === category && !p.draft);
}

export function getFeaturedPosts() {
  return posts.filter(p => p.featured && !p.draft);
}

export function getTrendingPosts() {
  return posts.filter(p => !p.draft).sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 5);
}