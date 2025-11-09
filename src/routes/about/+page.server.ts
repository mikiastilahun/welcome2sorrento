import { client } from '$lib/sanity/client';
import { aboutPageQuery, type AboutPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const aboutPage = await client.fetch<AboutPage>(aboutPageQuery);

		return {
			aboutPage
		};
	} catch (error) {
		console.error('Error fetching about page data:', error);
		// Return null if Sanity is not configured yet
		return {
			aboutPage: null
		};
	}
}

