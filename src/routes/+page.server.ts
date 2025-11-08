import { client } from '$lib/sanity/client';
import {
	featuredBlogPostsQuery,
	featuredTestimonialsQuery,
	destinationsQuery,
	localSpecialtiesQuery,
	type BlogPost,
	type Testimonial,
	type Destination,
	type LocalSpecialty
} from '$lib/sanity/queries';

export async function load() {
	try {
		// Fetch multiple datasets in parallel
		const [featuredPosts, testimonials, destinations, specialties] = await Promise.all([
			client.fetch<BlogPost[]>(featuredBlogPostsQuery),
			client.fetch<Testimonial[]>(featuredTestimonialsQuery),
			client.fetch<Destination[]>(destinationsQuery),
			client.fetch<LocalSpecialty[]>(localSpecialtiesQuery)
		]);

		return {
			featuredPosts,
			testimonials,
			featuredDestinations: destinations.filter((d) => d.featured),
			localSpecialties: specialties.filter((s) => s.featured)
		};
	} catch (error) {
		console.error('Error fetching homepage data:', error);
		// Return empty arrays if Sanity is not configured yet
		return {
			featuredPosts: [],
			testimonials: [],
			featuredDestinations: [],
			localSpecialties: []
		};
	}
}

