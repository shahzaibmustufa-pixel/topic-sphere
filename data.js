const articlesData = [
  {
    id: 1,
    slug: 'future-of-ai',
    title: 'The Future of AI: How Machine Learning is Shaping Tomorrow',
    excerpt: 'Explore the fascinating advancements in artificial intelligence and what they mean for the future of work, society, and technology.',
    content: `
      <p>Artificial Intelligence (AI) is no longer a concept confined to science fiction movies. It is a reality that is intricately woven into the fabric of our daily lives. From the predictive text on our smartphones to the complex algorithms driving autonomous vehicles, AI's presence is pervasive and growing.</p>
      <h2>The Rise of Generative AI</h2>
      <p>One of the most significant breakthroughs in recent years has been the development of Generative AI. These systems, capable of producing text, images, and even code that mimic human creativity, are revolutionizing industries. They offer unprecedented efficiency, allowing professionals to automate routine tasks and focus on higher-level strategic thinking.</p>
      <h3>Impact on Employment</h3>
      <p>A common concern is the potential for AI to replace human jobs. While it is true that certain tasks will become automated, AI is also creating new avenues for employment. Roles such as AI prompt engineers, ethical AI officers, and AI trainers are emerging rapidly. The transition requires a focus on upskilling and reskilling the workforce to adapt to this new paradigm.</p>
      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" alt="Robotic hand with microchip" class="article-img">
      <blockquote>"The real question is not whether machines think but whether men do." - B.F. Skinner</blockquote>
      <h2>Ethical Considerations</h2>
      <p>As AI systems become more powerful, ethical considerations must take center stage. Issues surrounding data privacy, algorithmic bias, and the potential for misuse require careful navigation. Establishing robust frameworks for AI governance is essential to ensure these technologies are developed and deployed responsibly.</p>
      <p>The journey ahead is promising. By embracing AI as a collaborative tool rather than a replacement, we can unlock tremendous potential and build a future that is both innovative and inclusive.</p>
    `,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah Jenkins',
    date: 'Oct 24, 2026',
    readTime: '5 min read',
    trending: true,
    featured: true
  },
  {
    id: 2,
    slug: 'startup-funding-2026',
    title: 'Navigating the Startup Funding Landscape in 2026',
    excerpt: 'A comprehensive guide for entrepreneurs looking to secure venture capital in a highly competitive market.',
    content: '<p>Raising capital is one of the most challenging yet crucial steps for any expanding startup...</p><p>...</p>',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    author: 'Michael Chang',
    date: 'Oct 22, 2026',
    readTime: '8 min read',
    trending: false,
    featured: true
  },
  {
    id: 3,
    slug: 'top-10-ai-tools',
    title: 'Top 10 AI Tools Every Professional Needs',
    excerpt: 'Boost your productivity with these cutting-edge AI tools designed to streamline your daily workflow.',
    content: '<p>From writing assistants to automated video editors, these tools are changing the game...</p><p>...</p>',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1620712948343-0056911f14d3?auto=format&fit=crop&q=80&w=800',
    author: 'Elena Rodriguez',
    date: 'Oct 20, 2026',
    readTime: '6 min read',
    trending: true,
    featured: false
  },
  {
    id: 4,
    slug: 'evolution-of-gaming',
    title: 'The Evolution of Cloud Gaming Ecosystems',
    excerpt: 'How cloud gaming is eliminating hardware barriers and transforming the way we play video games.',
    content: '<p>The days of needing a bulky console or a high-end PC to enjoy the latest titles are fading...</p><p>...</p>',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    author: 'Marcus Cole',
    date: 'Oct 18, 2026',
    readTime: '4 min read',
    trending: true,
    featured: false
  },
  {
    id: 5,
    slug: 'sustainable-fashion-trends',
    title: 'Sustainable Fashion: The Trends Defining the New Season',
    excerpt: 'Why eco-friendly materials and ethical manufacturing are taking the fashion world by storm.',
    content: '<p>Consumers are increasingly demanding transparency and sustainability from their favorite brands...</p><p>...</p>',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?auto=format&fit=crop&q=80&w=800',
    author: 'Chloe Dupont',
    date: 'Oct 15, 2026',
    readTime: '7 min read',
    trending: false,
    featured: false
  },
  {
    id: 6,
    slug: 'remote-work-culture',
    title: 'Building a Thriving Remote Work Culture',
    excerpt: 'Strategies for maintaining team cohesion and productivity when your team is distributed globally.',
    content: '<p>Remote work is no longer just a perk; it is a global business standard...</p><p>...</p>',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    author: 'Alex Turner',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    trending: false,
    featured: true
  },
  {
    id: 7,
    slug: 'mastering-react-hooks',
    title: 'A How-To Guide: Mastering Modern React Hooks',
    excerpt: 'A deep dive into advanced React hooks and patterns to level up your frontend development skills.',
    content: '<p>React hooks have fundamentally changed how we write components by allowing state in function components...</p><p>...</p>',
    category: 'How-To Guides',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    author: 'Samirah Ahmed',
    date: 'Oct 10, 2026',
    readTime: '10 min read',
    trending: true,
    featured: false
  },
  {
    id: 8,
    slug: 'next-gen-consoles',
    title: 'What to Expect from Next-Gen Consoles',
    excerpt: 'Rumors, leaks, and confirmed features of the upcoming wave of gaming hardware.',
    content: '<p>As we approach the end of the current console cycle, anticipation for the next generation is reaching a fever pitch...</p><p>...</p>',
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=800',
    author: 'Marcus Cole',
    date: 'Oct 08, 2026',
    readTime: '4 min read',
    trending: false,
    featured: false
  },
  {
    id: 9,
    slug: 'cinema-in-digital-age',
    title: 'The Magic of Cinema in the Digital Streaming Age',
    excerpt: 'Has the surge in streaming platforms fundamentally changed how we appreciate filmmaking?',
    content: '<p>While streaming offers convenience, many argue it dilutes the communal experience of the theater...</p><p>...</p>',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    author: 'Julian Vance',
    date: 'Oct 05, 2026',
    readTime: '6 min read',
    trending: false,
    featured: false
  },
  {
    id: 10,
    slug: 'personal-branding-guide',
    title: 'How-To Outline Your Personal Brand on LinkedIn',
    excerpt: 'Actionable tips to optimize your profile and attract the right professional opportunities.',
    content: '<p>Your LinkedIn profile is often the first impression you make on potential employers or business partners...</p><p>...</p>',
    category: 'How-To Guides',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah Jenkins',
    date: 'Oct 01, 2026',
    readTime: '5 min read',
    trending: true,
    featured: false
  }
];

const categoriesData = [
  { name: 'Technology', icon: 'fa-microchip', color: '#3b82f6' },
  { name: 'Business', icon: 'fa-chart-line', color: '#10b981' },
  { name: 'AI Tools', icon: 'fa-robot', color: '#8b5cf6' },
  { name: 'Entertainment', icon: 'fa-film', color: '#ec4899' },
  { name: 'Gaming', icon: 'fa-gamepad', color: '#f59e0b' },
  { name: 'Fashion', icon: 'fa-tshirt', color: '#14b8a6' },
  { name: 'How-To Guides', icon: 'fa-book-open', color: '#f43f5e' }
];
