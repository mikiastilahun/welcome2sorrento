import { client } from '$lib/sanity/client';
import {
	destinationsQuery,
	siteSettingsQuery,
	errorPageQuery,
	type Destination,
	type SiteSettings,
	type ErrorPage
} from '$lib/sanity/queries';

export async function load() {
	try {
		const [destinations, siteSettings, errorPage] = await Promise.all([
			client.fetch<Destination[]>(destinationsQuery),
			client.fetch<SiteSettings>(siteSettingsQuery),
			client.fetch<ErrorPage>(errorPageQuery)
		]);

		return {
			navDestinations: destinations,
			siteSettings,
			errorPage
		};
	} catch (error) {
		console.error('Error fetching layout data:', error);
		return {
			navDestinations: [],
			siteSettings: null,
			errorPage: null
		};
	}
}
