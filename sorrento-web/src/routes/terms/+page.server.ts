import { client } from '$lib/sanity/client';
import { termsPageQuery, type TermsPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const termsPage = await client.fetch<TermsPage>(termsPageQuery);

		return {
			termsPage
		};
	} catch (error) {
		console.error('Error fetching terms page data:', error);
		// Return null if Sanity is not configured yet
		return {
			termsPage: null
		};
	}
}
