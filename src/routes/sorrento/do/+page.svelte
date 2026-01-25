<script lang="ts">
	import type { Activity, DoPage } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/do/Intro.svelte';
	import CategoryFilter from '$lib/components/do/CategoryFilter.svelte';
	import ActivityGrid from '$lib/components/do/ActivityGrid.svelte';
	import CTA from '$lib/components/do/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';

	interface Props {
		data: {
			activities: Activity[];
			pageData: DoPage | null;
		};
	}

	let { data }: Props = $props();
	const pageData = data.pageData;

	// SEO from CMS
	const seoTitle =
		pageData?.seo?.metaTitle ||
		'Things to Do in Sorrento - Activities & Attractions | Welcome2Sorrento';
	const seoDescription =
		pageData?.seo?.metaDescription ||
		'Discover the best activities and attractions in Sorrento - boat tours, cooking classes, beaches, hiking, and more.';
	const seoKeywords = pageData?.seo?.keywords || '';

	// Header from CMS
	const headerTitle = pageData?.header?.heading || 'Things to Do in Sorrento';
	const headerSubtitle =
		pageData?.header?.subheading || 'Unforgettable experiences and adventures await';
	const headerImage = pageData?.header?.heroImage?.asset?.url || '';

	// Use CMS activities
	const displayActivities = data.activities;

	// Extract unique categories from activities
	const categoriesFromData = Array.from(
		new Set(displayActivities.map((a) => a.category).filter(Boolean))
	).sort();

	const categories = ['All', ...categoriesFromData];
	let selectedCategory = $state('All');

	const filteredActivities = $derived(
		selectedCategory === 'All'
			? displayActivities
			: displayActivities.filter((a) => a.category === selectedCategory)
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

	<ActivityGrid {filteredActivities} />

	<CTA {pageData} />
</div>
