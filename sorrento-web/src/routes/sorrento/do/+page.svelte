<script lang="ts">
	import type { Activity, DoPage } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/do/Intro.svelte';
	import CategoryFilter from '$lib/components/do/CategoryFilter.svelte';
	import ActivityGrid from '$lib/components/do/ActivityGrid.svelte';
	import QuickGuide from '$lib/components/do/QuickGuide.svelte';
	import CTA from '$lib/components/do/CTA.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import FeaturedSection from '$lib/components/FeaturedSection.svelte';
	import { priceRangeToNumber, toPlainText } from '$lib/utils';

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

	// Extract unique categories and locations from activities
	const categoriesFromData = Array.from(
		new Set(displayActivities.map((a) => a.category).filter(Boolean))
	).sort();

	const allLocations = Array.from(
		new Set(displayActivities.map((a) => a.location).filter(Boolean))
	).sort();

	const categories = ['All', ...categoriesFromData];
	let selectedCategory = $state('All');
	let selectedLocation = $state('All');
	let sortBy = $state('default');

	const filteredActivities = $derived(() => {
		let activities = displayActivities.filter((a) => {
			const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
			const matchesLocation =
				selectedLocation === 'All' || (a.location && a.location === selectedLocation);
			return matchesCategory && matchesLocation;
		});

		// Apply sorting
		if (sortBy === 'price-asc') {
			activities = [...activities].sort(
				(a, b) => priceRangeToNumber(a.priceRange) - priceRangeToNumber(b.priceRange)
			);
		} else if (sortBy === 'price-desc') {
			activities = [...activities].sort(
				(a, b) => priceRangeToNumber(b.priceRange) - priceRangeToNumber(a.priceRange)
			);
		}

		return activities;
	});

	// Featured activities
	const featuredItems = $derived(
		displayActivities
			.filter((a) => a.featured)
			.map((a) => ({
				name: a.name,
				description: toPlainText(a.description),
				image:
					a.mainImage?.asset?.url ||
					'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
				priceRange: a.priceRange,
				category: a.category
			}))
	);
</script>

<SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

<svelte:head>
	<title>{seoTitle}</title>
</svelte:head>

<div class={headerImage ? '-mt-24' : ''}>
	{#if headerImage}
		<PageHeader title={headerTitle} subtitle={headerSubtitle} image={headerImage} />
	{/if}

	<Intro {pageData} />

	<FeaturedSection
		title="Featured Activities"
		subtitle="Our top picks"
		items={featuredItems}
		badgeColor="bg-(--olive)"
	/>

	<QuickGuide {pageData} />

	<CategoryFilter
		{categories}
		bind:selectedCategory
		locations={allLocations}
		bind:selectedLocation
		bind:sortBy
	/>

	<ActivityGrid filteredActivities={filteredActivities()} />

	<CTA {pageData} />
</div>
