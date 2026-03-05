import { client } from '$lib/sanity/client';
import { destinationQuery, type Destination } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const destination = await client.fetch<Destination>(destinationQuery, {
			slug: params.destination
		});

		if (!destination) {
			throw error(404, 'Destination not found');
		}

		return {
			destination
		};
	} catch (err) {
		console.error('Error fetching destination:', err);
		throw error(404, 'Destination not found');
	}
}
