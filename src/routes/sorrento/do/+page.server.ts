import { client } from '$lib/sanity/client';
import { activitiesQuery, doPageQuery, type Activity, type DoPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const [activities, pageData] = await Promise.all([
			client.fetch<Activity[]>(activitiesQuery),
			client.fetch<DoPage>(doPageQuery)
		]);
		return {
			activities,
			pageData
		};
	} catch (error) {
		console.error('Error fetching do page data:', error);
		return {
			activities: [],
			pageData: null
		};
	}
}
