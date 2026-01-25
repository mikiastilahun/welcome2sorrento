import { client } from '$lib/sanity/client';
import { privacyPageQuery, type PrivacyPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const privacyPage = await client.fetch<PrivacyPage>(privacyPageQuery);

		return {
			privacyPage
		};
	} catch (error) {
		console.error('Error fetching privacy page data:', error);
		// Return null if Sanity is not configured yet
		return {
			privacyPage: null
		};
	}
}
