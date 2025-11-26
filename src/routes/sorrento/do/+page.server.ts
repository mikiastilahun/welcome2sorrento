import { client } from '$lib/sanity/client';
import { activitiesQuery, type Activity } from '$lib/sanity/queries';

export async function load() {
	try {
		const activities = await client.fetch<Activity[]>(activitiesQuery);
		return {
			activities
		};
	} catch (error) {
		console.error('Error fetching activities:', error);
		// Return empty array if Sanity is not configured yet
		return {
			activities: []
		};
	}
}
