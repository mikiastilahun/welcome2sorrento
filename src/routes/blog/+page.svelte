<script lang="ts">
	import type { BlogPost } from '$lib/sanity/queries';
	import Intro from '$lib/components/blog/Intro.svelte';
	import CategoryFilter from '$lib/components/blog/CategoryFilter.svelte';
	import BlogGrid from '$lib/components/blog/BlogGrid.svelte';
	import NewsletterCTA from '$lib/components/blog/NewsletterCTA.svelte';

	interface Props {
		data: {
			posts: BlogPost[];
		};
	}

	let { data }: Props = $props();

	// Get unique categories from posts
	const allCategories = $derived(Array.from(new Set(data.posts.map((p) => p.category))).sort());
	const categories = $derived(['All', ...allCategories]);

	let selectedCategory = $state('All');

	const filteredPosts = $derived(
		selectedCategory === 'All'
			? data.posts
			: data.posts.filter((p) => p.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Sorrento Travel Blog - Tips, Guides & Local Insights | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover insider tips, travel guides, and local insights for Sorrento and the Amalfi Coast."
	/>
</svelte:head>

<div class="-mt-24">
	<Intro />
	<CategoryFilter {categories} bind:selectedCategory />
	<BlogGrid {filteredPosts} {selectedCategory} />
	<NewsletterCTA />
</div>
