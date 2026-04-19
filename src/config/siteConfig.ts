export const siteConfig = {
  name: 'AI Tools Hub',
  tagline: 'Your Curated Guide to AI Excellence',
  description: 'Independent reviews and comparisons on the latest AI tools. Make informed decisions for your workflow with our expert testing and unbiased analysis.',
  url: 'https://aitools.creativitynai02.workers.dev',
  image: '/images/og-default.jpg',

  brand: {
    accent: '#3B82F6',
    accentHover: '#2563EB',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    dark: '#0F172A',
    light: '#F8FAFC',
    muted: '#64748B',
  },

  stats: {
    toolsReviewed: '150+',
    updatedWeekly: 'Updated Weekly',
    testedByHumans: 'Tested by Humans',
    comparisonScores: 'Comparison Scores',
  },

  social: {
    twitter: '@aitoolsreview',
  },

  author: {
    name: 'AI Tools Hub',
    email: 'contact@aitools.creativitynai02.workers.dev',
  },

  trustSignals: [
    { label: 'Independent Testing', description: 'We test every tool hands-on' },
    { label: 'No Sponsored Reviews', description: 'Our opinions are unbiased' },
    { label: 'Updated Weekly', description: 'Latest updates and verifications' },
    { label: 'Transparent Methodology', description: 'See how we test' },
  ],

  categories: [
    {
      slug: 'ai-chatbots',
      name: 'AI Chatbots',
      description: 'Reviews of AI chatbot tools like ChatGPT, Claude, Gemini, and more.',
      icon: 'chat-bubble-left-right',
    },
    {
      slug: 'ai-writing',
      name: 'Writing Tools',
      description: 'AI-powered writing assistants and content generators.',
      icon: 'pencil',
    },
    {
      slug: 'ai-image',
      name: 'Image Generators',
      description: 'AI image generation tools like Midjourney, DALL-E, Stable Diffusion.',
      icon: 'photo',
    },
    {
      slug: 'ai-video',
      name: 'Video Tools',
      description: 'AI-powered video creation and editing tools.',
      icon: 'video-camera',
    },
    {
      slug: 'ai-productivity',
      name: 'Productivity',
      description: 'AI tools to boost your productivity and workflow.',
      icon: 'bolt',
    },
    {
      slug: 'ai-coding',
      name: 'Coding Assistants',
      description: 'AI-powered coding tools and developers.',
      icon: 'code-bracket',
    },
  ],

  comparisonCategories: [
    { slug: 'best-overall', name: 'Best Overall', description: 'Top pick for most users' },
    { slug: 'best-free', name: 'Best Free Plan', description: 'Great options at no cost' },
    { slug: 'best-marketers', name: 'Best for Marketers', description: 'For marketing professionals' },
    { slug: 'best-creators', name: 'Best for Creators', description: 'For content creators' },
    { slug: 'best-teams', name: 'Best for Teams', description: 'Collaboration features' },
  ],

  methodology: {
    title: 'How We Test AI Tools',
    criteria: [
      { name: 'Ease of Use', weight: 20, description: 'Setup time and learning curve' },
      { name: 'Output Quality', weight: 25, description: 'Quality of AI-generated content' },
      { name: 'Features', weight: 20, description: 'Range of capabilities' },
      { name: 'Value for Money', weight: 20, description: 'Pricing vs features' },
      { name: 'Support', weight: 15, description: 'Customer support quality' },
    ],
  },

  ads: {
    publisherId: 'YOUR_PUBLISHER_ID',
    adsTxt: 'YOUR_ADS_TXT_CODE',
  },

  analytics: {
    websiteId: 'YOUR_UMAMI_WEBSITE_ID',
  },
};