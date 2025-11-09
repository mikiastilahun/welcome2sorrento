import { client } from '$lib/sanity/client';
import { destinationsQuery, type Destination } from '$lib/sanity/queries';

export async function load() {
	try {
		const destinations = await client.fetch<Destination[]>(destinationsQuery);

		return {
			destinations
		};
	} catch (error) {
		console.error('Error fetching destinations:', error);
		// Return empty array if Sanity is not configured yet
		return {
			destinations: []
		};
	}
}

