import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

// Blog Post Queries
export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  category,
  excerpt,
  mainImage,
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
  mainImage,
  author,
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
    mainImage,
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
  mainImage,
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
  mainImage,
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
  mainImage,
  gallery,
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
  mainImage,
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
  mainImage,
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
  mainImage,
  gallery,
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
  mainImage,
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
  mainImage,
  gallery,
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
  mainImage,
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
  cardImage,
  shortDescription,
  featured
}`;

export const destinationQuery = groq`*[_type == "destination" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  subtitle,
  heroImage,
  gallery,
  shortDescription,
  introduction,
  attractions,
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
  image,
  featured
}`;

export const localSpecialtyQuery = groq`*[_type == "localSpecialty" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  type,
  description,
  longDescription,
  image,
  gallery,
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
  photo,
  service,
  featured
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) [0...3] {
  _id,
  name,
  location,
  text,
  rating,
  photo
}`;

// Type Definitions
export interface BlogPost {
	_type: 'blogPost';
	_id: string;
	_createdAt: string;
	title: string;
	slug: Slug;
	category: string;
	excerpt: string;
	mainImage?: ImageAsset;
	author: string;
	publishedAt: string;
	readTime: string;
	body?: PortableTextBlock[];
	tags?: string[];
	featured?: boolean;
	relatedPosts?: BlogPost[];
}

export interface Restaurant {
	_type: 'restaurant';
	_id: string;
	name: string;
	slug: Slug;
	category: string;
	cuisine: string;
	priceRange: string;
	rating: number;
	mainImage: ImageAsset;
	gallery?: ImageAsset[];
	description: string;
	highlights: string[];
	location: string;
	address?: string;
	phone?: string;
	website?: string;
	openingHours?: string;
	featured?: boolean;
}

export interface Accommodation {
	_type: 'accommodation';
	_id: string;
	name: string;
	slug: Slug;
	type: string;
	starRating?: number;
	priceRange: string;
	rating: number;
	mainImage: ImageAsset;
	gallery?: ImageAsset[];
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
	mainImage: ImageAsset;
	gallery?: ImageAsset[];
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

export interface Destination {
	_type: 'destination';
	_id: string;
	name: string;
	slug: Slug;
	subtitle: string;
	heroImage: ImageAsset;
	cardImage?: ImageAsset;
	gallery?: ImageAsset[];
	shortDescription: string;
	introduction: PortableTextBlock[];
	attractions?: Array<{
		name: string;
		description: string;
		image?: ImageAsset;
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

export interface LocalSpecialty {
	_type: 'localSpecialty';
	_id: string;
	name: string;
	slug: Slug;
	type: string;
	description: string;
	longDescription?: PortableTextBlock[];
	image: ImageAsset;
	gallery?: ImageAsset[];
	history?: PortableTextBlock[];
	whereToBuy?: string[];
	bestSeasons?: string[];
	featured?: boolean;
}

export interface Testimonial {
	_type: 'testimonial';
	_id: string;
	name: string;
	location: string;
	text: string;
	rating: number;
	photo?: ImageAsset;
	service?: string;
	featured?: boolean;
}

// Site Settings Queries
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  title,
  homepageStats,
  featuredSections,
  heroSection,
  sorrentoPageStats,
  sorrentoIntro,
  insiderTips
}`;

// About Page Queries
export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  _id,
  title,
  subtitle,
  story,
  mission,
  services,
  team,
  values,
  seo
}`;

// Contact Page Queries
export const contactPageQuery = groq`*[_type == "contactPage"][0] {
  _id,
  title,
  subtitle,
  contactInfo,
  businessHours,
  faqs,
  socialMedia,
  seo
}`;

// Type Definitions for New Content Types
export interface SiteSettings {
	_type: 'siteSettings';
	_id: string;
	title: string;
	homepageStats?: {
		happyTravelers?: string;
		partnerHotels?: string;
		localGuides?: string;
		yearsExperience?: string;
	};
	featuredSections?: {
		eat?: {
			title: string;
			description: string;
			image?: ImageAsset;
		};
		stay?: {
			title: string;
			description: string;
			image?: ImageAsset;
		};
		do?: {
			title: string;
			description: string;
			image?: ImageAsset;
		};
	};
	heroSection?: {
		title?: string;
		subtitle?: string;
		backgroundImage?: ImageAsset;
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

export interface AboutPage {
	_type: 'aboutPage';
	_id: string;
	title: string;
	subtitle?: string;
	story?: {
		title?: string;
		paragraphs?: PortableTextBlock[];
	};
	mission?: string;
	services?: Array<{
		title: string;
		description: string;
		icon?: string;
	}>;
	team?: Array<{
		name: string;
		role: string;
		bio: string;
		image?: ImageAsset;
	}>;
	values?: Array<{
		title: string;
		description: string;
	}>;
	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}

export interface ContactPage {
	_type: 'contactPage';
	_id: string;
	title: string;
	subtitle?: string;
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
	seo?: {
		metaTitle?: string;
		metaDescription?: string;
	};
}

