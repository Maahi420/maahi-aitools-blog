export const siteConfig = {
  name: 'AI Tools Review',
  description: 'Daily reviews and comparisons on the latest AI tools. Make informed decisions for your workflow.',
  url: 'https://aitools.pages.dev',
  image: '/images/og-default.jpg',

  social: {
    twitter: '@aitoolsreview',
  },

  author: {
    name: 'AI Tools Review',
    email: 'contact@aitools.pages.dev',
  },

  categories: [
    {
      slug: 'ai-chatbots',
      name: 'AI Chatbots',
      description: 'Reviews of AI chatbot tools like ChatGPT, Claude, Gemini, and more.',
    },
    {
      slug: 'ai-writing',
      name: 'Writing Tools',
      description: 'AI-powered writing assistants and content generators.',
    },
    {
      slug: 'ai-image',
      name: 'Image Generators',
      description: 'AI image generation tools like Midjourney, DALL-E, Stable Diffusion.',
    },
    {
      slug: 'ai-video',
      name: 'Video Tools',
      description: 'AI-powered video creation and editing tools.',
    },
    {
      slug: 'ai-productivity',
      name: 'Productivity',
      description: 'AI tools to boost your productivity and workflow.',
    },
  ],

  ads: {
    // Adsterra/Monetag publisher ID - replace with your actual ID
    publisherId: 'YOUR_PUBLISHER_ID',

    // ads.txt verification - replace with your actual code
    adsTxt: 'YOUR_ADS_TXT_CODE',
  },

  analytics: {
    // Umami website ID - replace with your actual ID
    websiteId: 'YOUR_UMAMI_WEBSITE_ID',
  },
};