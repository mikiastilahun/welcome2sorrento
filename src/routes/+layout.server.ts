import { client } from '$lib/sanity/client';
import { destinationsQuery, type Destination } from '$lib/sanity/queries';

export async function load() {
	try {
		const destinations = await client.fetch<Destination[]>(destinationsQuery);
		return {
			navDestinations: destinations
		};
	} catch (error) {
		console.error('Error fetching destinations for navigation:', error);
		return {
			navDestinations: []
		};
	}
}
