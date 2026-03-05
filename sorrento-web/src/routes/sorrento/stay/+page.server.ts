import { client } from '$lib/sanity/client';
import {
	accommodationsQuery,
	stayPageQuery,
	type Accommodation,
	type StayPage
} from '$lib/sanity/queries';

export async function load() {
	try {
		const [accommodations, pageData] = await Promise.all([
			client.fetch<Accommodation[]>(accommodationsQuery),
			client.fetch<StayPage>(stayPageQuery)
		]);
		return {
			accommodations,
			pageData
		};
	} catch (error) {
		console.error('Error fetching stay page data:', error);
		return {
			accommodations: [],
			pageData: null
		};
	}
}
