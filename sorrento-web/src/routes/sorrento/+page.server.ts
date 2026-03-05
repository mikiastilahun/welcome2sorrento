import { client } from '$lib/sanity/client';
import { sorrentoPageQuery, type SorrentoPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const pageData = await client.fetch<SorrentoPage>(sorrentoPageQuery);
		return {
			pageData
		};
	} catch (error) {
		console.error('Error fetching Sorrento page data:', error);
		return {
			pageData: null
		};
	}
}
