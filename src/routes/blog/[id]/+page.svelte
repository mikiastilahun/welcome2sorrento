<script lang="ts">
	import type { BlogPost } from '$lib/sanity/queries';
	import PostHero from '$lib/components/blog/PostHero.svelte';
	import PostContent from '$lib/components/blog/PostContent.svelte';
	import RelatedPosts from '$lib/components/blog/RelatedPosts.svelte';

	interface Props {
		data: {
			post: BlogPost;
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Welcome2Sorrento Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<div class="-mt-24">
	<PostHero post={data.post} />
	<PostContent post={data.post} />
	<RelatedPosts relatedPosts={data.post.relatedPosts} />
</div>
