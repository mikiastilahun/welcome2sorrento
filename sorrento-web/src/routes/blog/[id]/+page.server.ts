import { client } from '$lib/sanity/client';
import { blogPostQuery, type BlogPost } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await client.fetch<BlogPost>(blogPostQuery, {
			slug: params.id
		});

		if (!post) {
			throw error(404, 'Blog post not found');
		}

		return {
			post
		};
	} catch (err) {
		console.error('Error fetching blog post:', err);
		throw error(404, 'Blog post not found');
	}
}
