import { client } from '$lib/sanity/client';
import {
	destinationsQuery,
	surroundingPageQuery,
	type Destination,
	type SurroundingPage
} from '$lib/sanity/queries';

export async function load() {
	try {
		const [destinations, pageData] = await Promise.all([
			client.fetch<Destination[]>(destinationsQuery),
			client.fetch<SurroundingPage>(surroundingPageQuery)
		]);

		return {
			destinations,
			pageData
		};
	} catch (error) {
		console.error('Error fetching surrounding page data:', error);
		return {
			destinations: [],
			pageData: null
		};
	}
}
