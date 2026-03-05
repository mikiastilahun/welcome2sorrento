import { client } from '$lib/sanity/client';
import { restaurantsQuery, eatPageQuery, type Restaurant, type EatPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const [restaurants, pageData] = await Promise.all([
			client.fetch<Restaurant[]>(restaurantsQuery),
			client.fetch<EatPage>(eatPageQuery)
		]);
		return {
			restaurants,
			pageData
		};
	} catch (error) {
		console.error('Error fetching eat page data:', error);
		return {
			restaurants: [],
			pageData: null
		};
	}
}
