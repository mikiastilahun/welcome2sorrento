import { client } from '$lib/sanity/client';
import { blogPostsQuery, type BlogPost } from '$lib/sanity/queries';

export async function load() {
	try {
		const posts = await client.fetch<BlogPost[]>(blogPostsQuery);
		return {
			posts
		};
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		// Return empty array if Sanity is not configured yet
		return {
			posts: []
		};
	}
}
