import { client } from '$lib/sanity/client';
import { blogPostsQuery, blogPageQuery, type BlogPost, type BlogPage } from '$lib/sanity/queries';

export async function load() {
	try {
		const [posts, pageData] = await Promise.all([
			client.fetch<BlogPost[]>(blogPostsQuery),
			client.fetch<BlogPage>(blogPageQuery)
		]);
		return {
			posts,
			pageData
		};
	} catch (error) {
		console.error('Error fetching blog page data:', error);
		return {
			posts: [],
			pageData: null
		};
	}
}
