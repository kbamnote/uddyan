import type { Product, BlogPost, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Peace Lily',
    price: 49,
    category: 'Ceramic',
    image: '/images/Peace_lily.jpg',
    description: 'Elegant white ceramic pot with built-in self-watering system. Perfect for your beautiful Peace Lily.',
    vastuBenefits: [
      'Promotes peace, harmony, and tranquility in the household.',
      'Excellent air purifier, removing toxins and negative energy.',
      'Brings good fortune when placed in the east or north direction.'
    ],
    careInstructions: [
      'Keep soil consistently moist but never soggy.',
      'Prefers bright, indirect light but tolerates low light well.',
      'Mist leaves regularly to maintain high humidity.',
      'Wipe leaves occasionally with a damp cloth to remove dust.'
    ],
    inStock: true,
  },
  {
    id: 2,
    name: 'ZZ Plant',
    price: 59,
    category: 'Terracotta',
    image: '/images/ZZ_plant.jpg',
    description: 'Classic terracotta pot containing a hardy, low-light tolerant ZZ Plant.',
    vastuBenefits: [
      'Symbolizes steady growth, longevity, and prosperity.',
      'Attracts protective and positive energies to the space.',
      'Perfect for enhancing focus when placed in a study or office.'
    ],
    careInstructions: [
      'Allow soil to dry out completely between waterings.',
      'Thrives in low to bright indirect light.',
      'Avoid direct sunlight as it can scorch the leaves.',
      'Requires very little fertilizer; feed sparingly in spring.'
    ],
    inStock: true,
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 54,
    category: 'Modern',
    image: '/images/Snake_plant.jpg',
    description: 'Sleek matte black finish for contemporary interiors. Comes with an air-purifying Snake Plant.',
    vastuBenefits: [
      'Acts as a strong shield against negative energies.',
      'Purifies indoor air and releases oxygen at night.',
      'Brings positive chi when placed near the entrance or windows.'
    ],
    careInstructions: [
      'Water sparingly, only when the soil is completely dry.',
      'Extremely adaptable; tolerates both low light and full sun.',
      'Avoid overwatering, which is the main cause of root rot.',
      'Dust the tall leaves to keep pores open.'
    ],
    inStock: true,
  },
  {
    id: 4,
    name: 'Money Plant',
    price: 45,
    category: 'Ceramic',
    image: '/images/Money_plant.jpg',
    description: 'Beautiful sage green ceramic pot perfect for bringing prosperity with a Money Plant.',
    vastuBenefits: [
      'Attracts wealth, prosperity, and financial luck.',
      'Neutralizes indoor radiation from electronic devices.',
      'Best placed in the southeast corner for maximum financial benefits.'
    ],
    careInstructions: [
      'Water thoroughly when the top two inches of soil feel dry.',
      'Prefers bright, indirect sunlight.',
      'Can be trained to climb or trail depending on preference.',
      'Fertilize monthly during the active growing season.'
    ],
    inStock: true,
  },
  {
    id: 5,
    name: 'Jade Plant',
    price: 52,
    category: 'Ceramic',
    image: '/images/Jade_plant.jpg',
    description: 'Elegant cream-colored pot that beautifully complements the lucky Jade Plant.',
    vastuBenefits: [
      'Known as a powerful magnet for wealth and financial success.',
      'Promotes strong, enduring friendships and business relationships.',
      'Ideal for home entrances or business cash registers.'
    ],
    careInstructions: [
      'Allow the soil to dry between waterings to prevent rot.',
      'Requires at least 4 hours of bright, direct sunlight daily.',
      'Ensure excellent drainage in the pot.',
      'Requires minimal feeding.'
    ],
    inStock: true,
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 64,
    category: 'Modern',
    image: '/images/Spider_plant.jpg',
    description: 'Industrial concrete-style pot perfect for displaying your arching Spider Plant in modern interiors.',
    vastuBenefits: [
      'Excellent for clearing negative vibes and stagnant energy.',
      'Highly effective at removing indoor air toxins like formaldehyde.',
      'Safe for pets and brings a playful energy to the space.'
    ],
    careInstructions: [
      'Keep soil evenly moist, but not soggy.',
      'Provide bright, indirect light; avoid direct sun.',
      'Browning tips indicate fluoride in tap water or inconsistent watering.',
      'Trim the baby "spiderettes" to encourage new growth.'
    ],
    inStock: true,
  },
  {
    id: 7,
    name: 'Croton',
    price: 38,
    category: 'Ceramic',
    image: '/images/Croton.jpg',
    description: 'Charming blush pink pot accompanied by a vibrantly colored Croton.',
    vastuBenefits: [
      'Enhances creativity and stimulates positive thinking.',
      'Its vibrant colors bring warmth and joyful energy to any room.',
      'A great addition to living areas to invite energetic conversations.'
    ],
    careInstructions: [
      'Requires bright light to maintain its colorful foliage.',
      'Water when the top inch of soil feels dry.',
      'Appreciates high humidity; mist regularly.',
      'Keep away from cold drafts to prevent leaf drop.'
    ],
    inStock: true,
  },
  {
    id: 8,
    name: 'Lucky Bamboo',
    price: 56,
    category: 'Modern',
    image: '/images/Lucky_bamboo.jpg',
    description: 'Deep navy blue ceramic pot creating a bold statement with Lucky Bamboo.',
    vastuBenefits: [
      'Attracts auspicious energy, harmony, and good health.',
      'Balances the five elements of nature (wood, earth, water, fire, metal).',
      'Placing it in the east brings family health; in the southeast brings wealth.'
    ],
    careInstructions: [
      'Can grow in water or soil; ensure water is changed weekly if grown in water.',
      'Prefers moderate, indirect sunlight.',
      'Use filtered or distilled water to prevent yellowing leaves.',
      'Keep away from AC vents and heating sources.'
    ],
    inStock: true,
  },
  {
    id: 9,
    name: 'Adenium',
    price: 65,
    category: 'Ceramic',
    image: '/images/Adenium.jpg',
    description: 'Beautiful Desert Rose in a premium ceramic self-watering pot.',
    vastuBenefits: [
      'Represents resilience, courage, and overcoming obstacles.',
      'Invites passion and a strong life force energy.',
      'Best placed in sunlit south or west areas.'
    ],
    careInstructions: [
      'Needs full, direct sunlight to bloom beautifully.',
      'Let the soil dry out completely between deep waterings.',
      'Reduce watering significantly during winter.',
      'Requires a well-draining, sandy soil mix.'
    ],
    inStock: true,
  },
  {
    id: 10,
    name: 'Alternanthera',
    price: 42,
    category: 'Modern',
    image: '/images/Alternanthera.jpg',
    description: 'Vibrant colorful foliage perfect for modern bright spaces.',
    vastuBenefits: [
      'Symbolizes flexibility and adapting to environments positively.',
      'Adds fiery, active chi (energy) to dull or dark spaces.',
      'Enhances motivation and ambition.'
    ],
    careInstructions: [
      'Loves bright light to keep its foliage vibrant.',
      'Keep the soil consistently moist but never soggy.',
      'Pinch back stems regularly to maintain a bushy shape.',
      'Feed with a balanced liquid fertilizer every two weeks in summer.'
    ],
    inStock: true,
  },
  {
    id: 11,
    name: 'Bamboo',
    price: 55,
    category: 'Terracotta',
    image: '/images/Bamboo.jpg',
    description: 'Classic green bamboo that brings peace and tranquility to any room.',
    vastuBenefits: [
      'A powerful symbol of luck, resilience, and longevity.',
      'Drives away negative energy and brings peaceful vibrations.',
      'Excellent for placement in the eastern sector for family luck.'
    ],
    careInstructions: [
      'Keep the soil slightly moist; never allow it to dry out entirely.',
      'Thrives in bright, indirect light.',
      'Loves high humidity, making misting beneficial.',
      'Needs a sturdy pot as it can grow quite vigorously.'
    ],
    inStock: true,
  },
  {
    id: 12,
    name: 'Cactus',
    price: 35,
    category: 'Terracotta',
    image: '/images/Cactus.jpg',
    description: 'Low maintenance prickly cactus in a cute terracotta pot.',
    vastuBenefits: [
      'Acts as a strong energetic boundary, protecting from harsh outside energies.',
      'Best placed outside or on windowsills rather than in the bedroom.',
      'Associated with strong survival and enduring energy.'
    ],
    careInstructions: [
      'Requires absolute full sunlight for at least 6 hours a day.',
      'Water thoroughly only when the entire pot has dried out.',
      'Do not water during its winter dormancy.',
      'Use a specific cactus/succulent gritty soil mix.'
    ],
    inStock: true,
  },
  {
    id: 13,
    name: 'Cactus Plant',
    price: 38,
    category: 'Modern',
    image: '/images/Cactus_plant.jpg',
    description: 'Sleek modern pot housing a beautiful hardy cactus.',
    vastuBenefits: [
      'Placed outside the main entry, it guards against bad luck.',
      'Deflects and neutralizes jealous or ill-meaning thoughts.',
      'Provides a strong grounding energy.'
    ],
    careInstructions: [
      'Position in the brightest spot available, ideally a south-facing window.',
      'Water deeply but very infrequently (every 3-4 weeks).',
      'Ensure the pot has excellent drainage to avoid root rot.',
      'Feed with a specialized cactus fertilizer once in mid-summer.'
    ],
    inStock: true,
  },
  {
    id: 14,
    name: 'Lucky Bonsai',
    price: 85,
    category: 'Ceramic',
    image: '/images/LuckyBonsai_plant.jpg',
    description: 'Artfully shaped Lucky Bonsai tree for zen minimal spaces.',
    vastuBenefits: [
      'Encourages patience, focus, and a meditative state of mind.',
      'Brings the energy of mature, ancient trees indoors.',
      'Best placed in east or north sectors to support personal growth.'
    ],
    careInstructions: [
      'Requires bright, indirect light to thrive.',
      'Water thoroughly when the topsoil feels slightly dry.',
      'Mist regularly to maintain high humidity.',
      'Requires occasional pruning to maintain its artistic shape.'
    ],
    inStock: true,
  },
  {
    id: 15,
    name: 'Ming Aralia',
    price: 72,
    category: 'Ceramic',
    image: '/images/Ming_Aralia.jpg',
    description: 'Elegant feathery foliage of the Ming Aralia in a beautiful pot.',
    vastuBenefits: [
      'Its upward growth promotes positive elevation in career.',
      'The fine leaves filter and soften harsh energies (Sha Chi).',
      'Promotes peace, harmony, and relaxation in the home.'
    ],
    careInstructions: [
      'Prefers bright, indirect light but can tolerate medium light.',
      'Keep soil consistently moist; do not overwater or let completely dry out.',
      'Requires high humidity—frequent misting is highly recommended.',
      'Avoid moving the plant often as it dislikes changes in environment.'
    ],
    inStock: true,
  },
  {
    id: 16,
    name: 'Mint',
    price: 28,
    category: 'Terracotta',
    image: '/images/Mint.jpg',
    description: 'Fresh aromatic mint plant ready for your kitchen counter.',
    vastuBenefits: [
      'Its fresh aroma clears mental fog and promotes clarity.',
      'Attracts positive, refreshing energy into the kitchen or dining area.',
      'Known to ward off pests and negative vibrations.'
    ],
    careInstructions: [
      'Needs plenty of bright light, preferably morning sun.',
      'Keep the soil consistently moist but ensure good drainage.',
      'Pinch off the tips regularly to encourage bushier growth.',
      'Harvest leaves frequently to keep the plant vigorous.'
    ],
    inStock: true,
  },
  {
    id: 17,
    name: 'Mondo Grass',
    price: 34,
    category: 'Modern',
    image: '/images/Mondo_Grass.jpg',
    description: 'Dark elegant Mondo Grass contrasting beautifully with a modern planter.',
    vastuBenefits: [
      'Provides a strong grounding and stabilizing earth energy.',
      'Its dark color absorbs and neutralizes chaotic vibrations.',
      'Adds balance when placed alongside taller, brightly colored plants.'
    ],
    careInstructions: [
      'Tolerates a wide range of light, from full sun to partial shade.',
      'Water regularly to keep the soil evenly moist.',
      'Remove dead or brown leaves at the base to keep it looking tidy.',
      'Very relatively low-maintenance once established.'
    ],
    inStock: true,
  },
  {
    id: 18,
    name: 'Table Kamini',
    price: 48,
    category: 'Ceramic',
    image: '/images/Table_kamini.jpg',
    description: 'Lush green Table Kamini perfect for centerpieces.',
    vastuBenefits: [
      'Its tiny sweet-smelling flowers bring joy and romance.',
      'Encourages strong family bonds when placed in a shared space.',
      'Creates a welcoming vibe at an entrance or reception.'
    ],
    careInstructions: [
      'Requires bright, indirect sunlight.',
      'Water when the top inch of soil becomes dry.',
      'Prune occasionally to maintain its compact, bushy shape.',
      'Protect from cold drafts during winter months.'
    ],
    inStock: true,
  },
  {
    id: 19,
    name: 'Ti Plant',
    price: 58,
    category: 'Modern',
    image: '/images/Ti_Plant.jpg',
    description: 'Striking pink and burgundy foliage of the Ti Plant in a minimalist pot.',
    vastuBenefits: [
      'The vibrant red and pink leaves bring strong fire element energy.',
      'Ideal for the southern sector to stimulate fame and recognition.',
      'Considered highly auspicious and protective in many cultures.'
    ],
    careInstructions: [
      'Requires bright, indirect light to maintain its striking colors.',
      'Keep the soil evenly moist; use distilled water to prevent leaf tip burn.',
      'Loves high humidity, so misting is very beneficial.',
      'Keep away from extreme temperature fluctuations.'
    ],
    inStock: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Best Plants for Busy Professionals',
    date: 'February 15, 2026',
    image: '/images/blog-1.jpg',
    excerpt: 'Discover low-maintenance plants that thrive with our self-watering system, perfect for your busy lifestyle.',
    content: 'Full article content here...',
    author: 'Sarah Green',
  },
  {
    id: 2,
    title: 'How to Style Plants in Your Home Office',
    date: 'February 10, 2026',
    image: '/images/blog-2.jpg',
    excerpt: 'Transform your workspace into a green oasis with our tips for incorporating plants into your office design.',
    content: 'Full article content here...',
    author: 'Mike Leaf',
  },
  {
    id: 3,
    title: 'The Science Behind Self-Watering Pots',
    date: 'February 5, 2026',
    image: '/images/blog-3.jpg',
    excerpt: 'Learn how capillary action and wicking systems work to keep your plants perfectly hydrated.',
    content: 'Full article content here...',
    author: 'Dr. Emma Roots',
  },
  {
    id: 4,
    title: 'Seasonal Plant Care Guide',
    date: 'January 28, 2026',
    image: '/images/blog-1.jpg',
    excerpt: 'Adjust your plant care routine for each season to keep your indoor garden thriving year-round.',
    content: 'Full article content here...',
    author: 'Sarah Green',
  },
  {
    id: 5,
    title: 'Top 10 Air-Purifying Plants',
    date: 'January 20, 2026',
    image: '/images/blog-2.jpg',
    excerpt: 'Improve your indoor air quality with these beautiful and effective air-purifying plants.',
    content: 'Full article content here...',
    author: 'Mike Leaf',
  },
  {
    id: 6,
    title: 'Beginner\'s Guide to Indoor Gardening',
    date: 'January 15, 2026',
    image: '/images/blog-3.jpg',
    excerpt: 'Start your indoor gardening journey with these essential tips and plant recommendations.',
    content: 'Full article content here...',
    author: 'Dr. Emma Roots',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jessica Miller',
    role: 'Marketing Executive',
    content: 'Uddyan pots have completely transformed my apartment. I travel frequently for work, and coming home to thriving plants is such a joy. The self-watering system really works!',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Software Engineer',
    content: 'As someone who used to kill every plant I owned, these self-watering pots are a game-changer. My monstera has never looked better, and I only refill it once a month.',
  },
  {
    id: 3,
    name: 'Amanda Foster',
    role: 'Interior Designer',
    content: 'I recommend Uddyan to all my clients. The pots are beautifully designed and the self-watering feature means my clients can enjoy plants without the maintenance worry.',
  },
  {
    id: 4,
    name: 'Robert Taylor',
    role: 'Business Owner',
    content: 'We have Uddyan pots throughout our office. They add such a welcoming touch, and our receptionist loves how low-maintenance they are. Highly recommend for any workspace.',
  },
];

export const categories = ['All', 'Ceramic', 'Terracotta', 'Modern'];
