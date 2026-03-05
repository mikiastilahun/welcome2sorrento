<script lang="ts">
	import type { BlogPost, BlogPage } from '$lib/sanity/queries';
	import Intro from '$lib/components/blog/Intro.svelte';
	import CategoryFilter from '$lib/components/blog/CategoryFilter.svelte';
	import BlogGrid from '$lib/components/blog/BlogGrid.svelte';
	import NewsletterCTA from '$lib/components/blog/NewsletterCTA.svelte';
	import SEO from '$lib/components/SEO.svelte';

	interface Props {
		data: {
			posts: BlogPost[];
			pageData: BlogPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Sorrento Travel Blog - Tips, Guides & Local Insights | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Discover insider tips, travel guides, and local insights for Sorrento and the Amalfi Coast.';
	const seoKeywords = pageData?.seo?.keywords || '';

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

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class="-mt-24">
	<Intro {pageData} />
	<CategoryFilter {categories} bind:selectedCategory />
	<BlogGrid {filteredPosts} {selectedCategory} />
	<NewsletterCTA {pageData} />
</div>
