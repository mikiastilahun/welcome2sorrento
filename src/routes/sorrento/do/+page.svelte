<script lang="ts">
	import type { Activity } from '$lib/sanity/queries';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Intro from '$lib/components/do/Intro.svelte';
	import CategoryFilter from '$lib/components/do/CategoryFilter.svelte';
	import ActivityGrid from '$lib/components/do/ActivityGrid.svelte';
	import QuickGuide from '$lib/components/do/QuickGuide.svelte';
	import CTA from '$lib/components/do/CTA.svelte';

	interface Props {
		data: {
			activities: Activity[];
		};
	}

	let { data }: Props = $props();

	// Use CMS activities
	const displayActivities = data.activities;

	// Extract unique categories from activities
	const categoriesFromData = Array.from(
		new Set(displayActivities.map((a: any) => a.category).filter(Boolean))
	).sort();

	const categories = ['All', ...categoriesFromData];
	let selectedCategory = $state('All');

	const filteredActivities = $derived(
		selectedCategory === 'All'
			? displayActivities
			: displayActivities.filter((a: any) => a.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Things to Do in Sorrento - Activities & Attractions | Welcome2Sorrento</title>
	<meta
		name="description"
		content="Discover the best activities and attractions in Sorrento - boat tours, cooking classes, beaches, hiking, and more."
	/>
</svelte:head>

<div class="-mt-24">
	<PageHeader
		title="Things to Do in Sorrento"
		subtitle="Unforgettable experiences and adventures await"
		image="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=80"
		label="Esperienze"
	/>

	<Intro />

	<CategoryFilter {categories} bind:selectedCategory />

	<ActivityGrid {filteredActivities} />

	<QuickGuide />

	<CTA />
</div>
