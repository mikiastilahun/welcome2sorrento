import { client } from '$lib/sanity/client';
import { accommodationsQuery, type Accommodation } from '$lib/sanity/queries';

export async function load() {
	try {
		const accommodations = await client.fetch<Accommodation[]>(accommodationsQuery);
		return {
			accommodations
		};
	} catch (error) {
		console.error('Error fetching accommodations:', error);
		// Return empty array if Sanity is not configured yet
		return {
			accommodations: []
		};
	}
}

