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
}

export const posts: BlogPost[] = [
  {
    slug: "chatgpt-4o-review",
    title: "ChatGPT-4o Review 2026 - The Ultimate AI Chatbot?",
    description: "An in-depth review of ChatGPT-4o, OpenAI's latest model. Features, pricing, performance, and how it compares to competitors.",
    pubDate: new Date("2026-04-18"),
    category: "ai-chatbots",
    image: "/images/chatgpt-4o-review.jpg",
    imageAlt: "ChatGPT-4o interface showing conversation",
    author: "AI Tools Review",
    tags: ["chatgpt", "openai", "ai-chatbot", "gpt-4"],
    draft: false,
    content: `
## Overview

ChatGPT-4o (the "o" stands for "omni") is OpenAI's latest flagship model, designed to handle text, voice, images, and video seamlessly. Released in early 2026, it builds on the success of GPT-4 with significant improvements in reasoning and multimodal capabilities.

### Key Features

- **Multimodal Input/Output**: Process text, voice, images, and video
- **Enhanced Reasoning**: Better logical thinking and problem-solving
- **Real-time Voice**: NaturalConversational AI without lags
- **Vision Capabilities**: Analyze and discuss images in real-time

## Pricing

ChatGPT-4o offers a generous free tier with excellent features. The Plus subscription at $20/month provides unlimited access for power users.

## Features

1. **Voice Conversations** - Have natural, real-time conversations with AI
2. **Image Understanding** - Upload and analyze images
3. **Code Interpreter** - Write and execute Python code
4. **Web Search** - Search the web for current information
5. **Memory** - Remembers your preferences across conversations
6. **Canvas Mode** - Collaboratively edit documents

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
- No offline mode
- Plus subscription required for best experience

## Conclusion

ChatGPT-4o is the most capable AI chatbot available in 2026. The free tier provides excellent value, but power users will benefit from the Plus subscription.

**Rating: 4.5/5**
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