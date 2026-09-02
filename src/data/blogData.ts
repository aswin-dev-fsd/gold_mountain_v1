export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  content: string[];
}

export const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'rhythm-of-arunachala',
    title: 'Understanding the Rhythm of Arunachala',
    category: 'Arunachala',
    date: 'August 30, 2026',
    excerpt: 'How the natural surroundings of Tiruvannamalai offer an ideal sanctuary to slow down and listen inwardly.',
    imageSrc: '/images/resort_aerial_golden_hour_view.webp',
    content: [
      'Tiruvannamalai has long drawn visitors seeking quiet reflection. The presence of Arunachala Hill creates a distinct atmosphere where the pace of daily life naturally slows.',
      'At Gold Mountain Wellness Resort, our spaces are intentionally oriented toward this landscape. Open corridors, morning breezes, and unobstructed mountain views allow guests to align with natural circadian rhythms.',
      'Whether walking through our garden paths or sitting quietly during sunrise, spending time near Arunachala invites a deeper sense of stillness and personal clarity.',
    ],
  },
  {
    slug: 'mindful-dining-principles',
    title: 'The Principles of Mindful Dining',
    category: 'Food',
    date: 'August 24, 2026',
    excerpt: 'Exploring how simple, fresh, seasonal meals support digestion and overall vitality during a wellness stay.',
    imageSrc: '/images/mindful_dining_sattvic_breakfast.webp',
    content: [
      'Food is one of the most direct ways we interact with nature. In traditional wellness, wholesome nutrition forms the cornerstone of daily energy and clarity.',
      'Our resort kitchen emphasizes freshly cooked, vegetarian meals prepared with seasonal vegetables grown in our own gardens and gentle digestive spices.',
      'Mindful dining is not about restrictive diets; it is about eating thoughtfully, appreciating natural flavors, and allowing the body time to assimilate nourishment peacefully.',
    ],
  },
  {
    slug: 'beginners-guide-to-rest',
    title: 'Slowing Down: A Beginner’s Guide to Rest',
    category: 'Wellness',
    date: 'August 18, 2026',
    excerpt: 'Simple practices to disconnect from digital noise and reconnect with natural circadian rhythms.',
    imageSrc: '/images/meditation_buddha_sanctuary.webp',
    content: [
      'Modern schedules often keep the nervous system in continuous high alert. True rest requires intentional spaces free from constant notifications and artificial urgency.',
      'During a stay at Gold Mountain, we encourage simple habits: starting mornings without screens, taking evening walks in the garden, and resting early.',
      'Over a few days, these modest shifts help lower stress levels, improve sleep quality, and restore natural vitality.',
    ],
  },
];
