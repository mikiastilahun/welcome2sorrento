import { client } from '$lib/sanity/client';
import { restaurantsQuery, type Restaurant } from '$lib/sanity/queries';

export async function load() {
	try {
		const restaurants = await client.fetch<Restaurant[]>(restaurantsQuery);
		return {
			restaurants
		};
	} catch (error) {
		console.error('Error fetching restaurants:', error);
		// Return empty array if Sanity is not configured yet
		return {
			restaurants: []
		};
	}
}

