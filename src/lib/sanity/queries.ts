import type { PortableTextBlock } from '@portabletext/types';
import type { Slug } from '@sanity/types';
import groq from 'groq';

// Blog Post Queries
export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  category,
  excerpt,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  "author": author.name,
  publishedAt,
  readTime,
  featured
}`;

export const blogPostQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  slug,
  category,
  excerpt,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  "author": author.name,
  publishedAt,
  readTime,
  body,
  tags,
  seo,
  "relatedPosts": relatedPosts[]-> {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    category,
    publishedAt
  }
}`;

export const featuredBlogPostsQuery = groq`*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  category,
  excerpt,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  "author": author.name,
  publishedAt,
  readTime
}`;

// Restaurant Queries
export const restaurantsQuery = groq`*[_type == "restaurant"] | order(order asc, rating desc) {
  _id,
  name,
  slug,
  category,
  cuisine,
  priceRange,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  location,
  featured
}`;

export const restaurantQuery = groq`*[_type == "restaurant" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  category,
  cuisine,
  priceRange,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  location,
  address,
  phone,
  website,
  openingHours
}`;

export const restaurantsByCategoryQuery = groq`*[_type == "restaurant" && category == $category] | order(order asc, rating desc) {
  _id,
  name,
  slug,
  category,
  cuisine,
  priceRange,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  location
}`;

// Accommodation Queries
export const accommodationsQuery = groq`*[_type == "accommodation"] | order(order asc, rating desc) {
  _id,
  name,
  slug,
  type,
  starRating,
  priceRange,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  amenities,
  highlights,
  location,
  featured
}`;

export const accommodationQuery = groq`*[_type == "accommodation" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  type,
  starRating,
  priceRange,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  amenities,
  highlights,
  location,
  address,
  phone,
  email,
  website,
  bookingUrl,
  features
}`;

// Activity Queries
export const activitiesQuery = groq`*[_type == "activity"] | order(order asc, rating desc) {
  _id,
  name,
  slug,
  category,
  duration,
  priceRange,
  priceDetails,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  location,
  featured
}`;

export const activityQuery = groq`*[_type == "activity" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  category,
  duration,
  priceRange,
  priceDetails,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  included,
  location,
  meetingPoint,
  phone,
  email,
  website,
  bookingUrl,
  bestTimeToVisit,
  difficulty,
  additionalInfo
}`;

export const activitiesByCategoryQuery = groq`*[_type == "activity" && category == $category] | order(order asc, rating desc) {
  _id,
  name,
  slug,
  category,
  duration,
  priceRange,
  priceDetails,
  rating,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  description,
  highlights,
  location
}`;

// Destination Queries
export const destinationsQuery = groq`*[_type == "destination"] | order(order asc) {
  _id,
  name,
  slug,
  subtitle,
  cardImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  shortDescription,
  featured
}`;

export const destinationQuery = groq`*[_type == "destination" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  subtitle,
  heroImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset-> {
      _id,
      url
    },
    alt
  },
  shortDescription,
  introduction,
  attractions[] {
    name,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    duration,
    entryFee
  },
  restaurants,
  howToGetThere,
  planningTips,
  bestTimeToVisit,
  estimatedBudget
}`;

// Local Specialty Queries
export const localSpecialtiesQuery = groq`*[_type == "localSpecialty"] | order(order asc) {
  _id,
  name,
  slug,
  type,
  description,
  image {
    asset-> {
      _id,
      url
    },
    alt
  },
  featured
}`;

export const localSpecialtyQuery = groq`*[_type == "localSpecialty" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  type,
  description,
  longDescription,
  image {
    asset-> {
      _id,
      url
    },
    alt
  },
  gallery[] {
    asset-> {
      _id,
      url
    },
    alt
  },
  history,
  whereToBuy,
  bestSeasons
}`;

// Testimonial Queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  location,
  text,
  rating,
  photo {
    asset-> {
      _id,
      url
    },
    alt
  },
  service,
  featured
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) [0...3] {
  _id,
  name,
  location,
  text,
  rating,
  photo {
    asset-> {
      _id,
      url
    },
    alt
  }
}`;

// ============================================
// SITE SETTINGS QUERY (COMPREHENSIVE)
// ============================================
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  siteDescription,
  siteUrl,
  
  // Hero Section
  heroSection {
    heading,
    subheading,
    ctaText,
    ctaLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  
  // Intro Section
  introSection {
    heading,
    description
  },
  introCards[] {
    title,
    description,
    icon
  },
  
  // Homepage Stats
  homepageStats {
    happyTravelers,
    partnerHotels,
    localGuides,
    yearsExperience
  },
  
  // Featured Sections
  featuredSectionsHeading {
    heading,
    subheading
  },
  featuredSections {
    eat {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    stay {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    do {
      title,
      description,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  },
  
  // Destinations Section
  destinationsSection {
    heading,
    subheading,
    ctaText
  },
  
  // Testimonials Section
  testimonialsSection {
    heading,
    subheading
  },
  
  // Newsletter
  newsletter {
    heading,
    description,
    buttonText,
    successMessage,
    placeholderText
  },
  
  // Home CTA
  homeCTA {
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  
  // Navigation
  navigation {
    mainMenu[] {
      label,
      href,
      submenu[] {
        label,
        href,
        description
      }
    },
    ctaButtonText,
    ctaButtonLink
  },
  
  // Footer
  footer {
    greeting,
    description,
    madeWithLove,
    copyrightText,
    quickLinks[] {
      label,
      href
    },
    services[] {
      label,
      href
    },
    quickLinksTitle,
    servicesTitle,
    subscribeTitle
  },
  
  // Contact Info
  contactInfo {
    email,
    phone,
    whatsapp,
    address,
    availability
  },
  
  // Social Media
  socialMedia {
    facebook,
    instagram,
    twitter,
    youtube,
    tiktok
  },
  
  // SEO
  seo {
    metaTitle,
    metaDescription,
    keywords,
    ogImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    twitterHandle,
    themeColor
  },
  
  homePageSeo {
    metaTitle,
    metaDescription,
    keywords
  },
  
  // Sorrento Page Settings (legacy)
  sorrentoPageStats {
    restaurantCount,
    accommodationCount,
    activityCount
  },
  sorrentoIntro {
    title,
    description
  },
  insiderTips[] {
    title,
    description,
    icon
  }
}`;

// ============================================
// PAGE-SPECIFIC QUERIES
// ============================================

// Sorrento Page Query
export const sorrentoPageQuery = groq`*[_type == "sorrentoPage"][0] {
  _id,
  title,
  header {
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  intro {
    heading,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  sections[] {
    title,
    subtitle,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    link,
    features
  },
  insiderTips[] {
    title,
    description,
    icon
  },
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Eat Page Query
export const eatPageQuery = groq`*[_type == "eatPage"][0] {
  _id,
  title,
  header {
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  introText,
  specialtiesHeading,
  localSpecialties[] {
    name,
    description,
    icon
  },
  tipsHeading,
  diningTips[] {
    title,
    description,
    icon
  },
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Stay Page Query
export const stayPageQuery = groq`*[_type == "stayPage"][0] {
  _id,
  title,
  header {
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  introText,
  neighborhoodsHeading,
  neighborhoods[] {
    title,
    description,
    badge,
    icon
  },
  tipsHeading,
  bookingTips[] {
    title,
    description,
    icon
  },
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Do Page Query
export const doPageQuery = groq`*[_type == "doPage"][0] {
  _id,
  title,
  header {
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  introText,
  categoriesHeading,
  activityCategories[] {
    title,
    description,
    icon
  },
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Surrounding Page Query
export const surroundingPageQuery = groq`*[_type == "surroundingPage"][0] {
  _id,
  title,
  header {
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  introText,
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Blog Page Query
export const blogPageQuery = groq`*[_type == "blogPage"][0] {
  _id,
  title,
  header {
    label,
    heading,
    subheading,
    heroImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  introText,
  newsletterCTA {
    heading,
    description,
    buttonText,
    placeholderText
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// About Page Query
export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  _id,
  title,
  subtitle,
  heroImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  story {
    title,
    content,
    image {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  mission,
  servicesSection {
    heading,
    description,
    image {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  services[] {
    title,
    description,
    icon
  },
  team[] {
    name,
    role,
    bio,
    image {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  values[] {
    title,
    description,
    icon
  },
  cta {
    heading,
    description,
    buttonText,
    buttonLink,
    backgroundImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Contact Page Query
export const contactPageQuery = groq`*[_type == "contactPage"][0] {
  _id,
  title,
  subtitle,
  heroImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  serviceOptions,
  formLabels {
    nameLabel,
    emailLabel,
    serviceLabel,
    messageLabel,
    submitButtonText,
    successMessage
  },
  contactInfo {
    email,
    phone,
    whatsapp,
    address
  },
  businessHours {
    weekdays,
    weekends
  },
  faqs[] {
    question,
    answer
  },
  socialMedia {
    facebook,
    instagram,
    twitter,
    linkedin
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  }
}`;

// Privacy Page Query
export const privacyPageQuery = groq`*[_type == "privacyPage"][0] {
  _id,
  title,
  subtitle,
  lastUpdated,
  content,
  seo {
    metaTitle,
    metaDescription
  }
}`;

// Terms Page Query
export const termsPageQuery = groq`*[_type == "termsPage"][0] {
  _id,
  title,
  subtitle,
  lastUpdated,
  content,
  seo {
    metaTitle,
    metaDescription
  }
}`;

// Error Page Query
export const errorPageQuery = groq`*[_type == "errorPage"][0] {
  _id,
  title,
  error404 {
    heading,
    message
  },
  error500 {
    heading,
    message
  },
  errorDefault {
    heading,
    message
  },
  navigationTitle,
  navigationCards[] {
    label,
    href,
    icon
  },
  footerMessage
}`;

// ============================================
// TYPE DEFINITIONS
// ============================================

// Image type with asset reference
export interface SanityImage {
	asset?: {
		_id: string;
		url: string;
	};
	alt?: string;
}

// Sanity block content structure
export interface SanityBlockChild {
	_key: string;
	_type: string;
	text?: string;
	marks?: string[];
}

export interface SanityBlock {
	_key: string;
	_type: string;
	style?: string;
	children?: SanityBlockChild[];
	markDefs?: unknown[];
}

// Link type
export interface NavLink {
	label: string;
	href: string;
	description?: string;
}

// Navigation menu item
export interface NavMenuItem {
	label: string;
	href: string;
	submenu?: NavLink[];
}

// Blog Post
export interface BlogPost {
	_type: 'blogPost';
	_id: string;
	_createdAt: string;
	title: string;
	slug: Slug;
	category: string;
	excerpt: string;
	mainImage?: SanityImage;
	author: string;
	publishedAt: string;
	readTime: string;
	body?: PortableTextBlock[];
	tags?: string[];
	featured?: boolean;
	relatedPosts?: BlogPost[];
}

// Restaurant
export interface Restaurant {
	_type: 'restaurant';
	_id: string;
	name: string;
	slug: Slug;
	category: string;
	cuisine: string;
	priceRange: string;
	rating: number;
	mainImage?: SanityImage;
	gallery?: SanityImage[];
	description: string;
	highlights: string[];
	location: string;
	address?: string;
	phone?: string;
	website?: string;
	openingHours?: string;
	featured?: boolean;
}

// Accommodation
export interface Accommodation {
	_type: 'accommodation';
	_id: string;
	name: string;
	slug: Slug;
	type: string;
	starRating?: number;
	priceRange: string;
	rating: number;
	mainImage?: SanityImage;
	gallery?: SanityImage[];
	description: string;
	amenities: string[];
	highlights: string[];
	location: string;
	address?: string;
	phone?: string;
	email?: string;
	website?: string;
	bookingUrl?: string;
	features?: PortableTextBlock[];
	featured?: boolean;
}

// Activity
export interface Activity {
	_type: 'activity';
	_id: string;
	name: string;
	slug: Slug;
	category: string;
	duration: string;
	priceRange: string;
	priceDetails?: string;
	rating: number;
	mainImage?: SanityImage;
	gallery?: SanityImage[];
	description: string;
	highlights: string[];
	included?: string[];
	location: string;
	meetingPoint?: string;
	phone?: string;
	email?: string;
	website?: string;
	bookingUrl?: string;
	bestTimeToVisit?: string;
	difficulty?: string;
	additionalInfo?: PortableTextBlock[];
	featured?: boolean;
}

// Destination
export interface Destination {
	_type: 'destination';
	_id: string;
	name: string;
	slug: Slug;
	subtitle?: string;
	heroImage?: SanityImage;
	cardImage?: SanityImage;
	gallery?: SanityImage[];
	shortDescription?: string;
	introduction?: SanityBlock[];
	attractions?: Array<{
		name: string;
		description: string;
		image?: SanityImage;
		duration?: string;
		entryFee?: string;
	}>;
	restaurants?: Array<{
		name: string;
		type?: string;
		cuisine?: string;
		description: string;
		priceRange?: string;
	}>;
	howToGetThere?: {
		fromSorrento?: {
			description?: string;
			options?: Array<{
				type: string;
				duration: string;
				cost: string;
				details?: string;
			}>;
		};
		tips?: string[];
	};
	planningTips?: Array<{
		title: string;
		description: string;
	}>;
	bestTimeToVisit?: string;
	estimatedBudget?: string;
	featured?: boolean;
}

// Local Specialty
export interface LocalSpecialty {
	_type: 'localSpecialty';
	_id: string;
	name: string;
	slug: Slug;
	type: string;
	description: string;
	longDescription?: PortableTextBlock[];
	image?: SanityImage;
	gallery?: SanityImage[];
	history?: PortableTextBlock[];
	whereToBuy?: string[];
	bestSeasons?: string[];
	featured?: boolean;
}

// Testimonial
export interface Testimonial {
	_type: 'testimonial';
	_id: string;
	name: string;
	location: string;
	text: string;
	rating: number;
	photo?: SanityImage;
	service?: string;
	featured?: boolean;
}

// Site Settings
export interface SiteSettings {
	_type: 'siteSettings';
	_id: string;
	title: string;
	siteDescription?: string;
	siteUrl?: string;
	heroSection?: {
		heading?: string;
		subheading?: string;
		ctaText?: string;
		ctaLink?: string;
		backgroundImage?: SanityImage;
	};
	introSection?: {
		heading?: string;
		description?: string;
	};
	introCards?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	homepageStats?: {
		happyTravelers?: string;
		partnerHotels?: string;
		localGuides?: string;
		yearsExperience?: string;
	};
	featuredSectionsHeading?: {
		heading?: string;
		subheading?: string;
	};
	featuredSections?: {
		eat?: {
			title: string;
			description: string;
			image?: SanityImage;
		};
		stay?: {
			title: string;
			description: string;
			image?: SanityImage;
		};
		do?: {
			title: string;
			description: string;
			image?: SanityImage;
		};
	};
	destinationsSection?: {
		heading?: string;
		subheading?: string;
		ctaText?: string;
	};
	testimonialsSection?: {
		heading?: string;
		subheading?: string;
	};
	newsletter?: {
		heading?: string;
		description?: string;
		buttonText?: string;
		successMessage?: string;
		placeholderText?: string;
	};
	homeCTA?: {
		heading?: string;
		description?: string;
		primaryButtonText?: string;
		primaryButtonLink?: string;
		secondaryButtonText?: string;
		secondaryButtonLink?: string;
		backgroundImage?: SanityImage;
	};
	navigation?: {
		mainMenu?: NavMenuItem[];
		ctaButtonText?: string;
		ctaButtonLink?: string;
	};
	footer?: {
		greeting?: string;
		description?: string;
		madeWithLove?: string;
		copyrightText?: string;
		quickLinks?: NavLink[];
		services?: NavLink[];
		quickLinksTitle?: string;
		servicesTitle?: string;
		subscribeTitle?: string;
	};
	contactInfo?: {
		email?: string;
		phone?: string;
		whatsapp?: string;
		address?: string;
		availability?: string;
	};
	socialMedia?: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		youtube?: string;
		tiktok?: string;
	};
	seo?: {
		metaTitle?: string;
		metaDescription?: string;
		keywords?: string;
		ogImage?: SanityImage;
		twitterHandle?: string;
		themeColor?: string;
	};
	homePageSeo?: {
		metaTitle?: string;
		metaDescription?: string;
		keywords?: string;
	};
	sorrentoPageStats?: {
		restaurantCount?: number;
		accommodationCount?: number;
		activityCount?: number;
	};
	sorrentoIntro?: {
		title?: string;
		description?: string;
	};
	insiderTips?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
}

// Page Header type (shared)
export interface PageHeader {
	heading?: string;
	subheading?: string;
	heroImage?: SanityImage;
	label?: string; // For blog page
}

// CTA Section type (shared)
export interface CTASection {
	heading?: string;
	description?: string;
	buttonText?: string;
	buttonLink?: string;
	backgroundImage?: SanityImage;
}

// SEO type (shared)
export interface SEOFields {
	metaTitle?: string;
	metaDescription?: string;
	keywords?: string;
}

// Sorrento Page
export interface SorrentoPage {
	_type: 'sorrentoPage';
	_id: string;
	title: string;
	header?: PageHeader;
	intro?: {
		heading?: string;
		description?: string;
		image?: SanityImage;
	};
	sections?: Array<{
		title: string;
		subtitle?: string;
		description?: string;
		image?: SanityImage;
		link?: string;
		features?: string[];
	}>;
	insiderTips?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	cta?: CTASection;
	seo?: SEOFields;
}

// Eat Page
export interface EatPage {
	_type: 'eatPage';
	_id: string;
	title: string;
	header?: PageHeader;
	introText?: string;
	specialtiesHeading?: string;
	localSpecialties?: Array<{
		name: string;
		description: string;
		icon?: string;
	}>;
	tipsHeading?: string;
	diningTips?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	cta?: CTASection;
	seo?: SEOFields;
}

// Stay Page
export interface StayPage {
	_type: 'stayPage';
	_id: string;
	title: string;
	header?: PageHeader;
	introText?: string;
	neighborhoodsHeading?: string;
	neighborhoods?: Array<{
		title: string;
		description: string;
		badge?: string;
		icon?: string;
	}>;
	tipsHeading?: string;
	bookingTips?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	cta?: CTASection;
	seo?: SEOFields;
}

// Do Page
export interface DoPage {
	_type: 'doPage';
	_id: string;
	title: string;
	header?: PageHeader;
	introText?: string;
	categoriesHeading?: string;
	activityCategories?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	cta?: CTASection;
	seo?: SEOFields;
}

// Surrounding Page
export interface SurroundingPage {
	_type: 'surroundingPage';
	_id: string;
	title: string;
	header?: PageHeader;
	introText?: string;
	cta?: CTASection;
	seo?: SEOFields;
}

// Blog Page
export interface BlogPage {
	_type: 'blogPage';
	_id: string;
	title: string;
	header?: PageHeader;
	introText?: string;
	newsletterCTA?: {
		heading?: string;
		description?: string;
		buttonText?: string;
		placeholderText?: string;
	};
	seo?: SEOFields;
}

// About Page
export interface AboutPage {
	_type: 'aboutPage';
	_id: string;
	title: string;
	subtitle?: string;
	heroImage?: SanityImage;
	story?: {
		title?: string;
		content?: SanityBlock[];
		image?: SanityImage;
	};
	mission?: string;
	servicesSection?: {
		heading?: string;
		description?: string;
		image?: SanityImage;
	};
	services?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	team?: Array<{
		name: string;
		role: string;
		bio: string;
		image?: SanityImage;
	}>;
	values?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	cta?: CTASection;
	seo?: SEOFields;
}

// Contact Page
export interface ContactPage {
	_type: 'contactPage';
	_id: string;
	title: string;
	subtitle?: string;
	heroImage?: SanityImage;
	serviceOptions?: string[];
	formLabels?: {
		nameLabel?: string;
		emailLabel?: string;
		serviceLabel?: string;
		messageLabel?: string;
		submitButtonText?: string;
		successMessage?: string;
	};
	contactInfo?: {
		email?: string;
		phone?: string;
		whatsapp?: string;
		address?: string;
	};
	businessHours?: {
		weekdays?: string;
		weekends?: string;
	};
	faqs?: Array<{
		question: string;
		answer: string;
	}>;
	socialMedia?: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		linkedin?: string;
	};
	seo?: SEOFields;
}

// Privacy Page
export interface PrivacyPage {
	_type: 'privacyPage';
	_id: string;
	title: string;
	subtitle?: string;
	lastUpdated?: string;
	content?: SanityBlock[];
	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}

// Terms Page
export interface TermsPage {
	_type: 'termsPage';
	_id: string;
	title: string;
	subtitle?: string;
	lastUpdated?: string;
	content?: SanityBlock[];
	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}

// Error Page
export interface ErrorPage {
	_type: 'errorPage';
	_id: string;
	title: string;
	error404?: {
		heading?: string;
		message?: string;
	};
	error500?: {
		heading?: string;
		message?: string;
	};
	errorDefault?: {
		heading?: string;
		message?: string;
	};
	navigationTitle?: string;
	navigationCards?: Array<{
		label: string;
		href: string;
		icon?: string;
	}>;
	footerMessage?: string;
}
