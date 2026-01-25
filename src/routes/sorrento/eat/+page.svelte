<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/eat/Intro.svelte';
	import CategoryFilter from '$lib/components/eat/CategoryFilter.svelte';
	import RestaurantGrid from '$lib/components/eat/RestaurantGrid.svelte';
	import CTA from '$lib/components/eat/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import type { Restaurant, EatPage } from '$lib/sanity/queries';

	interface Props {
		data: {
			restaurants: Restaurant[];
			pageData: EatPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Where to Eat in Sorrento - Best Restaurants & Trattorias | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Discover the best restaurants in Sorrento - from Michelin-starred fine dining to authentic family trattorias and fresh seafood.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Where to Eat in Sorrento';
	const headerSubtitle =
		pageData?.header?.subheading ||
		'From Michelin stars to family trattorias, discover culinary excellence';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

	// Get unique categories from restaurants
	const allCategories = $derived(
		Array.from(new Set(data.restaurants.map((r) => r.category))).sort()
	);
	const categories = $derived(['All', ...allCategories]);

	let selectedCategory = $state('All');

	const filteredRestaurants = $derived(
		selectedCategory === 'All'
			? data.restaurants
			: data.restaurants.filter((r) => r.category === selectedCategory)
	);
</script>

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class="-mt-24">
	{#if headerImage}
		<PageHeader title={headerTitle} subtitle={headerSubtitle} image={headerImage} />
	{/if}

	<Intro {pageData} />

	<CategoryFilter {categories} bind:selectedCategory />

	<RestaurantGrid {filteredRestaurants} {selectedCategory} />

	<CTA {pageData} />
</div>
