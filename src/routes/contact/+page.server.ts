import { client } from '$lib/sanity/client';
import { contactPageQuery, type ContactPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const contactPage = await client.fetch<ContactPage>(contactPageQuery);

		return {
			contactPage
		};
	} catch (error) {
		console.error('Error fetching contact page data:', error);
		// Return null if Sanity is not configured yet
		return {
			contactPage: null
		};
	}
}

