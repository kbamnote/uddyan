// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Uddyan - Self Watering Plants | Smart Plants for Smart Living",
  description: "Discover Uddyan's premium self-watering plant pots. Zero daily watering, elegant design, healthy plants. Perfect for urban homes and working professionals.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Uddyan",
  menuLinks: [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/uddyan" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/uddyan" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/uddyan" },
  ],
  searchPlaceholder: "Search plants...",
  cartEmptyText: "Your cart is empty",
  cartCheckoutText: "Checkout",
  continueShoppingText: "Continue Shopping",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "Self Watering Plants",
  title: "Smart Plants\nfor Smart Living",
  ctaPrimaryText: "Shop Now",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Learn More",
  ctaSecondaryTarget: "#how-it-works",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "Our Philosophy",
  heading: "Bringing Nature Home, Effortlessly",
  bodyParagraphs: [
    "At Uddyan, we believe everyone deserves the joy of thriving plants without the stress of daily maintenance. Our self-watering technology ensures your plants get exactly the right amount of water they need.",
    "Designed for urban homes and busy professionals, our elegant pots combine modern aesthetics with innovative functionality. Experience the perfect balance of beauty and convenience."
  ],
  linkText: "Discover Our Story",
  linkTarget: "#about",
  image1: "/images/Model_holding_pot.jpg",
  image2: "/images/about-2.jpg",
  stats: [
    { value: 50, suffix: "K+", label: "Happy Customers" },
    { value: 30, suffix: "+", label: "Days Without Watering" },
    { value: 99, suffix: "%", label: "Plant Survival Rate" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "How It Works",
  heading: "Three Simple Steps to Thriving Plants",
  bodyParagraphs: [
    "Our innovative self-watering system takes the guesswork out of plant care. The built-in reservoir provides consistent moisture to your plants' roots, ensuring they stay healthy and vibrant.",
    "Simply fill the water reservoir, and your plants will draw exactly what they need through the wicking system. No overwatering, no underwatering, just perfect plant health."
  ],
  ctaText: "Explore Products",
  ctaTarget: "#products",
  backgroundImage: "/images/how-it-works.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number | string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  vastuBenefits?: string[];
  careInstructions?: string[];
  inStock?: boolean;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "Our Collection",
  heading: "Self Watering Plant Pots",
  description: "Discover our curated collection of elegant self-watering pots, designed to keep your plants thriving with minimal effort. Each piece combines form and function for the modern home.",
  viewAllText: "View All Products",
  addToCartText: "Add to Cart",
  addedToCartText: "Added!",
  categories: ["All", "Ceramic", "Terracotta", "Modern"],
  products: [
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
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "Self Watering Technology",
      description: "Our innovative wicking system delivers the perfect amount of water to your plants' roots, ensuring optimal hydration without the risk of overwatering."
    },
    {
      icon: "Heart",
      title: "Minimal Maintenance",
      description: "Go up to 30 days without watering. Simply fill the reservoir and let your plants thrive while you focus on what matters most."
    },
    {
      icon: "ShieldCheck",
      title: "Modern Aesthetic Design",
      description: "Each pot is crafted with clean lines and premium materials to complement any interior style, from minimalist to bohemian."
    },
    {
      icon: "Truck",
      title: "Free Shipping",
      description: "Enjoy free delivery on orders over $100. Your plants arrive carefully packaged and ready to thrive in their new home."
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "Plant Care Journal",
  heading: "Tips & Stories",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  posts: [
    {
      id: 1,
      title: "5 Best Plants for Busy Professionals",
      date: "February 15, 2026",
      image: "/images/blog-1.jpg",
      excerpt: "Discover low-maintenance plants that thrive with our self-watering system, perfect for your busy lifestyle."
    },
    {
      id: 2,
      title: "How to Style Plants in Your Home Office",
      date: "February 10, 2026",
      image: "/images/blog-2.jpg",
      excerpt: "Transform your workspace into a green oasis with our tips for incorporating plants into your office design."
    },
    {
      id: 3,
      title: "The Science Behind Self-Watering Pots",
      date: "February 5, 2026",
      image: "/images/blog-3.jpg",
      excerpt: "Learn how capillary action and wicking systems work to keep your plants perfectly hydrated."
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "Support",
  heading: "Frequently Asked Questions",
  ctaText: "Still have questions? Contact us",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "How long can the self-watering pot sustain a plant?",
      answer: "Our self-watering pots can sustain plants for up to 30 days, depending on the plant type, size, and environmental conditions. The reservoir capacity varies by pot size, with larger pots holding more water for extended periods."
    },
    {
      id: 2,
      question: "What plants work best with self-watering pots?",
      answer: "Self-watering pots work excellently with most indoor plants including pothos, snake plants, peace lilies, monstera, ZZ plants, and many succulents. They're particularly great for plants that prefer consistent moisture."
    },
    {
      id: 3,
      question: "How do I clean and maintain the self-watering system?",
      answer: "Cleaning is simple! Empty the reservoir, rinse with warm water, and occasionally use a mild soap solution. We recommend cleaning the reservoir every 2-3 months to prevent mineral buildup and ensure optimal performance."
    },
    {
      id: 4,
      question: "Do you offer a warranty on your products?",
      answer: "Yes! All Uddyan self-watering pots come with a 1-year warranty against manufacturing defects. We also offer a 30-day satisfaction guarantee – if you're not happy with your purchase, we'll provide a full refund."
    },
    {
      id: 5,
      question: "What is your shipping and return policy?",
      answer: "We offer free shipping on orders over $100. Standard delivery takes 3-5 business days. If you're not satisfied, returns are accepted within 30 days of delivery for a full refund, provided the items are in original condition."
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "About Uddyan",
      heading: "Our Story",
      paragraphs: [
        "Uddyan was born from a simple belief: everyone should experience the joy of thriving plants, regardless of their busy schedule or gardening experience. Founded in 2020, we set out to create beautiful, functional solutions for modern plant lovers.",
        "Our name 'Uddyan' draws inspiration from the Sanskrit word for garden, reflecting our commitment to bringing nature into urban spaces. Each pot is thoughtfully designed to combine innovative self-watering technology with timeless aesthetics."
      ],
      quote: "",
      attribution: "",
      image: "/images/Uddyan_bringing_nature_home.jpg",
      backgroundColor: "#5a7c5a",
      textColor: "#ffffff",
    },
    {
      tag: "Our Mission",
      heading: "Plants for Everyone",
      paragraphs: [],
      quote: "We believe that when plants thrive, people thrive. Our mission is to make plant parenthood accessible, enjoyable, and stress-free for everyone.",
      attribution: "-- The Uddyan Team",
      image: "/images/Model_holding_pot.jpg",
      backgroundColor: "#f5f0e8",
      textColor: "#333333",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Get In Touch",
  description: "Have questions about our products or need help choosing the perfect pot? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.",
  locationLabel: "Visit Us",
  location: "123 Green Street, Plant City, CA 90210",
  emailLabel: "Email",
  email: "hello@uddyan.com",
  phoneLabel: "Phone",
  phone: "+1 (555) 123-4567",
  formFields: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "john@example.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Sent!",
  successMessage: "Thank you for reaching out! We'll get back to you soon.",
  backgroundImage: "/images/Contact_page.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Uddyan",
  brandDescription: "Smart self-watering plant pots for modern living. Bringing nature home, effortlessly.",
  newsletterHeading: "Join Our Green Community",
  newsletterDescription: "Subscribe for plant care tips, exclusive offers, and new product announcements.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Welcome to the Uddyan family!",
  linkGroups: [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "#products" },
        { label: "Ceramic Pots", href: "#products" },
        { label: "Terracotta Pots", href: "#products" },
        { label: "Modern Collection", href: "#products" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Story", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  copyrightText: "© 2026 Uddyan. All rights reserved.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/uddyan" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/uddyan" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/uddyan" },
  ],
};
