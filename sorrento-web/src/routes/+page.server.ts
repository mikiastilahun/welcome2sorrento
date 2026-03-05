import { client } from '$lib/sanity/client';
import {
	featuredBlogPostsQuery,
	destinationsQuery,
	localSpecialtiesQuery,
	siteSettingsQuery,
	restaurantsQuery,
	accommodationsQuery,
	activitiesQuery,
	type BlogPost,
	type Destination,
	type LocalSpecialty,
	type SiteSettings,
	type Restaurant,
	type Accommodation,
	type Activity
} from '$lib/sanity/queries';

export async function load() {
	try {
		const [
			featuredPosts,
			destinations,
			specialties,
			siteSettings,
			restaurants,
			accommodations,
			activities
		] = await Promise.all([
			client.fetch<BlogPost[]>(featuredBlogPostsQuery),
			client.fetch<Destination[]>(destinationsQuery),
			client.fetch<LocalSpecialty[]>(localSpecialtiesQuery),
			client.fetch<SiteSettings>(siteSettingsQuery),
			client.fetch<Restaurant[]>(restaurantsQuery),
			client.fetch<Accommodation[]>(accommodationsQuery),
			client.fetch<Activity[]>(activitiesQuery)
		]);

		return {
			featuredPosts,
			featuredDestinations: destinations.filter((d) => d.featured),
			localSpecialties: specialties.filter((s) => s.featured),
			siteSettings,
			featuredRestaurants: restaurants.filter((r) => r.featured),
			featuredAccommodations: accommodations.filter((a) => a.featured),
			featuredActivities: activities.filter((a) => a.featured)
		};
	} catch (error) {
		console.error('Error fetching homepage data:', error);
		return {
			featuredPosts: [],
			featuredDestinations: [],
			localSpecialties: [],
			siteSettings: null,
			featuredRestaurants: [],
			featuredAccommodations: [],
			featuredActivities: []
		};
	}
}
