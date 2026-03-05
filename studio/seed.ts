/**
 * Seed Data Script for Sanity CMS
 *
 * This script clears the dataset and imports comprehensive seed data.
 *
 * Usage:
 * 1. Make sure you're in the studio directory
 * 2. Run: npx sanity exec seed.ts --with-user-token
 *    OR
 *    Run with a token: SANITY_API_WRITE_TOKEN=your_token npx tsx seed.ts
 */

import {createClient, type SanityClient} from '@sanity/client'

const client: SanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-03-15',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN, // User will provide this
})

// Image mapping
const imageMap: Record<string, string> = {
  // Blog Posts
  '10-hidden-gems-sorrento': 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
  'food-lovers-guide-sorrento': 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85',
  'best-beaches-near-sorrento': 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0',
  'day-trip-capri-guide': 'https://images.unsplash.com/photo-1534008897995-27a23e859048',
  'limoncello-grove-to-glass': 'https://images.unsplash.com/photo-1595855793915-f93d2d053980',
  'best-sunset-spots-sorrento': 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a',

  // Restaurants
  'bagni-delfino': 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
  'da-emilia': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
  'antica-trattoria': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  'il-buco': 'https://images.unsplash.com/photo-1551632436-cbf8dd354ca8',
  'pizzeria-da-franco': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  'o-parrucchiano': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',

  // Accommodations
  'grand-hotel-excelsior-vittoria': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  'bellevue-syrene': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
  'maison-la-minervetta': 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
  'casa-astarita': 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
  'villa-boheme': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  'il-nido-hotel': 'https://images.unsplash.com/photo-1582719508461-905c673771fd',

  // Activities
  'boat-tour-capri': 'https://images.unsplash.com/photo-1534008897995-27a23e859048',
  'cooking-class': 'https://images.unsplash.com/photo-1507048331197-7d4febed500e',
  'marina-grande-beach': 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0',
  'punta-campanella-walk': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'pompeii-vesuvius': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
  'limoncello-tasting': 'https://images.unsplash.com/photo-1595855793915-f93d2d053980',
  'sunset-kayaking': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  'path-of-gods': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',

  // Destinations
  capri: 'https://images.unsplash.com/photo-1534008897995-27a23e859048',
  amalfi: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
  naples: 'https://images.unsplash.com/photo-1574852859542-1b41217a7815',

  // Local Specialties
  'gnocchi-alla-sorrentina': 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85',
  limoncello: 'https://images.unsplash.com/photo-1595855793915-f93d2d053980',
  'scialatielli-frutti-di-mare': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
  'delizia-al-limone': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',

  // Hero Background Image (Sorrento coastline)
  'hero-background': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee',

  // Testimonial Avatars (using name as key)
  'Sarah Parker': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'Michael Chen': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'Emma Schmidt': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
}

async function uploadImage(url: string): Promise<string | null> {
  try {
    console.log(`Downloading image: ${url}`)
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    console.log('Uploading image to Sanity...')
    const asset = await client.assets.upload('image', buffer, {
      filename: url.split('/').pop() || 'image.jpg',
    })

    console.log(`✓ Image uploaded: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error(`Failed to upload image from ${url}:`, error)
    return null
  }
}

// Blog Posts
const blogPosts = [
  {
    title: '10 Hidden Gems in Sorrento Only Locals Know',
    slug: '10-hidden-gems-sorrento',
    category: 'travel-tips',
    excerpt: 'Discover secret spots and local favorites beyond the tourist trail.',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    author: {
      name: 'Maria Rossi',
      bio: 'Local travel expert and Sorrento native',
    },
    featured: true,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'While most tourists stick to the main piazza and Marina Grande, Sorrento hides countless treasures waiting to be discovered. From secret gardens to hidden beaches, these local favorites will make your trip truly unforgettable.',
          },
        ],
      },
    ],
  },
  {
    title: "A Food Lover's Guide to Sorrento",
    slug: 'food-lovers-guide-sorrento',
    category: 'food-drink',
    excerpt:
      "From limoncello tastings to traditional trattorias, discover Sorrento's culinary soul.",
    publishedAt: '2024-01-20',
    readTime: '10 min read',
    author: {
      name: 'Giuseppe Marino',
      bio: 'Food writer and culinary tour guide',
    },
    featured: false,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "Sorrento's food scene is a delightful blend of fresh seafood, handmade pasta, and the world's best lemons. This guide will take you through the must-try dishes and the best places to find them.",
          },
        ],
      },
    ],
  },
  {
    title: 'Best Beaches Near Sorrento',
    slug: 'best-beaches-near-sorrento',
    category: 'beaches',
    excerpt: 'Find your perfect spot on the coast, from pebble beaches to exclusive beach clubs.',
    publishedAt: '2024-01-25',
    readTime: '6 min read',
    author: {
      name: 'Sofia Bianchi',
      bio: 'Beach expert and water sports enthusiast',
    },
    featured: false,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "The coastline around Sorrento offers a variety of beautiful beaches, each with its own charm. Whether you prefer bustling beach clubs or secluded coves, there's a perfect spot waiting for you.",
          },
        ],
      },
    ],
  },
  {
    title: 'Day Trip to Capri: Complete Guide',
    slug: 'day-trip-capri-guide',
    category: 'day-trips',
    excerpt: 'Everything you need to know for an unforgettable day on the legendary island.',
    publishedAt: '2024-02-01',
    readTime: '12 min read',
    author: {
      name: 'Marco Esposito',
      bio: 'Tour operator specializing in island excursions',
    },
    featured: true,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A day trip to Capri is an absolute must when visiting Sorrento. This comprehensive guide covers ferries, what to see, where to eat, and insider tips to make the most of your visit.',
          },
        ],
      },
    ],
  },
  {
    title: 'Limoncello: From Grove to Glass',
    slug: 'limoncello-grove-to-glass',
    category: 'local-culture',
    excerpt: "The complete story of Sorrento's famous lemon liqueur and where to taste the best.",
    publishedAt: '2024-02-05',
    readTime: '7 min read',
    author: {
      name: 'Maria Rossi',
      bio: 'Local travel expert and Sorrento native',
    },
    featured: false,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "Limoncello is more than just a drink in Sorrento - it's a tradition passed down through generations. Learn about the famous Sorrento lemons and the art of making this beloved liqueur.",
          },
        ],
      },
    ],
  },
  {
    title: 'Sunset Spots: Best Views in Sorrento',
    slug: 'best-sunset-spots-sorrento',
    category: 'travel-tips',
    excerpt: 'Catch the golden hour at these spectacular viewpoints around town.',
    publishedAt: '2024-02-10',
    readTime: '5 min read',
    author: {
      name: 'Sofia Bianchi',
      bio: 'Beach expert and water sports enthusiast',
    },
    featured: false,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "Sorrento's dramatic cliffs and coastal position make it perfect for sunset watching. Here are the best spots to catch that magical golden hour.",
          },
        ],
      },
    ],
  },
]

// Restaurants
const restaurants = [
  {
    name: 'Ristorante Bagni Delfino',
    slug: 'bagni-delfino',
    category: 'seafood',
    cuisine: 'Seafood & Mediterranean',
    priceRange: '€€€',
    rating: 4.8,
    description: 'Waterfront dining with fresh catch of the day and stunning marina views.',
    highlights: ['Seafood Pasta', 'Terrace Dining', 'Marina Views', 'Fresh Fish'],
    location: 'Marina Grande',
  },
  {
    name: 'Da Emilia',
    slug: 'da-emilia',
    category: 'traditional-italian',
    cuisine: 'Traditional Neapolitan',
    priceRange: '€€',
    rating: 4.9,
    description: 'Family-run trattoria serving authentic Sorrentine cuisine since 1947.',
    highlights: ['Gnocchi alla Sorrentina', 'Homemade Pasta', 'Family Recipes', 'Local Wine'],
    location: 'Via Marina Grande',
  },
  {
    name: "L'Antica Trattoria",
    slug: 'antica-trattoria',
    category: 'traditional-italian',
    cuisine: 'Traditional Italian',
    priceRange: '€€€',
    rating: 4.7,
    description: 'Historic restaurant in a restored monastery with garden seating.',
    highlights: ['Garden Dining', 'Traditional Recipes', 'Wine Cellar', 'Historic Setting'],
    location: 'Via Giuliani',
  },
  {
    name: 'Il Buco',
    slug: 'il-buco',
    category: 'fine-dining',
    cuisine: 'Contemporary Italian',
    priceRange: '€€€€',
    rating: 4.9,
    description: 'Michelin-starred restaurant in 16th-century wine cellar.',
    highlights: ['Michelin Star', 'Wine Pairing', 'Tasting Menu', 'Historic Cellar'],
    location: "Piazza Sant'Antonino",
  },
  {
    name: 'Pizzeria Da Franco',
    slug: 'pizzeria-da-franco',
    category: 'pizza',
    cuisine: 'Neapolitan Pizza',
    priceRange: '€',
    rating: 4.6,
    description: 'Local favorite for authentic Neapolitan pizza in a casual setting.',
    highlights: ['Wood-Fired Pizza', 'Local Favorite', 'Casual Dining', 'Great Value'],
    location: 'Corso Italia',
  },
  {
    name: "Ristorante 'O Parrucchiano La Favorita",
    slug: 'o-parrucchiano',
    category: 'traditional-italian',
    cuisine: 'Sorrentine Cuisine',
    priceRange: '€€€',
    rating: 4.7,
    description: 'Historic restaurant famous for its lemon grove courtyard dining.',
    highlights: ['Lemon Grove', 'Historic Restaurant', 'Fresh Pasta', 'Garden Setting'],
    location: 'Corso Italia',
  },
]

// Accommodations
const accommodations = [
  {
    name: 'Grand Hotel Excelsior Vittoria',
    slug: 'grand-hotel-excelsior-vittoria',
    type: 'hotel',
    priceRange: '€€€€',
    rating: 4.9,
    description:
      'Iconic 5-star hotel with panoramic views, lush gardens, and Michelin-starred dining.',
    highlights: ['Pool', 'Spa', 'Restaurant', 'Sea View'],
    location: 'Piazza Tasso',
  },
  {
    name: 'Bellevue Syrene',
    slug: 'bellevue-syrene',
    type: 'hotel',
    priceRange: '€€€€',
    rating: 4.8,
    description: 'Elegant clifftop hotel with private beach access and breathtaking bay views.',
    highlights: ['Private Beach', 'Spa', 'Pool', 'Fine Dining'],
    location: 'Piazza della Vittoria',
  },
  {
    name: 'Hotel Maison La Minervetta',
    slug: 'maison-la-minervetta',
    type: 'hotel',
    priceRange: '€€€',
    rating: 4.8,
    description:
      'Intimate boutique hotel carved into the cliffside with stunning contemporary design.',
    highlights: ['Sea View', 'Breakfast Included', 'Rooftop Terrace', 'WiFi'],
    location: 'Via Capo',
  },
  {
    name: 'Casa Astarita B&B',
    slug: 'casa-astarita',
    type: 'b-and-b',
    priceRange: '€€',
    rating: 4.7,
    description:
      'Charming B&B in historic palazzo with personalized service and homemade breakfast.',
    highlights: ['Free Breakfast', 'Central Location', 'Family-Run', 'Garden'],
    location: 'Corso Italia',
  },
  {
    name: 'Villa Bohème Luxury Apartments',
    slug: 'villa-boheme',
    type: 'apartment',
    priceRange: '€€€',
    rating: 4.9,
    description: 'Stylish apartments with fully equipped kitchens, perfect for longer stays.',
    highlights: ['Kitchen', 'Terrace', 'WiFi', 'Central Location'],
    location: 'Via Fuorimura',
  },
  {
    name: 'Il Nido Hotel Sorrento',
    slug: 'il-nido-hotel',
    type: 'hotel',
    priceRange: '€€',
    rating: 4.6,
    description: 'Comfortable hotel with rooftop pool and easy access to town center.',
    highlights: ['Rooftop Pool', 'Restaurant', 'Bar', 'WiFi'],
    location: 'Via Degli Aranci',
  },
]

// Activities
const activities = [
  {
    name: 'Boat Tour to Capri',
    slug: 'boat-tour-capri',
    category: 'boat-tours',
    duration: 'Full Day',
    priceRange: '€€€',
    priceDetails: '€70-120 per person',
    rating: 4.9,
    description:
      'Discover the legendary Blue Grotto and circumnavigate the stunning island of Capri.',
    highlights: ['Blue Grotto', 'Faraglioni Rocks', 'Marina Piccola', 'Swimming Stops'],
    included: ['Hotel pickup', 'Professional guide', 'Swimming equipment', 'Light refreshments'],
    location: 'Marina Piccola',
    meetingPoint: 'Marina Piccola Port - look for the blue flag',
    bestTimeToVisit: 'April to October',
    difficulty: 'easy',
    featured: true,
    order: 1,
  },
  {
    name: 'Cooking Class Experience',
    slug: 'cooking-class',
    category: 'cooking-classes',
    duration: '3-4 hours',
    priceRange: '€€',
    priceDetails: '€85 per person',
    rating: 4.8,
    description: 'Learn to make authentic Italian pasta, pizza, and limoncello with local chefs.',
    highlights: ['Hands-on Cooking', 'Local Recipes', 'Wine Tasting', 'Take recipes home'],
    included: ['All ingredients', 'Wine pairing', 'Recipe booklet', 'Certificate'],
    location: 'Sorrento Center',
    bestTimeToVisit: 'Year-round',
    difficulty: 'easy',
    featured: true,
    order: 2,
  },
  {
    name: 'Marina Grande Beach',
    slug: 'marina-grande-beach',
    category: 'beaches',
    duration: 'Half Day',
    priceRange: 'free',
    rating: 4.5,
    description:
      'Relax at the charming fishing village beach with crystal-clear waters and local restaurants.',
    highlights: ['Beach Clubs', 'Restaurants', 'Swimming', 'Colorful Boats'],
    location: 'Marina Grande',
    bestTimeToVisit: 'May to September',
    difficulty: 'easy',
    order: 3,
  },
  {
    name: 'Walk to Punta Campanella',
    slug: 'punta-campanella-walk',
    category: 'walking-tours',
    duration: '4-5 hours',
    priceRange: 'free',
    rating: 4.7,
    description:
      'Scenic coastal hike through lemon groves with breathtaking views of the peninsula.',
    highlights: ['Coastal Views', 'Lemon Groves', 'Ancient Ruins', 'Wildlife'],
    location: 'Termini, Massa Lubrense',
    meetingPoint: 'Termini bus stop',
    bestTimeToVisit: 'March to June, September to October',
    difficulty: 'moderate',
    order: 4,
  },
  {
    name: 'Pompeii & Vesuvius Day Trip',
    slug: 'pompeii-vesuvius',
    category: 'historical-sites',
    duration: 'Full Day',
    priceRange: '€€€',
    priceDetails: '€95 per person including entrance fees',
    rating: 4.9,
    description: 'Explore the ancient ruins of Pompeii and hike to the crater of Mount Vesuvius.',
    highlights: ['Ancient Ruins', 'Volcano Crater', 'Archaeological Site', 'Expert Guide'],
    included: ['Transportation', 'Skip-the-line tickets', 'Professional guide', 'Lunch'],
    location: 'Pickup from Sorrento',
    bestTimeToVisit: 'Spring and Fall',
    difficulty: 'moderate',
    featured: true,
    order: 5,
  },
  {
    name: 'Limoncello Tasting Tour',
    slug: 'limoncello-tasting',
    category: 'wine-tasting',
    duration: '2-3 hours',
    priceRange: '€€',
    priceDetails: '€45 per person',
    rating: 4.6,
    description: 'Visit lemon groves and learn the traditional process of making limoncello.',
    highlights: ['Lemon Groves', 'Tasting Session', 'Local Production', 'Take bottle home'],
    included: ['Transportation', 'Tastings', 'Limoncello bottle', 'Snacks'],
    location: 'Massa Lubrense',
    bestTimeToVisit: 'Year-round',
    difficulty: 'easy',
    order: 6,
  },
  {
    name: 'Sunset Kayaking',
    slug: 'sunset-kayaking',
    category: 'water-sports',
    duration: '2 hours',
    priceRange: '€€',
    priceDetails: '€55 per person',
    rating: 4.7,
    description: 'Paddle along the stunning coastline and watch the sunset over the Bay of Naples.',
    highlights: ['Sunset Views', 'Coastal Caves', 'Swimming Stops', 'Photos'],
    included: ['Kayak equipment', 'Safety gear', 'Guide', 'Waterproof bag'],
    location: 'Marina del Cantone',
    bestTimeToVisit: 'June to September',
    difficulty: 'moderate',
    order: 7,
  },
  {
    name: 'Path of the Gods Hike',
    slug: 'path-of-gods',
    category: 'walking-tours',
    duration: '5-6 hours',
    priceRange: '€€',
    priceDetails: '€60 per person',
    rating: 5.0,
    description: 'Spectacular hiking trail with breathtaking views of the Amalfi Coast.',
    highlights: ['Panoramic Views', 'Ancient Path', 'Photo Stops', 'Local Villages'],
    included: ['Expert guide', 'Transportation', 'Snacks and water'],
    location: 'Agerola to Positano',
    meetingPoint: 'Sorrento train station',
    bestTimeToVisit: 'April to June, September to October',
    difficulty: 'challenging',
    featured: true,
    order: 8,
  },
]

// Destinations
const destinations = [
  {
    name: 'Capri',
    slug: 'capri',
    tagline: 'The Jewel of the Mediterranean',
    excerpt: 'Legendary island paradise with stunning natural beauty and glamorous atmosphere.',
    featured: true,
    transport: [
      {
        type: 'ferry',
        description: 'Regular fast ferries and hydrofoils from Marina Piccola',
        duration: '20-40 min',
        cost: '€20-35',
      },
    ],
    mustSee: [
      {
        name: 'Blue Grotto',
        description: 'Famous sea cave with mesmerizing blue waters',
      },
      {
        name: 'Faraglioni Rocks',
        description: 'Iconic limestone rock formations',
      },
      {
        name: 'Gardens of Augustus',
        description: 'Botanical gardens with panoramic views',
      },
    ],
    tips: [
      'Visit early morning or late afternoon to avoid crowds',
      'Book Blue Grotto tickets in advance during peak season',
      'Wear comfortable shoes for walking the steep streets',
    ],
  },
  {
    name: 'Amalfi Coast',
    slug: 'amalfi',
    tagline: 'UNESCO World Heritage Wonder',
    excerpt: 'Dramatic coastal drive with colorful cliffside villages and breathtaking views.',
    featured: true,
    transport: [
      {
        type: 'bus',
        description: 'SITA bus along the scenic coastal road',
        duration: '1-2 hours',
        cost: '€2-10',
      },
      {
        type: 'ferry',
        description: 'Seasonal ferries to Positano and Amalfi',
        duration: '30-60 min',
        cost: '€15-25',
      },
    ],
    mustSee: [
      {
        name: 'Positano',
        description: 'Picture-perfect village cascading down to the sea',
      },
      {
        name: 'Amalfi Cathedral',
        description: 'Stunning 9th-century cathedral in Amalfi town',
      },
      {
        name: 'Ravello',
        description: 'Hilltop town with magnificent gardens',
      },
    ],
    tips: [
      'The coastal road can be very windy - consider motion sickness medication',
      'Ferries are often faster and more comfortable than buses',
      'Book accommodations well in advance for summer visits',
    ],
  },
  {
    name: 'Naples',
    slug: 'naples',
    tagline: 'Vibrant Heart of Southern Italy',
    excerpt: 'Historic city with incredible art, authentic pizza, and energetic street life.',
    featured: true,
    transport: [
      {
        type: 'train',
        description: 'Circumvesuviana train from Sorrento station',
        duration: '70 min',
        cost: '€4-5',
      },
    ],
    mustSee: [
      {
        name: 'Naples Historic Center',
        description: 'UNESCO World Heritage Site with ancient streets',
      },
      {
        name: 'National Archaeological Museum',
        description: 'World-class collection of Roman artifacts',
      },
      {
        name: 'Pizza Napoletana',
        description: 'Try authentic pizza in its birthplace',
      },
    ],
    tips: [
      'Keep valuables secure in crowded areas',
      "Try pizza at L'Antica Pizzeria da Michele",
      'Use the metro to get around the city efficiently',
    ],
  },
]

// Testimonials
const testimonials = [
  {
    name: 'Sarah Parker',
    location: 'London, UK',
    text: 'Welcome2Sorrento made our trip absolutely unforgettable. The local recommendations and insider tips helped us discover places we never would have found on our own.',
    rating: 5,
    featured: true,
    order: 1,
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    text: 'The restaurant recommendations were spot-on! Every meal was incredible, and the cooking class was a highlight of our trip.',
    rating: 5,
    featured: false,
    order: 2,
  },
  {
    name: 'Emma Schmidt',
    location: 'Berlin, Germany',
    text: 'Perfect guide for first-time visitors. We felt confident exploring with all the detailed information and maps provided.',
    rating: 5,
    featured: false,
    order: 3,
  },
]

// Local Specialties
const localSpecialties = [
  {
    name: 'Gnocchi alla Sorrentina',
    slug: 'gnocchi-alla-sorrentina',
    category: 'food',
    description: 'Potato dumplings with tomato, mozzarella, and basil - baked to perfection',
  },
  {
    name: 'Limoncello',
    slug: 'limoncello',
    category: 'drinks',
    description: 'Sweet lemon liqueur made from famous Sorrento lemons - a must-try digestif',
  },
  {
    name: 'Scialatielli ai Frutti di Mare',
    slug: 'scialatielli-frutti-di-mare',
    category: 'food',
    description: 'Fresh handmade pasta ribbons with mixed seafood in a light tomato sauce',
  },
  {
    name: 'Delizia al Limone',
    slug: 'delizia-al-limone',
    category: 'desserts',
    description: 'Lemon-flavored sponge cake dessert with cream - the perfect sweet ending',
  },
]

// Site Settings (Singleton)
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  title: 'Welcome2Sorrento',
  homepageStats: {
    happyTravelers: '5000+',
    partnerHotels: '200+',
    localGuides: '50+',
    yearsExperience: '15+',
  },
  featuredSections: {
    eat: {
      title: 'Eat',
      description: 'Discover authentic Italian cuisine and hidden culinary gems that locals love',
    },
    stay: {
      title: 'Stay',
      description: 'Find your perfect accommodation from luxury hotels to charming B&Bs',
    },
    do: {
      title: 'Do',
      description: 'Experience unforgettable activities and explore stunning attractions',
    },
  },
  heroSection: {
    heading: 'Discover Sorrento',
    subheading:
      "Your gateway to the Amalfi Coast, Capri, and Southern Italy's most breathtaking experiences",
    ctaText: 'Start Exploring',
    ctaLink: '/sorrento',
    // backgroundImage will be added dynamically after upload
  },
  sorrentoPageStats: {
    restaurantCount: 45,
    accommodationCount: 120,
    activityCount: 30,
  },
  sorrentoIntro: {
    title: 'Experience Authentic Sorrento',
    description:
      'Perched on dramatic cliffs overlooking the Bay of Naples, Sorrento is a sun-drenched paradise that has captivated travelers for centuries. From its fragrant lemon groves to historic piazzas, charming marinas to world-class restaurants, Sorrento offers an unforgettable blend of natural beauty, cultural richness, and Italian dolce vita.',
  },
  insiderTips: [
    {
      title: 'Best Time to Visit',
      description: 'April-June and September-October offer perfect weather with fewer crowds',
      icon: 'Sun',
    },
    {
      title: 'Getting Around',
      description: 'Walking is best in town, buses connect to the coast, ferries to islands',
      icon: 'MapPin',
    },
    {
      title: 'Local Etiquette',
      description: 'Lunch is 1-3pm, dinner starts at 7:30pm. Dress modestly for churches',
      icon: 'Users',
    },
    {
      title: 'Save Money',
      description:
        'Book accommodations early, eat where locals eat, buy limoncello directly from producers',
      icon: 'Award',
    },
  ],
}

// About Page (Singleton)
const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  title: 'About Welcome2Sorrento',
  subtitle: 'Sharing our love for Sorrento with travelers from around the world',
  story: {
    title: 'A Love Story with Sorrento',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Welcome2Sorrento was born from a simple love story – between two people and between them and this magical corner of Italy. Created and maintained by an Italian/British couple who have made the Sorrento Peninsula their home, this website is our way of sharing the insider knowledge, hidden gems, and authentic experiences that make this region so special.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "After years of living here, exploring every beach, dining at countless restaurants, and discovering secret viewpoints known only to locals, we realized we had accumulated a treasure trove of information that could help travelers experience Sorrento the way it's meant to be experienced – authentically, deeply, and memorably.",
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "We're not just guidebook writers or tourism professionals – we're locals who genuinely love this place and want to help you fall in love with it too.",
          },
        ],
      },
    ],
  },
  mission:
    'Our mission is to help travelers discover the authentic Sorrento – beyond the tourist traps and into the heart of what makes this place truly magical.',
  services: [
    {
      title: 'Local Expertise',
      description:
        'We live here year-round and know Sorrento inside out – from hidden beaches to the best morning cappuccino',
      icon: 'MapPin',
    },
    {
      title: 'Honest Reviews',
      description:
        "No sponsored content or paid placements – just genuine recommendations we'd give our friends",
      icon: 'Heart',
    },
    {
      title: 'Personal Touch',
      description:
        "We're real people who respond to every message and genuinely care about your experience",
      icon: 'Users',
    },
    {
      title: 'Always Updated',
      description:
        'Living here means we know immediately when a new restaurant opens or when things change',
      icon: 'Sparkles',
    },
  ],
  seo: {
    metaTitle: 'About Us - Local Experts | Welcome2Sorrento',
    metaDescription:
      'Learn about Welcome2Sorrento - created by an Italian/British couple who live in Sorrento and share authentic travel advice.',
  },
}

// Contact Page (Singleton)
const contactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  title: 'Get in Touch',
  subtitle: "We're here to help plan your perfect Sorrento experience",
  contactInfo: {
    email: 'info@welcome2sorrento.com',
    phone: '+39 081 878 1234',
    whatsapp: '+39 339 123 4567',
    address: 'Based in Sorrento, Campania, Italy',
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM (CET)',
    weekends: '10:00 AM - 4:00 PM (CET)',
  },
  faqs: [
    {
      question: "What's included in the booking service?",
      answer:
        'We handle restaurant reservations, accommodation booking, tour arrangements, transportation coordination, and provide real-time support via WhatsApp during your trip.',
    },
    {
      question: 'How much does the service cost?',
      answer:
        'We charge a fixed, transparent fee based on the complexity of your needs. Contact us for a personalized quote - most travelers find our service pays for itself through insider access and time saved.',
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'For peak season (June-August), we recommend booking 2-3 months in advance. For other times of year, 3-4 weeks is usually sufficient for most services.',
    },
    {
      question: 'Do you only help with Sorrento?',
      answer:
        'We cover Sorrento and the entire surrounding area including Capri, the Amalfi Coast, Naples, Pompeii, Ischia, Procida, and more.',
    },
    {
      question: 'Can you help with last-minute bookings?',
      answer:
        'Yes! While we prefer advance notice, we do our best to accommodate last-minute requests. WhatsApp us for the quickest response.',
    },
    {
      question: 'What makes you different from other travel services?',
      answer:
        "We actually live in Sorrento year-round and personally know the owners of many restaurants and hotels. We provide genuine local insights, not just what's in guidebooks.",
    },
  ],
  socialMedia: {
    instagram: 'https://instagram.com/welcome2sorrento',
    facebook: 'https://facebook.com/welcome2sorrento',
  },
  seo: {
    metaTitle: 'Contact Us - Travel Planning & Booking | Welcome2Sorrento',
    metaDescription:
      'Contact Welcome2Sorrento for personalized travel planning, restaurant reservations, and local expertise. WhatsApp support available.',
  },
}

// Helper function to create documents
async function createDocuments() {
  console.log('Starting seed data import...\n')

  try {
    // Delete existing data
    console.log('🗑️  Deleting existing data...')
    await client.delete({
      query:
        '*[_type in ["blogPost", "restaurant", "accommodation", "activity", "destination", "testimonial", "localSpecialty", "post"]]',
    })
    console.log('✓ Cleared existing documents')

    // Create Blog Posts
    console.log('\nCreating blog posts...')
    for (const post of blogPosts) {
      let imageAssetId = null
      if (imageMap[post.slug]) {
        imageAssetId = await uploadImage(imageMap[post.slug])
      }

      await client.create({
        _type: 'blogPost',
        ...post,
        slug: {_type: 'slug', current: post.slug},
        mainImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${post.title}`)
    }

    // Create Restaurants
    console.log('\nCreating restaurants...')
    for (const restaurant of restaurants) {
      let imageAssetId = null
      if (imageMap[restaurant.slug]) {
        imageAssetId = await uploadImage(imageMap[restaurant.slug])
      }

      await client.create({
        _type: 'restaurant',
        ...restaurant,
        slug: {_type: 'slug', current: restaurant.slug},
        mainImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${restaurant.name}`)
    }

    // Create Accommodations
    console.log('\nCreating accommodations...')
    for (const accommodation of accommodations) {
      let imageAssetId = null
      if (imageMap[accommodation.slug]) {
        imageAssetId = await uploadImage(imageMap[accommodation.slug])
      }

      await client.create({
        _type: 'accommodation',
        ...accommodation,
        slug: {_type: 'slug', current: accommodation.slug},
        mainImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${accommodation.name}`)
    }

    // Create Activities
    console.log('\nCreating activities...')
    for (const activity of activities) {
      let imageAssetId = null
      if (imageMap[activity.slug]) {
        imageAssetId = await uploadImage(imageMap[activity.slug])
      }

      await client.create({
        _type: 'activity',
        ...activity,
        slug: {_type: 'slug', current: activity.slug},
        mainImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${activity.name}`)
    }

    // Create Destinations
    console.log('\nCreating destinations...')
    for (const destination of destinations) {
      let imageAssetId = null
      if (imageMap[destination.slug]) {
        imageAssetId = await uploadImage(imageMap[destination.slug])
      }

      await client.create({
        _type: 'destination',
        ...destination,
        slug: {_type: 'slug', current: destination.slug},
        heroImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
        cardImage: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: destination.excerpt,
              },
            ],
          },
        ],
      })
      console.log(`✓ Created: ${destination.name}`)
    }

    // Create Testimonials
    console.log('\nCreating testimonials...')
    for (const testimonial of testimonials) {
      let imageAssetId = null
      if (imageMap[testimonial.name]) {
        imageAssetId = await uploadImage(imageMap[testimonial.name])
      }

      await client.create({
        _type: 'testimonial',
        ...testimonial,
        photo: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${testimonial.name}`)
    }

    // Create Local Specialties
    console.log('\nCreating local specialties...')
    for (const specialty of localSpecialties) {
      let imageAssetId = null
      if (imageMap[specialty.slug]) {
        imageAssetId = await uploadImage(imageMap[specialty.slug])
      }

      await client.create({
        _type: 'localSpecialty',
        ...specialty,
        slug: {_type: 'slug', current: specialty.slug},
        image: imageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: imageAssetId},
            }
          : undefined,
      })
      console.log(`✓ Created: ${specialty.name}`)
    }

    // Create Site Settings (Singleton)
    console.log('\nCreating site settings...')
    let heroImageAssetId = null
    if (imageMap['hero-background']) {
      heroImageAssetId = await uploadImage(imageMap['hero-background'])
    }

    const siteSettingsWithImage = {
      ...siteSettings,
      heroSection: {
        ...siteSettings.heroSection,
        backgroundImage: heroImageAssetId
          ? {
              _type: 'image',
              asset: {_type: 'reference', _ref: heroImageAssetId},
            }
          : undefined,
      },
    }

    await client.createOrReplace(siteSettingsWithImage)
    console.log('✓ Created: Site Settings')

    // Create About Page (Singleton)
    console.log('\nCreating about page...')
    await client.createOrReplace(aboutPage)
    console.log('✓ Created: About Page')

    // Create Contact Page (Singleton)
    console.log('\nCreating contact page...')
    await client.createOrReplace(contactPage)
    console.log('✓ Created: Contact Page')

    console.log('\n✅ Seed data import completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   • ${blogPosts.length} blog posts`)
    console.log(`   • ${restaurants.length} restaurants`)
    console.log(`   • ${accommodations.length} accommodations`)
    console.log(`   • ${activities.length} activities`)
    console.log(`   • ${destinations.length} destinations`)
    console.log(`   • ${testimonials.length} testimonials`)
    console.log(`   • ${localSpecialties.length} local specialties`)
    console.log('   • 1 site settings document')
    console.log('   • 1 about page document')
    console.log('   • 1 contact page document')
    console.log('\n🎨 Next steps:')
    console.log('1. Visit your Sanity Studio at http://localhost:3333')
    console.log(
      '2. Add images to your content (especially activities, restaurants, accommodations)',
    )
    console.log('3. Review and customize the content')
    console.log('4. Update contact information with your real details')
    console.log('5. All documents are now ready to use!')
  } catch (error) {
    console.error('❌ Error importing seed data:', error)
    throw error
  }
}

// Run the script
createDocuments()
